"use client"
import Link from "next/link"
import styles from "./calculator.module.css"
import { useState, useEffect } from "react"
import Select from "react-select"

import regions from "./regionList"
import jobs from "./jobList"
import autocompleteStyle from "./autocompleteStyle"
import ResultAnimation from "./resultAnimation"

import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { PieChart } from "./pieChart"
import ApexChart from "./apexPieChart"

Chart.register(CategoryScale)

function Calculator() {
  type Rate = {
    id: number;
    experience: string;
    rate: number;
  };

  type Location = {
    region: string;
    rates: Rate[];
  }

  type Job = {
    label: string;
    value: string;
    rates: Location[];
  };

  const [dailyRevenue, setDailyRevenue] = useState(400)
  const [yearlyRevenue, setYearlyRevenue] = useState(50000)
  const [numDays, setNumDays] = useState(23)
  const [dailyExpenses, setDailyExpenses] = useState(0)
  const [yearlyExpenses, setYearlyExpenses] = useState(0)

  
  const [portageYearlyRevenueToString, setPortageYearlyRevenueToString] = useState("0")
  const [portageMonthlyRevenueToString, setPortageMonthlyRevenueToString] = useState("0")

  const [isTJM, setIsTJM] = useState(true)

  const [employeeRevenue, setEmployeeRevenue] = useState(0)
  const [job, setJob] = useState(jobs[0])
  const [experience, setExperience] = useState(0)
  const [region, setRegion] = useState(regions[0].name)
  const [potentialTJM, setPotentialTJM] = useState(400)
  const [isRevenueHigher, setIsRevenueHigher] = useState(false)
  const [monthlyRevenueDifference, setMonthlyRevenueDifference] = useState(0)

  const [revenueSplit, setRevenueSplit] = useState([])

  useEffect(() => {
    const selectedJob = jobs.find((j) => j.label === job.label)
    const selectedRegion = selectedJob?.location.find((r) => r.region === region)


    const jobDailyRateCalc = (selectedRegion: Location | undefined | null, experience: number | null): number => {
      if (!selectedRegion || experience === null) {
        return 0
      }

      const experienceRanges = [
        { min: 0, max: 2 },
        { min: 2, max: 5 },
        { min: 5, max: 10 },
        { min: 10, max: 15 },
        { min: 15, max: Infinity },
      ]

      for (let i = 0; i < experienceRanges.length; i++) {
        const { min, max } = experienceRanges[i]
        if (experience >= min && experience < max) {
          return selectedRegion?.rates.find((rate) => rate.id === i + 1)?.rate || 0
        }
      }

      return 0
    }

    let newPotentialTJM = 0
    newPotentialTJM = jobDailyRateCalc(selectedRegion, experience) 

    setPotentialTJM(newPotentialTJM)
  }, [employeeRevenue, region, experience, job])

  useEffect(() => {
    setDailyRevenue(potentialTJM)
  }, [potentialTJM])

  useEffect(() => {
    const employerContributionRate = 0.32 //ratio issu du site admissions.fr
    const employeeContributionRate = 0.13 //ratio issu du site admissions.fr
    const managementFeeRate = 0.05 //ratio issu du site admissions.fr
    const brutToNetRate = 0.75 //ratio issu du site salaire-brut-en-net.fr pour un salarié cadre sur 12 mois


    let totalRevenue
    let totalExpenses
    let profit = 0
    let portageYearlyRevenue
    let portageMonthlyRevenue

    if (isTJM) {
      totalRevenue = dailyRevenue * numDays
      totalExpenses = dailyExpenses * numDays
      profit = totalRevenue - totalExpenses
      portageMonthlyRevenue = Math.round((totalRevenue * (1 - (employerContributionRate + employeeContributionRate + managementFeeRate))) - totalExpenses)
      portageYearlyRevenue = portageMonthlyRevenue * 12
    } else {
      profit = yearlyRevenue - yearlyExpenses
      portageYearlyRevenue = Math.round(profit * (1 - (employerContributionRate + employeeContributionRate + managementFeeRate)))
      portageMonthlyRevenue = Math.round(portageYearlyRevenue / 12)
    }

    let newMonthlyRevenueDifference = Math.round((portageYearlyRevenue - employeeRevenue * brutToNetRate)/12)
    setMonthlyRevenueDifference(newMonthlyRevenueDifference)

    if (portageYearlyRevenue > employeeRevenue*brutToNetRate) {
      setIsRevenueHigher(true)
    } else {
      setIsRevenueHigher(false)
    }

    // setRevenueSplit([portageYearlyRevenue, employerContribution, ])
    setPortageYearlyRevenueToString(portageYearlyRevenue.toLocaleString())
    setPortageMonthlyRevenueToString(portageMonthlyRevenue.toLocaleString())
  }, [potentialTJM, dailyRevenue, yearlyRevenue, numDays, dailyExpenses, yearlyExpenses, isTJM, employeeRevenue])



  const RegionList: JSX.Element[] = regions.map((region) => {
    return (
      <option key={region.id} value={region.name}>
        {region.name}
      </option>
    )
  })

const series = [10,65,67,45]
  

  // const [chartData, setChartData] = useState({
  //   labels: ["Revenu net optimisé", "Cotisations patronales / Convention collective / Statutaire", "Cotisations salariales", "Frais de gestion"],
  //   datasets: [
  //     {
  //       label: "revenu",
  //       data: [0, 0, 0, 0],
  //       backgroundColor: ["#E5236E", "#0A00A5", "#FFD828", "#00D0FF"],
  //       datalabels: {
  //         formatter: (value: number) => {
  //           return value + "%"
  //         }
  //       },
  //     },
  //   ],
  // })

  // useEffect(() => {
  //   setChartData((prevChartData) => ({
  //     ...prevChartData,
  //     datasets: [
  //       {
  //         ...prevChartData.datasets[0],
  //         data: [50, 32, 13, 5],
  //       },
  //     ],
  //   }))
  // }, [employeeRevenue])

  return (
    <div className={styles.simulator}>
      <div className={styles.calculatorContainer}>
        {/* <h3 className={styles.rangeCalculatorTitle}>Simulez vos revenus</h3> */}
        <div className={styles.rangeCalculatorContainer}>
          <div className={styles.cursors}>
            {isTJM ? (
              <div className={styles.rangeSelector}>
                <label htmlFor="dailyRevenue">
                  TJM /
                  <span style={{ color: "#D9D9D9", cursor: "pointer" }} onClick={() => setIsTJM(!isTJM)}>
                    CA annuel
                  </span>
                </label>
                <input type="range" value={dailyRevenue} id="dailyRevenue" min="250" max="2000" onChange={(e) => setDailyRevenue(Number(e.target.value))} />
                <div className={styles.valueContainer}>
                  <input type="text" className={styles.value} value={dailyRevenue} min="250" max="2000" onChange={(e) => setDailyRevenue(Number(e.target.value))} />
                  <span>€</span>
                </div>
              </div>
            ) : (
              <div className={styles.rangeSelector}>
                <label htmlFor="dailyRevenue">
                  <span style={{ color: "#D9D9D9", cursor: "pointer" }} onClick={() => setIsTJM(!isTJM)}>
                    TJM
                  </span>
                  / CA annuel
                </label>
                <input type="range" value={yearlyRevenue} id="dailyRevenue" min="5000" max="560000" onChange={(e) => setYearlyRevenue(Number(e.target.value))} />
                <div className={styles.valueContainer}>
                  <input type="text" className={styles.value} value={yearlyRevenue} min="5000" max="560000" onChange={(e) => setYearlyRevenue(Number(e.target.value))} />
                  <span>€</span>
                </div>
              </div>
            )}
            {isTJM && (
              <div className={styles.rangeSelector}>
                <label htmlFor="numDays">Jours travaillés/mois</label>
                <input type="range" value={numDays} id="numDays" min="1" max="31" onChange={(e) => setNumDays(Number(e.target.value))} />
                <div className={styles.valueContainer}>
                  <input type="text" className={styles.value} value={numDays} min="1" max="31" onChange={(e) => setNumDays(Number(e.target.value))} />
                  <span>jour{numDays > 1 && <span>s</span>}</span>
                </div>
              </div>
            )}
            {isTJM ? (
              <div className={styles.rangeSelector}>
                <label htmlFor="dailyExpenses">Frais professionnels/jour</label>
                <input type="range" value={dailyExpenses} min="0" max="500" onChange={(e) => setDailyExpenses(Number(e.target.value))} />
                <div className={styles.valueContainer}>
                  <input type="text" className={styles.value} value={dailyExpenses} min="0" max="500" onChange={(e) => setDailyExpenses(Number(e.target.value))} />
                  <span>€</span>
                </div>
              </div>
            ) : (
              <div className={styles.rangeSelector}>
                <label htmlFor="dailyExpenses">Frais professionnels/an</label>
                <input type="range" value={yearlyExpenses} min="0" max="500" onChange={(e) => setYearlyExpenses(Number(e.target.value))} />
                <div className={styles.valueContainer}>
                  <input type="text" className={styles.value} value={yearlyExpenses} min="0" max="5000" onChange={(e) => setYearlyExpenses(Number(e.target.value))} />
                  <span>€</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.calculatorResult}>
            <h4 style={{ fontSize: "1.5rem" }}>Revenus estimés</h4>
            <div>
              <ResultAnimation value={portageYearlyRevenueToString} period={"/an"} />
              <ResultAnimation value={portageMonthlyRevenueToString} period={"/mois"} />
            </div>
            {isRevenueHigher && employeeRevenue > 0 && <p>Soit <span>+{monthlyRevenueDifference}€/mois</span> par rapport à votre salaire actuel</p>}
          </div>
          <Link href={"/#contactForm"} className="floatingButton" style={{ backgroundColor: "#e5236e", margin: "2rem 0" }}>
            Démarrer mon aventure Squadeo
          </Link>
          <br />
          <Link href={"/"} style={{ textDecoration: "underline", marginTop: "2rem" }}>
            Recevoir ma simulation
          </Link>
        </div>

        <div className={styles.TJMContainer}>
          <h4 style={{ color: "#0a00a5" }}>À quel TJM je peux prétendre ?</h4>
          <label htmlFor="job">Métier actuel</label>
          <Select
            id="job"
            options={jobs}
            onChange={(e) => {
              if (e !== null) {
                setJob(e)
              }
            }}
            styles={autocompleteStyle}
            className="react-select-container"
            classNamePrefix="react-select"
          />
          <label htmlFor="experience">Expérience sur le poste</label>
          <div className={styles.inputDiv}>
            <input id="experience" type="number" value={experience} min="0" onChange={(e) => setExperience(Number(e.target.value))}></input>
            <span>an(s)</span>
          </div>
          <label htmlFor="region">Région</label>
          <select id="region" name="region" onChange={(e) => setRegion(e.target.value)}>
            {RegionList}
          </select>
          <label htmlFor="salary">Mon salaire brut annuel actuel</label>
          <div className={styles.inputDiv}>
            <input id="salary" type="number" value={employeeRevenue} min="0" onChange={(e) => setEmployeeRevenue(Number(e.target.value))}></input>
            <span>€</span>
          </div>
          <p style={{ textAlign: "center", marginTop: "3vw", color: "#0a00a5" }}>Mon TJM : {potentialTJM}€</p>
        </div>
      </div>
      {/* <div style={{background: "#EAD7D7", padding:"2vw" }}> */}
        {/* <PieChart chartData={chartData} /> */}
      {/* <ApexChart series={series} /> */}
      {/* </div> */}
      
    </div>
  )
}

export default Calculator
