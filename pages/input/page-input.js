import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/input/material-input.js';
import '/material/components/input-count/material-input-count.js';
import '/material/components/input-color/material-input-color.js';
import '/material/components/textarea/material-textarea.js';

const component = Component.meta(import.meta.url, 'page-input');
/**
  *
  */
  class InputPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, InputPage);

// #region [Private]

// #endregion
