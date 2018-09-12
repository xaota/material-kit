import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/switch/material-switch.js';
import '/material/components/checkbox/material-checkbox.js';
import '/material/components/radio/material-radio.js';

const component = Component.meta(import.meta.url, 'page-toggle');
/**
  *
  */
  class TogglePage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, TogglePage);

// #region [Private]

// #endregion
