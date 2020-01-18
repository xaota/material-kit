import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialDivider from '/material/components/divider/material-divider.js';
import MaterialList from '/material/components/list/material-list.js';
import MaterialListItem from '/material/components/list-item/material-list-item.js';

const component = Component.meta(import.meta.url, 'page-divider');
/**
  *
  */
  class DividerPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, DividerPage);

// #region [Private]

// #endregion
