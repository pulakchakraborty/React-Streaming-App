import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const home = () => {
    return(
        <div>
            <div>
                Home Page
            </div>
            <Link to="/about">About</Link>
        </div>
    );
};

const about = () => {
    return(
        <div>
            <div>About Page</div>
            <Link to="/">Home</Link>
        </div>
    );
};

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={home}></Route>
                    <Route path="/about" component={about}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
