import React from 'react';

import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, isLoading, updateImage } = useGif();

  return (
    <div className="container">
      <h1>Random GIF</h1>

      <div className="container">
        {gif && !isLoading && <img src={gif} alt="Random GIF" width={300} />}

        {isLoading && <p>Loading...</p>}

        <button onClick={updateImage}>Click for new</button>
      </div>
    </div>
  );
};

export default Random;
