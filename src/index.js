import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

// import Home from './components/Home';
// import Products from './components/Products';
// import Contact from './components/Contact';
// import Faqs from './components/Faqs';

const Home = React.lazy(() => import('./components/Home'));
const Products = React.lazy(() => import('./components/Products'));
const Contact = React.lazy(() => import('./components/Contact'));
const Faqs = React.lazy(() => import('./components/Faqs'));

const Loading = () => {
    return (
        <div>Loading...</div>
    )
}

const AllRoutes = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/faqs" component={Faqs} />
        </Switch>
    );
}

const NavLinks = () => {
    const links = [
        { to: '/home', label: 'Home'},
        { to: '/products', label: 'Products'},
        { to: '/contact', label: 'Contact'},
        { to: '/faqs', label: 'FAQs'}
    ];
    return (
        <div>
            {links.map(link => (
                <span key={link.label}>
                    <NavLink to={link.to}>{link.label}</NavLink> {` `}
                </span>
            ))}
        </div>
    );
}

const App = () => {
    return (
        <React.Suspense fallback={<Loading/>}>
        <Router>
            <h1>Webpack rocks with BabelJs.</h1>
            <NavLinks/>
            <AllRoutes/>
        </Router>
        </React.Suspense>
    );
}

render(<App/>, document.getElementById('root'));