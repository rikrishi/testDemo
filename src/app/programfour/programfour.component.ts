import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programfour',
  templateUrl: './programfour.component.html',
  styleUrls: ['./programfour.component.scss']
})
export class ProgramfourComponent implements OnInit {
  inputTextBox: any = '';
  inputTextBox2: any = '';
  finalResult: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  getResult() {
    let stringOne = this.inputTextBox.length;
    let stringTwo = this.inputTextBox2.length;
    let i = 0, j = 0;
    while (i < stringOne && j < stringTwo) {
      if (this.inputTextBox[i] == this.inputTextBox2[j])
        i++;
      j++;
    }
    return (this.finalResult = (i == stringOne));
  }

}
