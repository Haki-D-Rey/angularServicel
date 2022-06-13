import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  width!: number;
  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
}
