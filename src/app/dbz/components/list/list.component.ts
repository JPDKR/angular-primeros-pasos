import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id: string): void{
    // ToDo: Emitir el ID Del Personaje
    this.onDeleteId.emit(id);
  }
}
