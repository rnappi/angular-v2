import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = "http://loiane.traning.com";
  cursoAngular:boolean = true;
  urlImagem:string = "http://lorempixel.com/400/200/nature";

  getValor():number{
    return 1;
  }

  getCurtirCurso():boolean{
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
