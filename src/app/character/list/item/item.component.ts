import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

import { Character } from '../../character.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character: Character;
  @Output() characterSelected = new EventEmitter<Character>();

  constructor() { }

  onCharacterSelected(character: Character): void {
    this.characterSelected.emit(character);
  }

  ngOnInit(): void {
  }

}
