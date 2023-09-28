"use client"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React, { useCallback, useEffect, useState } from "react"


import styles from "./topMenu.module.css"


function TopMenu() {
const activeSegment = useSelectedLayoutSegment()
  
  const links = [
    {label: "Solution", path: "/solution", targetSegment: "solution"},
    {label: "Avantages", path: "/avantages", targetSegment: "avantages"},
  ]

  const [isScrolled, setScrolled] = useState(false)
  
  const handleScroll = useCallback(
  () => {
  const shrinkThreshold = 180
  const expandThreshold = 150
  if(window.scrollY > shrinkThreshold && !isScrolled) {
    setScrolled(true)
  } else if (window.scrollY < expandThreshold) {
    setScrolled(false)
  }
}, [isScrolled]) 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
}, [handleScroll])

  
  
  return (
    <header className={isScrolled ? styles.headerScrolled : styles.headerContainer}>
      <div className={styles.logoContainer}>
         <Link href="/">
   <Image  src="/assets/Squadeo-logo.png" width={0} height={0} sizes="100vw"  className={styles.logoImage} alt={"Squadeo portage logo"} />
   </Link>
      </div>
  <nav className={styles.menuContainer}>
    {links.map ( (l, i) => 
        <Link 
            className={activeSegment === l.targetSegment ? `${styles.link} ${styles.activeLink}` : styles.link}
            key={i}
            href={l.path}>
                {l.label}
        </Link>
      )}
  </nav>
    <div className={styles.buttonContainer}>
    <Link href={"/simulateur"} className={isScrolled ?  styles.secondaryButtonScrolled : "secondaryButton"} style={{marginRight: "1rem"}}>Simulez vos revenus</Link>
      <Link href={"#contactForm"} className={isScrolled ?  styles.mainButtonScrolled : "mainButton"} >Nous contacter</Link>
    </div>
    </header>
  )
}

export default TopMenu
