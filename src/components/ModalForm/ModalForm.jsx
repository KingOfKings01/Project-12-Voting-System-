import PropTypes from 'prop-types'
import styles from './modalForm.module.css';
import { useContext } from 'react';
import { dataContext } from '../../store/contexts';

export default function ModalForm({ setIsModalOpen }) {
  const { monitors, addStudentsVote } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, mentorId } = e.target;
    addStudentsVote(parseInt(mentorId.value), studentName.value);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit} className={styles.modal}>

        <h2>Add New Vote</h2>

        <label htmlFor="studentName">
          Student Name:
          &nbsp;&nbsp;
          <input type="text" id="studentName" name="studentName" placeholder='Name' required />
        </label>

        <label htmlFor="mentorId">
          Choose Mentor:
          &nbsp;&nbsp;
          <select id="mentorId" name="mentorId" required>
            {monitors.map((monitor) => (
              <option key={monitor.id} value={monitor.id}>
                {monitor.name}
              </option>
            ))}
          </select>
        </label>

        <div className={styles.actions}>
          <button className={styles.submit} type="submit">Submit</button>
          <button className={styles.cancel} type="button" onClick={()=>setIsModalOpen(false)}>Cancel</button>
        </div>

      </form>

    </div>
  );
}

ModalForm.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired
}