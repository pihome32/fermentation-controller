import { Component, OnInit } from '@angular/core';
//import { MdInputModule, MdSelectModule, MdRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ParticleService } from '../services/particle.service';
import {FirebaseService} from '../services/firebase.service';

export class SettingData {
  Kp : string;
  Ki : string;
  Kd: string;
  hKp: string;
  hKi: string;
  hKd : string;
  output : string;
  hOutput : string;
  mainMode : string;
  heatMode: string;
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  settingData:SettingData;
  userTempPreference : string;
  tempFormat: string;
  constructor( private fbService : FirebaseService, private particleService: ParticleService) {}
  

  ngOnInit() {
  this.tempFormat = localStorage.getItem('tempFormat');
  this.userTempPreference = localStorage.getItem('tempFormat');
  this.particleService.GetVariable('PIDsetting')
      .subscribe(res => {this.settingData = JSON.parse(res);
        if (this.tempFormat == "F"){
          this.settingData.output=(parseFloat(this.settingData.output)* 1.8 + 32).toFixed(2);
      }
        console.log('setting response',this.settingData);
      }
      );
}


setPIDButtonHandler(){
  console.log('PID setting response',this.settingData)
}

ManualPIDButtonHandler(){
  console.log('PID Mode response',this.settingData)
}

tempChange(event){
  console.log('tempchange',event.value);
  localStorage.setItem('tempFormat',event.value);
}

}