import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './index.css';

export default function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

  const onAddContact = ( name, number) => {
  
    const contact = {
      id: nanoid(),
      name,
      number,
    }
      setContacts(prevState => {
        const savedName = prevState && prevState.find(Cont => Cont.name === contact.name);
        if (savedName !== undefined) {
          alert(`${contact.name} is already in contacts!`);
          return prevState;
        } else {
          return [...prevState, contact];
        }
  })
  }

  const  onChangeFilter = e => {
    return setFilter(e.currentTarget.value);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
   
    return contacts && contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter))
};

  const onDeleteContact = id => 
     setContacts(prevState => 
     prevState.filter(contact => contact.id !== id)
    );
    
  const contact = getVisibleContacts();

  return (
      
    <div className='Container'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
         <h2>Contacts</h2>
         <Filter filter={filter} onFilter = {onChangeFilter}/>
         <ContactList contacts = {contact} onDelete = {onDeleteContact} />
       </div>
    )
}

