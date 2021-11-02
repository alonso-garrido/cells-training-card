/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

.content {
  padding: 15 15 30 5;
}

.margin {
  margin-left: 10px;
  margin-right: 15px;
  margin-bottom: 6px;
}

.img {
  height: 300px;
  width: 300px;
}

.card {
  width: 300px;
  background: white !important;
  flex-flow: column;
  box-shadow: 1px 1px 4px #c4c4c4;
}

.votes {
  font-weight: bold;
}

.preHeadline {
  color: #969696;
}

.headline {
  font-size: 1.5rem;
  font-weight: bold;
}

.paragraphTitle {
  font-weight: bold;
}

.paragraph {
  padding-top: 10px;
  padding-bottom: 10px;
}

.button {
  margin-left: 10px;
  font-weight: lighter;
  margin-top: 18px;
}

.icon {
  color: #1464A5;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
`;