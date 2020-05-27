import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  cenzor: Array<string> = ['java', 'tottenham', 'assembler'];
  convertedCenzorWord: string = this.cenzor.join(' ');
  addWord: string;
  textarea: string;
  placeholderAdd: string = 'word here..';
  placeholderTextArea: string = 'text here...';
  isEmptyInput: boolean;
  isEmptyTextArea: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  AddBadWord(): void {
    if (this.addWord === '' || this.addWord === undefined) {
      this.isEmptyInput = true;
      this.placeholderAdd = 'add a word please!';
    } else {
      this.cenzor.push(this.addWord);
      this.convertedCenzorWord +=  ` ${this.addWord}`;
      this.isEmptyInput = false;
      this.placeholderAdd = 'word here..';
      this.addWord = '';
    }
  }
  resetBtn(): void {
    this.cenzor = [];
    this.convertedCenzorWord = '';
    this.addWord = '';
    this.textarea = '';
  }
  cenzorBtn() {
    if (this.textarea === '' || this.textarea === undefined) {
      this.isEmptyTextArea = true;
      this.placeholderTextArea = 'write words!';
    } else {
      let wordsToCheck: Array<string> = this.textarea.split(' ');
      this.isEmptyTextArea = false;
      this.placeholderTextArea = 'text here...';
      let resultWords: Array<string> = [];
      for (let word of wordsToCheck) {
        if (this.cenzor.includes(word)) {
          let match: string = '*'.repeat(word.length);
          resultWords.push(match);
          let convertToString:string = resultWords.join(' ');
          this.textarea = convertToString;
        }else{
          resultWords.push(word);
        }
      }
    }
  }

}
