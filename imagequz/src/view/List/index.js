import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import list from './data';

import './style.scss';
function List(props){
    let goQuestion = function(id){
        props.history.push({
            pathname: '/questionList',
            state: {id}
        });
    };
    return(
        <Container fluid className="list-wrap">
            <Row className="list row">
                {
                    list.map((v, i)=>{
                        return (
                        <Col lg={2} md={3} sm={6} xs={12} className="li-item" key={v.name}>
                            <div className="li-inner" onClick={()=>{goQuestion(i)}}>
                                <div className="pic-box">
                                    <div className="pic" style={{backgroundImage:`url(${v.picture})`}}>
                                    </div>
                                </div>
                                <h4 className="tit">{v.name}</h4>
                            </div>
                        </Col>)
                    })

                }
            </Row>
        </Container>
    )
}
export default List;
