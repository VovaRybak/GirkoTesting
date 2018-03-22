import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

	catalogItems = [
		{ short:"photo",category:"Фотографи", image:"assets/foto.jpg"},
		{ short:"video",category:"Відеооператори", image:"assets/video.jpg"},
		{ short:"music",category:"Музиканти", image:"assets/music.jpg"},
		{ short:"tamada",category:"Ведучі", image:"assets/tamada.jpg"}
	]
    constructor() { }

  ngOnInit() {
  }

}
