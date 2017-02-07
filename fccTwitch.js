// Channels to check
const channelsArray = ["freecodecamp", "brunofin", "comster404", "MaxguNtv", "chozilla", "VictoryForPhil", "Hazey7893", "JoshOG"];


var html = channelsArray.map((channel) => {
  let thumbnail, name, description;
  let channelLink = '';

  // Create request urls
  const streamsUrl = `https://wind-bow.gomix.me/twitch-api/streams/${channel}`;
  const channelsUrl = `https://wind-bow.gomix.me/twitch-api/channels/${channel}`;

  // Make fetch request
  fetch(channelsUrl)
    .then(blob => blob.json())
    .then((data) => {
      if (data.error) {
        thumbnail = `https://dummyimage.com/80x45/ffffff/000000.jpg&text=404`;
        name = channel;
        description = data.error.message;
      } else {
        fetch(streamsUrl)
          .then(blob => blob.json())
          .then(data => {
            if (data.stream === null) {
              thumbnail = `https://dummyimage.com/80x45/6441a4/ffffff.jpg&text=offline`;
              name = channel;
              description = 'Channel Offline';
            } else {
              thumbnail = data.stream.preview.small;
              name = data.stream.channel.display_name;
              description = `
              <span>${data.stream.game}</span>
              <span>${data.stream.channel.status}</span>
              <span>${data.stream.viewers} viewers</span>`;
            }
          });
      }
    });

// Return li
  return `
    <li class="channel">
      <span><img src="${thumbnail}" class="thumbnail"></span>
      <span id="name"><a href=${channelLink} target="_blank"> ${name}</a></span>
      <span>${description}</span>
    </li>
  `;
// Convert to one string
}).join('');

// Push into ul
document.querySelector('#channels').innerHTML = html;
