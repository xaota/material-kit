import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/diagram-linear/material-diagram-linear.js';

const component = Component.meta(import.meta.url, 'page-diagram-linear');
/**
  *
  */
  class DiagramLinearPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(root) {
      const diagram = root.querySelector('material-diagram-linear');
      diagram.addEventListener('load', () => {
        diagram.store({
          series: {
            first: [2, 4, 5, 6, 7, 10, 7],
            second: [12, 1, 3, 4, 2, 11, 8, 3, 6]
          },
          color: {
            first: 'green',
            second: 'red'
          }
        });
        diagram.init();
      });

      return this;
    }
  }

Component.define(component, DiagramLinearPage);

// #region [Private]

// #endregion
