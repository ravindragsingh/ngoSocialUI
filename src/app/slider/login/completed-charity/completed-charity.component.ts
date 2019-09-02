import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-charity',
  templateUrl: './completed-charity.component.html',
  styleUrls: ['./completed-charity.component.less']
})
export class CompletedCharityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pieChartLabels:string[] = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
  public pieChartData:number[] = [21, 39, 10, 14, 16];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
               "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
            ]}
 
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

}
