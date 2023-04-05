import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit, AfterViewInit  {
    public allReports: any;
    public reports: any;
    lNumber = 'Loan Number : WB26T3848';
    rID = 'Report ID : 4WRTL2590221';
    sPrice = 'Selleing Price';
    fPrice = 'Fixed Price';
    fConditions = 'Fair Conditions';
    gConditions = 'Good Conditions';
    toKnow = 'To Know More, Explore this car in website';
    btnLabel = 'View in Website';

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        console.log(params.get('id'));
        this.apiService.getReports(params.get('id')).subscribe(report =>{
            console.log(report);
            this.allReports = report;
            let filteredReport = this.allReports.data;
            this.reports = filteredReport;
        });
      });
  }

  ngAfterViewInit(): void {
    setTimeout(function(){
    var scoreValue = $(".overall_rating").text();
    if (scoreValue >= 1 && scoreValue < 1.5) {
        $(".rateicon_overall").addClass("rate_1");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 1.5 && scoreValue < 2){
        $(".rateicon_overall").addClass("rate_1_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 2 && scoreValue < 2.5){
        $(".rateicon_overall").addClass("rate_2");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 2.5 && scoreValue < 3){
        $(".rateicon_overall").addClass("rate_2_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 3 && scoreValue < 3.5){
        $(".rateicon_overall").addClass("rate_3");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 3.5 && scoreValue <= 4){
        $(".rateicon_overall").addClass("rate_3_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 4 && scoreValue < 4.5){
        $(".rateicon_overall").addClass("rate_4_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 4.5 && scoreValue < 5){
        $(".rateicon_overall").addClass("rate_4_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 5 && scoreValue < 5.5){
        $(".rateicon_overall").addClass("rate_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 5.5 && scoreValue < 6){
        $(".rateicon_overall").addClass("rate_5_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 6 && scoreValue < 6.5){
        $(".rateicon_overall").addClass("rate_6");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 6.5 && scoreValue <= 7){
        $(".rateicon_overall").addClass("rate_6_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 7 && scoreValue < 7.5){
        $(".rateicon_overall").addClass("rate_7_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 7.5 && scoreValue < 8){
        $(".rateicon_overall").addClass("rate_7_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 8 && scoreValue < 8.5){
        $(".rateicon_overall").addClass("rate_8");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 8.5 && scoreValue < 9){
        $(".rateicon_overall").addClass("rate_8_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 9 && scoreValue < 9.5){
        $(".rateicon_overall").addClass("rate_9");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue >= 9.5 && scoreValue < 10){
        $(".rateicon_overall").addClass("rate_9_5");
        $(".overall_rating").text(scoreValue);
    } else if(scoreValue == 10){
        $(".rateicon_overall").addClass("rate_10");
        $(".overall_rating").text(scoreValue);
    }
    }, 1000);
  }
}


