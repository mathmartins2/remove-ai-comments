import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import { CleanerOptions, CleanerStats, FileProcessResult } from '../models/options.model';

@Injectable()
export class CommentCleanerService {
  private readonly COMMENT_REGEX = /^[ \t]*\/\/.*(?:\r?\n)?/gm;
  private readonly SUPPORTED_EXTENSIONS = ['.ts', '.js', '.jsx', '.tsx'];

  async cleanComments(options: CleanerOptions): Promise<CleanerStats> {
    const startTime = Date.now();
    const files = await this.findFiles(options.path);
    
    const processedFiles: FileProcessResult[] = [];
    let totalComments = 0;
    
    for (const file of files) {
      const result = await this.processFile(file, options);
      processedFiles.push(result);
      totalComments += result.commentCount;
    }
    
    const endTime = Date.now();
    
    return {
      totalFiles: files.length,
      totalComments,
      elapsedTime: endTime - startTime,
      processedFiles,
    };
  }

  private async findFiles(pathPattern: string): Promise<string[]> {
    if (!pathPattern) {
      pathPattern = '.';
    }

    let files: string[] = [];

    if (fs.existsSync(pathPattern) && fs.statSync(pathPattern).isDirectory()) {
      for (const ext of this.SUPPORTED_EXTENSIONS) {
        const matches = await glob(`${pathPattern}/**/*${ext}`);
        files = [...files, ...matches];
      }
    } 
    else if (fs.existsSync(pathPattern) && fs.statSync(pathPattern).isFile()) {
      const ext = path.extname(pathPattern);
      if (this.SUPPORTED_EXTENSIONS.includes(ext)) {
        files = [pathPattern];
      }
    } 
    else {
      files = await glob(pathPattern);
      files = files.filter(file => 
        this.SUPPORTED_EXTENSIONS.includes(path.extname(file))
      );
    }

    return files;
  }

  private async processFile(filePath: string, options: CleanerOptions): Promise<FileProcessResult> {
    const content = fs.readFileSync(filePath, 'utf-8');
    const newContent = content.replace(this.COMMENT_REGEX, '');
    const commentCount = (content.match(this.COMMENT_REGEX) || []).length;
    
    if (options.backup && !options.dryRun && commentCount > 0) {
      fs.writeFileSync(`${filePath}.bak`, content);
    }
    
    if (!options.dryRun && commentCount > 0) {
      fs.writeFileSync(filePath, newContent);
    }
    
    return {
      filePath,
      commentCount,
      processed: !options.dryRun && commentCount > 0,
    };
  }
} 