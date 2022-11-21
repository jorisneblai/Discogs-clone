import React from 'react';

const Record = (props) => {
    return (
        <div>
            {props.info.basic_information.title}
            <img src={props.info.basic_information.cover_image} alt="cover" />
        </div>
    )
}
                
export default Record;
           
