import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
import {MatTooltipModule} from '@angular/material/tooltip';
import { PidHelpDialogComponent } from './pid-help-dialog/pid-help-dialog.component';
import { fireBaseConfig } from './models/firebase.config';


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
    PidHelpDialogComponent,

  ],
  imports: [
    Ng2GoogleChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(fireBaseConfig),
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
    MatExpansionModule,
    MatTooltipModule
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
    PidHelpDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
