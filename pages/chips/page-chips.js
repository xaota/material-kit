import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/chip/material-chip.js';

const component = Component.meta(import.meta.url, 'page-chips');
/**
  *
  */
  class ChipsPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, ChipsPage);

// #region [Private]

// #endregion
