//FETCH FROM OMDB
export const getOmdb = async (baseUrl, auth, param, search, page) =>{
    let url = `${baseUrl}?apikey=${auth}&${param}=${search}&page=${page}`,
        response = await fetch(url),
        result = await response.json(),
        data = result.Search
    console.log(data)
    return data
}
//FETCH
export const getData = async (baseUrl, field, id, filter, filterValue) => {
    let url;
    id===null
    ? filter===null? url=`${baseUrl}${field}/` : url=`${baseUrl}${field}/?${filter}=${filterValue}`
    : url=`${baseUrl}${field}/${id}`
    let response = await fetch(url),
        result = await response.json()
    console.log(result)
    return result
}