import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
