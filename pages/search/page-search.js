import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/search/material-search.js';
import '/material/components/search-drop/material-search-drop.js';

const component = Component.meta(import.meta.url, 'page-search');
/**
  *
  */
  class SearchPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, SearchPage);

// #region [Private]

// #endregion
