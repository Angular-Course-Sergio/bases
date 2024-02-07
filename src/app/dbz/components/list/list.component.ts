import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
  }

  onDeleteCharacterById(id?: string): void {
    if (!id) return;
    this.onDeleteById.emit(id);
  }
}
