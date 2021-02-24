import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recVal: any;
  pVal: any;
  pls = [];
  reclis = [];

  currLate: any;
  currLong: any;
  locPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.locPosition = position;
        this.currLate = position.coords.latitude;
        this.currLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recVal = this.recipes.nativeElement.value;
    this.pVal = this.places.nativeElement.value;
    if (this.recVal !== null) {
      this._http.get('https://api.edamam.com/search?q=' + this.recVal +
        '&app_id=d1085dab&app_key=3cd9d19253e48576c037a6d5e882b3fa').
      subscribe(respReceipe => {
        this.reclis = respReceipe['hits'];
      }, error => {});

    }

    if (this.pVal != null && this.pVal !== '') {
      this._http.get('https://api.foursquare.com/v2/venues/search?client_id=33JEJ0034JOUJKECTN0P2VTHPSY2LSLDYI14E0K2BRB3FV3O' +
        '&client_secret=REM5PXOKPAFKU1M0PB4AKPUYPR41TGHVCX2Q1M2JVASA43LO&v=20180323&near=' + this.pVal + '&query=restaurant').
      subscribe(respRestuarant => {
        this.pls = respRestuarant['response']['venues'];
      }, error => {});
    }
  }
}


