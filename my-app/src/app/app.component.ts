import { Component } from '@angular/core';
import { ListService } from "./list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  title = 'app';
  private FormList : Array<any> = [];
  constructor(private _listService: ListService){}

  ngOnInit(){
    this._listService.listMethod()
    .subscribe(data => {
      if(data.length !==0 ){
        // console.log(data);
        this.FormList = data;
        // this.FormList.push(data);
      }
      console.log(this.FormList);
    });
    // 
  }
}
