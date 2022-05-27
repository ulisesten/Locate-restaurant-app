const placesUrl = 'https://www.mocky.io/v2/5bf3ce193100008900619966'

const getPlacesFromApiAsync = async (cb) => {
    try {
      const response = await fetch(placesUrl);
      
      const json = await response.json();

      cb(json);

    } catch (error) {
      console.error(error);
    }
  };

export {
    getPlacesFromApiAsync
}