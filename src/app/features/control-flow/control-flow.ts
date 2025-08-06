import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {
  public showContent = signal(false);
  public toogleContent() {
    this.showContent.update((value) => !value);

  }
}
