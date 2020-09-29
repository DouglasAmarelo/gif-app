import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const GIPHY_API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const [randomImageUrl, setRandomImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getApiData = async tag => {
    setIsLoading(true);
    const response = await fetch(`${GIPHY_API_URL}&tag=${tag}`);
    const { data } = await response.json();
    const imageSrc = data?.images?.downsized_medium?.url;

    return imageSrc;
  };

  const updateImage = async tag => {
    const newImage = await getApiData(tag);
    setRandomImageUrl(newImage);
    setIsLoading(false);
  };

  const handleClick = () => updateImage(tag);

  useEffect(() => {
    if (tag.length >= 3) {
      updateImage(tag);
    }
  }, [tag]);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>

      <div className="container">
        {randomImageUrl && !isLoading && (
          <img src={randomImageUrl} alt="Random GIF" width={300} />
        )}

        {isLoading && <p>Loading...</p>}

        <input type="text" value={tag} onChange={e => setTag(e.target.value)} />

        <button onClick={handleClick}>Click for new</button>
      </div>
    </div>
  );
};

export default Tag;
