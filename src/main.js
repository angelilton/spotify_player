import spotify from "./Spotify";
import renderAlbums from "./albumList";
import renderAlbumInfo from "./albumInfo";
import renderAlbumTracks from "./albumTracks";

const albums = spotify.search.albums("vintage");
const albumList = document.getElementById("album-list");

albums.then((data) => renderAlbums(data.albums.items, albumList));

const album = spotify.album.getAlbum("4YWK8VDqqpOKc2lTifRMAD");
const albumInfo = document.getElementById("album-info");
const albumTracks = document.getElementById("album-tracks");

album
  .then((data) => renderAlbumInfo(data, albumInfo))
  .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
