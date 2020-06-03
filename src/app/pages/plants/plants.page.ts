import { PlantService } from "../../services/plant.service";
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
})
export class PlantsPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';


  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.plantService.searchData(this.searchTerm);
  }

}
