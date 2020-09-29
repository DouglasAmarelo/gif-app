import { useEffect, useState, useCallback } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const GIPHY_API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag = '') => {
  const [gif, setGif] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getApiData = async tag => {
    setIsLoading(true);
    const url = tag ? `${GIPHY_API_URL}&tag=${tag}` : GIPHY_API_URL;
    const response = await fetch(url);
    const { data } = await response.json();
    const imageSrc = data?.images?.downsized_medium?.url;

    return imageSrc;
  };

  const updateImage = useCallback(async tag => {
    const newImage = await getApiData(tag);
    await setGif(newImage);
    await setIsLoading(false);
  }, []);

  useEffect(() => {
    if (tag !== '' && tag.length <= 3) return;

    updateImage(tag);
  }, [tag, updateImage]);

  return {
    gif,
    isLoading,
    updateImage,
  };
};

export default useGif;
