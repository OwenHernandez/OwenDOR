import Song, { play_song } from './Song.js';

export default class Player {
	constructor(map) {
		let aux = 1;

		for (let [key, value] of Object.entries(map)) {
			let song = new Song(key, value, "cv" + aux);
			play_song(song);
			aux++;
		}
	}
}