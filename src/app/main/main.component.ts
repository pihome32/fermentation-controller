import { Component,OnInit,Input,ViewChild, Inject} from '@angular/core';
import { ParticleService } from '../services/particle.service';
//import {DialogsService} from '../services/dialogs.service';
import {FirebaseService} from '../services/firebase.service';
import {PhotonData} from '../models/photon.data';
import { Observable,Subscription } from 'rxjs/Rx';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TabChangeDialogComponent } from '../tab-change-dialog/tab-change-dialog.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {
  
  loadedCharacter: "";
  //fridgeTemp: "";
  subdata: "";
  funcres: '';
  devices = [];
  loading:boolean = true;
  currentTab:number = 0;
  lastTab:number = 0;
  //data:PhotonData | null;
  //curmode:string;
  item: Observable<PhotonData>;
 // temp: any;
  //itemSub : Subscription;
  @ViewChild('modeTab') modeTab;

constructor(private fbService : FirebaseService, private particleService: ParticleService, public dialog: MatDialog) {
 
  }
  
  
  
ngOnInit(){
  this.item = this.fbService.data;
  this.item.subscribe(res =>{
    if (res != undefined){
      this.currentTab = +res.mode;
      this.loading = false;
    }
  })
}

openDialog() {
  let dialogRef= this.dialog.open(TabChangeDialogComponent, {
    width: '250px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('dialog closed',result);
    }
  );
}

onChange(mode:number){
  console.log('tab change',mode, this.currentTab);
  if (mode == this.currentTab) return;
  if (this.currentTab != 3) {
    if (mode != 3){
      let arg = mode.toString();
      this.particleService.CallFunction('setMode', arg)
      .subscribe(res => {console.log('function call response',res);
      console.log('function call response current tab',this.currentTab);});
    }
    return;
  }

  let lastTab = this.currentTab;
  this.currentTab = mode;
    let dialogRef= this.dialog.open(TabChangeDialogComponent, {
    width: '250px', 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('dialog closed',result);
    let arg = mode.toString();
    if (result == true){
      
      if (arg == '0'){
        this.fbService.deleteList('TemperatureData')
        console.log('delete history');
      }
      console.log('tabchange test curretn tab',this.currentTab);
      if (arg == '3'){   //if the mode is profile do not call the particle function.  This will be handled in the profile component.
        return;
      }
      this.particleService.CallFunction('setMode', arg)
        .subscribe(res => {console.log('function call response',res);
        console.log('function call response current tab',this.currentTab);});
      }
      else{
        console.log('cancel',this.currentTab, lastTab);
        this.currentTab = lastTab;
      }
  });
}





  CallFunction(arg:string) {
    console.log('callfunction', arg);
    if (localStorage.getItem('tempFormat') == 'F'){
      let Ftemp = +arg;
      Ftemp = (Ftemp - 32)/1.8;
      arg = Ftemp.toString();
    }

    this.particleService.CallFunction('setSetpoint',arg)
      .subscribe(res => {this.funcres = res;
      console.log('function call response',res)});
  }
/*
  GetVariable() {
    this.particleService.GetVariable('fridgeTemp')
      .subscribe(res => this.fridgeTemp = res);
  }
*/
  ListDevices() {
    
    this.particleService.ListDevices()
      .subscribe(devices => this.devices = devices);
  }
}


 


