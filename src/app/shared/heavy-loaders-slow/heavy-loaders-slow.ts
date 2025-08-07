import { NgClass, } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [NgClass, ],
  templateUrl: './heavy-loaders-slow.html',
  styleUrl: './heavy-loaders-slow.scss',
})
export class HeavyLoadersSlow {
  @Input({ required: true }) cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Componente Cargado...');
  }
}
