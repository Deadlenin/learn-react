import React, { Suspense }              from 'react';
import Header                           from "./components/header";
import { Route, Switch }                from "react-router-dom";
import Home                             from "./views/home";
import About                            from "./views/about";
import Test                             from './views/test';
import reducers                         from "./store/rootReduser";
import { applyMiddleware, createStore } from "redux";
import { Provider }                     from "react-redux";
import thunk                            from 'redux-thunk';



const Login = React.lazy( () => import('./views/login') );

function App(){
    let obj = {
        pr1: 'alex',
        pr2: 'joe',
        p3: 'nicolle'
        
    };
    const store = createStore(reducers,applyMiddleware(thunk))
    return (
        <div className={ "content" }>
            <Provider store={store}>
            <Header/>
            <div className="main-content">
                <Suspense fallback={ <div>Загрузка...</div> }>
                    <Switch>
                        <Route exact path="/" render={ ( props ) => <Home myProp={ obj } p={ props }/> }/>
                        <Route path="/about" render={ () =>     <About></About> }/>
                        <Route path="/my-test" render={ () => Test }/>
                        <Route path="/login" render={ () => Login }/>
                    </Switch>
                </Suspense>
            </div>
            </Provider>
        </div>
    );
}

export default App;
