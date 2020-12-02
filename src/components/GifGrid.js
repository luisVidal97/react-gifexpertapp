import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // Only execute this when the component rendered itself by first time
    
//     const [images, setImages] = useState([]);
//     useEffect( ()=> {
//         getGifs(category)
//             .then( setImages );
// //            .then(imgs => setImages(imgs));
//     }, [category])

    console.log("corre de nuevo1: ",category )
    const {data:images, loading } = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        { loading && <p className="animate__animated animate__flash">Loading</p> }
        <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem key={img.id} {...img} />
                        ))
                    }
        </div>
        </>
    )
}
