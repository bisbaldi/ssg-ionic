import { PlantService } from "../../services/plant.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs/index";
import {ModalController} from "@ionic/angular";
import {MoisturePage} from "../moisture/moisture.page";

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.page.html',
  styleUrls: ['./plant-details.page.scss'],
})
export class PlantDetailsPage implements OnInit {

  information = null;
  moisture: Observable<any>;


    constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService, private modalController: ModalController) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.plantService.getDetails(id).subscribe(result => {
      this.information = result;
    })
  }

  waterPlant(motor){
    console.log(motor);
    this.plantService.waterPlant(motor)
  }

  getMoisture(plant){
    console.log(plant);
    this.moisture = this.plantService.getMoisture();
  }

    async presentModal() {
        const modal = await this.modalController.create({
            component: MoisturePage,
            componentProps: {
                something: 'value',
                other: {couldAlsoBeAnObject: true}
            }
        });
        return await modal.present();
    }

}
