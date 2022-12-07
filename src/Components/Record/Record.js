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
            <p className="record-title">{props.info.basic_information.title}</p>
            <span className="record-artist">{props.info.basic_information.artists.map(artist => {
                        for(artist of props.info.basic_information.artists) {
                            return artist.name;
                        }
                    })} </span>
            <span className="record-format"> - {props.info.basic_information.formats.map(format => {
                for(format of props.info.basic_information.formats) {
                    return format.name;
                }
            })}</span>
        </div>
    )
}

                
export default Record;
           
                
