import React from "react";
import PropTypes from 'prop-types';
import s from './ContactList.module.css';


const ContactList = ({contacts, onDelete }) => (    
    <ul className={s.List} > 
       {contacts?.map(({id, name, number}) => (
       <li key ={id} className={s.ListItem} >        
         {name}: {number}
         <button className={s.BtnDelate} onClick={() => onDelete(id)} >Delete</button> 
         </li>
     ))}       
    </ul>
)
ContactList.propTypes = {
    contacts: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
  };
export default ContactList;