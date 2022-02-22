import useFetchGif from '../hooks/useFetchGifs';
import Gif from './Gif';

const GifGrid = ({ category }) => {

    
     const { data:images}= useFetchGif(category)
     

    return (
        <>
        <h3>{category}</h3>
        <div  className='card-grid animate__animated animate__fadeIn'>
          
                    {
                     images.map(img=>
                        <Gif 
                         key={img.id} 
                         { ...img }
                         />
                     ) 
                  }          
            
        </div>
        </>
    )
}


export default GifGrid;
