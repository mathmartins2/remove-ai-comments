export interface CleanerOptions {
  path?: string;
  backup?: boolean;
  dryRun?: boolean;
}

export interface FileProcessResult {
  filePath: string;
  commentCount: number;
  processed: boolean;
}

export interface CleanerStats {
  totalFiles: number;
  totalComments: number;
  elapsedTime: number;
  processedFiles: FileProcessResult[];
} 