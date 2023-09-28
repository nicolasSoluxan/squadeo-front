"use client"

import React, { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import styles from "./contactForm.module.css"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.userInputInfo}>
        <div className={styles.inputLine}>
          <div>
            <label htmlFor="lastName" className="screen-reader-only">
              Nom
            </label>
            <input type="text" id="lastName" name="lastName" placeholder="Nom" className={styles.input} value={formData.lastName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="firstName" className="screen-reader-only">
              Prénom
            </label>
            <input type="text" id="firstName" name="firstName" placeholder="Prénom" className={styles.input} value={formData.firstName} onChange={handleChange} />
          </div>
          
        </div>

        <div className={styles.inputLine}>
          <div>
            <label htmlFor="email" className="screen-reader-only">
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Email" className={styles.input} value={formData.email} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="telephone" className="screen-reader-only">
              Téléphone
            </label>
            <input type="tel" id="telephone" name="telephone" placeholder="Téléphone" className={styles.input} value={formData.telephone} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="screen-reader-only">
          Votre message
        </label>
        <textarea id="message" name="message" placeholder="Votre message" className={styles.message} value={formData.message} onChange={handleChange} />
      </div>

      <button type="submit" >Envoyer</button>
    </form>
  )
}

export default ContactForm
