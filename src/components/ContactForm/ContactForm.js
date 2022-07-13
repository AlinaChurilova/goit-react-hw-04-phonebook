import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const id = nanoid();

    const handleChange = (e) => {

    switch (e.target.name) {
      case 'name':
        setName(e.target.value); 
        break;
      
       case 'number':
        setNumber(e.target.value ); 
        break;
      
      default:
        return;
    }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, number); 
        setName('');
        setNumber('');
    }


    return (
        <form className={s.Form} onSubmit = {(e) => handleSubmit(e)}>
            <label className={s.Label} htmlFor={id}>
            Name 
                <input className={s.Input}
          type="text"
          value={name}
          onChange = {handleChange}

          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
           Charles de Batz de Castelmore d'Artagnan"
          required
                />
            </label>
                
            <label className={s.Label}>
            Number 
                <input className={s.Input}
            type="tel"
            value={number}
            onChange={handleChange}
                        
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
                />
            </label>
  
          <button className={s.Button} type='submit'>Add contact</button>
        </form> 

    )
}

ContactForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
