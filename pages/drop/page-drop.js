import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/drop-root/material-drop-root.js';
import '/material/components/drop/material-drop.js';
import '/material/components/list/material-list.js';
import '/material/components/list-item/material-list-item.js';

const component = Component.meta(import.meta.url, 'page-drop');
/**
  *
  */
  export default class DropPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, DropPage);

// #region [Private]

// #endregion
