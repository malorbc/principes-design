import '../css/app.css';

import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './canvas').then((module) => module.default());
import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './canvas2').then((module) => module.default());
