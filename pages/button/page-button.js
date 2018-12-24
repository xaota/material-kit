import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/button/material-button.js';
import '/material/components/button-back/material-button-back.js';
import '/material/components/button-icon/material-button-icon.js';
import '/material/components/button-tooltip/material-button-tooltip.js';
import '/material/components/button-tooltip-icon/material-button-tooltip-icon.js';

import '/material/components/icon/material-icon.js';

const component = Component.meta(import.meta.url, 'page-button');
/**
  *
  */
  class ButtonPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, ButtonPage);

// #region [Private]

// #endregion
