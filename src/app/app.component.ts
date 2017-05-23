import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Try Augular Google Map!';
  latA:number  = 13.7893182;
  lngA:number = 100.5789861;
  zoom:number = 17;

  mapMarkers = [];
  mapPointer = [];

  showLine:boolean = false;

  constructor() {}

  randomUpdateMarker = () => {
    this.latA += 0.00005
    this.lngA += 0.00005
    this.mapMarkers[0] = {lat: this.latA, long: 100.5789861};
    this.mapMarkers[1] = {lat: 13.7893182, long: this.lngA};

    this.mapPointer[1] = {lat: this.latA, long: 100.5789861};
    this.mapPointer[3] = {lat: 13.7893182, long: this.lngA};
  }

  ngOnInit() {
    this.mapMarkers.push({lat: 13.7893182, long: 100.5789861});
    this.mapMarkers.push({lat: 13.7893182, long: 100.5789861});

    this.mapPointer.push({lat: 13.7893182, long: 100.5789861});
    this.mapPointer.push({lat: 13.7893182, long: 100.5789861});
    this.mapPointer.push({lat: 13.7893182, long: 100.5789861});
    this.mapPointer.push({lat: 13.7893182, long: 100.5789861});

    this.showLine = true;
    setInterval(() => {
      this.randomUpdateMarker();
    }, 1000);
  }
}
