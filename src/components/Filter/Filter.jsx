import style from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <div className={style.filterBox}>
      <label htmlFor="filterInput" className={style.filterHeader}>
        Filter Contacts
        <input
          type="text"
          id="filterInput"
          onChange={onChange}
          value={filter}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
