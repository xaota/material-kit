import Component from '../../script/Component.js'
const element = 'view-source';

/**
  *
  */
  class SourceView extends Component {
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
      const slot = this.shadow.querySelector('slot');
      slot.addEventListener('slotchange', event => {
        this.source();
      });
      return this;
    }

  /** */
    source() {
      const slot = this.shadow.querySelector('slot');
      const code = source(0, ...slot.assignedNodes()).join('\n');
      const view = document.createElement('pre');
      view.classList.add('html');
      view.innerText = code;
      slot.parentNode.insertBefore(view, slot.nextSibling);
      window.hljs.highlightBlock(view);
      return this;
    }
  }

customElements.define(element, SourceView);

// #region [Private]
  /** */
    function source(deep = 0, ...nodes) {
      // return nodes.map(e => e.outerHTML).filter(e => e).join('\n');
      return []
        .concat(...nodes.map(node => node.tagName ? elementSource(node, deep) : elementValue(node, deep)))
        .filter(e => e.trim().length > 0);
    }

  /** */
    function elementSource(node, deep) {
      let open =  "<" + node.tagName.toLowerCase();
      for (var i = 0; i < node.attributes.length; i++) {
          var attrib = node.attributes[i];
          open += " " + attrib.name + "=\"" + attrib.value + "\"";
      }
      open += ">";
      const indent = new Array(deep * 2 + 1).join(' ');
      return [
        indent + open,
        ...source(deep + 1, ...node.childNodes),
        indent + "</" + node.tagName.toLowerCase() + ">"
      ]
    }

    /** */
      function elementValue(node, deep) {
        const value  = node.nodeValue.trim();
        const indent = new Array(deep * 2 + 1).join(' ');
        return indent + value;
      }
// #endregion
