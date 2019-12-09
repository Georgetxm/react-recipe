import React from 'react';
import { Card, Icon, Avatar, Row, Col} from 'antd';
const { Meta } = Card;

const Recipe = (props) => {
    return (
        <Col span={8}>
            <Card
                size="small"
                style={{borderRadius: "0.5em", alignContent: "center"}}
                hoverable
                cover={<img src={props.image} alt={props.label} style={{width:"50%", alignContent:"center", height:"auto", display: "block", marginLeft: "auto", marginRight: "auto"}}/>}
            >
                <Meta
                    title={props.label}
                    description={props.dietLabels}
                />
            </Card>
        </Col>
    )
};

export default Recipe
