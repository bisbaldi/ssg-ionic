import { PlantService } from "../../services/plant.service";
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ModalController} from "@ionic/angular";
import {ModalPage} from "../modal/modal.page";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  plants: Observable<any>;

  constructor(private plantService: PlantService, private modalController: ModalController) { }

  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }


    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
        });
        return await modal.present();
    }



}
