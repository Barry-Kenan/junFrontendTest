import React, {useEffect} from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    })
    if(!props.initialized){
        return <Preloader />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/add" element={<AddContact />}/>
                <Route path="/edit/:id" element={<EditContact/>}/>
            </Routes>
        </BrowserRouter>

    );
};


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps,{initializeApp})(App);

