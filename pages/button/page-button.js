import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/button/material-button.js';

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
