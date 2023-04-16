import React, { useState } from 'react';
import Header from './Header';
import Sresult from './Sresult';

const Search =() => {
    const [img,setImg] = useState()
    const [imgs,setImages] = useState(false)



    const onChange = (event) => {
        setImg(event.target.value)
        setImages(true)
    }

    return(
        <>
            <Header></Header>
            <div className='text-center mt-5'>
            <input type='text'
                value={img}
                placeholder='Search Anything'
                className='rounded p-5 mt-5' 
                style={{border:'2px solid black'}} 
                onChange={onChange}/>

            {imgs && <Sresult img={img} />} 
            </div>
        </>
    )
}

export default Search;