import { CadastroTimes } from './cadastro-times';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cadastroTimes = {} as CadastroTimes
  cadastroTimesList : CadastroTimes[] = []
  numeroVotos!: CadastroTimes;

  saveData(form: NgForm) {
    this.cadastroTimesList.push(this.cadastroTimes)
    this.cadastroTimes = {} as CadastroTimes
    form.resetForm()
  }

  addCadastro(): void {

  }

}



