import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/tabs/material-tabs.js';
import '/material/components/tabs-item/material-tabs-item.js';

const component = Component.meta(import.meta.url, 'page-tabs');
/**
  *
  */
  class TabsPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, TabsPage);

// #region [Private]

// #endregion
