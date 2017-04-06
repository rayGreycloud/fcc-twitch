// const channelsArray = ["freecodecamp", "brunofin", "comster404", "MaxguNtv", "chozilla", "VictoryForPhil", "Hazey7893", "NikolarnTV"];

const channel = "freecodecamp";

const cb = '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?';
const url = 'https://api.twitch.tv/kraken/';
const streamsUrl = `${url}streams/${channel}${cb}`;
let results = {};

$.getJSON(streamsUrl, function(data) {
  results.data = data;
  console.log(results);
  let status = (data.stream !== null) ? 'Online' : 'Offline';
});

let html = `<li><div>${channel}</div><div>${status}</div></li>`;
document.querySelector('#channels').innerHTML = html;
