import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  @Output()
  public onNewChacracter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewChacracter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
