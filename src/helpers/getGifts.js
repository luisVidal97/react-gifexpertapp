export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=bXWKR0RQc2yTKo4yjjYZcBjwpijht9lv`;

    const response = await fetch( url );
    const {data} = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,

        }
    });
    return gifs;
}