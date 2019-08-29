import { Component, OnInit } from '@angular/core';
// import { SafeStyle } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  // backgroundImage: SafeStyle;
  userName1 : string = "";

  constructor(private http: HttpClient, private route : Router) { }

  ngOnInit() {
    // this.backgroundImage = this.route.snapshot.data['background'];
  }

  login() {
    this.route.navigate(['/home', { userId :this.userName1}]);
  }
}
