import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programtwo',
  templateUrl: './programtwo.component.html',
  styleUrls: ['./programtwo.component.scss']
})
export class ProgramtwoComponent implements OnInit {
  inputTextBox: any = '';
  inputTextBox2: any = '';
  finalResult: any = '';
  constructor() { }

  ngOnInit(): void {
  }
  getResult() {
    let stringOne = this.inputTextBox.length;
    let stringTwo = this.inputTextBox2.length;
    if (stringOne !== stringTwo) {
      this.finalResult = ''
      alert('Invalid Input');
      return
    }
    let str1 = this.inputTextBox.split('').sort().join('');
    let str2 = this.inputTextBox2.split('').sort().join('');
    if (str1 === str2) {
      this.finalResult = 'is an Anagram';
    } else {
      this.finalResult = 'is not an Anagram';
    }
  }
}
