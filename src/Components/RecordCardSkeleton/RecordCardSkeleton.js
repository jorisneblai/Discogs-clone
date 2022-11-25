import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecordCardSkeleton = (props) => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(
            <Skeleton 
                height= {357} 
                width= {240} 
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: 10
                }}
                
            />
        )
    }
    
    return (
       <div>
            {rows}
       </div>
       
        // <Skeleton 
        //     height= {357}
        //     width= {240}
        // />
    )
}

export default RecordCardSkeleton;