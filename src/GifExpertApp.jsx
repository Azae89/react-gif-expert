import {useState} from 'react'
import {AddCategory, GifGrid  } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon ball'])

    const onAddcategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
        
    }

  

    return (
    <>
       
        <h1>GifReachApp</h1>

        <AddCategory 
        onNewCategory={(value) => onAddcategory(value) }
        
        />

        
        {
            categories.map((category) => (
                    <GifGrid key={category} 
                            category={category} />
            ))
        }
    </>
    )
}
