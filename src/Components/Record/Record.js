import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import './Record.scss'

const { Meta } = Card;


const Record = (props) => {
    // const [modalOpen, setModalOpen] = useState(false);

    const discogsUrl = `https://www.discogs.com/fr/release/${props.info.basic_information.id}`;

    return (
        <div className='records-mosaic'>
            <img src={props.info.basic_information.cover_image} alt="cover" className="record-cover" />
        </div>
    )
}

                
export default Record;
           
                
