import { useContext } from 'react';
import styles from './modal.module.css';
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
        <label htmlFor="studentName">
          Student Name: &nbsp;&nbsp;
          <input type="text" id="studentName" name="studentName" required />
        </label>
        <label htmlFor="mentorId">
          Choose Mentor: &nbsp;&nbsp;
          <select id="mentorId" name="mentorId" required>
            {monitors.map((monitor) => (
              <option key={monitor.id} value={monitor.id}>
                {monitor.name}
              </option>
            ))}
          </select>
        </label>
        <div className={styles.actions}>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setIsModalOpen(false)}>X</button>
        </div>
      </form>
    </div>
  );
}
