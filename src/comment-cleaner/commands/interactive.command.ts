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
      if (passedParams.length > 0) {
        options = { ...options, path: passedParams[0] };
      }
      
      const result = await this.cleanerService.cleanComments(options);
      
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
      
      const modifiedFiles = result.processedFiles.filter(file => file.commentCount > 0);
      if (modifiedFiles.length > 0) {
        console.log('\n');
        console.log(chalk.bold('📝 Processed Files:'));
        modifiedFiles.forEach(file => {
          let status = chalk.green('modified');
          if (options?.dryRun) {
            status = chalk.yellow('would be modified');
          }
          console.log(`${file.filePath}: ${file.commentCount} comments ${status}`);
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
} 