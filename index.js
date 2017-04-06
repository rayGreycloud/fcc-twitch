// const channelsArray = ["freecodecamp", "brunofin", "comster404", "MaxguNtv", "chozilla", "VictoryForPhil", "Hazey7893", "NikolarnTV"];

const channel = "freecodecamp";
const cb = '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?';
const url = 'https://api.twitch.tv/kraken/';
const streamsUrl = `${url}streams/${channel}${cb}`;

let results = {};
let status = '';
let thumbnail = "https://dummyimage.com/80x45/eeeeee/000000.jpg";

$.getJSON(streamsUrl, function(data) {
  results.data = data;
  console.log("CB response:", results);

  status = (data.stream !== null) ? 'Online' : 'Offline';
  let html = `<li class="channel">
    <span><img src=${thumbnail}class="thumbnail"></span>
    <span id="name"><a href="https://www.twitch.tv/${channel}" target="_blank">${channel}</a></span>
    <span id="description">${status}</span>
  </li>`;
  document.querySelector('#channels').innerHTML = html;
});

console.log("Results at finish:", results);
