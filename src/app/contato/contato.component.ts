import { Menssagem } from './msg';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url = '../assets/images/dev.jpg';

  newMsg : Menssagem = {} as Menssagem
  dictionaryList : Menssagem[] = []

  // saveData(form: NgForm) {
  //   this.dictionaryList.push(this.newDictionary)
  //   this.newDictionary = {} as Dictionary
  //   form.resetForm()
  // }
}
