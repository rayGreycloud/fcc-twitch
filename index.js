// Channels to check
const channelList = ["freecodecamp", "brunofin", "comster404", "MaxguNtv", "chozilla", "VictoryForPhil", "Hazey7893", "JoshOG"];

// twitch request URL
const twitchApi = 'https://wind-bow.gomix.me/twitch-api';

// Initialize results array
const channels = [];

// Iterate through channels array
channelList.map((channel) => {
  // Create request URL
  const endpoint = `${twitchApi}/${channel}`;

  // Use built-in browser method to fetch data
  fetch(endpoint)
    .then(blob => blob.json())
    // Push onto results array
    .then(data => channels.push(...data));

  // Process response
  // check status
});


// Display results

// Event listener for item selection
