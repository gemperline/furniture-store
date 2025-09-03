import { Injectable } from '@nestjs/common';
import { BlobServiceClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class BlobService {
  private readonly containerClient;

  constructor() {
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    const containerName =
      process.env.AZURE_STORAGE_CONTAINER_NAME || 'product-images';

    if (!connectionString) {
      throw new Error(
        'AZURE_STORAGE_CONNECTION_STRING is not set in environment variables.',
      );
    }

    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
    this.containerClient = blobServiceClient.getContainerClient(containerName);
  }

  async uploadFile(
    buffer: Buffer,
    originalName: string,
    mimeType: string,
  ): Promise<string> {
    await this.containerClient.createIfNotExists({ access: 'container' });

    const extension = path.extname(originalName);
    const blobName = `${uuidv4()}${extension}`;
    const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(buffer, {
      blobHTTPHeaders: { blobContentType: mimeType },
    });

    return blockBlobClient.url;
  }
}
