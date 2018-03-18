import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

	catalogItems = [
		{ logo:"assets/foto-icon.png",category:"Фотографи", image:"assets/foto.jpg"},
		{ logo:"assets/video-icon.png",category:"Відеооператори", image:"assets/video.jpg"},
		{ logo:"assets/music-icon.png",category:"Музиканти", image:"assets/music.jpg"},
		{ logo:"assets/tamada-icon.png",category:"Ведучі", image:"assets/tamada.jpg"}
	]
    constructor() { }

  ngOnInit() {
  }

}
