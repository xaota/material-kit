import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/meter/material-meter.js';
import '/material/components/progress/material-progress.js';
import '/material/components/loader/material-loader.js';

const component = Component.meta(import.meta.url, 'page-loader');
/**
  *
  */
  class LoaderPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, LoaderPage);

// #region [Private]

// #endregion
