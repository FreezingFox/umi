import { Output, EventEmitter, Component, OnInit } from '@angular/core';

import { Character } from '../character.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() characterEvent = new EventEmitter<Character>();

  characters: Character[] = [
    new Character(
      'Gojou Satoru',
      'https://i.pinimg.com/originals/ca/09/9d/ca099d130871f2b8fe2fec26cde745a9.jpg'
    ),
    new Character(
      'Itadori Yuuji',
      'https://i.pinimg.com/originals/49/19/88/491988a712df97b2c9d32240d4a43568.jpg'
    ),
    new Character(
      'Kugisaki Nobara',
      'https://64.media.tumblr.com/54991cf21d53ed5cc1dd1ac107743d2d/968fca7764c8f400-4f/s2048x3072/728b02e95f6b80998f022377b765c21dc9249726.jpg'
    ),
    new Character(
      'Fushiguro Megumi',
      'https://i.pinimg.com/736x/94/e7/3a/94e73a52de733a800aaea65ef3c69bab.jpg'
    )
  ];

  name: string = 'void';

  emitCharacter(character: Character) {
    console.log('trying to emit from LIST');
    this.characterEvent.emit(character);
    this.name = 'beep';
    console.log('emitting from LIST');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
