import { Command, CommandRunner } from 'nest-commander';
import { Inject } from '@nestjs/common';
import { CommentCleanerService } from '../services/comment-cleaner.service';
import { CleanerOptions } from '../models/options.model';
import * as chalk from 'chalk';

@Command({
  name: 'default',
  description: 'Clean comments from files',
  options: { isDefault: true },
})
export class InteractiveCommand extends CommandRunner {
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
      const updatedOptions = this.getUpdatedOptions(passedParams, options);
      
      const result = await this.cleanerService.cleanComments(updatedOptions);
      
      console.log('\n');
      console.log(chalk.bold('🎉 Comment Cleaning Complete:'));
      console.log(chalk.blue(`🔍 Total files scanned: ${result.totalFiles}`));
      console.log(chalk.green(`🗑️  Total comments removed: ${result.totalComments}`));
      
      if (updatedOptions?.dryRun) {
        console.log(chalk.yellow('⚠️  DRY RUN - No files were modified'));
      }
      
      if (updatedOptions?.backup) {
        console.log(chalk.cyan('💾 Backup files created (.bak extension)'));
      }
      
      const modifiedFiles = result.processedFiles.filter(file => file.commentCount > 0);
      if (modifiedFiles.length > 0) {
        console.log('\n');
        console.log(chalk.bold('📝 Processed Files:'));
        modifiedFiles.forEach(file => {
          this.displayFileStatus(file.filePath, file.commentCount, updatedOptions?.dryRun);
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

  private getUpdatedOptions(passedParams: string[], originalOptions?: CleanerOptions): CleanerOptions {
    if (passedParams.length === 0) {
      return originalOptions || {};
    }
    
    return {
      ...originalOptions,
      path: passedParams[0]
    };
  }

  private displayFileStatus(filePath: string, commentCount: number, isDryRun?: boolean): void {
    const status = isDryRun 
      ? chalk.yellow('would be modified')
      : chalk.green('modified');
    console.log(`${filePath}: ${commentCount} comments ${status}`);
  }
} 