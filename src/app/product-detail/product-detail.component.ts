import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fileSaver from 'file-saver';
import { RootService } from '../services/root.service';
import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {
  report_id: string;
  url:any= "http://design.emfcwl.com/ai_report_test/index.html"
  constructor(private http: HttpClient,private toastr: ToastrService,private actRoute: ActivatedRoute) {
  
   }
  loader:boolean = false;


  ngOnInit(): void {
    this.report_id = this.actRoute.snapshot.params.id;
    this.download()
  }

  download(){
    this.loader = true
    //console.log(this.loginForm.value)
   this.http.get('https://reportg.herokuapp.com/reportrequest?url_link='+this.url,    
   {
     responseType: 'arraybuffer' 
   }
   ).subscribe(
     res => {            
      
       //fileSaver.saveAs(res);        
       // const file = new Blob([res], { type: 'application/pdf' });
       // fileSaver.saveAs(file,'_resume.pdf');

       this.loader = false
       var blob = new Blob([res],  {type: 'application.pdf'});
       const fileName = 'report'+this.report_id+'.pdf'
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




