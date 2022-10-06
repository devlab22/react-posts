import React from 'react';

export default function MyProgressBar({bgcolor, completed}) {

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10 
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

  return (
    <div style={containerStyles}>
        <div style={fillerStyles}>
        <span
            style={labelStyles} 
            role="progressbar" 
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={`${completed}`}          
            >{`${completed}%`}           
         </span>
        </div>
    </div>
  )
}
