import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lora:400,700|Titillium+Web:400,700');
    font-family: 'Titillium Web', Arial, Sans-Serif;
    font-size: ${(props) => props.theme.fontSizeBase};
  }

  * {
    box-sizing: border-box;
  }

  html,
  body, #root {
    position: relative;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.grey200};
  }

  a {
    text-decoration: none;
    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  }
  
  html,
  html a {
    -webkit-font-smoothing: antialiased !important;
  }
`;

export const ResetStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
:focus {
  outline: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type='search'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
textarea {
  overflow: auto;
  resize: vertical;
  vertical-align: top;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  max-width: 100%;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden] {
  display: none;
}
html {
  font-size: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -ms-text-size-adjust: 100%; /* 2 */
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  outline: 0;
}
img {
  border: 0; /* 1 */
  -ms-interpolation-mode: bicubic; /* 2 */
}
figure {
  margin: 0;
}
form {
  margin: 0;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0; /* 1 */
  *margin-left: -7px; /* 3 */
  padding: 0;
  white-space: normal; /* 2 */
}
button,
input,
select,
textarea {
  font-size: 100%; /* 1 */
  margin: 0; /* 2 */
  vertical-align: baseline; /* 3 */
  *vertical-align: middle; /* 3 */
}
button,
input {
  line-height: normal;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
  *overflow: visible; /* 4 */
}
button[disabled],
html input[disabled] {
  cursor: default;
}
input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box; /* 1 */
  *height: 13px; /* 3 */
  padding: 0; /* 2 */
  *width: 13px; /* 3 */
}
input[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto; /* 1 */
  vertical-align: top; /* 2 */
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
button,
input,
select,
textarea {
  color: #222;
}
::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}
img {
  vertical-align: middle;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
.chromeframe {
  background: #ccc;
  color: #000;
  margin: 0.2em 0;
  padding: 0.2em 0;
}
`;