import React from 'react';
import { Card, Icon, Avatar, Row, Col} from 'antd';
const { Meta } = Card;

const Recipe = (props) => {
    return (
        <Col span={8}>
            <Card
                hoverable
                cover={<img src={props.image} alt={props.label} />}
            >
                <Meta title={props.label} />
            </Card>
        </Col>
    )
};

export default Recipe
