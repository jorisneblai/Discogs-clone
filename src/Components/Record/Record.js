import React, { useState } from 'react';
import { Card } from 'antd';
import { Modal } from 'antd';
import './Record.css'

const { Meta } = Card;

const Record = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Card
                onClick={() => setModalOpen(true)}
                bordered={false}
                hoverable
                style={{
                    width: 240,
                    height: 350,
                }}
                cover={<img src={props.info.basic_information.cover_image} alt="cover" className="record-cover" />}
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
            <Modal
                title={props.info.basic_information.title}
                style={{
                    width: 500,
                    height: 500,
                    

                }}
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <img src={props.info.basic_information.cover_image} alt="cover" className="modal-record-cover" />
                <p className="modal-record-artist">
                    {props.info.basic_information.artists.map(artist => {
                        for(artist of props.info.basic_information.artists) {
                            return artist.name;
                        }
                    })} 
                </p>
                <p className="modal-record-genre">
                    {props.info.basic_information.genres}
                    <span> / {props.info.basic_information.styles}</span>
                </p>
                <p className="modal-record-year">
                    {props.info.basic_information.year}
                </p>
            </Modal>
        </div>
    )
}
                
export default Record;
           
                
