import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadComponent } from './file/file-upload/file-upload.component';
import { FileDownloadComponent } from './file/file-download/file-download.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule, FontAwesomeModule],
  declarations: [FileUploadComponent, FileDownloadComponent],
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    TranslateModule,
    FileUploadComponent,
    FileDownloadComponent,
  ],
})
export class SharedLibsModule {}
