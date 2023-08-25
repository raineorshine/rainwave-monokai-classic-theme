Theme for [rainwave](https://github.com/rmcauley/rainwave) based on [Monokai Classic](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode).

## Usage

1. Install the [stylebot](https://stylebot.dev/) browser extension.
2. Click the Stylebot extension icon and choose "Open Stylebot".
3. Copy the following styles:

```css
:root {
  /* --monokai-orange: #EF9C40; */
  /* original rainwave orange */
  --orange: #f7941e;
  --green: #b1dd52;
  --cyan: #84d6ec;
  --red: #e03f71;
  --yellow: #e4db82;
  --dark-green: #80ac20;
  --dark-eggplant: #322b42;
  --purple: #9643c6;
  --gray: #6e7067;
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
.request_indicator,
div.vote_button {
  background: var(--green);
}

/* header links */
.station_name,
.menu /* li:not(.requests_link)*/ a,
#r4_audio_player a,
.requester a,
.request_indicator,
.vote_button {
  color: #333;
}

/* header link hover */
body.desktop .header a:hover {
  color: #666;
}

/* invert cooldown warning: invisible on cooldown and highlighted when not on cooldown */
.menu .requests_link a {
  /* worse contrast than default... */
  background-color: var(--cyan);
}
.menu .requests_link a.warning {
  background-color: transparent;
}

/* play icon */
#r4_audio_player.playing .audio_icon_play *,
#r4_audio_player.playing .audio_icon_play {
  fill: var(--orange);
}

/* playback line indicator */
#r4_audio_player div.tuned_in_indicator {
  background-color: #333;
}

/* other playback icons */
div.menu_wrapper svg * {
  fill: #333;
}

/* hamburger icon */
.hamburger_icon,
.hamburger_icon:before {
  border-color: #333;
}

/* playback menu dividers */
.m3u a:not(:last-child) {
  border-bottom: none;
}

/* hamburger menu dropdown doesn't need dividers */
.menu_dropdown div.menu_group {
  border-top: none;
}

/* song hover */
.song.voting_enabled:not(.voting_registered):not(.voting_clicked):hover {
  background-color: var(--dark-eggplant);
}

/* song link hover */
body .song a:hover {
  color: var(--cyan);
}

/* song voted */
.song.voting_registered {
  /* Dark egglant: #191228 */
  background-color: #272728;
}

.rating {
  color: var(--green);
}

/* rotate the color of the rating gradient since we cannot change the url */
.rating.rating_user,
.rating.ratable:hover {
  filter: hue-rotate(230deg) brightness(1.5) saturate(0.7) !important;
}
```
