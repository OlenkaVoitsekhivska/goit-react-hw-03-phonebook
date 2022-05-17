import ContactsItem from 'components/ContactsItem/ContactsItem';
import style from './ContactsList.module.css';
import PropTypes from 'prop-types';

function ContactsList({ list, onDeleteContact }) {
  return (
    <div className={style.contactsBox}>
      <h2>Contacts</h2>
      <ul>
        {list.map(({ id, name, number }) => {
          return (
            <ContactsItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

ContactsList.propTypes = {
  list:PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
