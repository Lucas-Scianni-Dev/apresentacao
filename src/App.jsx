import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"
import './App.css'

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
