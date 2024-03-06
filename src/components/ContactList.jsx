import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAsync } from './redux/contacts/contactsOperations';
import styles from './ContactList.module.css';

const ContactList = () => {
  const { items, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContactAsync(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
