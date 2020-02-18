export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function parseJSON(response) {
    return response.json();
}

export function createFormData(response) {
    let urlEncodedData = "";
    const urlEncodedDataPairs = [];
    let name;
   
    for(name in response) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(response[name]));
    }
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
    return urlEncodedData;
}