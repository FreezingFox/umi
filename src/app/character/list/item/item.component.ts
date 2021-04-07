import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

import { Character } from '../../character.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character: Character;
  @Output() characterEvent = new EventEmitter<Character>();

  constructor() { }

  onClick(character: Character) {
    this.characterEvent.emit(character);
    console.log('emitting from ITEM');
  }


  ngOnInit(): void {
  }

}
