import React, { useEffect } from 'react';
import { useDiscogs } from '../../Utils/useDiscogs';
import Record from '../Record/Record';
import './RecordsIndex.css';

const RecordsIndex = (props) => {
    const [{ data, isLoading, isError }, getRecords] = useDiscogs('/users/jewice/collection/folders/0/releases', 1, 10);

    useEffect(() => {
        getRecords();
    }, [])

    return (
        <div className='recordsIndexContainer'>
            {  isLoading ?
                <div>Loading...</div>
            :
                data && data.releases && data.releases.map(recordInfo => 
                    <Record 
                        key={recordInfo.id} 
                        info={recordInfo}
                    />
                )
            }
        </div>
    )
}


export default RecordsIndex;