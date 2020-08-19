import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialList from '/material/components/list/material-list.js';
import MaterialListItem from '/material/components/list-item/material-list-item.js';

import '/material/components/button/material-button.js';

const component = Component.meta(import.meta.url, 'page-list');
/**
  *
  */
  class ListPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const button = node.querySelector('material-button');
      button.addEventListener('click', createList);

      function createList() {
        const output = node.querySelector('output');
        const list   = new MaterialList();
        const array  = ['элемент 1', 'элемент 2', 'элемент 3', 'элемент 4', 'элемент 5'];
        array.forEach((item, index) => list.appendChild(new MaterialListItem(index, item)));
        output.appendChild(list);
      }
    }
  }

Component.define(component, ListPage);

// #region [Private]

// #endregion
