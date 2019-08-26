import { Component, OnInit } from '@angular/core';
// import { SafeStyle } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  // backgroundImage: SafeStyle;

  constructor() { }

  ngOnInit() {
    // this.backgroundImage = this.route.snapshot.data['background'];
  }

}
