import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RootService {    

    constructor(private http: HttpClient, public router: Router) {}

     //base Url 
    //     public _baseUrl = "http://localhost:8090/v1/admin/"     
    //   public _baseimgUrl = "http://beta.rotaryclubadambakkam.org:8080/rotary/v1/util/file/TEN01/"
        
    public _baseUrl = "http://localhost:7006/persons_details/"  
    public _baseUrlUser = "http://localhost:7006/persons_details/user_api/"        
  
   
  public pdfdownload(ID):Observable<any>{          
    return this.http.post<any>('https://reportg.herokuapp.com/reportUrlApi',ID)
}



public pdfdownloadLinkService(url,reportId):Observable<any>{
    return this.http.get<any>('http://localhost:7005/reportrequest?url_link='+url+'&report_id='+reportId)
}



} 
