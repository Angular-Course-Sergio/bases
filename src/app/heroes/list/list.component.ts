import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Iron Man',
    'Hulk',
    'Black Widow',
    'Thor',
    'Hawkeye',
    'Captain America',
  ];

  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.heroNames.length);
  }
}
