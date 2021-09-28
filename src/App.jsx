import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
    const [toggle, setToggle] = useState(false);
    function toggleMenu() {
        setToggle(!toggle);
    }
    return (
        <Router>
            <section className="container" style={{ overflow: toggle ? "hidden" : "unset" }}>
                <header>
                    <div className="logo">
                        <h1><Link to="/">👋 Pagnavath</Link></h1>
                    </div>
                    <ul className={toggle ? "menu show" : "menu"}>
                        <li onClick={toggleMenu}><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li onClick={toggleMenu}><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                        <li onClick={toggleMenu}><NavLink exact to="/projects" activeClassName="active">Projects</NavLink></li>
                        <li onClick={toggleMenu}><NavLink exact to="/services" activeClassName="active">Services</NavLink></li>
                        <li onClick={toggleMenu}><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                        <div className="close" onClick={toggleMenu}>
                            <p>×</p>
                        </div>
                    </ul>
                    <div className="bar" onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </section>
        </Router>
    )
}
export default App;