export default class Song {

	constructor(key, value /*, card*/) {
		this.element = document.querySelector("." + key);
		this.audio = new Audio(value);
		//this.album = document.querySelector(card);
	}
}

export function play_song(song) {
	song.element.addEventListener("click", () => {
		if (song.audio.paused) {
			song.audio.play();
		} else {
			song.audio.pause();
		}
	});
}