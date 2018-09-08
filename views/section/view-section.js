import Component from '../../script/Component.js'
const element = 'view-section';

/**
  *
  */
  class SectionView extends Component {
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
  }

customElements.define(element, SectionView);

// #region [Private]
/** */
  function create(element, value) {
    element = document.createElement(element);
    element.innerText = value;
    return element;
  }
// #endregion
