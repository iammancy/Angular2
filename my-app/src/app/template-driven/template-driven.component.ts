import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value : any){
    console.log(value);
  }
}
