import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';




function AppRoutes() {

    

    return (
 
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
        
    )
}

export default AppRoutes