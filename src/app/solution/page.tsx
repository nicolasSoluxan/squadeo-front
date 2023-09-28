import Link from "next/link"
import styles from "./solution.module.css"

import advantages from "./advantages"

export default function Solution() {
  const highlightWords = (text: string): JSX.Element[] => {
    const parts = text.split("*")
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return (
          <span key={i} className={styles.highlightedWord}>
            {part}
          </span>
        )
      }
      return <>{part}</>
    })
  }

  const AdvantageSection: JSX.Element[] = advantages.map((advantage, index) => {
    return (
      <div key={index} className={styles.advantage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="29" viewBox="0 0 13 29" fill="none" className={styles.overlaySvg}>
          <path
            d="M4.42524 15.5357C5.27642 19.6786 1.94263 26.2381 0.169332 29C3.36123 26.9286 11.8731 19.6786 12.9371 15.5357C14.0011 11.3929 1.23331 0 0.169332 0C-0.894645 0 3.36126 10.3571 4.42524 15.5357Z"
            fill="#00D0FF"
          />
        </svg>
        <h3 className={styles.advantageTitle}>{highlightWords(advantage.title)}</h3>
        <p className={styles.advantageDescription}>{advantage.description}</p>
      </div>
    )
  })

  return (
    <>
      <div className="heroContainer">
        <h1 className="heroTitle">Découvrez la solution Squadeo</h1>
        <h3 id="simulator" className="heroSubtitle" style={{ marginBottom: "3rem" }}>
          Vous hésitez entre un statut de freelance et de salarié ? Optez pour le portage salarial ! <br /> Choisir Squadeo, c&apos;est conjuguer{" "}
          <span className="underlined">liberté, sécurité et simplicité.</span>
        </h3>
        <Link href={"/simulateur"} className="secondaryButton">
          Simuler mes revenus en un clic
        </Link>
      </div>
      <h2 style={{ textAlign: "center" }}>Qu&apos;est-ce que le portage salarial ?</h2>
      <div className="section">
        <div className={styles.processLine}>
          <h2 className={styles.processLineTitle}>Choisi tes clients et tes missions</h2>
          <p>Réalise la prestation chez le client sans te soucier du reste : concentre-toi seulement sur ce que tu aimes !</p>
        </div>
        <div className={styles.processLine}>
          <h2 className={styles.processLineTitle}>Profite du statut de salarié porté</h2>
          <p>Tu es engagé avec Squadéo par un contrat de travail qui te permet de bénéficier du régime général et de ses avantages.</p>
        </div>
        <div className={styles.processLine}>
          <h2 className={styles.processLineTitle}>Squadéo s&apos;occupe du reste !</h2>
          <p>Nous gérons le contrat de prestation et la facturation d&apos;honoraires au client afin d&apos;établir chaque mois ton bulletin de salaire.</p>
        </div>
      </div>
      <div className="section">
        <div className={styles.textContentLeft}>
          <h2>Un seul espace pour tous vos besoins</h2>
          <p>
            Retrouve tous les outils dont tu as besoin, sans fonctionnalités superflues. Tu peux trouver, éditer et télécharger tes documents dans un seul espace, et accéder à des actions intuitives
            pour piloter ton activité.
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>La solution la plus simple et efficace pour t&apos;accompagner dans ton quotidien.</h2>
      <div className={styles.advantageContainer}>{AdvantageSection}</div>
    </>
  )
}
