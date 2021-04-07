import { Input, Component, OnInit } from '@angular/core';

import { Character } from "../character.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
