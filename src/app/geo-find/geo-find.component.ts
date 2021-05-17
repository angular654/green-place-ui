import { Component, AfterViewInit } from '@angular/core';
import { EcoEventsService } from '../eco-events.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-geo-find',
  templateUrl: './geo-find.component.html',
  styleUrls: ['./geo-find.component.scss']
})

export class GeoFindComponent implements AfterViewInit {
 
  constructor(private _eco_ev:EcoEventsService, private router:Router ) { }
   public map;
   public markersLayer;
   public event_lat;
   public event_lon;
   public acess = "disabled"
   public map_frame = "map-frame"
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
    this._eco_ev.getEvents().then((res)=>{
      this.markers = res
      console.log(res)
      this.getAllEvents(this.markers)
    })
  }
  private initMap(): void {
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition((position)=>{
      latitude = position.coords.latitude
      longitude  = position.coords.longitude
      this.initMapView(latitude,longitude)
      this.map.setZoom(16);
      this.getAllEvents(this.markers)
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
    L.circle([lat, long], {radius:50}).addTo(this.map);
    this.map.on("click", e => {
      this.addMarker(e);
    });
    tiles.addTo(this.map);
   }
 
  private removeMarker(e) {
    this.map.removeLayer(L.marker([e.latlng.lat,e.latlng.lng]))
  } 

  private getAllEvents(events:Array<any>) {
    for (let i = 0; i < events.length; i++) {
      L.marker([events[i].latitude,events[i].longitude],{icon: this.greenIcon}).addTo(this.map).bindPopup(events[i].name).on('click', e => {this.redirect(e)})
    }
  }
  private addMarker(e) {
    this.acess = "enabled"
    this.map_frame = "map-frame-1"
    L.marker([e.latlng.lat,e.latlng.lng],{icon: this.greenIcon}).addTo(this.map).bindPopup('New event here')
    this.event_lat = e.latlng.lat;
    this.event_lon = e.latlng.lng;
    this.markers.push({
      ...e.containerPoint,
      ...e.latlng
    });
    
  }
  onChanged(back:any){
    if(back) {

      this.map_frame = "map-frame"
      this.acess = "enabled"
    }
  }
  private redirect(e:any) {
    let res = this.markers.filter(p => p.latitude === e.latlng.lat && p.longitude === e.latlng.lng)
    console.log(res[0]._id)
    this.router.navigate([`eco/${res[0]._id}`])
  }
  }