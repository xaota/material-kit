import Component from '/material/script/Component.js'
import '../../views/page/view-page.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';

const component = Component.meta(import.meta.url, 'page-default');
/** */
  export default class DefaultPage extends Component {
  /** */
    constructor() {
      super(component);
    }
  }

Component.define(component, DefaultPage);
