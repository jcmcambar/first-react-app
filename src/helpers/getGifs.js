export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oLFJ5B4xCF03jCN5nszF6WDSmnaZE1ZO`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(gif => {
        return ({
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        })
    })
    return gifs;
}