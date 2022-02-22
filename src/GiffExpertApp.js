import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GiffExpertApp = () => {

    const [categories, setCategories] = useState([])
    
     return (
        <>
            <h2>Searching Gif</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
              <ol>
                { 
                    categories.map(category=>{
                        return <GifGrid 
                        key={category}
                        category={category}
                        />
                    })
                }                   
            </ol>
        </>
    )

};
export default GiffExpertApp;