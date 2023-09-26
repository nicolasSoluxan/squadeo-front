exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ calculator)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/app/components/calculator/calculator.module.css
var calculator_module = __webpack_require__(3313);
var calculator_module_default = /*#__PURE__*/__webpack_require__.n(calculator_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 52 modules
var react_select_esm = __webpack_require__(3832);
;// CONCATENATED MODULE: ./src/app/components/calculator/regionList.tsx
const regions = [
    {
        id: 1,
        name: "Auvergne-Rh\xf4ne-Alpes",
        multiplier: 1.3
    },
    {
        id: 2,
        name: "Bourgogne-Franche-Comt\xe9",
        multiplier: 1
    },
    {
        id: 3,
        name: "Bretagne",
        multiplier: 1
    },
    {
        id: 4,
        name: "Centre-Val de Loire",
        multiplier: 1
    },
    {
        id: 5,
        name: "Corse",
        multiplier: 1
    },
    {
        id: 6,
        name: "Grand Est",
        multiplier: 1
    },
    {
        id: 7,
        name: "Hauts-de-France",
        multiplier: 1
    },
    {
        id: 8,
        name: "\xcele-de-France",
        multiplier: 1.5
    },
    {
        id: 9,
        name: "Normandie",
        multiplier: 1
    },
    {
        id: 10,
        name: "Nouvelle-Aquitaine",
        multiplier: 1
    },
    {
        id: 11,
        name: "Occitanie",
        multiplier: 1
    },
    {
        id: 12,
        name: "Pays de la Loire",
        multiplier: 1
    },
    {
        id: 13,
        name: "Provence-Alpes-C\xf4te d'Azur",
        multiplier: 1
    }
];
/* harmony default export */ const regionList = (regions);

;// CONCATENATED MODULE: ./src/app/components/calculator/jobList.tsx
const jobs = [
    {
        "label": "Software Developer",
        "value": "Software Developer",
        "rates": [
            {
                "id": 1,
                "experience": "0-2 years",
                "rate": 150
            },
            {
                "id": 2,
                "experience": "2-5 years",
                "rate": 300
            },
            {
                "id": 3,
                "experience": "5-10 years",
                "rate": 500
            },
            {
                "id": 4,
                "experience": "10-15 years",
                "rate": 700
            },
            {
                "id": 5,
                "experience": "15+ years",
                "rate": 900
            }
        ]
    },
    {
        "label": "Systems Administrator",
        "value": "Systems Administrator",
        "rates": [
            {
                "id": 1,
                "experience": "0-2 years",
                "rate": 135
            },
            {
                "id": 2,
                "experience": "2-5 years",
                "rate": 270
            },
            {
                "id": 3,
                "experience": "5-10 years",
                "rate": 450
            },
            {
                "id": 4,
                "experience": "10-15 years",
                "rate": 630
            },
            {
                "id": 5,
                "experience": "15+ years",
                "rate": 810
            }
        ]
    },
    {
        "label": "Data Scientist",
        "value": "Data Scientist",
        "rates": [
            {
                "id": 1,
                "experience": "0-2 years",
                "rate": 180
            },
            {
                "id": 2,
                "experience": "2-5 years",
                "rate": 360
            },
            {
                "id": 3,
                "experience": "5-10 years",
                "rate": 600
            },
            {
                "id": 4,
                "experience": "10-15 years",
                "rate": 840
            },
            {
                "id": 5,
                "experience": "15+ years",
                "rate": 1080
            }
        ]
    },
    {
        "label": "UX/UI Designer",
        "value": "UX/UI Designer",
        "rates": [
            {
                "id": 1,
                "experience": "0-2 years",
                "rate": 160
            },
            {
                "id": 2,
                "experience": "2-5 years",
                "rate": 320
            },
            {
                "id": 3,
                "experience": "5-10 years",
                "rate": 510
            },
            {
                "id": 4,
                "experience": "10-15 years",
                "rate": 680
            },
            {
                "id": 5,
                "experience": "15+ years",
                "rate": 860
            }
        ]
    },
    {
        "label": "DevOps Engineer",
        "value": "DevOps Engineer",
        "rates": [
            {
                "id": 1,
                "experience": "0-2 years",
                "rate": 170
            },
            {
                "id": 2,
                "experience": "2-5 years",
                "rate": 340
            },
            {
                "id": 3,
                "experience": "5-10 years",
                "rate": 530
            },
            {
                "id": 4,
                "experience": "10-15 years",
                "rate": 710
            },
            {
                "id": 5,
                "experience": "15+ years",
                "rate": 900
            }
        ]
    },
    {
        "label": "IT Project Manager",
        "value": "IT Project Manager",
        "rates": [
            {
                "id": 1,
                "experience": "0-2 years",
                "rate": 200
            },
            {
                "id": 2,
                "experience": "2-5 years",
                "rate": 375
            },
            {
                "id": 3,
                "experience": "5-10 years",
                "rate": 575
            },
            {
                "id": 4,
                "experience": "10-15 years",
                "rate": 750
            },
            {
                "id": 5,
                "experience": "15+ years",
                "rate": 950
            }
        ]
    }
];
/* harmony default export */ const jobList = (jobs);

;// CONCATENATED MODULE: ./src/app/components/calculator/autocompleteStyle.tsx
const autocompleteStyle = {
    control: (provided, state)=>({
            ...provided,
            background: "#f5f5f5",
            width: "100%",
            borderRadius: "50px",
            margin: "0",
            padding: "0",
            outline: "none",
            border: "none"
        })
};
/* harmony default export */ const calculator_autocompleteStyle = (autocompleteStyle);

// EXTERNAL MODULE: ./src/app/components/calculator/resultAnimation.module.css
var resultAnimation_module = __webpack_require__(540);
var resultAnimation_module_default = /*#__PURE__*/__webpack_require__.n(resultAnimation_module);
;// CONCATENATED MODULE: ./src/app/components/calculator/resultAnimation.tsx



const ResultAnimation = ({ value, period })=>{
    const [bounce, setBounce] = (0,react_.useState)(false);
    const prevValueRef = (0,react_.useRef)(undefined);
    (0,react_.useEffect)(()=>{
        if (prevValueRef.current !== undefined && prevValueRef.current !== value) {
            setBounce(true);
            const timer = setTimeout(()=>{
                setBounce(false);
            }, 700);
            return ()=>{
                clearTimeout(timer);
            };
        }
        prevValueRef.current = value;
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        className: `${(resultAnimation_module_default()).finalValue} ${bounce ? (resultAnimation_module_default()).bounce : ""}`,
        children: [
            value,
            "€",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    fontWeight: "400",
                    fontSize: "1.5rem"
                },
                children: period
            })
        ]
    });
};
/* harmony default export */ const resultAnimation = (ResultAnimation);

// EXTERNAL MODULE: ./node_modules/chart.js/auto/auto.js
var auto = __webpack_require__(978);
// EXTERNAL MODULE: ./node_modules/chart.js/dist/chart.js + 2 modules
var chart = __webpack_require__(9127);
// EXTERNAL MODULE: ./node_modules/react-chartjs-2/dist/index.js
var dist = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js
var chartjs_plugin_datalabels = __webpack_require__(6712);
var chartjs_plugin_datalabels_default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels);
;// CONCATENATED MODULE: ./src/app/components/calculator/pieChart.tsx




chart/* Chart */.kL.register((chartjs_plugin_datalabels_default()));
chart/* Chart */.kL.defaults.set("plugins.datalabels", {
    color: "#FE777B",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    align: "end",
    offset: 10
});
const PieChart = ({ chartData })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            width: "100%",
            height: "20vw",
            marginTop: "5vw"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* Pie */.by, {
            data: chartData,
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "R\xe9partition de votre chiffre d'affaire"
                    },
                    legend: {
                        display: true
                    }
                }
            }
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/calculator/calculator.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











auto/* default */.ZP.register(chart/* CategoryScale */.uw);
function Calculator() {
    const [dailyRevenue, setDailyRevenue] = (0,react_.useState)(400);
    const [yearlyRevenue, setYearlyRevenue] = (0,react_.useState)(50000);
    const [numDays, setNumDays] = (0,react_.useState)(23);
    const [dailyExpenses, setDailyExpenses] = (0,react_.useState)(0);
    const [yearlyExpenses, setYearlyExpenses] = (0,react_.useState)(0);
    const [portageYearlyRevenueToString, setPortageYearlyRevenueToString] = (0,react_.useState)("0");
    const [portageMonthlyRevenueToString, setPortageMonthlyRevenueToString] = (0,react_.useState)("0");
    const [isTJM, setIsTJM] = (0,react_.useState)(true);
    const [employeeRevenue, setEmployeeRevenue] = (0,react_.useState)(0);
    const [job, setJob] = (0,react_.useState)(jobList[0]);
    const [experience, setExperience] = (0,react_.useState)(0);
    const [region, setRegion] = (0,react_.useState)(regionList[0].id);
    const [potentialTJM, setPotentialTJM] = (0,react_.useState)(400);
    // const [employerYearlyContribution, setEmployerYearlyContribution] = useState();
    // const [employeeYearlyContribution, setEmployeeYearlyContribution] = useState();
    // const [managementFeeYearly, setManagementFeeYearly] = useState();
    (0,react_.useEffect)(()=>{
        const selectedRegion = regionList.find((r)=>r.id === region);
        const regionMultiplier = selectedRegion?.multiplier || 1;
        const jobDailyRateCalc = (job, experience)=>{
            if (!job || experience === null) {
                return 0;
            }
            const experienceRanges = [
                {
                    min: 0,
                    max: 2
                },
                {
                    min: 2,
                    max: 5
                },
                {
                    min: 5,
                    max: 10
                },
                {
                    min: 10,
                    max: 15
                },
                {
                    min: 15,
                    max: Infinity
                }
            ];
            for(let i = 0; i < experienceRanges.length; i++){
                const { min, max } = experienceRanges[i];
                if (experience >= min && experience < max) {
                    return job.rates.find((rate)=>rate.id === i + 1)?.rate || 0;
                }
            }
            return 0;
        };
        let newPotentialTJM = 0;
        newPotentialTJM = jobDailyRateCalc(job, experience) * regionMultiplier;
        setPotentialTJM(newPotentialTJM);
    }, [
        employeeRevenue,
        region,
        experience,
        job
    ]);
    (0,react_.useEffect)(()=>{
        setDailyRevenue(potentialTJM);
    }, [
        potentialTJM
    ]);
    (0,react_.useEffect)(()=>{
        const employerContributionRate = 0.32;
        const employeeContributionRate = 0.13;
        const managementFeeRate = 0.05;
        let totalRevenue;
        let totalExpenses;
        let profit = 0;
        let portageYearlyRevenue;
        let portageMonthlyRevenue;
        if (isTJM) {
            totalRevenue = dailyRevenue * numDays;
            totalExpenses = dailyExpenses * numDays;
            profit = totalRevenue - totalExpenses;
            portageMonthlyRevenue = Math.round(totalRevenue * (1 - (employerContributionRate + employeeContributionRate + managementFeeRate)) - totalExpenses);
            portageYearlyRevenue = portageMonthlyRevenue * 12;
        } else {
            profit = yearlyRevenue - yearlyExpenses;
            portageYearlyRevenue = Math.round(profit * (1 - (employerContributionRate + employeeContributionRate + managementFeeRate)));
            portageMonthlyRevenue = Math.round(portageYearlyRevenue / 12);
        }
        setPortageYearlyRevenueToString(portageYearlyRevenue.toLocaleString());
        setPortageMonthlyRevenueToString(portageMonthlyRevenue.toLocaleString());
    }, [
        potentialTJM,
        dailyRevenue,
        yearlyRevenue,
        numDays,
        dailyExpenses,
        yearlyExpenses,
        isTJM
    ]);
    const RegionList = regionList.map((region)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
            value: region.id,
            children: region.name
        }, region.id);
    });
    const [chartData, setChartData] = (0,react_.useState)({
        labels: [
            "Revenu net optimis\xe9",
            "Cotisations patronales / Convention collective / Statutaire",
            "Cotisations salariales",
            "Frais de gestion"
        ],
        datasets: [
            {
                label: "revenu",
                data: [
                    0,
                    0,
                    0,
                    0
                ],
                backgroundColor: [
                    "#E5236E",
                    "#0A00A5",
                    "#FFD828",
                    "#00D0FF"
                ],
                datalabels: {
                    formatter: (value)=>{
                        return value + "%";
                    }
                }
            }
        ]
    });
    (0,react_.useEffect)(()=>{
        setChartData((prevChartData)=>({
                ...prevChartData,
                datasets: [
                    {
                        ...prevChartData.datasets[0],
                        data: [
                            50,
                            32,
                            13,
                            5
                        ]
                    }
                ]
            }));
    }, [
        employeeRevenue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (calculator_module_default()).simulator,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (calculator_module_default()).calculatorContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (calculator_module_default()).rangeCalculatorContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (calculator_module_default()).cursors,
                                children: [
                                    isTJM ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (calculator_module_default()).rangeSelector,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "dailyRevenue",
                                                children: [
                                                    "TJM /",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            color: "#D9D9D9",
                                                            cursor: "pointer"
                                                        },
                                                        onClick: ()=>setIsTJM(!isTJM),
                                                        children: "CA annuel"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "range",
                                                value: dailyRevenue,
                                                id: "dailyRevenue",
                                                min: "250",
                                                max: "2000",
                                                onChange: (e)=>setDailyRevenue(Number(e.target.value))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (calculator_module_default()).valueContainer,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: (calculator_module_default()).value,
                                                        value: dailyRevenue,
                                                        min: "250",
                                                        max: "2000",
                                                        onChange: (e)=>setDailyRevenue(Number(e.target.value))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "€"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (calculator_module_default()).rangeSelector,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "dailyRevenue",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            color: "#D9D9D9",
                                                            cursor: "pointer"
                                                        },
                                                        onClick: ()=>setIsTJM(!isTJM),
                                                        children: "TJM"
                                                    }),
                                                    "/ CA annuel"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "range",
                                                value: yearlyRevenue,
                                                id: "dailyRevenue",
                                                min: "5000",
                                                max: "560000",
                                                onChange: (e)=>setYearlyRevenue(Number(e.target.value))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (calculator_module_default()).valueContainer,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: (calculator_module_default()).value,
                                                        value: yearlyRevenue,
                                                        min: "5000",
                                                        max: "560000",
                                                        onChange: (e)=>setYearlyRevenue(Number(e.target.value))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "€"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    isTJM && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (calculator_module_default()).rangeSelector,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "numDays",
                                                children: "Jours travaill\xe9s/mois"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "range",
                                                value: numDays,
                                                id: "numDays",
                                                min: "1",
                                                max: "31",
                                                onChange: (e)=>setNumDays(Number(e.target.value))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (calculator_module_default()).valueContainer,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: (calculator_module_default()).value,
                                                        value: numDays,
                                                        min: "1",
                                                        max: "31",
                                                        onChange: (e)=>setNumDays(Number(e.target.value))
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            "jour",
                                                            numDays > 1 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "s"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    isTJM ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (calculator_module_default()).rangeSelector,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "dailyExpenses",
                                                children: "D\xe9penses quotidiennes"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "range",
                                                value: dailyExpenses,
                                                min: "0",
                                                max: "500",
                                                onChange: (e)=>setDailyExpenses(Number(e.target.value))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (calculator_module_default()).valueContainer,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: (calculator_module_default()).value,
                                                        value: dailyExpenses,
                                                        min: "0",
                                                        max: "500",
                                                        onChange: (e)=>setDailyExpenses(Number(e.target.value))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "€"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (calculator_module_default()).rangeSelector,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "dailyExpenses",
                                                children: "D\xe9penses annuelles"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "range",
                                                value: yearlyExpenses,
                                                min: "0",
                                                max: "500",
                                                onChange: (e)=>setYearlyExpenses(Number(e.target.value))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (calculator_module_default()).valueContainer,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        className: (calculator_module_default()).value,
                                                        value: yearlyExpenses,
                                                        min: "0",
                                                        max: "5000",
                                                        onChange: (e)=>setYearlyExpenses(Number(e.target.value))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "€"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (calculator_module_default()).calculatorResult,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        style: {
                                            fontSize: "1.5rem"
                                        },
                                        children: "Revenus estim\xe9s"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(resultAnimation, {
                                                value: portageYearlyRevenueToString,
                                                period: "/an"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(resultAnimation, {
                                                value: portageMonthlyRevenueToString,
                                                period: "/mois"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#contactForm",
                                className: "floatingButton",
                                style: {
                                    backgroundColor: "#e5236e",
                                    margin: "2rem 0"
                                },
                                children: "D\xe9marrer mon aventure Squadeo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                style: {
                                    textDecoration: "underline",
                                    marginTop: "2rem"
                                },
                                children: "Recevoir ma simulation"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (calculator_module_default()).TJMContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                style: {
                                    color: "#0a00a5"
                                },
                                children: "\xc0 quel TJM je peux pr\xe9tendre ?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "job",
                                children: "M\xe9tier actuel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_select_esm/* default */.ZP, {
                                id: "job",
                                options: jobList,
                                onChange: (e)=>{
                                    if (e !== null) {
                                        setJob(e);
                                    }
                                },
                                styles: calculator_autocompleteStyle,
                                className: "react-select-container",
                                classNamePrefix: "react-select"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "salary",
                                children: "Salaire brut annuel actuel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (calculator_module_default()).inputDiv,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        id: "salary",
                                        type: "number",
                                        value: employeeRevenue,
                                        min: "0",
                                        onChange: (e)=>setEmployeeRevenue(Number(e.target.value))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "€"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "experience",
                                children: "Exp\xe9rience sur le poste"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (calculator_module_default()).inputDiv,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        id: "experience",
                                        type: "number",
                                        value: experience,
                                        min: "0",
                                        onChange: (e)=>setExperience(Number(e.target.value))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "an(s)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "region",
                                children: "R\xe9gion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                id: "region",
                                name: "region",
                                onChange: (e)=>setRegion(Number(e.target.value)),
                                children: RegionList
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                style: {
                                    textAlign: "center",
                                    marginTop: "3vw",
                                    color: "#0a00a5"
                                },
                                children: [
                                    "TJM : ",
                                    potentialTJM,
                                    "€"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PieChart, {
                chartData: chartData
            })
        ]
    });
}
/* harmony default export */ const calculator = (Calculator);


/***/ }),

/***/ 3313:
/***/ ((module) => {

// Exports
module.exports = {
	"simulator": "calculator_simulator__nxMjF",
	"calculatorContainer": "calculator_calculatorContainer___fwxr",
	"rangeCalculatorContainer": "calculator_rangeCalculatorContainer__Smge2",
	"RangeCalculatorTitle": "calculator_RangeCalculatorTitle___S3qQ",
	"cursors": "calculator_cursors__kCqGb",
	"rangeSelector": "calculator_rangeSelector__bNF17",
	"valueContainer": "calculator_valueContainer__Dwn6F",
	"value": "calculator_value__8MPxI",
	"calculatorResult": "calculator_calculatorResult__S0qWZ",
	"TJMContainer": "calculator_TJMContainer__EIjg1",
	"inputDiv": "calculator_inputDiv__vme18",
	"autocomplete": "calculator_autocomplete__DmNa8"
};


/***/ }),

/***/ 540:
/***/ ((module) => {

// Exports
module.exports = {
	"finalValue": "resultAnimation_finalValue__WxoUZ",
	"bounce": "resultAnimation_bounce___QEtF",
	"bounce-animation": "resultAnimation_bounce-animation__rHcIS"
};


/***/ })

};
;