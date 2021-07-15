import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

/**
 * useAxios It is a custom hook to manage calls to the API
 * @param  {String} url path to call the data
 * @return the requested data
 */
const useAxios = (url) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:3000/${url}`);
            if (response.status === 200) setData(response.data.data);
        })();
    }, [url]);
    return data;
};

useAxios.propTypes = {
    url: PropTypes.string.isRequired,
};

export default useAxios;
