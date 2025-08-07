import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlow } from '@shared/heavy-loaders-slow/heavy-loaders-slow';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlow,NgTemplateOutlet,Title],
  templateUrl: './defer-views.html',
  styleUrl: './defer-views.scss'
})
export class DeferViews {

}
