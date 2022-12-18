import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";
import './Form.css'

function Form({datas, reload}) {

    // const [newData, setNewData] = useState();

    const [newName, setNewName] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');

    
    const onChangeName = (e) => {
        setNewName(e.target.value);
    }
    
    const onChangeTitle = (e) => {
        setNewTitle(e.target.value);
        
    }
    const onChangeText = (e) => {
        setNewText(e.target.value);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        // console.log(datas);
        if(newName === '' || newTitle === '' || newText === '') return;
        const newData = {
            id: datas[0].id + 1,
            createdAt: new Date().toLocaleDateString('ko-kr'),
            updatedAt: new Date().toLocaleDateString('ko-kr'),
            title: newTitle,
            url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
            author: newName,
            answer: null,
            bodyHTML: newText,
            avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4"
        }
        // setNewData({...newData});
        const url = `http://localhost:4000/discussions`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {'content-Type' : 'application/json'},
        //     body: JSON.stringify(newData)
        // })
        // .then(response => response.json())
        // .then(result => reload(result));

        axios.post(url, newData)
        .then(response => reload(response.data)); //axios 를 쓰면 결과값에 data를 붙여줘야 body를 가져올 수 있다.
        // console.log(newData);
        setNewName('');
        setNewTitle('');
        setNewText('');
    }

    return (
        <Fragment>
            <form action="" method="get" className="form">
                <div className="form__input--wrapper">
                    <div className="form__label--wrapper">
                        <label htmlFor="name">NAME</label>
                        <label htmlFor="name">TITLE</label>
                        <label htmlFor="story">CONTENTS</label>
                    </div>
                    <div className="form__box--wrapper">
                        <div className="form__input--name">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="input__box"
                                onChange={onChangeName}
                                value={newName}
                                required
                            />
                        </div>
                        <div className="form__input--title">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="input__box"
                                onChange={onChangeTitle}
                                value={newTitle}
                                required
                            />
                        </div>
                        <div className="form__textbox">
                            <textarea
                                id="story"
                                name="story"
                                className="input__box"
                                rows="3"
                                onChange={onChangeText}
                                value={newText}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="form__submit">
                    <input
                        type="submit"
                        value="SUBMIT"
                        id="submitBtn"
                        className="btn__submit"
                        onClick={handleButtonClick}
                    />
                </div>
            </form>
        </Fragment>
    );
}

export default Form;
