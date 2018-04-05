import React from 'react';
import PopularRepos from './components/popularRepos.jsx';
import Developer from './components/developer.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import HomePage from './components/homePage';
import './App.css';

const App = () => (
    <BrowserRouter>
        <Grid columns="1" centered>
            <Grid.Row>
                <Switch>
                    <Route exact path="/popular" component={PopularRepos} />
                    <Route path="/developer" component={Developer} />
                    {/* when none of the above match, <NoMatch> will be rendered */}
                    {<Route component={HomePage}/>}
                </Switch>
            </Grid.Row>
        </Grid>
    </BrowserRouter>
);

export default App;
