import { Component, OnInit, OnChanges, Input } from '@angular/core';

import {FirebaseService} from '../services/firebase.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.css']
})
export class HistoryChartComponent implements OnInit, OnChanges {
 // @Input() currentProfile: string; 
 loading:boolean = true; 
 data:any;
  rowCount: number = 4;
  tempFormat:any;
  constructor(private fb: FirebaseService) {
    this.fb.chart
    .subscribe(res => {
      //console.log('map testing',res);
      this.data = res;
      this.updateChart();
      this.loading = false;
    });
  }
  
  
  lineChartData =  {
    chartType: 'Line',
    dataTable: {
      cols:[
        {id: '1', label: 'Date', type: 'date'},
        {id: '2', label: 'Beer', type: 'number'},
        {id: '3', label: 'Chamber', type: 'number'},
      ],
      rows:[
        
      ]
    },
      options: {title: 'Fermentation Log', 
      hAxis:{
        title: 'Day', 
        gridlines: {
          count: -1,
          units: {
            days: {format: ['MMM dd']},
            hours: {format: ['HH:mm', 'ha']},
          }
        },
        minorGridlines: {
          units: {
            hours: {format: ['hh:mm:ss a', 'ha']},
            minutes: {format: ['HH:mm a Z', ':mm']}
          }
        },
      },
        backgroundColor:'#F3F3F3',
        tooltip: {isHtml: true }
      },
  };  
 
ngOnChanges(){
 
    this.updateChart();
    console.log('profile changessss');
  
}
ngOnInit(){
}

updateChart (){
  
    this.lineChartData =  {
      chartType: 'LineChart',
      dataTable: this.data,
      options: {title: 'Fermentation Log', 
      hAxis:{
        title: 'Date', 
        gridlines: {
          count: -1,
          units: {
            days: {format: ['MMM dd']},
            hours: {format: ['HH:mm', 'ha']},
          }
        },
        minorGridlines: {
          units: {
            hours: {format: ['hh:mm:ss a', 'ha']},
            minutes: {format: ['HH:mm a Z', ':mm']}
          }
        },
      },
      backgroundColor:'#F3F3F3',
      tooltip: {isHtml: true }
    }, 
  };
    
    

  
  let tempFormat = localStorage.getItem('tempFormat');
  if (tempFormat == "C") {
    //this.yAxisLabel = 'Temperature \xB0C';
  }
  else{
    //this.yAxisLabel = 'Temperature \xB0F';
  } 
}



}