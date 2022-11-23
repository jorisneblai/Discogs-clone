import React, { useEffect, useState } from "react";

const API_URL = "https://api.discogs.com"
const CONSUMER_KEY = "KHhlkeAcCQiYpBeUtOVp";
const SECRET_KEY = "YKBpKkOZzbjDMWulsDbLlYYwFqcOGiQN";

export const useDiscogs = (endPoint, page, perPage) => {
    const [data, setData] = useState();
    const [url, setUrl] = useState(
        `${API_URL}/${endPoint}?page=${page}&perPage=${perPage}&key=${CONSUMER_KEY}&secret=${SECRET_KEY}`,
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
    
            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
    
            setIsLoading(false);
        };
  
        fetchData();
    }, [url]);
  
    return [{ data, isLoading, isError }, setUrl];
}
