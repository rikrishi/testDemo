import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programsix',
  templateUrl: './programsix.component.html',
  styleUrls: ['./programsix.component.scss']
})
export class ProgramsixComponent implements OnInit {
  inputTextBox: any = '';
  finalResult: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  getResult() {
    var myArray = this.inputTextBox.split(',');
    let myArrSize = myArray.length;
    if (myArrSize == 0)
      return "";

    if (myArrSize == 1)
      return myArray[0];
    myArray.sort();
    let end = Math.min(myArray[0].length, myArray[myArrSize - 1].length);
    console.log(end);

    let i = 0;
    while (i < end && myArray[0][i] == myArray[myArrSize - 1][i])
      i++;

    let prefixVale = myArray[0].substring(0, i);
    this.finalResult = prefixVale;
    console.log(this.finalResult);

    return this.finalResult;
  }

}
