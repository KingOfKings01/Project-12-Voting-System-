import { useContext, useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import styles from "./header.module.css";
import { dataContext } from "../../store/contexts";

export default function Header() {
  const { totalVotes } = useContext(dataContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.centered}>
      <div className={styles.card}>
        
        <h2>Class Monitor Vote</h2>
        <p>Total {totalVotes} Vote{totalVotes > 1 && "s"}</p>
        <button className={styles.add} onClick={() => setIsModalOpen(true)}>Add new vote</button>

        {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
      </div>
    </div>
  );
}
