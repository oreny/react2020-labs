import  React, {useEffect, useState} from 'react';
import axios from 'axios';

function useRemoteData(url, deps) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
            const cancelTokenSource = axios.CancelToken.source();
            axios.get(url, {cancelToken: cancelTokenSource.token})
                .then(function handleResponse(response) {
                    setData(response.data);
                    setIsLoading(false);
                    console.log(response);
                }, function handleError() {
                    setIsError(true);
                    setIsLoading(false);
                });
            return () => cancelTokenSource.cancel();
        }, [...deps]);

    return [data, isLoading, isError];
}


export default function StarwarsCharacter(props) {
    const [id, setId] = useState(props.id);
    const [data, isLoading, error] = useRemoteData(`https://swapi.dev/api/people/${id}/`, [id]);

    if (error) {
        return <p className='error'>{error}</p>
    }

    if (isLoading) {
        return <p>Please wait, loading data...</p>
    }

    return (
        <div>
            <label>
                ID:
                <input value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <p>Character name: {data.name}</p>
        </div>
    );
}