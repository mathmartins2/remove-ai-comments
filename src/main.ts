import { CommandFactory } from 'nest-commander';
import { CommentCleanerModule } from './comment-cleaner/comment-cleaner.module';

async function bootstrap() {
  await CommandFactory.run(CommentCleanerModule, ['warn', 'error']);
}

bootstrap();
