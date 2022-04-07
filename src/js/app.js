import '../css/app.css';

import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './canvas').then((module) => module.default());
