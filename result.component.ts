import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
@Input()
 

export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
