import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

interface ProductsInterface {
  id: number;
  price: number;
  category: string;
  updated_at: string;
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
}

interface TableDataInterface {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
}

interface RequestInterface {
  success: boolean;
  products: ProductsInterface[];
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage,MatTableModule, MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['name', 'age', 'phone', 'email'];
  
  tableData1 =new MatTableDataSource<TableDataInterface>();
  tableData2 ! : TableDataInterface[];
  tableData3 ! : TableDataInterface[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }



  products1!: ProductsInterface[];
  products2!: ProductsInterface[];
  products3!: ProductsInterface[];

  constructor(private http: HttpClient) {
  }

  query1(){
     const Data = this.http.get('https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt')
     return Data
  }
  query2(){
    const Data = this.http.get('https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt')
    return Data
 }
 query3(){
  const Data = this.http.get('https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt')
  return Data
}

  gettableData1(): Observable<any> {
    return this.query1()
  }
  gettableData2(): Observable<any> {
    return this.query2()
  }
  gettableData3(): Observable<any> {
    return this.query3()
  }

  query4(){
    return this.http.get('https://api.slingacademy.com/v1/sample-data/products?limit=1000')
  }
  query5(){
    return this.http.get('https://api.slingacademy.com/v1/sample-data/products?limit=999')
  }
  query6(){
    return this.http.get('https://api.slingacademy.com/v1/sample-data/products?limit=998')
  }

  getProducts1(): Observable<any> {
    return this.query4()
  }
  getProducts2(): Observable<any> {
    return this.query5()
  }
  getProducts3(): Observable<any> {
    return this.query6()
  }

  ngOnInit(): void {
    this.tableData1.paginator = this.paginator;
    this.getProducts1().subscribe(
      (data) => {
        this.products1 = data.products;
      }
    )
    this.getProducts2().subscribe(
      (data) => {
        this.products2 = data.products;
      }
    )
    this.getProducts3().subscribe(
      (data) => {
        this.products3 = data.products;
      }
    )
    this.gettableData1().subscribe(
      (data) => {
        this.tableData1 = data;
      }
    )
    this.gettableData2().subscribe(
      (data) => {
        this.tableData2 = data;
      }
    )
    this.gettableData3().subscribe(
      (data) => {
        this.tableData3 = data;
      }
    )
  }


}
