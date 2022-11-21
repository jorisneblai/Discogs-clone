import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Record = (props) => {
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.info.basic_information.cover_image} alt="cover" />}
            >
                <Meta 
                    title={props.info.basic_information.title} 
                    description={props.info.basic_information.artists.map(artist => {
                        for(artist of props.info.basic_information.artists) {
                            console.log(artist.name);
                        }
                    })} 

                    />
            </Card>
        </div>
    )
}
                
export default Record;
           
