import React from 'react';

import '../App.scss';

export default function Error({message}) {
  return (
    <div className='error'>
        <h1>{message}</h1>
    </div>
  )
}