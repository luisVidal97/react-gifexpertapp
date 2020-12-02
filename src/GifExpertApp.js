import React, { useState }  from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Landscape']);

    // const handleAdd = (e) =>{
    //     setCategories([...categories, 'one more']);
    //     // setCategories puede tener un callback donde el primer argumento
    //     // es el valor del estado anterior y el segundoo es nuevo estado
    //     // setCategories( cats => [...cats, 'HunterXHunter']);
    // }
    console.log("object")
    
    return ( 
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map( (category) => 
                    <GifGrid 
                        key={category}
                        category={category}/>
                    )
                }
            </ol>
        </> 
    );
}
 
export default GifExpertApp;