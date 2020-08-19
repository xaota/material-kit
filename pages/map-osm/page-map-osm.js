import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialBlockquote from '/material/components/blockquote/material-blockquote.js';

import MaterialMapOSM from '/material/components/map-osm/material-map-osm.js';

const component = Component.meta(import.meta.url, 'page-map-osm');
/**
  *
  */
  class MapOsmPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const map = node.querySelector('material-map-osm');
      map.store({L: window.L});
    }
  }

Component.define(component, MapOsmPage);

// #region [Private]

// #endregion
