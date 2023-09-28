const jobs = 
[
  {
    "label": "Software Developer",
    "value": "Software Developer",
    "location": [
      {
        "region": "Île-de-France",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 320 },
          { "id": 3, "experience": "5-10 years", "rate": 550 },
          { "id": 4, "experience": "10-15 years", "rate": 800 },
          { "id": 5, "experience": "15+ years", "rate": 1100 }
        ]
      },
      {
        "region": "Auvergne-Rhône-Alpes",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 160 },
          { "id": 2, "experience": "2-5 years", "rate": 310 },
          { "id": 3, "experience": "5-10 years", "rate": 530 },
          { "id": 4, "experience": "10-15 years", "rate": 750 },
          { "id": 5, "experience": "15+ years", "rate": 950 }
        ]
      },
      {
        "region": "Hauts-de-France",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Bourgogne-Franche-Comté",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Nouvelle-Aquitaine",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Bretagne",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Centre-Val de Loire",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Corse",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Grand Est",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Normandie",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Occitanie",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Pays de la Loire",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      },
      {
        "region": "Provence-Alpes-Côte d'Azur",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 150 },
          { "id": 2, "experience": "2-5 years", "rate": 300 },
          { "id": 3, "experience": "5-10 years", "rate": 500 },
          { "id": 4, "experience": "10-15 years", "rate": 700 },
          { "id": 5, "experience": "15+ years", "rate": 900 }
        ]
      }
    ]
  },
  {
    "label": "Systems Administrator",
    "value": "Systems Administrator",
    "location": [
      {
        "region": "Île-de-France",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 190 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 530 },
          { "id": 4, "experience": "10-15 years", "rate": 780 },
          { "id": 5, "experience": "15+ years", "rate": 890 }
        ]
      },
      {
        "region": "Auvergne-Rhône-Alpes",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Hauts-de-France",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Bourgogne-Franche-Comté",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Nouvelle-Aquitaine",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Bretagne",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Centre-Val de Loire",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Corse",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Grand Est",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Normandie",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Occitanie",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Pays de la Loire",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      },
      {
        "region": "Provence-Alpes-Côte d'Azur",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 170 },
          { "id": 2, "experience": "2-5 years", "rate": 340 },
          { "id": 3, "experience": "5-10 years", "rate": 510 },
          { "id": 4, "experience": "10-15 years", "rate": 680 },
          { "id": 5, "experience": "15+ years", "rate": 860 }
        ]
      }
    ]
  },
  {
    "label": "Data Scientist",
    "value": "Data Scientist",
    "location": [
      {
        "region": "Île-de-France",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 250 },
          { "id": 2, "experience": "2-5 years", "rate": 390 },
          { "id": 3, "experience": "5-10 years", "rate": 650 },
          { "id": 4, "experience": "10-15 years", "rate": 920 },
          { "id": 5, "experience": "15+ years", "rate": 1210 }
        ]
      },
      {
        "region": "Auvergne-Rhône-Alpes",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 185 },
          { "id": 2, "experience": "2-5 years", "rate": 365 },
          { "id": 3, "experience": "5-10 years", "rate": 605 },
          { "id": 4, "experience": "10-15 years", "rate": 845 },
          { "id": 5, "experience": "15+ years", "rate": 1085 }
        ]
      },
      {
        "region": "Hauts-de-France",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Bourgogne-Franche-Comté",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Nouvelle-Aquitaine",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Bretagne",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Centre-Val de Loire",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Corse",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Grand Est",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Normandie",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Occitanie",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Pays de la Loire",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      },
      {
        "region": "Provence-Alpes-Côte d'Azur",
        "rates": [
          { "id": 1, "experience": "0-2 years", "rate": 180 },
          { "id": 2, "experience": "2-5 years", "rate": 360 },
          { "id": 3, "experience": "5-10 years", "rate": 600 },
          { "id": 4, "experience": "10-15 years", "rate": 840 },
          { "id": 5, "experience": "15+ years", "rate": 1080 }
        ]
      }
    ]
  }
]

export default jobs
