import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/header/material-header.js';

const component = Component.meta(import.meta.url, 'page-header');
/**
  *
  */
  class HeaderPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, HeaderPage);

// #region [Private]

// #endregion
