import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http:HttpClient) { }


  public listQuestions(){
    return this.http.get(`${baserUrl}/assignment/`);
  }

  public addAssessment(assignment:any){
    return this.http.post(`${baserUrl}/assignment/`,assignment);
  }

  public deleteAssessment(assignmentID:any){
    return this.http.delete(`${baserUrl}/assignment/${assignmentID}`);
  }

  public listOneAssignment(assignmentID:any){
    return this.http.get(`${baserUrl}/assignment/${assignmentID}`);
  }

  public updateAssessment(assignment:any){
    return this.http.put(`${baserUrl}/assignment/`,assignment);
  }

  public listAssignmentOneCathegory(categoryId:any){
    return this.http.get(`${baserUrl}/assignment/cathegory/${categoryId}`);
  }

  public ListAssignmentActive(){
    return this.http.get(`${baserUrl}/assignment/active`);
  }

  public listActiveAssignmentOneCathegory(categoryId:any){
    return this.http.get(`${baserUrl}/assignment/cathegory/active/${categoryId}`);
  }
}
