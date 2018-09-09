import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

import '/material/components/tooltip/material-tooltip.js';
import '/material/components/button/material-button.js';
import '/material/components/paper/material-paper.js';

const component = Component.meta(import.meta.url, 'page-tooltip');
/**
  *
  */
  export default class TooltipPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, TooltipPage);

// #region [Private]

// #endregion
