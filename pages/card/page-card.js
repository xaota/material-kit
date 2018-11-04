import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/card/material-card.js';
import '/material/components/figure/material-figure.js';
import '/material/components/button/material-button.js';
import '/material/components/caption/material-caption.js';
import '/material/components/text/material-text.js';
import '/material/components/icon/material-icon.js';

const component = Component.meta(import.meta.url, 'page-card');
/**
  *
  */
  class CardPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, CardPage);

// #region [Private]

// #endregion
