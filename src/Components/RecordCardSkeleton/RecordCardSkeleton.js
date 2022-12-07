import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './RecordCardSkeleton.css';

const RecordCardSkeleton = (props) => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(
            <div style={{ paddingTop: "100px" }}>
                <Skeleton height= {240} width= {240} />
                <Skeleton height= {40} width= {240} />
                <Skeleton height= {40} width= {240} />
            </div>
        )
    }
    
    return (
       <div className="record-card-skeleton">
            {rows}
       </div>
       
        // <Skeleton 
        //     height= {357}
        //     width= {240}
        // />
    )
}

export default RecordCardSkeleton;