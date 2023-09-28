"use client"

import styles from "./footer.module.css"
import ContactForm from "../contactForm/contactForm"
import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <>
      <div className={styles.contactFormContainer} id="contactForm">
        <div className={styles.contactText}>
          <h2>On en discute ?</h2>
          <p>Laissez-nous vos coordonnées, un membre de l&apos;équipe vous recontactera dans la journée !</p>
        </div>
        <ContactForm />
      </div>
      <div className={styles.curve}>
      <div className="custom-shape">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path fill='#fff' d="M1200,0V30c0,21.6,-291,91.46,-741,90.26,-445.39,3.6,-859,-88.3,-759,-110.26V0Z" className="shape-fill"></path>
    </svg>
</div>
<div className={styles.footer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src="/assets/logo-squadeo-white.png" width={0} height={0} sizes="100vw" className={styles.logoImage} alt={"Squadeo portage logo"} />
            </Link>
          </div>
          <div className={styles.footerContact}>
            <h5>Nous contacter</h5>
            <p className={styles.footerMenu}>
              <a href="tel:+3312345678" className={styles.footerMenu}>
                +33 12 34 56 78
              </a>
            </p>
            <p className={styles.footerMenu}>
              <a href="mailto:contact@squadeo.com" className={styles.footerMenu}>
                contact@squadeo.com
              </a>
            </p>
            <p className={styles.footerMenu}>
              27 rue Paul Montrochet <br /> 69002 LYON
            </p>
          </div>
          <div className={styles.footerLegals}>
            <h5>Mentions légales</h5>

            <p className={styles.footerMenu}>
              <Link href={"/cgu"} className={styles.footerMenu}>
                Conditions générales d&apos;utilisation
              </Link>
            </p>
            <p className={styles.footerMenu}>
              <Link href={"/cookies"} className={styles.footerMenu}>
                Utilisation de cookies
              </Link>
            </p>
            <p className={styles.footerMenu}>
              <Link href={"/personalData"} className={styles.footerMenu}>
                Traitement des données personnelles
              </Link>
            </p>
          </div>
          
        </div>
        
      </div>
        
    </>
  )
}

export default Footer
