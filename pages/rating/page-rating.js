import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import MaterialRating from '/material/components/rating/material-rating.js';

import MaterialInputSlider from '/material/components/input-slider/material-input-slider.js';
import MaterialText from '/material/components/text/material-text.js';
import MaterialDialog from '/material/components/dialog/material-dialog.js';

const component = Component.meta(import.meta.url, 'page-rating');
/**
  *
  */
  class RatingPage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }

  /** */
    mount(root) {
      const button = root.querySelector('material-button');
      button.addEventListener('click', showDialog);

      /** */
      async function showDialog() {
        const counter = new MaterialInputSlider('Значение [0..5]');
        counter.min = 0;
        counter.max = 50;
        counter.style.width = '80%';
        counter.style.display = 'block';
        counter.style.margin = '0 auto';

        const text = new MaterialText('0');
        text.style.display = 'block';
        text.style.textAlign = 'center';
        text.style.marginTop = '24px';

        counter.addEventListener('input', _ => text.innerHTML = parseInt(counter.value) / 10);
        const fragment = document.createDocumentFragment();
        fragment.appendChild(counter);
        fragment.appendChild(text);

        const dialog = new MaterialDialog("Создание элемента рейтинга")
          .content(fragment)
          .action('Создать', () => dialog.resolve(counter.value / 10))
          .action('Отмена',  MaterialDialog.reject())
          .options({scroll: false});
        try {
          const value = await dialog.open();
          console.log(value);
          const rating = new MaterialRating(value);
          root.querySelector('#show-rating').appendChild(rating);
        } catch (error) {
          // ...
        } finally {
          dialog.close();
        }
      }
      return this;
    }
  }

Component.define(component, RatingPage);

// #region [Private]

// #endregion
