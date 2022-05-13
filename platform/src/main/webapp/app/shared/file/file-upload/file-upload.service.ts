import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileMetaDataModel } from '../file.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  public uploadFile(file: File): Observable<number> {
    const formData = new FormData();
    formData.append('file', new Blob([file], { type: file.type }));
    formData.append('fileName', file.name);

    return this.http.post<number>(`${SERVER_API_URL}api/files`, formData);
  }

  public deleteFile(fileId: number): Observable<any> {
    return this.http.delete(`${SERVER_API_URL}api/files/${fileId}`);
  }

  public retrieveAndDownloadFile(fileId: number): void {
    this.http.get(`${SERVER_API_URL}api/files/${fileId}`, { responseType: 'blob', observe: 'response' }).subscribe(contentFromService => {
      const type = contentFromService.headers.get('X-Content-Type')!;
      const fileName = contentFromService.headers.get('X-Filename')!;

      const blob = new Blob([contentFromService.body!], { type });

      const objectUrl: string = URL.createObjectURL(blob);
      const a: HTMLAnchorElement = document.createElement('a');

      a.href = objectUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    });
  }

  public getFileMetaData(fileId: number): Observable<IFileMetaDataModel> {
    return this.http.get<IFileMetaDataModel>(`${SERVER_API_URL}api/files/${fileId}/metadata`).pipe(
      map(x => {
        x.submissionDate = new Date(x.submissionDate);
        return x;
      })
    );
  }
}
