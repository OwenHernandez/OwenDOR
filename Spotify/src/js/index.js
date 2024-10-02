import songs from '../assets/songs/*.mp3';
import Player from './Player';

const map = {};

let aux = 1;
for (let key of Object.keys(songs)) {
	// asociar map[".item-${aux}"] con la cancion songs[key]
	map["item-" + aux] = songs[key];
	aux++;
}

// crea un objeto Player y pasa el objeto map
const player = new Player(map);