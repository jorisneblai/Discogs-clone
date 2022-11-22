import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Record = (props) => {
    return (
        <div>
            <Card
                bordered={false}
                hoverable
                style={{
                    width: 240,
                    height: 350,
                }}
                cover={<img src={props.info.basic_information.cover_image} alt="cover" />}
            >
                <Meta 
                    title={props.info.basic_information.title} 
                    description={props.info.basic_information.artists.map(artist => {
                        for(artist of props.info.basic_information.artists) {
                            return artist.name;
                        }
                    })} 

                    />
            </Card>
        </div>
    )
}
                
export default Record;
           
