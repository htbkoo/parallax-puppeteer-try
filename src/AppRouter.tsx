import * as React from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import App from "./App";

function reload() {
    return window.location.reload();
}

const AppRouter = () => (
    <Router>
        <div>
            <Route exact path="/parallax.html" onEnter={reload}/>
            <Route component={App}/>
        </div>
    </Router>
);

export default AppRouter;
