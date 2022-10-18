import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programfive',
  templateUrl: './programfive.component.html',
  styleUrls: ['./programfive.component.scss']
})
export class ProgramfiveComponent implements OnInit {
  inputTextBox: any = '';
  finalResult: any = '';
  constructor() { }

  ngOnInit(): void {
  }


  checkForPalindrome(str1: any) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
  }

  getResult() {
    var maxlength = 0,
      maxPali = '';

    for (var i = 0; i < this.inputTextBox.length; i++) {
      var substrings = this.inputTextBox.substr(i, this.inputTextBox.length);

      for (var j = substrings.length; j >= 0; j--) {
        var sub_subs_str = substrings.substr(0, j);
        if (sub_subs_str.length <= 1)
          continue;

        if (this.checkForPalindrome(sub_subs_str)) {
          if (sub_subs_str.length > maxlength) {
            maxlength = sub_subs_str.length;
            maxPali = sub_subs_str;
          }
        }
      }
    }
    this.finalResult = maxPali
    return this.finalResult;
  }

}
