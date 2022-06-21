import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-retouch',
  templateUrl: './retouch.component.html',
  styleUrls: ['./retouch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RetouchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
