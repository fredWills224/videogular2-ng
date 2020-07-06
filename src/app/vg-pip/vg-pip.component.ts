import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'app-vg-pip',
  templateUrl: './vg-pip.component.html',
  styleUrls: ['./vg-pip.component.scss']
})
export class VgPipComponent implements OnInit {

  // media: MyCustomMedia = new MyCustomMedia();

  constructor(private api: VgAPI) { }

  ngOnInit(): void {

    //this.api.registerMedia(this.media);

  }

}
