import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Post() {

    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)
  return (
    <div>Post</div>
  )
}
