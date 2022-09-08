import React from 'react';

import './Pages.scss';

export default function Error({message='unknown error'}) {
  return (
    <div className='page'>
        <h1 className='error'>{message}</h1>
    </div>
  )
}