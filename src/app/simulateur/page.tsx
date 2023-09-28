import styles from "./simulateur.module.css"
import Calculator from "../components/calculator/calculator"

export default function Simulateur() {
  return (
    <div className="heroContainer">
      <h1 className="heroTitle">Simulation de salaire avec Squadeo</h1>
      <h3 id="simulator" className="heroSubtitle">
        Découvre ce que tu as à <span className="underlined">gagner</span>
      </h3>
      <Calculator />
    </div>
  )
}
