import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = '';

  onSubmit(form: NgForm) {
    const products = form.value.products;
    const productList = products.split(',');
    const filteredList = productList.filter(
      function(product) {
        return product.trim();
      }
    );

    if (filteredList.length <= 3) this.result = "Welcome!";
    if (filteredList.length > 3) this.result = "It is too much!";
    if (filteredList.length === 0) this.result = "Enter data"; 
  }
}

