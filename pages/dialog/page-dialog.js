import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialDialog from '/material/components/dialog/material-dialog.js';
import MaterialText   from '/material/components/text/material-text.js';

const component = Component.meta(import.meta.url, 'page-dialog');
/**
  *
  */
  export default class DialogPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(content) {
      const root = content.querySelector('#show-dialog');

      const button = root.querySelector('material-button');
      button.addEventListener('click', showDialog);

      /** */
      async function showDialog() {
        const dialog = new MaterialDialog("Заголовок")
          .content(new MaterialText('какой-то текст'))
          .action('Закрыть', MaterialDialog.resolve('готово'))
          .action('Отмена',  MaterialDialog.reject('отмена'))
          .options({scroll: false});

        try {
          const resolve = await dialog.open();
          button.innerHTML = 'результат: ' + resolve;
        } catch (error) {
          button.innerHTML = 'результат: ' + error;
        } finally {
          dialog.close();
        }
      }

      return this;
    }
  }

Component.define(component, DialogPage);

// #region [Private]

// #endregion
