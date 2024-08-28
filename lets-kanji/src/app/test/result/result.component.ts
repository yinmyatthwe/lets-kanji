import { Component, Input,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RecordService } from '../../../service/record.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() result: number | undefined;
  @Input() questionList: any;
  @Input() userAnswers: { [key: number]: string } = {}; 
  @Input() userId: string | null = null; 
  @Input() testId: string | null = null;
  @Input() testLevel: string | null = null;

  constructor(private _location: Location, private router: Router, private recordService:RecordService) {}


  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.testId = localStorage.getItem('testId');
    this.testLevel = localStorage.getItem('testLevel');

    console.log('User ID:', this.testLevel);
    console.log('Test ID:', this.testId);

  }

  backClicked() {
    this._location.back();
  }

  //if an answer is correct
  isCorrect(answer: string, questionId: number): boolean {
    const question = this.questionList.find((q: any) => q.id === questionId);
    return answer === question.attributes.answer;
  }

  //if an answer is incorrect
  isIncorrect(answer: string, questionId: number): boolean {
    const question = this.questionList.find((q: any) => q.id === questionId);
    return answer !== question.attributes.answer && answer === this.userAnswers[questionId];
  }
  saveResult() {
    if (this.userId && this.testId && this.result !== undefined) {
      console.log(this.testLevel)
      this.recordService.saveResult(this.result, this.userId, this.testId,this.testLevel).subscribe(
        response => {
        console.log('Result saved successfully', response);
        
      }, error => {
        console.error('Error saving result', error);
      });
    } else {
      console.error('Missing data to save result');
      
    }
  }

}
