"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzgpajr");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setTimeout(() => {
      router.push("/");
    }, 4000);
  };

  return (
    <div className="container">
      <div className={styles.container}>
        {!state.succeeded && (
          <h1 className={styles.title}>
            {state.submitting
              ? "Enviando mensaje..."
              : "Contáctame"}
          </h1>
        )}

        {state.succeeded ? (
          <span className={styles.successMessage}>
            Mensaje enviado con éxito
          </span>
        ) : (
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <Image
                src="/contact.png"
                fill={true}
                alt=""
                className={styles.img}
              />
            </div>
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={styles.input}
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                className={styles.textArea}
                placeholder="Mensaje"
                cols="30"
                rows="10"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button text="Enviar" type="submit" disabled={state.submitting} />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default Contact;
