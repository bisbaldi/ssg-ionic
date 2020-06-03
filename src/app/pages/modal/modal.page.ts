import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {PlantService} from "../../services/plant.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  light = null;

  constructor(private plantService: PlantService, private modalController: ModalController) { }

  ngOnInit() {
      this.plantService.getLight().subscribe(result => {
          this.light = result;
      })
  }

  dismissModal(){
    this.modalController.dismiss();
  }

}
