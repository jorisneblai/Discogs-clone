import React, { useState } from "react";

const API_URL = "https://api.discogs.com"
const CONSUMER_KEY = "KHhlkeAcCQiYpBeUtOVp";
const SECRET_KEY = "YKBpKkOZzbjDMWulsDbLlYYwFqcOGiQN";

export const useDiscogs = (props) => {
    const [data, setData] = useState(undefined);

    const getPublicData = (endPoint, page, perPage) => {
        const keyParams = `&key=${CONSUMER_KEY}&secret=${SECRET_KEY}`;
        fetch(`${API_URL}/${endPoint}/?page=${page}&perPage=${perPage}/${keyParams}`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => { setData(data) })
                .catch((error) => { console.error('Error:', error);
            });
    }

    return data;
}
