import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AssessmentService } from 'src/app/services/assessment.service';
import { CathegoryService } from 'src/app/services/cathegory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css'],
})
export class AddAssessmentComponent implements OnInit {
  categories: any = [];

  assessmentData = {
    title: '',
    description: '',
    maxPoints: '',
    numQuestions: '',
    active: true,
    cathegory: {
      cathegoryID: '',
    },
  };

  constructor(
    private categoryService: CathegoryService,
    private snack: MatSnackBar,
    private assessmentService: AssessmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.listCathegories().subscribe(
      (data: any) => {
        this.categories = data;

       
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error loading data', 'error');
      }
    );
  }

  saveAssessment() {
    if (
      this.assessmentData.title.trim() == '' ||
      this.assessmentData.title == null
    ) {
      this.snack.open('The Title is required', '', {
        duration: 3000,
      });
      return;
    }

    this.assessmentService.addAssessment(this.assessmentData).subscribe(
      (data) => {
       
        Swal.fire('Asessment Saved', 'Assessment saved ', 'success');
        this.assessmentData = {
          title: '',
          description: '',
          maxPoints: '',
          numQuestions: '',
          active: true,
          cathegory: {
            cathegoryID: '',
          },
        };
        this.router.navigate(['/admin/assessments']);
      },
      (error) => {
        Swal.fire('Error', 'Error saving the Assessment', 'error');
      }
    );
  }
}
