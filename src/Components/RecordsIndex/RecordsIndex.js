import React, { useState, useEffect } from 'react';
import { useDiscogs } from '../../Utils/useDiscogs';

const RecordsIndex = (props) => {
    const [records, setRecords] = useState();
    const data = useDiscogs('/users/jewice/collection/folders/0/releases', 1, 10);

    useEffect(() => {
        if (data) {
            setRecords(data);
        }
    }, [data])


    return (
        <div className='recordsIndexContainer'>
            {records && records.releases && records.releases.map(recordInfo => 

            )}
        </div>
    )
}

export default RecordsIndex;