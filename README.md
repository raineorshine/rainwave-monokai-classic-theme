Theme for [rainwave](https://github.com/rmcauley/rainwave) based on [Monokai Classic](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode).

## Usage

1. Install the [stylebot](https://stylebot.dev/) browser extension.
2. Click the Stylebot extension icon and choose "Open Stylebot".
3. Copy the following styles:

```css
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

.menu,
.menu_wrapper, 
.menu_dropdown,
.menu_dropdown a,
.hamburger_icon,
#station_select a.station.selected_station, 
.background, 
.requester, 
.request_indicator, 
div.timeline div.song.voting_enabled:not(.voting_registered):not(.voting_clicked):hover 
div.vote_button {
  background: #B3E053;
}

.rating {
  color: #B3E053;
}

.rating.rating_user, .rating.ratable:hover {
  filter: hue-rotate(230deg) brightness(1.5) saturate(0.7);
}

.menu li:not(.requests_link) a {
  color: #333;
}

.m3u a:not(:last-child) {
  border-bottom: solid 1px #80ac20;
}
```