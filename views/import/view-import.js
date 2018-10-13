import Component from '/material/script/Component.js';

const component = Component.meta(import.meta.url, 'view-import');
/**
  *
  */
  export default class ImportView extends Component {
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
        const root = content.querySelector('pre');
        root.innerHTML = ''; // clear!
        const text = [...slot.assignedNodes()]
          .map(e => e.textContent)
          .join('\n')
          .split('\n')
          .map(e => e.trim())
          .filter((e, i) => !(i == 0 && e.length === 0))
          .join('\n');

        root.appendChild(document.createTextNode(text));
        this.sourceHLJS(root);
      });
    }

  /** */
    sourceHLJS(root) {
      this;
      root.classList.add('javascript');
      if (window.hljs && window.hljs.highlightBlock) window.hljs.highlightBlock(root);
    }
  }

Component.define(component, ImportView);

// #region [Private]

// #endregion
