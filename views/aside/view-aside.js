import Component from '/material/script/Component.js'

import '/material/components/list/material-list.js'; // MaterialList
import MaterialListItem from '/material/components/list-item/material-list-item.js';

const component = Component.meta(import.meta.url, 'view-aside');
/**
  *
  */
  class AsideView extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(content) {
      this;
      const slot = content.querySelector('slot');
      slot.addEventListener('slotchange', () => {
        const list = content.querySelector('material-list');
        list.innerHTML = ''; // clear!
        const nodes = [...slot.assignedNodes()].filter(e => e.nodeName.toLowerCase() === 'a');
        nodes.forEach(node => {
          const item = new MaterialListItem();
          item.appendChild(node.cloneNode(true)); // !
          list.appendChild(item);
        });
      });
    }
  }

Component.define(component, AsideView);

// #region [Private]

// #endregion
