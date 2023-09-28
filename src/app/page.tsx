"use client"

import Image from "next/image"

import Calculator from "./components/calculator/calculator"
import styles from "./page.module.css"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Home() {

  const [firstRef, firstInView] = useInView({
    threshold: 0,
  })

  const [secondRef, secondInView] = useInView({
    threshold: 0,
  })

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: "30vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "30vw", transition: { duration: 0.8 } },
  }

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: "-30vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "-30vw", transition: { duration: 0.8 } },
  }

  return (
    <>
      <div className="heroContainer">
        <h1 className="heroTitle">La meilleure solution de portage en 2023 !</h1>
        <h3 id="simulator" className="heroSubtitle">
          Gérez votre activité <span className="underlined">simplement</span> et en un <span className="underlined">rien de temps</span>
        </h3>
        <Calculator />
      </div>
      <div className="section">
        <motion.div ref={firstRef} initial="hidden" animate={firstInView ? "visible" : "exit"} variants={leftVariants} className={styles.graphImage}>
          <Image src="/assets/illustrationgraph.png" width={0} height={0} sizes="100vw" className={styles.image} alt={"Squadeo portage graphique"} />
          <p className={styles.descriptionImage}>Phrase catchy sur le gain économique illustrée !</p>
        </motion.div>
        <motion.div ref={firstRef} initial="hidden" animate={firstInView ? "visible" : "exit"} variants={rightVariants} className={styles.textContentRight}>
          <h2>
            Accordez vous <span className="underlined">liberté et sécurité</span>
          </h2>
          <p style={{ marginBottom: "3rem" }}>
            Offrez-vous la flexibilité des travailleurs indépendants et bénéficiez de la protection du statut salarié. Le portage salariale vous offre le meilleur de chaque monde et vous libère de
            toute gestion administrative.
          </p>
          <Link href={"/avantages"} className="floatingButton">
            Avantages
          </Link>
        </motion.div>
      </div>
      <div className="section">
        <motion.div ref={secondRef} initial="hidden" animate={secondInView ? "visible" : "exit"} variants={leftVariants} className={styles.textContentLeft}>
          <h2>
            Une démarche <span className="underlined">simple</span> et rapide
          </h2>
          <p style={{ marginBottom: "3rem" }}>Inscrivez-vous en trois clics et retrouvez toutes les informations sur votre espace. Lorem Ipsum simplicité de la plateforme qui centralise les infos.</p>
          <Link href={"/solution"} className="floatingButton">
            Notre solution
          </Link>
          <Link href={"/simulateur"} className="floatingButton">
            Tester l&apos;outil Squadéo
          </Link>
        </motion.div>

        <motion.div ref={secondRef} initial="hidden" animate={secondInView ? "visible" : "exit"} variants={rightVariants} className={styles.animatedImage}>
          <Image src="/assets/screenshot-test.png" width={0} height={0} sizes="100vw" className={styles.image} alt={"Squadeo capture d'écran"} />
        </motion.div>
      </div>
    </>
  )
}
