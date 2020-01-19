import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Office } from '../office';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  offices: Array<Office> = [];

  private platform: any;
  @ViewChild("map", {static: false})
  public mapElement: ElementRef;

  constructor(
    private route: ActivatedRoute
  ) {
    this.offices = this.route.snapshot.data.offices;
  }

  ngOnInit(): void {
    this.platform = new H.service.Platform({
      "apikey": "CahkRzrJTGFeAMdaz2RNJU-hlQs2i-ABRcZkNKOoYUo"
    });
  }

  ngAfterViewInit(): void {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 2,
        center: { lat:52, lng:5 },
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    // add a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => map.getViewPort().resize());

    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // create default UI with layers provided by the platform
    let ui = H.ui.UI.createDefault(map, defaultLayers);

    this.offices.map(el => {
      let group = new H.map.Group();
      map.addObject(group);
    
      group.addEventListener('tap', function (evt) {
        let bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
          content: evt.target.getData()
        });
        
        ui.addBubble(bubble);
      }, false);

      let marker = new H.map.Marker({lat: el.latitude, lng: el.longitude});
      
      let img = '';
      if (el.photo) {
        img = `<img src="${el.photo}" style="width: 50px;" alt="${el.name}" />`
      } else {
        img = `<div style="width: 50px;height: 50px;border-radius: 50px;text-align: center;background: #34b5dc;color: #000000;display: flex;flex-flow: column;justify-content: center;font-size: 20px;">${el.name[0]}</div>`
      }

      marker.setData(`<p>${el.name}</p>` + img);
      group.addObject(marker);
    });
  }
}
