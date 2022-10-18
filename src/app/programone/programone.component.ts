import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programone',
  templateUrl: './programone.component.html',
  styleUrls: ['./programone.component.scss']
})
export class ProgramoneComponent implements OnInit {
  inputTextBox: any = '';
  finalResult: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  getResult() {
    var myArray = this.inputTextBox.split(',');
    let formObj = myArray.reduce(function (
      counter: any,
      value: any
    ) {
      return (
        counter[value] ? ++counter[value] : (counter[value] = 1),
        counter
      );
    },
      {});
    const max = Object.values(formObj).sort((prev: any, next: any) => next - prev)[0];
    let resultValue: any[] = []
    Object.keys(myArray).forEach(element => {
      if (formObj[element] === max) {
        resultValue.push(element);
      }
    });
    this.finalResult = resultValue
  }
}
