import React, { useState, useEffect } from 'react';
import { useDiscogs } from '../../Utils/useDiscogs';

const RecordsIndex = (props) => {
    const [records, setRecords] = useState();
    const data = useDiscogs('/users/jewice/collection/folders/0/releases', 1, 50);

    useEffect(() => {
        if (data) {
            setRecords(data);
        }
    }, [data])


    return (
        <div>
            {records && records.releases && records.releases.map(elm => elm.basic_information.title)}
        </div>
    )
}

export default RecordsIndex;