import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(element: string) {
    this.googleMap = new google.maps.Map(document.getElementById(element), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }
  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng
  //       }
  //     });
  //   }
  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng
  //       }
  //     });
  //   }

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
