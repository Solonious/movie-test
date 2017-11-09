import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() data?: any[];
  @Input() imageUrl?: string;
  @Input() genres?: any[];
  constructor() { }

  ngOnInit() {}

  // convertToObject(arr: number[], arrObj: Object[]): Object[] {
  //   console.log(arr);
  //   let obj = {};
  //   let result = [];
  //   arr.forEach(id => {
  //     arrObj.forEach(item => {
  //       if (item['id'] === id) {
  //         obj['id'] = id;
  //         obj['name'] = item['name'];
  //       }
  //     });
  //     result.push(obj);
  //   });
  //   console.log(result);
  //   return result;
  // }

}
