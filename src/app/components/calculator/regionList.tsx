type RegionInfo = {
    id:number;
    name: string;
    multiplier: number;
}

const regions: RegionInfo[] = [
    { id: 1, name: "Auvergne-Rhône-Alpes", multiplier: 1.3 },
    { id: 2, name: "Bourgogne-Franche-Comté", multiplier: 1 },
    { id: 3, name: "Bretagne", multiplier: 1 },
    { id: 4, name: "Centre-Val de Loire", multiplier: 1 },
    { id: 5, name: "Corse", multiplier: 1 },
    { id: 6, name: "Grand Est", multiplier: 1 },
    { id: 7, name: "Hauts-de-France", multiplier: 1 },
    { id: 8, name: "Île-de-France", multiplier: 1.5 },
    { id: 9, name: "Normandie", multiplier: 1 },
    { id: 10, name: "Nouvelle-Aquitaine", multiplier: 1 },
    { id: 11, name: "Occitanie", multiplier: 1 },
    { id: 12, name: "Pays de la Loire", multiplier: 1 },
    { id: 13, name: "Provence-Alpes-Côte d'Azur", multiplier: 1 }
]

export default regions
