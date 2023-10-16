Theme for [rainwave](https://github.com/rmcauley/rainwave) based on [Monokai Classic](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode).

<img width="754" alt="image" src="https://github.com/raineorshine/rainwave-monokai-classic-theme/assets/750276/5ff5670f-cfd3-4008-b51d-044b21251e13">

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
  --red: #e03f71;
  --yellow: #e3da82;
  --dark-cyan: #1985a3;
  --dark-green: #80ac20;
  --dark-eggplant: #322b42;
  --dark-red: #660000;
  --extra-dark-red: #300;
  --extra-dark-eggplant: #302b4288;
  --mid-green: #98c439;
  --mid-purple: #643784;
  --purple: #9643c6;
  --gray: #6e7067;
  --greenish-gray: #acad94;
  --filter-green: hue-rotate(230deg) brightness(1.5) saturate(0.7);
  --filter-ungreen: hue-rotate(-230deg) brightness(0.75) saturate(calc(1 / 0.7));
  --ungreen-dark-eggplant: #2a190a;
  --ungreen-mid-purple: #502805;
  --ungreen-purple: #684700;
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

/* all the blue stuff is now green stuff */
.header,
.menu,
.menu_wrapper,
.menu_dropdown,
.menu_dropdown a,
.hamburger_icon,
#station_select a.station.selected_station,
.background {
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
  color: black;
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
body.requests .menu .requests_link a:not(.warning),
body.playlist .menu .playlist_link a,
body.search_open .menu .search_link a {
  background: var(--mid-green);
}

/* requests on cooldown */
.menu .requests_link a.warning {
  background-color: var(--dark-red);
  color: #dedede;
}
.menu .requests_link a.warning:hover {
  color: white;
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

/* Libary panel header hover (Albums, Artists, Categories, Request Line) */
.panel_header li:hover {
  color: #ccc;
}

/* Since stylebot adds !important to the panel_header hover, it will take precedence over the selected tab, so we need to reset it to disable the hover style for selected tabs. */
body.playlist_artist .panel_header .artist_tab,
body.playlist_group .panel_header .group_tab,
body.playlist_album .panel_header .album_tab,
body.playlist_request_line .panel_header .listener_tab {
  color: white;
}

/**********************************
 * REQUESTS
 **********************************/

.songlist_panel.warning {
  background-color: var(--extra-dark-red);
}

.song.cool {
  background-color: var(--dark-eggplant);
}

/**********************************
 * ALBUMS
 **********************************/

/* loading */
.searchlist_loading_bar {
  background-color: var(--dark-eggplant);
}

.album_list .item:not(.album_fave_highlight) {
  filter: var(--filter-green);
}

.album_list .item.cool {
  background-color: #202020;
  /* background-color: transparent; */
}
.album_list .item.cool.album_fave_highlight,
.album_has_cooldown,
.album_all_cooldown {
  background-color: var(--dark-eggplant);
}

div.list div.item.open {
  background-color: var(--purple);
}
/* undo filter on album_list */
div.list.album_list div.item.open {
  background-color: var(--ungreen-purple);
}
.list div.item.open.album_fave_highlight {
  background-color: var(--purple);
}

.list .item:hover {
  background-color: var(--mid-purple);
  border-color: #444;
  color: white;
}
.album_list .item:hover {
  background-color: var(--ungreen-mid-purple);
}

/* album detail */
.album_list .item.album_fave_highlight:hover {
  background-color: var(--mid-purple);
}
.chart_ratings {
  filter: var(--filter-green);
}
.chart_label {
  color: #000;
}
.row:hover,
/* original style of song_fave_highlight has !important, so increase the specificity to overwrite it */
body.desktop div.row.song_fave_highlight:hover {
  background-color: var(--dark-eggplant);
  border-color: #444;
}
.row.cool {
  background-color: #333;
  border-color: transparent;
}

/**********************************
 * SEARCH
 **********************************/

.search_panel button {
  background-color: var(--purple);
}

.search_box:focus-visible {
  outline-color: var(--purple);
}

/**********************************
 * PROFILE
 **********************************/

a.obvious,
a:visited.obvious {
  color: #999;
}
body a.obvious.obvious.obvious:hover {
  color: var(--green);
}

/* Donor */
span[style*='color: #FFFF00'] {
  color: var(--yellow);
  font-weight: bold;
}

/**********************************
 * SETTINGS
 **********************************/

/* "x" close link */
.modal_container .modal_close img {
  filter: brightness(0.22);
}

.setting_subheader {
  color: var(--orange);
  border-color: var(--orange);
}

.bkg,
.bottom_border {
  background-color: var(--green);
  color: black;
}

/* language and yes/no selection */
.multi_select span,
.yes_no_yes,
.yes_no_no {
  border-color: var(--purple);
}

/* language selection hover */
.multi_select span.link:hover {
  color: #ccc;
}

.yes_no_bar,
.floating_highlight {
  background-color: var(--purple);
}

.setting_group:hover {
  background-color: var(--dark-eggplant);
  border-color: var(--mid-purple);
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

.requester,
.request_indicator {
  background-color: var(--green);
}

.request_indicator,
.requester a {
  color: black;
}

.your_request {
  background-color: var(--orange);
}

.your_request,
.your_request a {
  color: black;
}

/* song hover */
.song.voting_enabled:not(.voting_registered):not(.voting_clicked):hover {
  background-color: var(--extra-dark-eggplant);
}

/* song link hover */
body .song .song_content a:hover {
  color: var(--green);
}

/* voting */
.song:not(.voting_registered) .song_highlight {
  background-color: var(--purple);
}
.song.voting_clicked {
  background-color: var(--dark-eggplant);
}

/* voted */
.song.voting_registered {
  background-color: var(--dark-eggplant);
}

/* favorite album */
/* applies to both playing songs and library songs */
.album_fave_highlight div.album a,
.song_fave_highlight div.title {
  color: var(--yellow);
}

/* favorite heart */
.fave_solid {
  filter: hue-rotate(-20deg) saturate(1.2);
}

/* external link icon */
a.url {
  filter: hue-rotate(30deg);
}

/* rating */
/* rotate the color of the rating gradient since we cannot change the url */
.rating.rating_user,
.rating.ratable:hover {
  filter: var(--filter-green);
}

.song_fave_highlight .rating {
  filter: none;
}

/* Lost song */
/* Shrink image. We cannot use transform: scale() since it already has a transform. */
.song_lost .art_container {
  height: 75px;
  width: 75px;
}

/* Lost songs (only visible when "Show Songs That List in Elections" setting is enabled) */
/* When opacity is set, it means that the image has been expanded, so we do not want to dim or shrink it. */
.song_lost:not([style*='opacity']) {
  /* Dim further to distinguish from active songs. Original: 0.6. */
  opacity: 0.3;
  height: 75px;
}

/* Lost songs */
/* Since the lost songs are in source order, we can only identify the second lost song by its translateY. */
.song_lost[style*='translateY(140px)'] {
  margin-top: 5px;
}
.song_lost[style*='translateY(241px)'] {
  margin-top: -18px;
}

/* Coming up - Vote Now (1) */
/* Shift up to compensate for smaller lost songs. Since .song_lost is not an ancestor, we have to select on the specific amount that the timelines are translated when lost songs are enabled. */
.timeline_event.sched_next[style*='translateY(431px);'] {
  transform: translateY(386px);
}
.timeline_event.sched_next[style*='translateY(778px);'] {
  transform: translateY(733px);
}

/* Coming Up - Vote Now (2) */
.progress[style*='translateY(354px);'] {
  transform: translateY(310px);
}

/* 
Static pages:
  - https://rainwave.cc/pages/playback_history 
  - https://rainwave.cc/api4/

There are no identifying classes or id on the body element, so match the negative.
*/
body:not(.desktop) h1 {
  color: var(--green);
  border-bottom-color: #999;
}

body:not(.desktop) a {
  color: var(--yellow);
}

body:not(.desktop) a:hover {
  background-color: inherit;
}

body:not(.desktop) th {
  background-color: var(--mid-purple);
}

body:not(.desktop) tr:hover td {
  background: var(--dark-eggplant);
}

body:not(.desktop) td {
  border-bottom-color: #444;
  max-width: 20em;
}

body:not(.desktop) pre {
  background-color: var(--dark-eggplant);
  border-color: var(--mid-purple);
}
```

<!-- TEMPLATE END: stylebot.css -->
