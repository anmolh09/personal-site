import {AfterViewInit, Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-leet',
  templateUrl: './leet.component.html',
  styleUrls: ['./leet.component.scss']
})
@Injectable()
export class LeetComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private http: HttpClient) { }

  leetData;
  easyRatio;
  mediumRatio;
  hardRatio;

  ngOnInit() {
    this.http.get('assets/data/appData.json').subscribe((res) => {
      this.leetData = res;
      console.log(this.leetData);
      console.log(this.leetData.easySolved);
      console.log(this.leetData.totalSolved);
      this.easyRatio = this.leetData.easySolved / this.leetData.totalSolved;
      this.mediumRatio = this.leetData.mediumSolved / this.leetData.totalSolved;
      this.hardRatio = this.leetData.hardSolved / this.leetData.totalSolved;
    });

  }
  ngAfterViewInit() {
    const valueDisplays = document.querySelectorAll('.num');
    const interval = 4000;
    valueDisplays.forEach((valueDisplay) => {
      console.log(valueDisplay);
      let startValue = 0;
      // const endValue = this.leetData.totalSolved;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'), 10);
      console.log(endValue);
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = String(startValue);
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
  ngOnDestroy() {
  }
}
