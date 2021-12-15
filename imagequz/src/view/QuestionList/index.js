import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import quizzes from './data';
import './style.scss';

// console.log(quizzes)
function QuestionList(props){
    let getList = (props.location.state && props.location.state.id !== undefined) ? quizzes[props.location.state.id] : [];
    let [results, setResults] = useState({
        show: false,
        correct: 0,
        error: 0,
        score: 0
    });
    getList.forEach(v=>{
        v.sAnswer = '';
    });
    let goListPage = function(){
        props.history.push({
            pathname: '/list'
        });
    };
    let selectOption = function(v, item){
        item.sAnswer = v;

    }
    let submitAnswer = function(){
        let correct = getList.filter(v=>v.sAnswer == v.answer).length;
        let error = getList.length - correct;
        setResults({
            show: true,
            correct,
            error,
            score: correct * 10,
        })
    }
    return (
        <div className="question-list">
            <Form className="sign-form">
                <ul className="list-box">
                    {
                        getList.map((v, i)=>{
                            return <li className="li-item" key={v.answer}>
                                {/*<h5 className="answer">{v.answer}</h5>*/}
                                <div className="pic">
                                    <img src={v.picture} />
                                </div>
                                <Form.Group className="options-list">
                                    {
                                        v.choices.map((v_, i_)=>{
                                            return <Form.Check
                                                key={v_}
                                                name={`choices_${i}`}
                                                type="radio"
                                                label={v_}
                                                id={`choices_${i}_${i_}`}
                                                onChange={()=>{selectOption(v_, v)}}
                                            />
                                        })
                                    }
                                </Form.Group>
                            </li>
                        })
                    }
                </ul>
                {
                    results.show ?
                    <div className="results-box">
                        <h5>Congratulations on your answer，Total score：<span className="red">{getList.length * 10}</span></h5>
                        <div>Correct：<span className="green">{results.correct}</span></div>
                        <div>Error：<span className="red">{results.error}</span></div>
                        <div>Error：<span className="blue">{results.score}</span></div>
                    </div>
                    : ''
                }
                <div className="btn-box">
                    <Button variant="primary" onClick={submitAnswer}>confirm</Button>
                    <Button variant="danger" onClick={goListPage}>return</Button>
                </div>
            </Form>
        </div>
    )
}

export default QuestionList
