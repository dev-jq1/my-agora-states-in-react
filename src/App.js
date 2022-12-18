import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Discussions from "./pages/Discussions";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    let [datas, setDatas] = useState();
    const getData = () => {
        const url = `http://localhost:4000/discussions`;
        // return fetch(`${url}`,{
        //   method: "GET"
        // }).then((data) => data.json());
        return axios.get(url).then(result => {
            // console.log(result);
            return result.data;
        });
    };

    useEffect(() => {
        getData().then((data) => {
            setDatas(data);
        });
    }, []);

    return (
        <div className="App">
            <h1>My Agora States</h1>
            <div className="form__container">
                <Form datas = {datas} reload = {setDatas}/>
            </div>
            <div className="discussion__wrapper">
                <ul className="discussions__container">
                    <Discussions discussions={datas} />
                </ul>
                <div className="buttons"></div>
            </div>
        </div>
    );
}

export default App;
