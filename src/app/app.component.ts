import { Component, OnInit} from '@angular/core';
import {DialogsService} from './services/dialogs.service';
import { ParticleService } from './services/particle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{


constructor(private particleService: ParticleService, private dialogsService: DialogsService){}

openDialog() {
  this.dialogsService.login();
}

ngOnInit() {
    if (localStorage.getItem('tempFormat') == null) {
      localStorage.setItem('tempFormat', 'F');
    }
    this.particleService.CheckLogin()
      .subscribe(res => {const islog = res;
        console.log('init login check', islog);
      if (!islog) {
        this.openDialog();
      }
    });
}

}


