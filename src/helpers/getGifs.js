const getGifs = async ( category ) => {

  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PAiEXDXa7xrkt50gTbJQHKmPIaTGq8DV&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs
  } catch (error) {
    throw new Error('No se pudo extraer los datos');
  }
  
};

export default getGifs;