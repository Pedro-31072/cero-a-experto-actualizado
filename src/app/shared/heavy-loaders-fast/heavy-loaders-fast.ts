import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [NgClass],
  templateUrl: './heavy-loaders-fast.html',
  styleUrl: './heavy-loaders-fast.scss',
})
export class HeavyLoadersFast {
  @Input({ required: true }) cssClass!: string;
}
