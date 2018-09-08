import Component from '../../script/Component.js'
const element = 'view-article';

/**
  *
  */
  class ArticleView extends Component {
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

customElements.define(element, ArticleView);

// #region [Private]
/** */
  function create(element, value) {
    element = document.createElement(element);
    element.innerText = value;
    return element;
  }
// #endregion
