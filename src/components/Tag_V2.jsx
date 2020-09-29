import React, { useState } from 'react';

import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const { gif, isLoading, updateImage } = useGif(tag);

  const handleClick = () => updateImage(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>

      <div className="container">
        {gif && !isLoading && <img src={gif} alt="Random GIF" width={300} />}

        {isLoading && <p>Loading...</p>}

        <input type="text" value={tag} onChange={e => setTag(e.target.value)} />

        <button onClick={handleClick}>Click for new</button>
      </div>
    </div>
  );
};

export default Tag;
