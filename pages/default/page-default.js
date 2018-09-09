import Component from '/material/script/Component.js'
import '../../views/page/view-page.js';

const component = Component.meta(import.meta.url, 'page-default');
/** */
  export default class DefaultPage extends Component {
  /** */
    constructor() {
      super(component);
    }
  }

Component.define(component, DefaultPage);
