import { Component, signal } from '@angular/core';
type Grade = 'A' | 'B' | 'F';
@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>([
    'Angular',
    'Vue',
    'Svelte',
    'Qwik',
    'React',
  ]);
  public frameworks2 = signal<string[]>([]);
  public toogleContent() {
    this.showContent.update((value) => !value);
  }
}
