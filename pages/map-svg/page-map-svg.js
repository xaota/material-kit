import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialMapSvg from '/material/components/map-svg/material-map-svg.js';
import MaterialButton from '/material/components/button/material-button.js';
import MaterialButtonBack from '/material/components/button-back/material-button-back.js';

const component = Component.meta(import.meta.url, 'page-map-svg');
/**
  *
  */
  class MapSvgPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const map = node.querySelector('material-map-svg');
      const path = './content/svg/';
      const basic = 'world';
      const history = [];

      map.store({src: path + basic + '.svg', current: basic}); // .init();

      map.addEventListener('select', e => {
        const current = map.store().current;
        history.push(current);

        const item = e.detail.path.getAttribute('title').toLowerCase().replace(/\s+/g, '-');
        console.log('select', item);
        map.store({src: path + item + '.svg', current: item}).init();
      });

      const back = node.querySelector('material-button-back');
      back.addEventListener('click', () => {
        const item = history.pop() || 'world';
        console.log('back', item, path + item + '.svg');
        map.store({src: path + item + '.svg', current: item}).init();
      });
      return this;
    }
  }

Component.define(component, MapSvgPage);

// #region [Private]

// #endregion
