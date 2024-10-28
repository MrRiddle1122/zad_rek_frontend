import { Component, ViewChild } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { CurrencyListComponent } from '../currency-list/currency-list.component';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent {
  currency: string = '';
  name: string = '';
  errorMessage: string = '';
  response: any;

  @ViewChild(CurrencyListComponent) child: any;

  constructor(private currencyService: CurrencyService) {}

  submitCurrencyRequest() {
    this.errorMessage = '';
    const requestBody = {
      currency: this.currency,
      name: this.name,
    };

    this.currencyService.getCurrencyValue(this.currency, this.name).subscribe(
      (data) => {
        this.response = data;
        this.child.fetchRequests();
      },
      (error) => {
        this.errorMessage = error.error || 'An error occurred';
      }
    );
  }
}
