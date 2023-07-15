import { useEffect, useRef, useState } from "react";
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
  const firstLoad = useRef(true);

  useEffect(()=>{
    const con = localStorage.getItem('contacts');
    
    if (con && firstLoad.current){
      setContacts(JSON.parse(con));
    }
    firstLoad.current = false;
    if(!firstLoad.current)localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])
  

  

  const addToContact = ({ name, number })=>{
    const flagName = contacts.find((el)=>el.name===(name.trim())) || !name.trim();
    if (flagName)Notiflix.Notify.failure('Dublicate name user')
    if (!flagName)setContacts(()=>{
        return [ ...contacts, {id: nanoid(), name, number}]
              
    })
  }

  const handlerFind = (e)=>{
    setFilter(e.target.value)
    
  }
  const handlerBtnDel = (data)=>{
    setContacts(()=>{
      const newArr = contacts.filter((obj)=>obj.id!==data)
      return [...newArr]
    })
    
  }

  function filteredContacts(){
    return contacts.filter((el)=>el.name.toLowerCase().includes(filter));
       
  }

  return(
    <div className={css.common}>
      <h1>Phonebook</h1>
      <Form addToContact={addToContact}/>
      <h2>Contacts</h2>
      <FindContact handlerFind={handlerFind} />
      <Contacts data={filteredContacts()} handlerBtnDel={handlerBtnDel}/>
    </div>
  ); 
}
