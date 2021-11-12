import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Contacto from "../components/Contact/Contact";
import Social from "../components/SocialNet/SocialNet";
import "./App.scss";
import { useState } from "react";

function App() {
    const [menuOpen, setmenuOpen] = useState(false);
    return (
        <div className="app">
            <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
            <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
            <div className="sections">
                <Intro />
                <Skills />
                <Portfolio />
                <Social />
                <Contacto />
            </div>
        </div>
    );
}

export default App;
