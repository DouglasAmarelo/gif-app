import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const GIPHY_API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Random = () => {
  const [randomImageUrl, setRandomImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getApiData = async () => {
    setIsLoading(true);
    const response = await fetch(GIPHY_API_URL);
    const { data } = await response.json();
    const imageSrc = data?.images?.downsized_medium?.url;

    return imageSrc;
  };

  const updateImage = async () => {
    const newImage = await getApiData();
    setRandomImageUrl(newImage);
    setIsLoading(false);
  };

  const handleClick = () => updateImage();

  useEffect(() => {
    updateImage();
  }, []);

  return (
    <div className="container">
      <h1>Random GIF</h1>

      <div className="container">
        {randomImageUrl && !isLoading && (
          <img src={randomImageUrl} alt="Random GIF" width={300} />
        )}

        {isLoading && <p>Loading...</p>}

        <button onClick={handleClick}>Click for new</button>
      </div>
    </div>
  );
};

export default Random;
