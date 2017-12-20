
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction  } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import {PhotonData} from '../models/photon.data';

@Injectable()
export class FirebaseService {
	private _photonData: BehaviorSubject<PhotonData>; 
	
  private dataStore: {  // This is where we will store our data in memory
    photonData: PhotonData
	};
	
	private photonData : PhotonData;
	private afPhoton: Observable<any>;
	
	
	private tempFormat: string;

  constructor(public af: AngularFireDatabase) {
		this.tempFormat = localStorage.getItem('tempFormat');
		this.dataStore = { photonData: this.photonData  };
    this._photonData = <BehaviorSubject<PhotonData>>new BehaviorSubject(this.photonData);
		this.init();
  }
  
init(){
  //let tempFormat = localStorage.getItem('tempFormat');
  this.afPhoton = this.af.object('/Photon/data').valueChanges();
	this.afPhoton.subscribe(res => {
		this.dataStore.photonData = res;
		this.ConfigureData();
		setInterval(() => { this.timeUpdate(this.dataStore.photonData.stateStartTime);}, 1000, 1000);
	});			
}





updateRow(profile:string, key:string, item:object){
	const items = this.af.list('/Profile/'+profile);
	// to get a key, check the Example app below
	console.log('row update',key,item);
	items.update(key, item);
}

addRow(profile:string,item:object){
	const items = this.af.list('/Profile/'+profile);
	items.push(item);
}

deleteRow(profile:string,key:string){
	const items = this.af.list('/Profile/'+profile);
	items.remove(key);
}

deleteList(list:string){
	const items = this.af.list('/'+list);
	items.remove();
}

createNewProfile(name:string){
	console.log('profile passed to service',name);
	const items = this.af.list('/Profile/'+name);
	items.push({day:0,temperature:0});
}

get profileList(){
	return this.af.list('/Profile', ref => ref.orderByKey()).snapshotChanges().map(changes => {
		return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
	});
	
	// .map(res => res);
}

get chart() {
	return this.af.list('/TemperatureData', ref => ref).snapshotChanges().map(changes => {
		let rows = changes.map(ch => {
			if (this.tempFormat == "C"){
				let temp ={c:[
					{v: new Date(ch.payload.val().ts), f:'February 28, 2008'},
					{v: parseFloat(ch.payload.val().beerTemp).toFixed(2)}, 
					{v: parseFloat(ch.payload.val().chamberTemp).toFixed(2)}
				]}
				return temp;
			}
			else{
				let temp ={c:[{v: new Date(ch.payload.val().ts), f:'February 28, 2008'},
					{v: (parseFloat(ch.payload.val().beerTemp)* 1.8 + 32).toFixed(2)},
					{v: (parseFloat(ch.payload.val().chamberTemp)* 1.8 + 32).toFixed(2)}
				]}
				return temp;
			}
		});
		return {cols:[
			{id: '1', label: 'Date', type: 'date'},
			{id: '2', label: 'Beer', type: 'number'},
			{id: '3', label: 'Chamber', type: 'number'},
		],
		rows:rows}
	});
}

table($key:string){
	return this.af.list('/Profile/'+$key, ref => ref.orderByChild('day')).snapshotChanges().map(changes => {
		return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
	});
		
	//.map(res => res);
}



get data() {
  return this._photonData.asObservable();
}

timeUpdate(Time:string) {
	let currentTime = Date.now();
  let startTime = +Time;
  startTime *= 1000;
	let d = new Date(currentTime - startTime);
	// Hours part from the timestamp
	let hours = "0" + d.getUTCHours();
	// Minutes part from the timestamp
	let minutes = "0" + d.getMinutes();
	// Seconds part from the timestamp
	let seconds = "0" + d.getSeconds();

	// Will display time in 10:30:23 format
	let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	this.dataStore.photonData.stateTime = ((d.getTime() / 8.64e+7).toFixed(0) + " Days" + " " + formattedTime + " Hours");
  this._photonData.next(Object.assign({}, this.dataStore).photonData);
}


ConfigureData(){
  switch (this.dataStore.photonData.currentState) {
		case '0': {
			if (this.dataStore.photonData.pastState == '1') {
				this.dataStore.photonData.currentState ='Wait for Peak';
			}
			else {
				this.dataStore.photonData.currentState ='Idle';
			}
		}
			break;
		case '1': {
			this.dataStore.photonData.currentState ='Cool';
		}
			break;
		case '2': {
			this.dataStore.photonData.currentState ='Heat';
		}
			break;
		default:
			this.dataStore.photonData.currentState ='Error';
	}

  let beerTemp = parseFloat(this.dataStore.photonData.beerTemp);
	let fridgeTemp = parseFloat(this.dataStore.photonData.fridgeTemp);
	let fridgeTarget = parseFloat(this.dataStore.photonData.fridgeTarget);
	let targetTemp = parseFloat(this.dataStore.photonData.targetTemp);
	let tempFormat = localStorage.getItem('tempFormat');
  if (tempFormat == "C") {
    this.dataStore.photonData.beerTemp = (beerTemp.toFixed(2).toString() + " \xB0C");
    this.dataStore.photonData.fridgeTemp = (fridgeTemp.toFixed(2).toString() + " \xB0C");
    this.dataStore.photonData.fridgeTarget = (fridgeTarget.toFixed(2).toString() + " \xB0C");
    this.dataStore.photonData.targetTemp = (targetTemp.toFixed(2).toString() + " \xB0C");
	}
	else {
		this.dataStore.photonData.beerTemp = (((beerTemp * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
    this.dataStore.photonData.fridgeTemp = (((fridgeTemp * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
    this.dataStore.photonData.fridgeTarget = (((fridgeTarget * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
    this.dataStore.photonData.targetTemp = (((targetTemp * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
	}



}

}
