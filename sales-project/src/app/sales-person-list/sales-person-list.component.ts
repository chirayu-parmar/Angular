import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "john.doe@example.com", 50000)
  ];

  ngOnInit() {
    this.salesPersonList.push(new SalesPerson("Jane", "Smith", "jane.smith@example.com", 40000));
    this.salesPersonList.push(new SalesPerson("Alex", "Smith", "alex.smith@example.com", 70000));
    this.salesPersonList.push(new SalesPerson("Mike", "Ross", "mike.ross@example.com", 80000));
  }

}
