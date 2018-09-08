import Component from '../../script/Component.js'
import MaterialListItem from '/material/components/list-item/material-list-item.js';

const element = 'view-aside';

/**
  *
  */
  class AsideView extends Component {
  /**
    *
    */
    constructor() {
      super(element);
    }

  /**
    *
    */
    init() {
      const content = this.content;
    }

  /** */
    mount() {
      const shadow = this.shadow;
      const slot = shadow.querySelector('slot');
      slot.addEventListener('slotchange', () => {
        const list = shadow.querySelector('material-list');
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

customElements.define(element, AsideView);

// #region [Private]

// #endregion
