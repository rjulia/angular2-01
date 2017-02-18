import { Component, OnInit } from '@angular/core';
import { ScrollDirective } from '../scroll.directive';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.component.scss']
  //directives: [ScrollDirective]
})
export class HeaderComponent implements OnInit {
  title = 'Vocabulary in English';
  shrinkCssClass : string = '';
  onScrolled(yPos : number) {
        this.shrinkCssClass = yPos ? "shrink-header" : "";
    }
  constructor() { }

  ngOnInit() {
  }
  public isCollapsed:boolean = false; 
  public collapsed(event:any):void {
  }
  public expanded(event:any):void {   
  }
}
