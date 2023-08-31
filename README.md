Theme for [rainwave](https://github.com/rmcauley/rainwave) based on [Monokai Classic](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode).

<img width="753" alt="image" src="https://github.com/raineorshine/rainwave-monokai-classic-theme/assets/750276/c2b194cd-52c4-4f02-b41e-a654db1c17ea">

## Setup

1. Install the [Stylebot](https://stylebot.dev/) browser extension.
2. Click the Stylebot extension icon and choose "Open Stylebot".
3. Copy and paste the following styles into Stylebot:

<!-- TEMPLATE START: stylebot.css -->

```css
:root {
  /* --monokai-orange: #EF9C40; */
  /* original rainwave orange */
  --orange: #f7941e;
  --green: #b1dd52;
  --cyan: #84d6ec;
  --dark-cyan: #1985a3;
  --red: #e03f71;
  --yellow: #e3da82;
  --dark-green: #80ac20;
  --dark-eggplant: #322b42;
  --dark-red: #660000;
  --mid-green: #98c439;
  --purple: #9643c6;
  --gray: #6e7067;
  --greenish-gray: #acad94;
  --filter-green: hue-rotate(230deg) brightness(1.5) saturate(0.7);
  --filter-ungreen: hue-rotate(-230deg) brightness(0.75) saturate(calc(1 / 0.7));
}

/* scrollbar */
/* hide the scrollbar so that song hover extends all the way to the edge of the screen. */
/* ::-webkit-scrollbar is hard-coded in a style tag and there is seemingly no way to reset it to the browser's default appearance of appearing as an overlay only during scroll. The values initial and unset do not work. */
.scrollblock::-webkit-scrollbar {
  display: none;
}

/**********************************
 * HEADER
 **********************************/

/* message (e.g. connection issues) */
.timeline_message.timeline_message {
  background-color: var(--dark-eggplant);
  border-color: #444;
}

/* error */
.error_tooltip {
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(var(--red)), to(var(--dark-red)));
  border-color: var(--red);
}

div.header {
  background-color: var(--mid-green);
}

/* station select */
#station_select {
  background-color: var(--dark-green);
  border-right-color: var(--dark-green);
}

#station_select a,
body.desktop #station_select a.station:hover {
  color: #000;
}

/* station select (hover) */
#station_select a.station:hover {
  background-color: var(--mid-green);
}

/* station select (header) */
#station_select_header {
  background-color: var(--green);
}

/* Increase click area of PREVIOUSLY PLAYED link */
.history_header_header {
  /* set to inline-block so we can increase the height */
  display: inline-block;
  height: 25px;
  margin-top: 10px;
}

/* shift container up to extend top click area */
.history_header {
  margin-top: -19px;
  padding-top: 10px;
  padding-bottom: 2px;
}

.history_header:hover {
  background-color: var(--dark-eggplant);
}

/* all the blue stuff is now greens stuff */
.header,
.menu,
.menu_wrapper,
.menu_dropdown,
.menu_dropdown a,
.hamburger_icon,
#station_select a.station.selected_station,
.background,
.requester,
.request_indicator {
  background: var(--green);
}

/* links on green background */
.station_name,
.menu a,
#r4_audio_player a,
.requester a,
.request_indicator,
.vote_button {
  color: #333;
}

/* link hover */
body.desktop .header a:hover,
body.desktop .requester a:hover {
  color: #777;
}

/* play icon */
#r4_audio_player.playing .audio_icon_play *,
#r4_audio_player.playing .audio_icon_play {
  fill: var(--orange);
  /* use a light drop shadow to increase the contrast without deviating from the theme color */
  filter: drop-shadow(0 0px 1px #ffffff55);
}

/* playback line indicator */
.tuned_in_indicator,
.load_indicator {
  background-color: #333;
}

/* other playback icons */
div.menu_wrapper svg * {
  fill: #333;
}

/* playback menu dividers */
.m3u a:not(:last-child) {
  border-bottom: none;
}

/* selected right link */
body.requests .menu .requests_link a,
body.playlist .menu .playlist_link a,
body.search_open .menu .search_link a {
  background: var(--mid-green);
}

/* requests on cooldown */
.menu .requests_link a.warning {
  background-color: var(--purple);
  color: #ddd;
}

/* hamburger icon */
.hamburger_icon,
.hamburger_icon:before {
  border-color: #333;
}

/* hamburger menu dropdown doesn't need dividers */
.menu_dropdown div.menu_group {
  border-top: none;
}

/* Albums */
body .album_list .item.cool.rating_user {
  background-color: var(--dark-eggplant);
}

xxxbody .album_list .item.cool.rating_user::before {
  background-color: var(--dark-eggplant);
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  /* match height of div.list div.item.cool */
  height: 26px;
  z-index: -1;
  filter: var(--filter-ungreen);
}

/**********************************
 * SONGS
 **********************************/

/* vote button */
div.vote_button {
  background: #444;
  color: #ddd;
}

/* vote button (voted) */
div.song.voting_registered div.vote_button {
  background-color: var(--purple);
}

/* song hover */
.song.voting_enabled:not(.voting_registered):not(.voting_clicked):hover {
  background-color: var(--dark-eggplant);
}

/* song link hover */
body .song .song_content a:hover {
  color: var(--cyan);
}

/* song voted */
.song.voting_registered {
  background-color: var(--dark-eggplant);
}

/* favorite album */
.song .album_fave_highlight div.album a,
.song .song_fave_highlight div.title {
  color: var(--yellow);
}

/* favorite heart */
.fave_solid {
  filter: hue-rotate(-20deg) saturate(1.2);
}

/* rating */
/* rotate the color of the rating gradient since we cannot change the url */
.rating.rating_user,
.rating.ratable:hover {
  filter: var(--filter-green);
}
```

<!-- TEMPLATE END: stylebot.css -->
