import spotify from "./Spotify";
import renderAlbums from "./albumList";

const albums = spotify.search.albums("vintage");
const albumList = document.getElementById("album-list");

albums.then((data) => renderAlbums(data.albums.items, albumList));
