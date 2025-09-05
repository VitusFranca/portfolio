import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Dashboard from "./components/projetos/Dashboard";




function AppRoutes() {

    

    return (
 
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
        
    )
}

export default AppRoutes