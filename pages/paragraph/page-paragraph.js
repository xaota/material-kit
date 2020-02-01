import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialParagraph from '/material/components/paragraph/material-paragraph.js';

const component = Component.meta(import.meta.url, 'page-paragraph');
/**
  *
  */
  class ParagraphPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const text = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ].join('\n');

      demo1(text, node.querySelector('#demo-1'));
      demo2(text, node.querySelector('#demo-2'));
    }
  }

Component.define(component, ParagraphPage);

// #region [Private]
/** */
  function demo1(text, root) {
    const payload = [
      {type: 'bold', offset: 18, length: 8},
      {type: 'italic', offset: 132, length: 15}
    ];

    const paragraph = root.querySelector('material-paragraph'); // изначально пустой
    paragraph.store({text, payload}).init();
  }

/** */
  function demo2(text, root) {
    const payload = [
      {type: 'bold', offset: 18, length: 8},
      {type: 'italic', offset: 132, length: 15},
      {type: 'underline', offset: 57, length: 32},
      {type: 'code', offset: 72, length: 17},
      {type: 'link', offset: 257, length: 13, href: '//ya.ru'},
    ];

    const paragraph = root.querySelector('material-paragraph'); // изначально пустой
    paragraph.store({text, payload}).init();
  }
// #endregion
