import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.discogs.com"
const CONSUMER_KEY = "KHhlkeAcCQiYpBeUtOVp";
const SECRET_KEY = "YKBpKkOZzbjDMWulsDbLlYYwFqcOGiQN";

export const useDiscogs = (endPoint, page, perPage) => {
    const [data, setData] = useState();
    const [url, setUrl] = useState(
        `${API_URL}/${endPoint}?page=${page}&perPage=${perPage}&key=${CONSUMER_KEY}&secret=${SECRET_KEY}`,
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios(url).then((result) => {
                    setData(result.data);
                    setIsLoading(false)
                })
            } catch (error) {
                setIsError(true);
            }
        };
  
        fetchData();
    }, [url]);
  
    return [{ data, isLoading, isError }, setUrl];
}
