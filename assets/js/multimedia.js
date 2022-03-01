//peliculas
//musicas
//series
//MULTIMEDIA
export class Multimedia {
	constructor(url) {
		//URL
		let _url = url;
		this.getUrl = () => {
			return _url;
		};
		this.setUrl = (newUrl) => {
			_url = newUrl;
		};
	}
	//GET
	get url() {
		return this.getUrl();
	}
	//SET
	set url(newUrl) {
		this.setUrl(newUrl);
	}
	//SET INICIO
	setInicio() {
		return console.log('Cambiar URL de video');
	}
}
