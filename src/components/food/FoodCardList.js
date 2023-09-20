import axios from 'axios';
  
export const getPlacesData = async (type, sw, ne) => {
    try {
        //Destructure Data to Grab Restaurants
        const {data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng
            },
            headers: {
              'X-RapidAPI-Key': '672444eaf8msh8b507bd5de45338p1fdda4jsn1ef9821237db',
              'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
            }
          });

        return data;

    } catch(error) {
        console.log(error);
    }
}


export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/(type)/find', {
      params: {
        lon: lng,
        lat: lat,

      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEYW,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    });

    return data;

  } catch (error) {
    console.log(error);
  }
}


 
 
