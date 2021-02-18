import { Component } from "@angular/core";
import { CartService } from "../cart.service";
import { Injectable } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) {}
}
