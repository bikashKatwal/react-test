import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Fetch({url}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        let mounted = true;

        const loadData = async () => {
            const response = await axios.get(url);
            if (mounted) setData(response.data);
        };
        loadData();

        return () => {
            mounted = false;
        }
    }, [url]);

    return (
        <div>
            {!data && <span>Loading data... </span>}
            <ul>
                {data && data.map((post) => <li  key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default Fetch;