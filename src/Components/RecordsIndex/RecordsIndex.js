import React, { useEffect, useState } from 'react';
import { useDiscogs } from '../../Utils/useDiscogs';
import { Select } from 'antd';
import Record from '../Record/Record';
import './RecordsIndex.css';

const RecordsIndex = (props) => {
    const [{ data, isLoading, isError }, getRecords] = useDiscogs();
    const [sort, setSort] = useState("added")

    useEffect(() => {
        getRecords(
            {
                endpoint: '/users/jewice/collection/folders/0/releases', 
                page: 1, 
                perPage: 10, 
                sort: "added", 
                sortOrder: "desc"
            }
        );
    }, [])

    const handleSort = (value) => {
        getRecords(
            {
                endpoint: '/users/jewice/collection/folders/0/releases', 
                page: 1, 
                perPage: 10, 
                sort: value, 
                sortOrder: "desc"
            }
        );
    }

    return (
        <div className='recordsIndexWrapper'>
            <Select
                defaultValue={sort}
                style={{ width: "max-content" }}
                onChange={(value) => handleSort(value)}
                options={[
                    {
                        value: 'added',
                        label: 'Recently added',
                    },
                    {
                        value: 'random',
                        label: 'Random',
                    },
                ]}
            />
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
        </div>
    )
}


export default RecordsIndex;