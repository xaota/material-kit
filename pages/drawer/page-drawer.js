import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/drawer/material-drawer.js';
import '/material/components/drawer-item/material-drawer-item.js';
import '/material/components/icon/material-icon.js';
import '/material/components/list/material-list.js';
import '/material/components/list-item/material-list-item.js';
import '/material/components/button-icon/material-button-icon.js';

const component = Component.meta(import.meta.url, 'page-drawer');
/**
  *
  */
  class DrawerPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, DrawerPage);

// #region [Private]

// #endregion
