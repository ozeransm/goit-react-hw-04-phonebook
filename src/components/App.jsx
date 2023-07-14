import { useState } from "react";
import { Form } from "./Form";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts"
import { FindContact } from "./FindContact"
import css from './App.module.css'
import Notiflix from 'notiflix';

export const App = ()=>{
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');
  
  const addToContact = ({ name, number })=>{
    const flagName = contacts.filter((el)=>el.name===(name.trim())).length || !name.trim();
    if (flagName)Notiflix.Notify.failure('Dublicate name user')
    if (!flagName)setContacts(()=>{
        return [ ...contacts, {id: nanoid(), name, number}]
              
    })
  }

  const handlerFind = (e)=>{
    setFilter({
      filter: e.target.value,
    })
    
  }
  const handlerBtnDel = (data)=>{
    setContacts(()=>{
      const newArr = contacts.filter((obj)=>obj.id!==data)
      return [...newArr]
    })
    
  }

  return(
    <div className={css.common}>
      <h1>Phonebook</h1>
      <Form addToContact={addToContact}/>
      <h2>Contacts</h2>
      <FindContact handlerFind={handlerFind} />
      <Contacts data={contacts} formInpFilter={filter} handlerBtnDel={handlerBtnDel}/>
    </div>
  ); 
}
