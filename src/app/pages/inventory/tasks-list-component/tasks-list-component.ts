import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks-list-component',
  imports: [],
  templateUrl: './tasks-list-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit{
  constructor() {
    console.log('Constructor TasksListComponent');
  }

  ngOnInit(): void {
    console.log('OnInit TasksListComponent');
  }
}
