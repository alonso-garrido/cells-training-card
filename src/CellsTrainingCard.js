import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsTrainingCard-styles.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@cells-components/coronita-icons';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-training-card></cells-training-card>
```

##styling-doc

@customElement cells-training-card
*/
export class CellsTrainingCard extends LitElement {
  static get is() {
    return 'cells-training-card';
  }

  static get properties() {
    return {
      image: { type: String },
      votes: { type: String },
      preHeadline: { type: String },
      headline: { type: String },
      paragraphTitle: { type: String },
      paragraph: { type: String },
      items: { type: Array },
      buttonName: { type: String }
    };
  }

  constructor() {
    super();
    this.image = "";
    this.votes = "";
    this.preHeadline = "";
    this.headline = "";
    this.paragraphTitle = "";
    this.paragraph = "";
    this.items = [];
    this.buttonName = ""
  }

  actionDetail() {
    this.dispatchEvent(
      new CustomEvent('action-selection-publish', {
        bubbles: true,
        composed: true,
        detail: {
          title: this.headline,
        },
      })
    );
  }
  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-training-card-shared-styles')
    ];
  }

  render() {
    return html`
          <div class="card">
            <div class="img"><img src="img/${this.image}" width="100%" height="100%"></div>
            <div class="content">
              <div class="votes margin">${this.votes} votes</div>
              <div class="preHeadline margin">${this.preHeadline}</div>
              <div class="headline margin">${this.headline}</div>
              <div class="paragraphTitle margin">${this.paragraphTitle}</div>
              <div class="paragraph margin">${this.paragraph}</div>
              <div class="margin">
                ${this.items.map((item) => html`
                <bbva-core-icon icon="coronita:bullet1" size="32" class="icon"></bbva-core-icon>
                ${item}
                `)}
              </div>
              <div>
                <bbva-web-button-default class="button" @click="${this.actionDetail}">
                  ${this.buttonName}
                </bbva-web-button-default>
              </div>
            </div>
          </div>
    `;
  }
}
