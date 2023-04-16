import React from 'react';


const Sresult = (props) => {
    const img = `https://source.unsplash.com/600x400/?${props.img}`
    return(
        <>
            <div className='flex justify-center mt-5'>
              <img src={img} alt='images'/>
            </div>
        </>
    )
}

export default Sresult;