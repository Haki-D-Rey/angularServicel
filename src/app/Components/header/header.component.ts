import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  changeDropdownCategory(cat:string) : void {
    let dropdown = document.getElementById("catDropdown");
    if(dropdown != null){
      dropdown.innerHTML = cat;
    }
  }
}
