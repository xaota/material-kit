import Component from '/material/script/Component.js';

import '../../views/page/view-page.js';
import '../../views/section/view-section.js';
import '../../views/article/view-article.js';
import '../../views/source/view-source.js';
import '../../views/import/view-import.js';

import '/material/components/timeline/material-timeline.js';
import '/material/components/timeline-item/material-timeline-item.js';

import MaterialCard    from '/material/components/card/material-card.js';

// также на этой странице использованы
import MaterialFigure  from '/material/components/figure/material-figure.js';
import MaterialButton  from '/material/components/button/material-button.js';
import MaterialCaption from '/material/components/caption/material-caption.js';
import MaterialText    from '/material/components/text/material-text.js';
import MaterialIcon    from '/material/components/icon/material-icon.js';

const component = Component.meta(import.meta.url, 'page-timeline');
/**
  *
  */
  class TimelinePage extends Component {
  /**
    *
    */
    constructor() {
      super(component);
    }
  }

Component.define(component, TimelinePage);

// #region [Private]

// #endregion
