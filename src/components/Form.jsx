import { FormBtn } from "./FormBtn"
import { useState } from "react"
import css from './Form.module.css'

export const Form = ({addToContact})=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handlerSubmit = (e)=>{
        e.preventDefault();
        setName('');
        setNumber('');
        addToContact({name, number});
    }

    const handlerInp = ({target:{name, value}})=>{
        switch (name){
            case 'name': setName(value);break;
            case 'number': setNumber(value);break;
            default: break;
        }

    }
    return(
        <form className={css.common} action="submit">
            <label htmlFor="name">
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handlerInp}
                    value={name}
                    required
                />
            </label>
            <label htmlFor="number">
                <span>Number</span> 
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handlerInp}
                    value={number}
                    required
                />
            </label>        
            <FormBtn handlerSubmit={handlerSubmit}/>
        </form> 
    )    
}

