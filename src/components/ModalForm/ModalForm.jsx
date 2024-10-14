import styles from './modal.module.css'

export default function ModalForm({ monitors, setIsModalOpen }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submission");
        const {studentName, mentor } = e.target

        console.log("student name", studentName.value,"mentor name", mentor.value);

        setIsModalOpen(false);
    }
    return (
        <div className={styles.background}>
            <form onSubmit={handleSubmit} className={styles.modal}>
                <label htmlFor="studentName">
                    Student Name: &nbsp;&nbsp;
                    <input type="text" id="studentName" name="studentName" required />
                </label>
                <label htmlFor="">
                    Choose Mentor: &nbsp;&nbsp;
                    <select id="mentor" name="mentor">
                        {monitors.map((monitor) => (
                            <option key={monitor.id} value={monitor.name}>{monitor.name}</option>
                        ))}
                    </select>
                </label>

                <div className={styles.actions}>
                    <button type="submit">Submit</button>
                    <button onClick={() => setIsModalOpen(false)}>X</button>

                </div>
            </form>
        </div>
    )
}
