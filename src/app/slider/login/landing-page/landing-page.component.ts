import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router,ActivatedRoute,NavigationExtras  } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {
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

    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Dashboard Component");
            });
           
            //fund raiser 1 details
    let responseProject = this.http.get('http://smtb.mybluemix.net/get-project-info?projectId=project009');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );

     let donorProfile = this.http.get('https://smtb.mybluemix.net/get-user?userId='+ this.userId +'&userType=donor');
    
     donorProfile.subscribe(
       (donorProf) => {
         this.donorProfile = donorProf;
        // console.log(donorProf)
       }
      );
      let responseDonor = this.http.get('https://smtb.mybluemix.net/get-project-donor?projectId=project009&donorId=' + this.userId);
    
     responseDonor.subscribe(
       (retValDonor) => {
         this.responseDonor = retValDonor;
         console.log(retValDonor)
       }
      );
  }

  // charityDetail() {
  //   this.route.navigate(['/details', { charity :this.responseProject.data.msg.ProjectName}]);
  // }

}
