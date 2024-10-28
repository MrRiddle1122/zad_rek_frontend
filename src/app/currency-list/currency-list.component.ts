import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit{
  requests: any[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
      this.fetchRequests();
  }

  fetchRequests() {
    this.currencyService.getAllRequests().subscribe(
      (data) => {
        this.requests = data;
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }
}
