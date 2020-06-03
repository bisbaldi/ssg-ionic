import { Component, OnInit } from '@angular/core';
import {PlantService} from "../../services/plant.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-moisture',
  templateUrl: './moisture.page.html',
  styleUrls: ['./moisture.page.scss'],
})
export class MoisturePage implements OnInit {

  moisture = null;
  id= "plant1";

    constructor(private plantService: PlantService, private modalController: ModalController) { }

    ngOnInit() {
        this.plantService.getMoisture().subscribe(result => {
            this.moisture = result;
        })
    }

    dismissModal(){
        this.modalController.dismiss();
    }


}
