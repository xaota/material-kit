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
import MaterialButtonSpeech from '/material/components/button-speech/material-button-speech.js';
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
      const root1 = node.querySelector('#voice-button-demo');

      const voice = root1.querySelector('material-button-voice'); // первая кнопка
      const output = root1.querySelector('material-textarea');

      voice.addEventListener('recognize', e => output.value = e.detail.text);

      const root2 = node.querySelector('#speech-button-demo');
      const speech = root2.querySelector('material-button-speech'); // первая кнопка
      const input = root2.querySelector('material-textarea');

      input.addEventListener('change', e => speech.value = input.value);
      speech.value = input.value; // !
      return this;
    }
  }

Component.define(component, ButtonPage);

// #region [Private]

// #endregion
