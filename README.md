# Angular

## 1. Create a new project 
- ng new sales-project, select no for angular routing, and select CSS for the style sheet format.
- change directory: cd sales-project
- ng serve --open

## 2. Update main template page
- update app.component.html by removing default data.

## 3. Generate a new component
- ng generate component sale-person-list

## 4. Add new component selector to app template page
- Go to app.component.html and add a tag "<app-sales-person-list> </app-sales-person-list>" 

## 5. Generate a SalesPerson Class
- ng generate class sales-person-list/SalesPerson

## 6. In SalesPersonComponent, create sample data
- Open SalesPersonComponent.ts file. Create a array of SalesPerson objects.

## 7. In sales-person-list template file, build HTML table by looping over data
Open SalesPersonListComponent.html file. Create a table and add the data of SalesPerson array created in SalesPersonComponent.ts using "*ngFor = "let salesPerson of salesPersonList""
