import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:heroes[]=[
    {
      nombre: "Audifonos",
      bio: "Una de las principales diferencias entre los audífonos gamer y los normales es la presencia de un micrófono incorporado",
      img: "assets/img/audifonos.png",
      aparicion: "5000",
      casa:"Tecnologia"
    },
    {
      nombre: "tv",
      bio: "El 25 de marzo de 1925, el inventor escocés John Logie Baird hizo la primera exhibición pública de imágenes en movimiento en televisión",
      img: " ",
      aparicion: "5000",
      casa:"Tecnologia"
    },
    {
      nombre: "Lapto",
      bio: "Si valoras la portabilidad y la comodidad para jugar en diferentes lugares, un notebook gamer puede ser la mejor opción. ",
      img: " ",
      aparicion: "10000",
      casa: "Tecnologia"
    },
    {
      nombre: "Gafas",
      bio: "Gafas de Realidad Virtual para ver cualquier tipo de contenidos 360 (fotos 360º, recorridos virtuales, juegos de realidad virtual, videos 360º, películas 360º, películas 3d, cine IMAX)",
      img: " ",
      aparicion: "50",
      casa:"Tecnologia"
    },
    {
      nombre: "PlayStation5",
      bio: "El precio de venta al público recomendado en España para la Consola PlayStation es de 549,99 € para la PS5 edición Standard (PVP recomendado) y 449,99 € para la PS5 edición Digital (PVP recomendado)",
      img: "  ",
      aparicion: "200",
      casa: "Juegos"
    },
    {
      nombre: "iPhone-14Max",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "",
      aparicion: "1500",
      casa: "Telefono"
    },
    {
      nombre: "Table",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "",
      aparicion: "500",
      casa: "Tecnologia"
    }
  ];
  getheroes()
  {return this.heroes};

  getheroe(idx:number)
  {return this.heroes[idx];}

  getheroesnombre(nombre:string):heroes[]{
    let heroes = this.getheroes();
    let heroe = heroes.filter(item =>item.nombre==nombre)
    return heroe;
  }

  constructor() {
    console.log("servicio para usar..!");
   }
}
export interface heroes{
nombre:string;
bio:string;
img:string;
aparicion:string;
casa:string;
};
