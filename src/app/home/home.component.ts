import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fileSaver from 'file-saver';
import { RootService } from '../services/root.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loader:boolean = false;
  //  reg:any = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  login_error_messages = {  
    'report_url': [
      { type: 'required', message: 'report_url is required.' }
    ]
  }

  loginForm = new FormGroup({  
    
    report_url: new FormControl('', 
    Validators.compose([
      Validators.required,
      // Validators.pattern(this.reg)
    ]))
  });


  constructor( public _Root_serviceMoudule : RootService,private http: HttpClient,private toastr: ToastrService ) { }

  ngOnInit() {


  }

//   public pdfdownload(ID):Observable<any>{          
//     return this.http.post<any>('http://localhost:7005/reportUrlApi',ID)
// https://reportg.herokuapp.com/reportUrlApi
// }

  download(){
     this.loader = true
     console.log(this.loginForm.value)
    this.http.post('https://reportg.herokuapp.com/reportUrlApi',
    this.loginForm.value,
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
        const fileName = 'report.pdf'
        fileSaver.saveAs(blob, fileName);
        this.toastr.success('Successfully download');
        this.loginForm.reset()

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
