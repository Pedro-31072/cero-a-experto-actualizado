import { booleanAttribute, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  protected _title = signal('');
  protected _withBold = signal(false);
  @Input({ required: true }) set setTitle(value: string) {
    this._title.set(value);
  }
  @Input({ transform: booleanAttribute }) set withBold(value: boolean) {
    this._withBold.set(value);
  }
}
