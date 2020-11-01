import React, {useEffect} from "react";
import $ from "jquery";

export default function UrlDataFetcher({url, setData}) {
    useEffect(() => {
        setData(null);
        const xhr = $.getJSON(url)
            .done((data) => setData(data))
            .fail(setData(null));

        return function abort() {
            xhr.abort();
            setData(null);
        }
    }, [url]);

    return (<></>);
}