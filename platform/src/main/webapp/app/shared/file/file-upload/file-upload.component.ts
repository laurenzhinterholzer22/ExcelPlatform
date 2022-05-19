import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFileMetaDataModel } from '../file.model';
import { FileUploadService } from './file-upload.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Output()
  public fileRemoved = new EventEmitter<number>();
  @Output()
  public fileAdded = new EventEmitter<number>();
  @Output()
  public fileModified = new EventEmitter<[number, number]>();

  public fileUploadGroup = this.fb.group({
    fileUpload: [null, []],
  });
  public fileMetaData?: IFileMetaDataModel;
  // problem with interface
  public isSaving = false;
  // disabled is not working
  @Input()
  public disabled = false;

  private _fileId = -1;
  private _originalId = -1;
  private _fileRemoved = false;
  private _fileSelected = false;

  constructor(private fileUploadService: FileUploadService, private fb: FormBuilder) {}

  @Input()
  public set fileId(value: number) {
    this._fileId = value;

    if (value > -1) {
      this._originalId = value;

      (async () => {
        this.fileMetaData = await this.fileUploadService.getFileMetaData(value).toPromise();
      })();
    } else {
      this.fileMetaData = undefined;
    }
  }

  public get fileId(): number {
    return this._fileId;
  }

  /**
   * Returns whether the file is set or not.
   */
  public isFileSet(): boolean {
    return this._fileId > -1;
  }

  /**
   * Event handler for a file change.
   */
  public fileChanged(): void {
    this._fileSelected = true;
  }

  /**
   * Downloads the current file.
   */
  public downloadCurrentFile(): void {
    this.fileUploadService.retrieveAndDownloadFile(this.fileId);
  }

  /**
   * Marks the current file as removed.
   */
  public removeCurrentFile(): void {
    this.fileId = -1;
    this._fileRemoved = true;
  }

  /**
   * Asynchronously saves the current file selection.
   */
  public async saveAsync(): Promise<void> {
    let newId = -1;

    this.isSaving = true;

    if (this._fileRemoved) {
      await this.fileUploadService.deleteFile(this._originalId).toPromise();
    }

    if (this._fileSelected) {
      const fileList = this.fileUploadGroup.get(['fileUpload'])!.value as FileList;
      const file = fileList.item(0)!;

      newId = <number>await this.fileUploadService.uploadFile(file).toPromise();
    }

    if (this._fileRemoved && newId === -1) {
      this.fileRemoved.emit(this._originalId);
    } else if (!this._fileRemoved && this._originalId < 0 && newId >= 0) {
      this.fileAdded.emit(newId);
    } else if ((this._fileRemoved || (this._originalId >= 0 && this._originalId !== newId)) && newId >= 0) {
      await this.fileUploadService.deleteFile(this._originalId).toPromise();
      this.fileModified.emit([this._originalId, newId]);
    }

    this.fileId = newId;

    this.isSaving = false;
  }
}
