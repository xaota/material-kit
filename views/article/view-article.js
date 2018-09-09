import Component from '/material/script/Component.js';

const component = Component.meta(import.meta.url, 'view-article');
/**
  *
  */
  class ArticleView extends Component {
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
  }

Component.define(component, ArticleView);

// #region [Private]
/** */
  function create(element, value) {
    element = document.createElement(element);
    element.innerText = value;
    return element;
  }
// #endregion
