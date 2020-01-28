import { User } from "./User";
import { Company } from "./Company";
import {} from "googlemaps";

export interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export interface IFakeInterface{
  color:string
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(element: string) {
    this.googleMap = new google.maps.Map(document.getElementById(element), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent();
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
