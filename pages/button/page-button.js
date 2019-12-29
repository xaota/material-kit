import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/button/material-button.js';
import '/material/components/button-back/material-button-back.js';
import '/material/components/button-icon/material-button-icon.js';
import '/material/components/button-tooltip/material-button-tooltip.js';
import '/material/components/button-tooltip-icon/material-button-tooltip-icon.js';


import '/material/components/button-upload/material-button-upload.js';
import '/material/components/button-upload-icon/material-button-upload-icon.js';
import '/material/components/button-upload-tooltip/material-button-upload-tooltip.js';
import '/material/components/button-upload-tooltip-icon/material-button-upload-tooltip-icon.js';

import '/material/components/icon/material-icon.js';

import MaterialButtonVoice from '/material/components/button-voice/material-button-voice.js';
import MaterialTextarea from '/material/components/textarea/material-textarea.js';

const component = Component.meta(import.meta.url, 'page-button');
/**
  *
  */
  class ButtonPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const root = node.querySelector('#voice-button-demo');

      const voice = root.querySelector('material-button-voice'); // первая кнопка
      const textarea = root.querySelector('material-textarea');

      voice.addEventListener('recognize', e => textarea.value = e.detail.text);

      return this;
    }
  }

Component.define(component, ButtonPage);

// #region [Private]

// #endregion
