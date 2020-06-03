import { Component, OnInit } from '@angular/core';
import {PlantService} from "../../services/plant.service";

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.page.html',
  styleUrls: ['./add-details.page.scss'],
})
export class AddDetailsPage implements OnInit {

  newPlant = {};

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    }

    sendPostRequest(){
    console.log(this.newPlant);
     this.plantService.addPlant(this.newPlant)
    }

}
