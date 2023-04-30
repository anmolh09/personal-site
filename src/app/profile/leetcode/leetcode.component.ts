import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-leetcode',
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.scss']
})
@Injectable()
export class LeetcodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
