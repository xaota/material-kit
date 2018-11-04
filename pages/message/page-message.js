import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/message/material-message.js';
import '/material/components/avatar/material-avatar.js';

const component = Component.meta(import.meta.url, 'page-message');
/**
  *
  */
  class MessagePage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, MessagePage);

// #region [Private]

// #endregion
