import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private data = [];
  url = 'https://node-red-ssg.eu-gb.mybluemix.net';

  constructor(private http: HttpClient) { }

  searchData(name: string): Observable<any> {
    return this.http.get(`localhost:3000/treflePlants?plant=${encodeURI(name)}`)
  }

  getPlants(): Observable<any> {
    return this.http.get(`${this.url}/plants`)
  }

  getDetails(id) {
    return this.http.get(`${this.url}/plants/${encodeURI(id)}`)
  }

  getLight(){
      return this.http.get(`${this.url}/light`)
  }

  getMoisture(): Observable<any>{
      console.log(`${this.url}/moisture`)
      return this.http.get(`${this.url}/moisture`)
  }

  waterPlant(motor){
    console.log('Sending request');
    console.log(`${this.url}/water/${encodeURI(motor)}`);
    return this.http.get(`${this.url}/water/${encodeURI(motor)}`)
  }

  addPlant(newPlant) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let postData = {
            "name": "plant1",
            "species": "Paprika",
            "water": 500,
            "light": 300,
            "motor": 9
        }

        this.http.post(`${this.url}/addPlant`, newPlant, {headers})
            .subscribe(data => {
                console.log(data['_body']);
            }, error => {
                console.log(error);
            });
    }


}
