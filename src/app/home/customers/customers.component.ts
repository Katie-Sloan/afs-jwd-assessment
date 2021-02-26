import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/mock_data_(2).json';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  listData = data;

  constructor() { }

  ngOnInit(): void {
    console.log("Here is all the listData: ", this.listData);
  }

}
