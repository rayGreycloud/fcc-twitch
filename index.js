// Channels to check
const channelsArray = ["freecodecamp", "brunofin", "comster404", "MaxguNtv", "chozilla", "VictoryForPhil", "Hazey7893", "JoshOG"];

const html = channelsArray.map(channel => {
  let thumbnail, name, description;
  let channelLink = '';
  const results1 = [];
  const results2 = [];
  // Create request urls
  const streamsUrl = `https://wind-bow.gomix.me/twitch-api/streams/${channel}`;
  const channelsUrl = `https://wind-bow.gomix.me/twitch-api/channels/${channel}`;

  // Request streams

  $.ajax(streamsUrl)
    .done(function(data) {
      console.log(data);
      results1.push(data);
    })
    .fail(function() {
      alert("Error fetching data");
    });

  $.ajax(channelsUrl)
    .done(function(data) {
      console.log(data);
      results2.push(data);
    })
    .fail(function() {
      alert("Error fetching data");
    });

  // fetch(streamsUrl)
  //   .then(blob => blob.json())
  //   .then(data => results1.push(data));
  //
  // if result
  // // Request channels
  // fetch(channelsUrl)
  // .then(blob => blob.json())
  // .then(data => results2.push(data));

  console.log(results1, results2)

  if (results2.hasOwnProperty('error')) {
    thumbnail = `https://dummyimage.com/80x45/ffffff/000000.jpg&text=404`;
    name = channel;
    description = results2.error.message;
    console.log(description);
  } else if (results1.stream == null) {
      thumbnail = `https://dummyimage.com/80x45/6441a4/ffffff.jpg&text=offline`;
      name = channel;
      description = 'Channel Offline';
      console.log(description);
  } else if (results1.stream.hasOwnPropery('preview')) {
    thumbnail = results1[0].stream.preview.small;
    name = results2.stream.channel.display_name;
    description = `
    <span>${results1.stream.game}</span>
    <span>${results1.stream.channel.status}</span>
    <span>${results1.stream.viewers} viewers</span>`;
  }

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
