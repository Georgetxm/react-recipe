import React from 'react';
import { Card, Icon, Avatar, Row, Col} from 'antd';
const { Meta } = Card;

const Recipe = (props) => {
    return (
        // <div>
        //     <h1>{props.label}</h1>
        //     <p>{props.calories}</p>
        //     <img src={props.image} alt=""/>
        // </div>

        <Col span={8}>
            <Card
                hoverable
                cover={<img src={props.image} alt={props.label} />}
            >
                <Meta title={props.label} />
            </Card>
        </Col>


        // </div>
    )
};

export default Recipe
