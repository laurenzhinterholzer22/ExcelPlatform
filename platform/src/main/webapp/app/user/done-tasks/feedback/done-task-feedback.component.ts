import {Component, OnInit} from "@angular/core";
import {AccountService} from "../../../core/auth/account.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'jhi-done-tasks-feedback',
  templateUrl: './done-task-feedback.component.html',
})
export class DoneTaskFeedbackComponent implements OnInit {

  feedback!: string;
  taskName!: string;

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.feedback = params.feedback;
    })
  }

}
