import { useEffect, useState } from 'react';
import UseRequest from './UseRequest';

const useFetch = ({ url }) => {

    const { get } = UseRequest({
        url: url,
    });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        get().then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);
    return {
        data,
        isLoading: loading
    };
};

export default useFetch;