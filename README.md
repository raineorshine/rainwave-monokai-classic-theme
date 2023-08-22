Theme for [rainwave](https://github.com/rmcauley/rainwave) based on [Monokai Classic](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode).

## Usage

1. Install the [stylebot](https://stylebot.dev/) browser extension.
2. Click the Stylebot extension icon and choose "Open Stylebot".
3. Copy the following styles:

```css
:root {
  /* monokai orange */
  /* --orange: #DF933E; */
  /* original rainwave orange */
  --orange: #f7941e;
  --green: #B3E053;
  --dark-green: #80ac20;
  /* --purple: #9643c6 */
}

/* Increase click area of PREVIOUSLY PLAYED link */
.history_header_header {
  /* set to inline-block so we can increase the height */
  display: inline-block;
  height: 25px;
  margin-top: 12px;
}

/* shift container up to extend top click area */
.history_header {
  margin-top: -18px;
  padding-top: 9px;
}

body.desktop div.history_header:hover {
  background-color: hsl(204deg 77% 40% / 50%);
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
.request_indicator, 
div.vote_button {
  background: var(--green);
}

.rating {
  color: var(--green);
}

/* rotate the color of the rating gradient since we cannot change the url */
.rating.rating_user, .rating.ratable:hover {
  filter: hue-rotate(230deg) brightness(1.5) saturate(0.7) !important
}

/* header links */
.station_name,
.menu /* li:not(.requests_link)*/ a,
.requester a,
.vote_button {
  color: #333;
}

/* header link hover */
body.desktop .header a:hover {
  color: #666;
}

/* requests on cooldown */
.menu .requests_link a.warning {
  background-color: var(--orange);
}

/* play icon */
#r4_audio_player.playing .audio_icon_play *,
#r4_audio_player.playing .audio_icon_play {
fill: var(--orange);
}

/* other playback icons */
div.menu_wrapper svg * {
  fill: #333;
}

/* hamburger icon */
.hamburger_icon, .hamburger_icon:before {
  border-color: #333;
}

.m3u a:not(:last-child) {
  border-bottom: solid 1px var(--dark-green);
}

/* song hover */
.song.voting_enabled:not(.voting_registered):not(.voting_clicked):hover {
  background-color: #322b42;
}

/* song voted */
.song.voting_registered {
  /* Dark egglant: #191228 */
  background-color: #272728;
}

```