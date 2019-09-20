import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/chip/material-chip.js';
import '/material/components/chip-tooltip/material-chip-tooltip.js';

const component = Component.meta(import.meta.url, 'page-chips');
/**
  *
  */
  class ChipsPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const remove = node.querySelector('material-chip[action]');
      remove.addEventListener('action', e => console.log('action', e.detail, e));
      remove.addEventListener('click',  e => console.log('click', e));
      return this;
    }
  }

Component.define(component, ChipsPage);

// #region [Private]

// #endregion
