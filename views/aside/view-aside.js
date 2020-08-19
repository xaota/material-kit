import Component from '/material/script/Component.js'

import MaterialFieldset from '/material/components/fieldset/material-fieldset.js';
import MaterialList     from '/material/components/list/material-list.js';
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
      slot.addEventListener('slotchange', updateGroups);

      /** */
      function updateGroups() {
        const nodes = [...slot.assignedNodes()].filter(e => MaterialFieldset.is(e)); // without ...?
        nodes.forEach(updateGroup);
      }

      /** */
      function updateGroup(fieldset) {
        const links = [...fieldset.children];
        const list = new MaterialList();
        links.forEach(link => updateLink(list, link));
        fieldset.innerHTML = '';
        fieldset.appendChild(list);
      }

      /** */
      function updateLink(list, link) {
        const item = new MaterialListItem();
        item.appendChild(link);
        list.appendChild(item);
      }
      // slot.addEventListener('slotchange', () => {
      //   const list = content.querySelector('material-list');
      //   list.innerHTML = ''; // clear!
      //   const nodes = [...slot.assignedNodes()].filter(e => e.nodeName.toLowerCase() === 'a');
      //   nodes.forEach(node => {
      //     const item = new MaterialListItem();
      //     item.appendChild(node.cloneNode(true)); // !
      //     list.appendChild(item);
      //   });
      // });
    }
  }

Component.define(component, AsideView);

// #region [Private]

// #endregion
