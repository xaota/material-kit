import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/caption/material-caption.js';

const component = Component.meta(import.meta.url, 'page-caption');
/**
  *
  */
  class CaptionPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, CaptionPage);

// #region [Private]

// #endregion
