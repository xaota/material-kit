import Component from '/material/script/Component.js'

const component = Component.meta(import.meta.url, 'view-page');
/** */
  export default class PageView extends Component {
  /** */
    constructor() {
      super(component);
    }

  /** */
    ready(content) {
      const root = content.querySelector('div.root');
      if (this.description) root.insertBefore(create('p', this.description), root.firstChild);
      if (this.hash) root.insertBefore(create('h2', '#' + this.hash), root.firstChild);
      if (this.caption) root.insertBefore(create('h1', this.caption), root.firstChild);
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
    get hash() {
      return this.getAttribute("hash");
    }

  /** */
    set hash(value = undefined) {
      value !== undefined
        ? this.setAttribute("hash", value)
        : this.removeAttribute("hash");
    }

  /** */
    get description() {
      return this.getAttribute("description");
    }

  /** */
    set description(value = undefined) {
      value !== undefined
        ? this.setAttribute("description", value)
        : this.removeAttribute("description");
    }
  }

Component.define(component, PageView);

// #region [Private]
  /** */
    function create(element, value) {
      element = document.createElement(element);
      element.innerText = value;
      return element;
    }
// #endregion
