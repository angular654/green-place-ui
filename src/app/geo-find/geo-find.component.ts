import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-geo-find',
  templateUrl: './geo-find.component.html',
  styleUrls: ['./geo-find.component.scss']
})

export class GeoFindComponent implements AfterViewInit {
 
  constructor() { }
   public map;
   public markersLayer;
   public event_lat;
   public event_lon;
   private events_now:Array<any> = []
   private greenIcon = L.icon({
       iconUrl: '../../assets/eco-icon.svg',
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
    this.event_lat = e.latlng.lat;
    this.event_lon = e.latlng.lng;
    this.markers.push({
      ...e.containerPoint,
      ...e.latlng
    });
    
  }

  }