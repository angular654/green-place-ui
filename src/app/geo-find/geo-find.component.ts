import { Component, AfterViewInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-geo-find',
  templateUrl: './geo-find.component.html',
  styleUrls: ['./geo-find.component.scss']
})

export class GeoFindComponent implements AfterViewInit {
 
  constructor(private wsc: WebsocketService) { }
   public map;
   public markersLayer;
   private events_now:Array<any> = []
   private greenIcon = L.icon({
       iconUrl: '../../assets/eco-icon.png',
       iconSize:     [64, 64], // size of the icon
       iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
       shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
   });
   private myLocationIcon = L.icon({
    iconUrl: '../../assets/location-icon.png',
    iconSize:     [64,64], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
  public L;
  private markers:Array<any> = []
  ngAfterViewInit() {
    this.wsc.listen('all-events').subscribe((data:any)=>{
        this.events_now.push(...data)
    })
    this.wsc.listen('events').subscribe((data:any)=>{
      if(data !== "Service working") {
        this.events_now.push(...data)
      }
    })
    this.initMap()
  }
  ngDoCheck() {
    this.drawAllMarkers(this.events_now);
  }
  private initMap(): void {
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition((position)=>{
      latitude = position.coords.latitude
      longitude  = position.coords.longitude
      this.initMapView(latitude,longitude)
      this.map.setZoom(16);
    })
  }
   private initMapView(lat:any,long:any) {
    this.map = L.map('map').setView([lat, long], 13);
    const tiles = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 18,
      minZoom: 3,
      subdomains:['mt0','mt1','mt2','mt3']
    });
    L.marker([lat, long], {icon: this.myLocationIcon}).addTo(this.map).bindPopup('<b>My location</b>').openPopup();
    L.circle([lat, long], {radius: 200}).addTo(this.map);
    this.map.on("click", e => {
      this.addMarker(e);
    });
    tiles.addTo(this.map);
   }
 
  private removeMarker(e) {
    this.map.removeLayer(L.marker([e.latlng.lat,e.latlng.lng]))
  } 
  private drawAllMarkers(arr:any) {
    this.events_now = this.events_now.splice(12,0)
    for (let i = 0; i < arr.length;i++) {
      L.marker([arr[i].lat, arr[i].lng],{icon: this.greenIcon}).addTo(this.map).bindPopup(arr[i].title)
      
    }
  }
  private addMarker(e) {
    L.marker([e.latlng.lat,e.latlng.lng],{icon: this.greenIcon}).addTo(this.map).bindPopup('New event here')
    this.markers.push({
      ...e.containerPoint,
      ...e.latlng
    });
    const eco_event = {
      "title":"test",
      "subtitle":"1321324",
      "content": " Some text",
      "members": [],
      ...e.latlng,
      "time": new Date(Date.now())
    }
    this.wsc.emit('event-creation',eco_event);
    this.wsc.emit('all-events', eco_event)
  }

  }