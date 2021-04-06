import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  hideFooter: boolean = true;

  constructor() {
    let that = this;
    window.onscroll = function () {
      if ((window.innerHeight + document.body.offsetHeight) <= document.documentElement.scrollTop) {
        // you're at the bottom of the page
        that.hideFooter = false;
      } else {
        that.hideFooter = true;
      }
    };
  }


  ngOnInit(): void {

  }

}
