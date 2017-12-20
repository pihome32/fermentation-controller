import { Injectable} from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import {FirebaseService} from './firebase.service';
//import {DialogsService} from './dialogs.service';
import * as EventSource from 'eventsource';
//declare var EventSource:any;

@Injectable()
export class ParticleService {
    accessToken:string = localStorage.getItem('AccessToken');
    device:string = localStorage.getItem('Device');
  //  private dialogsService: DialogsService,private fbService: FirebaseService, 
    constructor(private http: Http) { 
        
        }


    URL = 'https://api.particle.io/oauth/token';
    URLDevice = 'https://api.particle.io/v1/devices/';
    URLSubscribe = 'https://api.particle.io/v1/devices/';
    
   
   

CheckLogin():Observable<boolean>{
    let devices = [];
    let errorMessage = {};
    console.log('checklogin',this.accessToken,this.device);
    return  Observable.create(observer => {
            this.ListDevices()
                .subscribe(
                    devices => {observer.next(true);
                        console.log('checklogin true');},
                    error =>  {errorMessage = error;
                        console.log('loginerror',errorMessage);
                        observer.next(false);  
                    });
                    return () => {
                    observer.close();
                    };    
                }); 
}
    

    Subscribe(eventName:string): Observable<any> {
        let deviceId = this.device;
        let accessToken = this.accessToken;
        return Observable.create(observer => {
            const eventSource = new EventSource(this.URLSubscribe+deviceId+'/events/'+eventName+'?history_limit=30&access_token='+accessToken);
            eventSource.addEventListener("status", e => observer.next(JSON.parse(JSON.parse(e.data).data)));
            eventSource.onerror = x => observer.error(this.handleError);
            return () => {
                eventSource.close();
                };   
            });
        
    }

    GetVariable(varname:string): Observable<any>  {
        let deviceId = this.device;
        let accessToken = this.accessToken;
        let headers = new Headers({ 'Authorization': 'Bearer '+accessToken});
        headers.append('content-type', `application/json`);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.URLDevice+deviceId+'/'+varname,options)
            .map(res => res.json().result)
            .catch(this.handleError);
    }

    CallFunction(funcname:string, arg:string): Observable<any>  {
        let deviceId = this.device;
        let accessToken = this.accessToken;
        let headers = new Headers({ 'Authorization': 'Bearer '+accessToken});
        headers.append('content-type', `application/json`);
        let options = new RequestOptions({ headers: headers });
        let body = {args: arg};
        return this.http.post(this.URLDevice+deviceId+'/'+funcname,body,options)
            .map(res => res.json().return_value)
            .catch(this.handleError);
    }

    Login(username:string, password:string): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('client_id', 'particle');
        urlSearchParams.append('client_secret', 'particle');
        urlSearchParams.append('expires_in', '7776000');
        let body = urlSearchParams.toString();
        return this.http.post(this.URL,body,options)
            .map(res => {body = res.json().access_token;
                localStorage.setItem('AccessToken',body);
                this.accessToken = localStorage.getItem('AccessToken');
                })
            .catch(this.handleError);
    }
     
    NewDevice(device:string){
        localStorage.setItem('Device',device);
        this.device = localStorage.getItem('Device');
    }
    
    ListDevices(): Observable<any> {
        let accessToken =  this.accessToken;
        let headers = new Headers({ 'Authorization': 'Bearer '+accessToken});
        headers.append('content-type', `application/json`);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.URLDevice,options)
            .map(this.extractDeviceData)
            .catch(this.handleError);
    }
    private extractDeviceData(res: Response) {
        let device = [];
        let body = res.json();
        for (let i in body) {
            device[i]=body[i].name;
        }
        return device;
    }

    
   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
console.error('error response:',errMsg);
    return Observable.throw(errMsg);
  }
}