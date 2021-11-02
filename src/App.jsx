import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="sections">
                <Intro />
                <Skills />
                <Portfolio />
                <Contact />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
