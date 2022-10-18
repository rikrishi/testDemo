import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  programList: any[] = [
    { id: "P1", label: "Program 1", router: "programOne" },
    { id: "P2", label: "Program 2", router: "programTwo" },
    { id: "P3", label: "Program 3", router: "programThree" },
    { id: "P4", label: "Program 4", router: "programFour" },
    { id: "P5", label: "Program 5", router: "programFive" },
    { id: "P6", label: "Program 6", router: "programSix" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
