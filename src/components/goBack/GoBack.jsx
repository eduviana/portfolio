"use client";
import styles from "./goBack.module.css";
import Return from "../icons/Return";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <div className={styles.returnContainer} onClick={() => router.back()}>
      <Return />
      <span className={styles.returnTitle}>Volver</span>
    </div>
  );
};
export default GoBack;
