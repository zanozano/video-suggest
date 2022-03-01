import { Multimedia } from './multimedia.js';
//REPRODUCTOR
class Reproductor extends Multimedia {
	constructor(url, id) {
		super(url);
		let _id = id;
		this.getId = () => {
			return _id;
		};
		this.setId = (newId) => {
			_url = newId;
		};
	}
	//GET ID
	get id() {
		return this.getId();
	}
	//SET ID
	set id(newId) {
		this.setId = newId;
	}
	playMultimedia() {
		let iframe = document.querySelector(`#${this.id}`);
		iframe.setAttribute('src', this.url);
		console.log(iframe);
	}
	setInicio(tiempo) {
		let iframe = document.querySelector(`#${this.id}`);
		iframe.setAttribute('src', `${this.url}?start=${tiempo}`);
		console.log(iframe);
	}
}
//INSTANCIAS DE SUGERENCIA DE VIDEOS
let pelicula = new Reproductor('https://www.youtube.com/embed/vW-PHNZ-Xww', 'peliculas');
pelicula.playMultimedia();
let serie = new Reproductor('https://www.youtube.com/embed/QQ4sMbI_oJ0', 'series');
serie.playMultimedia();
let musica = new Reproductor('https://www.youtube.com/embed/1pBgMBBsv4k', 'musica');
musica.playMultimedia();
musica.setInicio(200);
