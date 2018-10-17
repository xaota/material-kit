import Component from '/material/script/Component.js';

const component = Component.meta(import.meta.url, 'view-source');
/**
  *
  */
  class SourceView extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(content) {
      const slot = content.querySelector('slot');
      slot.addEventListener('slotchange', event => {
        // this.sourcePrism(slot);
        this.sourceHLJS(slot);
      });
      return this;
    }

  /** */
    sourcePrism(slot) {
      const code = source(0, ...slot.assignedNodes()).join('\n');
      // const code = [...slot.assignedNodes()]
          // .map(c => c.outerHTML)
        // .filter(e => e && e.length)
        // .join('\n')
        // .split('\n')
        // .map(e => e.trim())
          // .join('\n');
      // const code = slot.outerHTML;
      // const value = window.hljs.fixMarkup(window.hljs.highlight('html', code));
      // const root = document.createElement('div');
      const pre = document.createElement('pre');
      const view = document.createElement('code');
      // pre.classList.
      pre.classList.add('line-numbers'); // 'html'
      // pre.style.whiteSpace = "pre-wrap";
      // view.classList.add('language-markup');
      // view.innerText = sanitizeHTML(code);
      view.textContent = code;
      // code.split('\n').map(e => {
        // const view = document.createElement('code');
        view.classList.add('language-markup');
        // view.innerText = e;
        pre.appendChild(view);
        // pre.appendChild(document.createTextNode('\n'));
        window.Prism.highlightElement(view) // highlightElement
      // })
      // console.log(value);
      // view.innerHTML = value.value;
      // pre.appendChild(view);
      // root.appendChild(pre);
      slot.parentNode.insertBefore(pre, slot.nextSibling);
      // window.hljs.highlightBlock(view);
      // console.log('prism', window.Prism);

      // window.Prism.plugins.NormalizeWhitespace.setDefaults({
      //   'remove-trailing': true,
      //   'remove-indent': true,
      //   'left-trim': true,
      //   'right-trim': true,
      //   // 'break-lines': 80,
      //   'indent': 2,
      //   'remove-initial-line-feed': true,
      //   'tabs-to-spaces': 2,
      //   // 'spaces-to-tabs': 4
      // });

      // const grammar = window.Prism.languages.markup;
      // const value = window.Prism.highlight(code, grammar) // highlightElement
      // console.log(value);
      // pre.innerHTML = value;
      // window.Prism.plugins.lineNumbers.getLine(pre);

      return this;
    }

  /** */
    sourceHLJS(slot) {
      this;
      const code = source(0, ...slot.assignedNodes()).join('\n');
      const view = document.createElement('pre');
      view.classList.add(this.getAttribute('lang') || 'html');
      view.textContent = code;
      if (window.hljs && window.hljs.highlightBlock) window.hljs.highlightBlock(view);
      slot.parentNode.insertBefore(view, slot.nextSibling);
    }
  }

Component.define(component, SourceView);

// #region [Private]
  /** */
    function source(deep = 0, ...nodes) {
      // return nodes.map(e => e.outerHTML).filter(e => e).join('\n');
      return []
        .concat(...nodes.map(node => node.tagName ? elementSource(node, deep) : elementValue(node, deep)))
        .filter(e => e.trim().length > 0);
        // .map(e => e.length+';' + e);
    }

  /** */
    function elementSource(node, deep) {
      const indent = new Array(deep * 2 + 1).join(' ');
      const html = node.outerHTML;
      if (!html.includes('\n')) return [indent + html];
      const tag = node.tagName.toLowerCase();
      let open =  "<" + tag;
      for (var i = 0; i < node.attributes.length; i++) {
          var attrib = node.attributes[i];
          open += " " + attrib.name + "=\"" + attrib.value + "\"";
      }
      open += ">";
      return [
        indent + open,
        ...source(deep + 1, ...node.childNodes),
        indent + "</" + tag + ">"
      ]
    }

    /** */
      function elementValue(node, deep) {
        const value  = node.nodeValue.trim();
        const indent = new Array(deep * 2 + 1).join(' ');
        return indent + value;
      }

  /** Sanitize and encode all HTML in a user-submitted string
    * @param  {String} str The user-submitted string
    * @return {String} The sanitized string
    * @copyright 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
    */
    function sanitizeHTML(str) {
      var temp = document.createElement('div');
      temp.textContent = str;
      return temp.innerHTML;
    }
// #endregion
