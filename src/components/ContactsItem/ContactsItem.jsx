import style from './ContactsItem.module.css';
import PropTypes from 'prop-types';

function ContactsItem({ name, number, onDeleteContact }) {
  return (
    <li className={style.contactItem}>
      <p className={style.contName}>{name}</p>
      <p className={style.contNumber}>{number}</p>
      <button onClick={onDeleteContact} className={style.contBtn}>
        delete
      </button>
    </li>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
