import { Component, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { NavController } from 'ionic-angular';
import{Http} from '@angular/http';

@Component({
  templateUrl: './about.html'
})
export class AboutPage {
  // Place the code below into your own component or use the full template

  cardSettings: any = {
      lang: 'fr',
      theme: 'ios'
  }

  listSettings: any = {
    lang: 'fr',
    theme: 'ios',
    stages: [{
        percent: -20,
        action: (event, inst) => {
            inst.remove(event.target);
            return false;
        }
    }, {
        percent: 20,
        action: (event, inst) => {
            inst.remove(event.target);
            return false;
        }
    }]
  }

}



  


