import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/list/material-list.js';
import '/material/components/list-item/material-list-item.js';

const component = Component.meta(import.meta.url, 'page-list');
/**
  *
  */
  class ListPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, ListPage);

// #region [Private]

// #endregion
