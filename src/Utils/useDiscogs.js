import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.discogs.com"
const CONSUMER_KEY = "KHhlkeAcCQiYpBeUtOVp";
const SECRET_KEY = "YKBpKkOZzbjDMWulsDbLlYYwFqcOGiQN";

export const useDiscogs = (endPoint, page, perPage, sort, sortOrder) => {
    const [data, setData] = useState();
    const [url, setUrl] = useState(`${API_URL}/${endPoint}?page=${page}&perPage=${perPage}&sort=${sort}&sort_order=${sortOrder}&key=${CONSUMER_KEY}&secret=${SECRET_KEY}`);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
        if (url) {
            let finalUrl = `${API_URL}/${url.endPoint}?page=${url.page}&perPage=${url.perPage}&sort=${url.sort}&sort_order=${url.sortOrder}&key=${CONSUMER_KEY}&secret=${SECRET_KEY}`
            const fetchData = async () => {
                try {
                    await axios(finalUrl).then((result) => {
                        setData(result.data);
                        setIsLoading(false)
                    })
                } catch (error) {
                    setIsError(true);
                }
            };
            
            fetchData();
        }
    }, [url]);
  
    return [{ data, isLoading, isError }, setUrl];
}
