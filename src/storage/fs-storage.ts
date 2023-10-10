import { Storage } from "./storage.interface";
import { appendFile } from 'node:fs/promises'

export class FileStorage implements Storage {
  constructor(private readonly source: string) {}

  public async save(data: string): Promise<void> {
    return appendFile(this.source, data);
  }
}
