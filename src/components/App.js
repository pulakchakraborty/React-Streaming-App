import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const home = () => {
    return(
        <div>Home Page</div>
    );
};

const about = () => {
    return(
        <div>About Page</div>
    );
};

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={home}>Home Page</Route>
                    <Route path="/about" component={about}>About Page</Route>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
