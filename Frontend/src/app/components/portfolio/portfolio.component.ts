import { Component, OnInit } from '@angular/core';
import mixitup from 'mixitup';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  linkWork!: NodeListOf<Element>;

  constructor() { }

  ngOnInit(): void {

    this.linkWork = document.querySelectorAll(".work__item")!;

    let mixerPortfolio = mixitup(".work__container", {
      selectors: {
        target: ".work__card",
      },
      animation: {
        duration: 300,
      },
    });



  }


}
