import { useContext, useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import styles from "./Header.module.css";
import { dataContext } from "../../store/contexts";
// import { useContext } from "react";
// import CartContext from "../../store/cart-context";

export default function Header({monitors}) {
  const { totalVotes } = useContext(dataContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.centered}>
      <h2>Class Monitor Vote</h2>
      <p>Total Vote: {totalVotes}</p>
      <button onClick={()=>setIsModalOpen(true)}>Add new vote</button>

      {isModalOpen && <ModalForm monitors={monitors} setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
}
