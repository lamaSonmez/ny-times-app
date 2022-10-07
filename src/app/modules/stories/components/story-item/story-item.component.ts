import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Story } from '@stories/models/story.model';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit ,OnDestroy{

  @Input() story!: Story;

  constructor() { }
 
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
