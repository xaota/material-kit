import Component from '/material/script/Component.js';

const component = Component.meta(import.meta.url, 'view-section');
/**
  *
  */
  export default class SectionView extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /**
    *
    */
    ready(content) {
      const root = content.querySelector('div.root');
      if (this.element) root.insertBefore(create('h4', this.element), root.firstChild);
      if (this.caption) root.insertBefore(create('h3', this.caption), root.firstChild);
    }

  /** */
    get caption() {
      return this.getAttribute("caption");
    }

  /** */
    set caption(value = undefined) {
      value !== undefined
        ? this.setAttribute("caption", value)
        : this.removeAttribute("caption");
    }

  /** */
    get element() {
      return this.getAttribute("element");
    }

  /** */
    set element(value = undefined) {
      value !== undefined
        ? this.setAttribute("element", value)
        : this.removeAttribute("element");
    }

  /** Является ли узел элементом {SectionView} @static
    * @param {HTMLElament} node проверяемый узел
    * @return {boolean} node instanceof SectionView
    */
    static is(node) {
      return Component.is(node, SectionView);
    }
  }

Component.define(component, SectionView);

// #region [Private]
/** */
  function create(element, value) {
    element = document.createElement(element);
    element.innerText = value;
    return element;
  }
// #endregion
