import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './Form.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label htmlFor="">
          Name
          <input
            className={style.nameInput}
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            className={style.numberInput}
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={style.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  // props: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   number: PropTypes.string.isRequired,
  //   id: PropTypes.string.isRequired,
  //   onSubmit: PropTypes.func.isRequired
  // }),
  onSubmit: PropTypes.func.isRequired
};

export default Form;
