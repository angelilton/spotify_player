import spotify from "./Spotify";
import renderAlbumInfo from "./albumInfo";
import renderAlbumTracks from "./albumTracks";
import searchEnterTrigger from "./searchTrigger";

searchEnterTrigger();

const album = spotify.album.getAlbum("4YWK8VDqqpOKc2lTifRMAD");
const albumInfo = document.getElementById("album-info");
const albumTracks = document.getElementById("album-tracks");

album
  .then((data) => renderAlbumInfo(data, albumInfo))
  .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
