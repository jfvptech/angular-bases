import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = "iron Man";
  public edad: number = 45;
  
  get capitalizado():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescripcion():string{
    return `${this.nombre} - ${this.edad}`
  }

  changeHero():void{
    this.nombre = 'Spiderman'
  }

  changeEdad():void{
    this.edad = 25
  }

  resetForm():void{
    this.nombre = 'ironman'
    this.edad = 45
  }

}
