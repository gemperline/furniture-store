import { Module } from '@nestjs/common';
import { BlobService } from './azure/blob.service';

@Module({
  providers: [BlobService],
  exports: [BlobService],
})
export class SharedModule {}
