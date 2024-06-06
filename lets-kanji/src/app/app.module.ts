import { NgModule, } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Location } from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyComponent } from './study/study.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { N5kanjiComponent } from './study/n5kanji/n5kanji.component';
import { N5testComponent } from './test/n5test/n5test.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { QuestionComponent } from './test/n5test/question/question.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ResultComponent } from './test/result/result.component';
import { WordDetailsComponent } from './study/word-details/word-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    TestComponent,
    MainComponent,
    N5kanjiComponent,
    N5testComponent,
    QuestionComponent,
    ResultComponent,
    WordDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
}