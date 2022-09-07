import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  tabs!: NodeListOf<HTMLElement>;
  tabContent!: NodeListOf<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
    this.tabs = document.querySelectorAll("[data-target]")!;
    this.tabContent = document.querySelectorAll("[data-content]")!;

    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset["target"]!);

        this.tabContent.forEach((tabContents) => {
          tabContents.classList.remove("skills__active");
        });

        target?.classList.add("skills__active");

        this.tabs.forEach((tab) => {
          tab.classList.remove("skills__active");
        });

        tab.classList.add("skills__active");
      });
    });
  }

}
