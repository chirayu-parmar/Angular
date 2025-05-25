import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, CommonModule,SalesPersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-review';
}
