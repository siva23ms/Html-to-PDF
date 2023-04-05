import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fileSaver from 'file-saver';
import { RootService } from '../services/root.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Report } from '../classes/report';

@Component({
  selector: 'app-about',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  details: any;
  constructor(private http: HttpClient,private toastr: ToastrService, private router: Router, private apiService: ApiService) { }
  loader:boolean = false;
  public allReports: any;
  public reports: any;

  ngOnInit(): void {
    this.apiService.getAllReports().subscribe((response) => {
      this.details = response;
    })
  }
  download(id){
    this.loader = true;
    let url = 'http://design.emfcwl.com/angular/#/template/'+ id;
   this.http.post('https://reportg.herokuapp.com/reportUrlApi',
   {report_url: url},    
   {
     responseType: 'arraybuffer' 
   }
   ).subscribe(
     res => {            
       this.loader = false
       var blob = new Blob([res],  {type: 'application.pdf'});
       const fileName = 'REPORT_'+id+'.pdf'
       fileSaver.saveAs(blob, fileName);
       this.toastr.success('Successfully download');

     },
     err => {
       this.loader = false
       console.log(err)
       if(err.status === 404){
         this.toastr.error('Page 404');
         
       }
     }
   );
 }
}