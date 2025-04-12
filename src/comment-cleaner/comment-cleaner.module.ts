import { Module } from '@nestjs/common';
import { CommentCleanerService } from './services/comment-cleaner.service';
import { CleanCommand } from './commands/clean.command';
import { InteractiveCommand } from './commands/interactive.command';

@Module({
  providers: [
    CommentCleanerService,
    CleanCommand,
    InteractiveCommand,
  ],
  exports: [
    CommentCleanerService,
  ],
})
export class CommentCleanerModule {} 