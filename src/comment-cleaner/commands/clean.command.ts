import { Command, CommandRunner, Option } from 'nest-commander';
import { Inject } from '@nestjs/common';
import { CommentCleanerService } from '../services/comment-cleaner.service';
import { CleanerOptions } from '../models/options.model';
import * as chalk from 'chalk';

@Command({
  name: 'clean',
  description: 'Clean comments from specified files or directories',
})
export class CleanCommand extends CommandRunner {
  constructor(
    @Inject(CommentCleanerService) private readonly cleanerService: CommentCleanerService,
  ) {
    super();
  }

  async run(
    passedParams: string[],
    options?: CleanerOptions,
  ): Promise<void> {
    const startTime = Date.now();
    
    try {
      const path = passedParams[0];
      const result = await this.cleanerService.cleanComments({
        ...options,
        path,
      });
      
      console.log('\n');
      console.log(chalk.bold('🎉 Comment Cleaning Complete:'));
      console.log(chalk.blue(`🔍 Total files scanned: ${result.totalFiles}`));
      console.log(chalk.green(`🗑️  Total comments removed: ${result.totalComments}`));
      
      if (options?.dryRun) {
        console.log(chalk.yellow('⚠️  DRY RUN - No files were modified'));
      }
      
      if (options?.backup) {
        console.log(chalk.cyan('💾 Backup files created (.bak extension)'));
      }
      
      if (result.processedFiles.length > 0) {
        console.log('\n');
        console.log(chalk.bold('📝 Processed Files:'));
        result.processedFiles.forEach(file => {
          if (file.commentCount > 0) {
            const status = options?.dryRun 
              ? chalk.yellow('would be modified') 
              : chalk.green('modified');
            console.log(`${file.filePath}: ${file.commentCount} comments ${status}`);
          }
        });
      }
      
      const endTime = Date.now();
      console.log('\n');
      console.log(chalk.gray(`⏱️  Execution time: ${endTime - startTime}ms`));
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }

  @Option({
    flags: '-b, --backup',
    description: 'Create backup files (.bak) before modifying',
  })
  parseBackup(): boolean {
    return true;
  }

  @Option({
    flags: '-d, --dry-run',
    description: 'Show what would be done without modifying files',
  })
  parseDryRun(): boolean {
    return true;
  }
} 