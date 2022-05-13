import { AdminTaskDeleteDialogComponent } from './admin-task-delete-dialog.component';
import { ComponentFixture, fakeAsync, TestBed, tick, inject, waitForAsync } from '@angular/core/testing';
import { AdminTaskService } from '../service/admin-task.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AdminTask Delete Component', () => {
  let comp: AdminTaskDeleteDialogComponent;
  let fixture: ComponentFixture<AdminTaskDeleteDialogComponent>;
  let service: AdminTaskService;
  let mockActiveModal: NgbActiveModal;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [AdminTaskDeleteDialogComponent],
        providers: [NgbActiveModal],
      })
        .overrideTemplate(AdminTaskDeleteDialogComponent, '')
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaskDeleteDialogComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(AdminTaskService);
    mockActiveModal = TestBed.inject(NgbActiveModal);
  });

  describe('confirmDelete', () => {
    it('Should call delete service on confirmDelete', inject(
      [],
      fakeAsync(() => {
        // Given
        jest.spyOn(service, 'delete').mockReturnValue(of({}));

        // When
        comp.confirmDelete(1);
        tick();

        // Then
        expect(service.delete).toHaveBeenCalledWith(1);
        expect(mockActiveModal.close).toHaveBeenCalledWith('deleted');
      })
    ));
  });
});
