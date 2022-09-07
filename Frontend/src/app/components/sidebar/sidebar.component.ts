import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  navMenu!: HTMLElement;
  navToggle!: HTMLElement;
  navClose!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.navMenu = document.getElementById("sidebar")!;
    this.navToggle = document.getElementById("nav-toggle")!;
    this.navClose = document.getElementById("nav-close")!;


    if (this.navToggle) {
      this.navToggle.addEventListener("click", () => {
        this.navMenu.classList.add("show-sidebar");
      });
    }

    if (this.navClose) {
      this.navClose.addEventListener("click", () => {
        this.navMenu.classList.remove("show-sidebar");
      });
    }
  }

}
