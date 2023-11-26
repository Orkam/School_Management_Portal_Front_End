import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/services/assessment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-assignments',
  templateUrl: './view-assignments.component.html',
  styleUrls: ['./view-assignments.component.css'],
})
export class ViewAssignmentsComponent implements OnInit {
  assessment: any = [];

  constructor(private assessmentService: AssessmentService) {}

  ngOnInit(): void {
    this.assessmentService.listQuestions().subscribe(
      (data: any) => {
        this.assessment = data;

        console.log(data);
      },
      (error) => {
        Swal.fire('Error', 'Error loading Assignments', 'error');
      }
    );
  }

  deleteAsessment(assessmentID: any) {
    Swal.fire({
      title: 'Delete Assessment',
      text: 'are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.assessmentService.deleteAssessment(assessmentID).subscribe(
          (data) => {
           
            this.ngOnInit();


            Swal.fire(
              'Assessment Deleted',
              'Assessment deleted succesfully',
              'success'
            );
          },
          (error) => {
            Swal.fire('Error', 'Error deleting asessment', 'error');
          }
        );
      }
    });
  }
}
