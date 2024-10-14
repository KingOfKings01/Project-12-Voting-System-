import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import styles from "./Header.module.css";
// import { useContext } from "react";
// import CartContext from "../../store/cart-context";

export default function Header({monitors}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.centered}>
      <h2>Class Monitor Vote</h2>
      <p>Total Vote: {0}</p>
      <button onClick={()=>setIsModalOpen(true)}>Add new vote</button>

      {isModalOpen && <ModalForm monitors={monitors} setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
}
