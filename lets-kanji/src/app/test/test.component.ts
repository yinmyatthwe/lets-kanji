import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private _location: Location) 
  {}
  
  backClicked() {
    this._location.back();
  }
}
