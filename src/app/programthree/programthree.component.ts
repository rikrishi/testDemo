import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programthree',
  templateUrl: './programthree.component.html',
  styleUrls: ['./programthree.component.scss']
})
export class ProgramthreeComponent implements OnInit {
  inputTextBox: any = '';
  inputTextBox2: any = '';
  finalResult: any = '';
  constructor() { }

  ngOnInit(): void {
  }
  getResult() {
    if (this.inputTextBox.length !== this.inputTextBox2.length) {
      return false;
    };
    for (let i = 0;
      i < this.inputTextBox.length; i++) {
      const a = this.inputTextBox.indexOf(this.inputTextBox[i]);
      const b = this.inputTextBox2.indexOf(this.inputTextBox2[i]);
      if (this.inputTextBox2[a] !== this.inputTextBox2[i] || this.inputTextBox[b] !== this.inputTextBox[i]) {
        this.finalResult = false;
        return false;
      };
    };
    this.finalResult = true;
    return true;
  }
}
