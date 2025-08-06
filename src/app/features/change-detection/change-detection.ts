import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { Title } from "@shared/title/title";

@Component({
  selector: 'app-change-detection',
  imports: [JsonPipe, Title],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.scss',
})
export class ChangeDetection implements OnInit {
  ngOnInit(): void {
  }
  public frameworkSelected = computed(()=>{
    return this.frameworkAsSignal().name
  })
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016',
  };
  constructor() {
    setTimeout(()=>{
      this.frameworkAsProperty.name="React"
      this.frameworkAsSignal.update(value=>({
        ...value,
        name:"React"
      }))
    },3000)
  }
}
