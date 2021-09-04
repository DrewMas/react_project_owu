import { Route, Switch, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen((location) => {
    if ((window).ga) {
        (window).ga('set', 'page', location.pathname + location.search);
        (window).ga('send', 'pageview');
    }
});

export default history;
