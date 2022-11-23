import React from 'react';
import { Card } from 'antd';
import './Record.css'

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
                cover={<img src={props.info.basic_information.cover_image} alt="cover" className="recordCover" />}
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
           
