import "jsdom-global/register";
import { expect } from "chai";
import convertTime from "../src/convertTime";

import renderAlbumTracks from "../src/albumTracks";

describe("AlbumTracks", () => {
  const data = [
    {
      preview_url:
        "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      track_number: 1,
      name: "Around The World",
      duration_ms: 238733,
    },
  ];

  const data2 = [
    {
      preview_url:
        "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      track_number: 1,
      name: "Around The World",
      duration_ms: 238733,
    },
    {
      preview_url:
        "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      track_number: 1,
      name: "Around The World",
      duration_ms: 238733,
    },
  ];

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">${convertTime(238733)}</p>
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">${convertTime(238733)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">${convertTime(238733)}</p>
    </div>`;

  it("should create and append the markup given a correct data.", () => {
    const element = document.createElement("div");
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eqls(markup);
  });

  it("should create and append the markup when more than 1 item.", () => {
    const element2 = document.createElement("div");
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eqls(markup2);
  });
});
