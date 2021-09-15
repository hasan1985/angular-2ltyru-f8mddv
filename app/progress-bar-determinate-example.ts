import {Component, OnInit} from '@angular/core';

/**
 * @title Determinate progress-bar
 */

const incr = 1;

@Component({
  selector: 'progress-bar-determinate-example',
  templateUrl: 'progress-bar-determinate-example.html',
  styleUrls: ['progress-bar-determinate-example.css'],
})
export class ProgressBarDeterminateExample implements OnInit {
  progress = 0;

  ngOnInit() {
    setInterval(() => this.manageProgress(), 150 )
  }

  manageProgress() {
    if(this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress + incr;
    }
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */