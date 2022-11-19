import React from 'react';
import { useDiscogs } from '../../Utils/useDiscogs';

const RecordsIndex = (props) => {
    const data = useDiscogs('/users/jewice/collection/folders/0/releases', 1, 50);
    return (
        <>
            RECORDS HERE and there
        </>
    )
}

export default RecordsIndex;