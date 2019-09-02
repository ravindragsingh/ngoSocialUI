import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router,ActivatedRoute,NavigationExtras  } from '@angular/router';


@Component({
  selector: 'app-charity-details',
  templateUrl: './charity-details.component.html',
  styleUrls: ['./charity-details.component.less']
})
export class CharityDetailsComponent implements OnInit {
  responseProject: any;
  responseProject2: any;
  donorProfile: any;
  responseDonor: any;
  responseDonor2 : any;
  userId : string;
  private sub: any; 
  donMon : any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let responseProject = this.http.get('http://smtb.mybluemix.net/get-project-info?projectId=project009');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );
  }

  donateMoney() {
    
    const body = new HttpParams()
    .set('projectId', "project009")
    .set('donorId', "surendra")
    .set('moneyToDonate', "1000");


    this.http.post('https://smtb.mybluemix.net/donate-money',body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })    
     .subscribe(
       (retValDonote) => {
         this.donMon = retValDonote;
         console.log('POST DATA=' +retValDonote)
       }
      );
  }

}
