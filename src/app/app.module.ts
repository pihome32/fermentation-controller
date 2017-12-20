import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatTabsModule } from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {Ng2GoogleChartsModule } from 'ng2-google-charts';


import { FirebaseService } from './services/firebase.service';
import { ParticleService } from './services/particle.service';
import { DialogsService } from './services/dialogs.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SetupComponent } from './setup/setup.component';
import { BeerConstantComponent } from './beerconstant/beerconstant.component';
import { ChangeTempDialogComponent } from './change-temp-dialog/change-temp-dialog.component';
import { ChamberConstantComponent } from './chamber-constant/chamber-constant.component';
import { OffComponent } from './off/off.component';
import { BeerProfileComponent } from './beer-profile/beer-profile.component';
import { ProfileChartComponent } from './profile-chart/profile-chart.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { HistoryChartComponent } from './history-chart/history-chart.component';
import { TabChangeDialogComponent } from './tab-change-dialog/tab-change-dialog.component';


export const firebaseConfig = {
  apiKey: "AIzaSyC5tA-38qkvkFKQdGlxwh2GkdYtOyHT_Z8",
    authDomain: "fermentor-e69ac.firebaseapp.com",
    databaseURL: "https://fermentor-e69ac.firebaseio.com",
    projectId: "fermentor-e69ac",
    storageBucket: "fermentor-e69ac.appspot.com",
    messagingSenderId: "700960236201"
};


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginDialogComponent,
    SetupComponent,
    BeerConstantComponent,
    ChangeTempDialogComponent,
    ChamberConstantComponent,
    OffComponent,
    BeerProfileComponent,
    ProfileChartComponent,
    ProfileDialogComponent,
    HistoryChartComponent,
    TabChangeDialogComponent,
    
  ],
  imports: [
    Ng2GoogleChartsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  
  providers: [
    FirebaseService,
    ParticleService,
    DialogsService
  ],
  entryComponents: [
    LoginDialogComponent, 
    ChangeTempDialogComponent,
    ProfileDialogComponent,
    TabChangeDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
