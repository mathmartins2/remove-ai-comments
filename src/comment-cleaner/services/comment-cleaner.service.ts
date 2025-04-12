import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import { CleanerOptions, CleanerStats, FileProcessResult } from '../models/options.model';

interface LanguageConfig {
  extensions: string[];
  commentPattern: RegExp;
}

@Injectable()
export class CommentCleanerService {
  private readonly languageConfigs: Record<string, LanguageConfig> = {
    javascript: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
    python: {
      extensions: ['.py', '.pyw'],
      commentPattern: /^[ \t]*#.*(?:\r?\n)?/gm,
    },
    ruby: {
      extensions: ['.rb', '.rake'],
      commentPattern: /^[ \t]*#.*(?:\r?\n)?/gm,
    },
    php: {
      extensions: ['.php'],
      commentPattern: /^[ \t]*(?:\/\/|#).*(?:\r?\n)?/gm,
    },
    go: {
      extensions: ['.go'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
    rust: {
      extensions: ['.rs'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
    c: {
      extensions: ['.c', '.h', '.cpp', '.hpp', '.cc', '.cxx'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
    java: {
      extensions: ['.java'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
    csharp: {
      extensions: ['.cs'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
    swift: {
      extensions: ['.swift'],
      commentPattern: /^[ \t]*\/\/.*(?:\r?\n)?/gm,
    },
  };

  private get supportedExtensions(): string[] {
    return Object.values(this.languageConfigs)
      .flatMap(config => config.extensions);
  }

  private getCommentPatternForFile(filePath: string): RegExp | null {
    const ext = path.extname(filePath).toLowerCase();
    
    for (const config of Object.values(this.languageConfigs)) {
      if (config.extensions.includes(ext)) {
        return config.commentPattern;
      }
    }
    
    return null;
  }

  async cleanComments(options: CleanerOptions): Promise<CleanerStats> {
    const stats: CleanerStats = {
      totalFiles: 0,
      totalComments: 0,
      elapsedTime: 0,
      processedFiles: [],
    };

    const startTime = Date.now();
    
    try {
      const targetPath = options.path || '.';
      const initialFiles: string[] = [];
      
      const files = await this.getFilesToProcess(targetPath, initialFiles);
      
      stats.totalFiles = files.length;

      for (const file of files) {
        const result = await this.processFile(file, options);
        stats.totalComments += result.commentCount;
        stats.processedFiles.push(result);
      }
      
      stats.elapsedTime = Date.now() - startTime;
      return stats;
    } catch (error) {
      console.error('Error processing files:', error);
      throw error;
    }
  }

  private async getFilesToProcess(targetPath: string, initialFiles: string[]): Promise<string[]> {
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
      return [targetPath];
    }
    
    const pattern = targetPath.includes('*') 
      ? targetPath
      : path.join(targetPath, `**/*{${this.supportedExtensions.join(',')}}`);
      
    return await glob(pattern, { nodir: true });
  }

  private async processFile(
    filePath: string, 
    options: CleanerOptions
  ): Promise<FileProcessResult> {
    const result: FileProcessResult = {
      filePath,
      commentCount: 0,
      processed: false,
    };

    try {
      const commentPattern = this.getCommentPatternForFile(filePath);
      if (!commentPattern) {
        return result;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const matches = content.match(commentPattern);
      
      if (!matches) {
        return result;
      }
      
      result.commentCount = matches.length;
      const cleanedContent = content.replace(commentPattern, '');
      
      if (options.dryRun) {
        return result;
      }
      
      if (options.backup) {
        fs.writeFileSync(`${filePath}.bak`, content);
      }
      
      fs.writeFileSync(filePath, cleanedContent);
      result.processed = true;
      
      return result;
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
      return result;
    }
  }
} 