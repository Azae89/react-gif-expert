import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('ONe Punch')

    const onInputChange = (event) =>{

        setInputValue(event.target.value)

    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<= 1) return;

        //setCategories(category =>[inputValue,...category]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={onSubmit}>
            <input

            placeholder="Buscar gif"
            type="text"
            value={inputValue}
            onChange={onInputChange}

            />

        </form>

        
    )
}
