import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/badge/material-badge.js';

const component = Component.meta(import.meta.url, 'page-badge');
/**
  *
  */
  class BadgePage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const root = node.querySelector('#demo');

      const badge = root.querySelector('material-badge'); // первый
      const inc = root.querySelector('#inc');
      const dec = root.querySelector('#dec');

      inc.addEventListener('click', () => badge.count = parseInt(badge.count || 0) + 1);
      dec.addEventListener('click', () => badge.count = parseInt(badge.count || 0) - 1);
    }
  }

Component.define(component, BadgePage);

// #region [Private]

// #endregion
