//FETCH FROM OMDB
export const getOmdb = async (baseUrl, auth, param, search, page) =>{
    let url;
    page !== null
    ? url = `${baseUrl}?apikey=${auth}&${param}=${search}&page=${page}`
    : url = `${baseUrl}?apikey=${auth}&${param}=${search}`
    let response = await fetch(url),
        result = await response.json(),
        data;
    page !== null
    ? data = {
        result : result.Search,
        total : result.totalResults
    }
    : data = result
    // console.log(url, data)
    return data
}
//FETCH
//GET
export const getData = async (baseUrl, field, id, filter, filterValue) => {
    let url;
    id===null
    ? filter===null? url=`${baseUrl}${field}/` : url=`${baseUrl}${field}/?${filter}=${filterValue}`
    : url=`${baseUrl}${field}/${id}`
    let response = await fetch(url),
        result = await response.json()
    // console.log(result)
    return result
}

//POST
export const postData = async (baseUrl, field, id, images, body) => {
    let url;
    let response;
    let imagesFile;
    images
    ? url = `${baseUrl}${field}/${id}/images`
    : url = `${baseUrl}${field}`
    if (images) {
        imagesFile = new FormData();
        imagesFile.append('multi-covers', body[0])
        response = await fetch(url, {
            method : 'POST',
            body : imagesFile,
            headers : new Headers({})
        })
    } else {
        response = await fetch(url, {
            method : 'POST',
            body : JSON.stringify(body),
            headers : new Headers({
                "Content-Type" : "application/json"
            })
        })
    }
    let result = await response.json()
    // console.log(result)
    return result
}