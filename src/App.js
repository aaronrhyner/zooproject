import './App.css';
import MainComponent from "./pages/MainComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WaehrungsUmrechner from "./pages/components/names/WaehrungsUmrechner";
import NoPageFound from "./pages/components/NoPage/NoPage";
import Login from "./pages/components/login/Login";
import LoginPage from "./pages/components/login/Login";
import PhotoGallery from "./pages/components/Photo/PhotoGallery";
import RandomFotos from "./pages/components/RandomFotos/RandomFotos";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent/>}/>
                    <Route path="/rechner" element={<WaehrungsUmrechner/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/photos" element={<PhotoGallery/>}/>
                    <Route path="/random" element={<RandomFotos/>}/>
                    <Route path="*" element={<NoPageFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
