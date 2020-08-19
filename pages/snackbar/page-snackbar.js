import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialSnackbar from '/material/components/snackbar/material-snackbar.js';
import MaterialButton  from '/material/components/button/material-button.js';

const component = Component.meta(import.meta.url, 'page-snackbar');
/**
  *
  */
  class SnackbarPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(node) {
      const root = node.querySelector('#create-snackbar');

      const simple  = root.querySelector('#simple');
      const darken  = root.querySelector('#darken');
      const icon    = root.querySelector('#icon');
      const success = root.querySelector('#success');
      const info    = root.querySelector('#info');

      simple .addEventListener('click', () => createSnackbar(root, 'текст уведомления'));
      darken .addEventListener('click', () => createSnackbar(root, {mode: 'darken', label: 'текст уведомления'}));
      icon   .addEventListener('click', () => createSnackbar(root, {icon: 'chat', mode: 'lighten', label: 'вам новое сообщение'}));
      success.addEventListener('click', () => createSnackbar(root, {mode: 'success', label: 'загрузка успешно завершена'}));
      info   .addEventListener('click', () => createSnackbar(root, {icon: 'sync', mode: 'info', label: 'выполняется синхронизация'}));
    }
  }

Component.define(component, SnackbarPage);

// #region [Private]
/** */
  function createSnackbar(root, options = {icon, mode, label}) {
    const snackbar = new MaterialSnackbar(options);
    root.appendChild(snackbar);
  }
// #endregion
