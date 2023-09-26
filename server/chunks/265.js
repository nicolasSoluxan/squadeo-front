exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 1793:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 1481:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8074));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 639))

/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/components/Footer/footer.module.css
var footer_module = __webpack_require__(9963);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/app/components/contactForm/contactForm.module.css
var contactForm_module = __webpack_require__(7966);
var contactForm_module_default = /*#__PURE__*/__webpack_require__.n(contactForm_module);
;// CONCATENATED MODULE: ./src/app/components/contactForm/contactForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ContactForm = ()=>{
    const [formData, setFormData] = (0,react_.useState)({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        message: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: (contactForm_module_default()).contactForm,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (contactForm_module_default()).userInputInfo,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (contactForm_module_default()).inputLine,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "lastName",
                                        className: "screen-reader-only",
                                        children: "Nom"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        id: "lastName",
                                        name: "lastName",
                                        placeholder: "Nom",
                                        className: (contactForm_module_default()).input,
                                        value: formData.lastName,
                                        onChange: handleChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "firstName",
                                        className: "screen-reader-only",
                                        children: "Pr\xe9nom"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        id: "firstName",
                                        name: "firstName",
                                        placeholder: "Prénom",
                                        className: (contactForm_module_default()).input,
                                        value: formData.firstName,
                                        onChange: handleChange
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (contactForm_module_default()).inputLine,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "email",
                                        className: "screen-reader-only",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        placeholder: "Email",
                                        className: (contactForm_module_default()).input,
                                        value: formData.email,
                                        onChange: handleChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "telephone",
                                        className: "screen-reader-only",
                                        children: "T\xe9l\xe9phone"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "tel",
                                        id: "telephone",
                                        name: "telephone",
                                        placeholder: "Téléphone",
                                        className: (contactForm_module_default()).input,
                                        value: formData.telephone,
                                        onChange: handleChange
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "message",
                        className: "screen-reader-only",
                        children: "Votre message"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        id: "message",
                        name: "message",
                        placeholder: "Votre message",
                        className: (contactForm_module_default()).message,
                        value: formData.message,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Envoyer"
            })
        ]
    });
};
/* harmony default export */ const contactForm = (ContactForm);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/components/Footer/footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).contactFormContainer,
                id: "contactForm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).contactText,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "On en discute ?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Laissez-nous vos coordonn\xe9es, un membre de l'\xe9quipe vous recontactera dans la journ\xe9e !"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(contactForm, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).curve,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "custom-shape",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            "data-name": "Layer 1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1200 120",
                            preserveAspectRatio: "none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#fff",
                                d: "M1200,0V30c0,21.6,-291,91.46,-741,90.26,-445.39,3.6,-859,-88.3,-759,-110.26V0Z",
                                className: "shape-fill"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (footer_module_default()).logoContainer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/logo-squadeo-white.png",
                                        width: 0,
                                        height: 0,
                                        sizes: "100vw",
                                        className: (footer_module_default()).logoImage,
                                        alt: "Squadeo portage logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (footer_module_default()).footerContact,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Nous contacter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (footer_module_default()).footerMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:+3312345678",
                                            className: (footer_module_default()).footerMenu,
                                            children: "+33 12 34 56 78"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (footer_module_default()).footerMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:contact@squadeo.com",
                                            className: (footer_module_default()).footerMenu,
                                            children: "contact@squadeo.com"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (footer_module_default()).footerMenu,
                                        children: [
                                            "27 rue Paul Montrochet ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " 69002 LYON"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (footer_module_default()).footerLegals,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Mentions l\xe9gales"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (footer_module_default()).footerMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/cgu",
                                            className: (footer_module_default()).footerMenu,
                                            children: "Conditions g\xe9n\xe9rales d'utilisation"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (footer_module_default()).footerMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/cookies",
                                            className: (footer_module_default()).footerMenu,
                                            children: "Utilisation de cookies"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (footer_module_default()).footerMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/personalData",
                                            className: (footer_module_default()).footerMenu,
                                            children: "Traitement des donn\xe9es personnelles"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _topMenu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9607);
/* harmony import */ var _topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function TopMenu() {
    const activeSegment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSelectedLayoutSegment)();
    const links = [
        {
            label: "Solution",
            path: "/solution",
            targetSegment: "solution"
        },
        {
            label: "Avantages",
            path: "/avantages",
            targetSegment: "avantages"
        }
    ];
    const [isScrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        const shrinkThreshold = 180;
        const expandThreshold = 150;
        if (window.scrollY > shrinkThreshold && !isScrolled) {
            setScrolled(true);
        } else if (window.scrollY < expandThreshold) {
            setScrolled(false);
        }
    }, [
        isScrolled
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        handleScroll
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: isScrolled ? (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerScrolled) : (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/assets/Squadeo-logo.png",
                        width: 0,
                        height: 0,
                        sizes: "100vw",
                        className: (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().logoImage),
                        alt: "Squadeo portage logo"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().menuContainer),
                children: links.map((l, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: activeSegment === l.targetSegment ? `${(_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().link)} ${(_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeLink)}` : (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                        href: l.path,
                        children: l.label
                    }, i))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttonContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/simulateur",
                        className: isScrolled ? (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().secondaryButtonScrolled) : "secondaryButton",
                        style: {
                            marginRight: "1rem"
                        },
                        children: "Simulez vos revenus"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#contactForm",
                        className: isScrolled ? (_topMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainButtonScrolled) : "mainButton",
                        children: "Nous contacter"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopMenu);


/***/ }),

/***/ 9963:
/***/ ((module) => {

// Exports
module.exports = {
	"contactFormContainer": "footer_contactFormContainer__nzf5O",
	"contactText": "footer_contactText__vXqxa",
	"curve": "footer_curve__RJ7Lw",
	"footer": "footer_footer__OSQxG",
	"logoContainer": "footer_logoContainer__dfZJu",
	"logoImage": "footer_logoImage__C94RC",
	"footerContact": "footer_footerContact__uDQR2",
	"footerLegals": "footer_footerLegals__BHrP7",
	"footerMenu": "footer_footerMenu__qdKqL",
	"custom-shape": "footer_custom-shape__vSVwb",
	"shape-fill": "footer_shape-fill__PhsIg"
};


/***/ }),

/***/ 7966:
/***/ ((module) => {

// Exports
module.exports = {
	"contactForm": "contactForm_contactForm__jUUpW",
	"userInputInfo": "contactForm_userInputInfo__hr_e5",
	"inputLine": "contactForm_inputLine__Ze3RI",
	"input": "contactForm_input___mpJb",
	"message": "contactForm_message__NhZ6W"
};


/***/ }),

/***/ 9607:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "topMenu_headerContainer__cUClz",
	"logoContainer": "topMenu_logoContainer___znC4",
	"logoImage": "topMenu_logoImage__kRVI_",
	"menuContainer": "topMenu_menuContainer__NxA_D",
	"link": "topMenu_link__gdQ1L",
	"activeLink": "topMenu_activeLink__l4o5n",
	"buttonContainer": "topMenu_buttonContainer__tZqy5",
	"headerScrolled": "topMenu_headerScrolled__LoAOo",
	"mainButtonScrolled": "topMenu_mainButtonScrolled__zKChh",
	"secondaryButtonScrolled": "topMenu_secondaryButtonScrolled__kfLLV"
};


/***/ }),

/***/ 4068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata),
  montserrat: () => (/* reexport */ (target_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variable_body_font_weight_100_200_300_400_500_600_700_800_900_variableName_montserrat_default())),
  outfit: () => (/* reexport */ (target_path_src_app_layout_tsx_import_Outfit_arguments_subsets_latin_variable_title_font_weight_100_200_300_400_500_600_700_800_900_variableName_outfit_default()))
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Outfit","arguments":[{"subsets":["latin"],"variable":"--title-font","weight":["100","200","300","400","500","600","700","800","900"]}],"variableName":"outfit"}
var target_path_src_app_layout_tsx_import_Outfit_arguments_subsets_latin_variable_title_font_weight_100_200_300_400_500_600_700_800_900_variableName_outfit_ = __webpack_require__(7525);
var target_path_src_app_layout_tsx_import_Outfit_arguments_subsets_latin_variable_title_font_weight_100_200_300_400_500_600_700_800_900_variableName_outfit_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Outfit_arguments_subsets_latin_variable_title_font_weight_100_200_300_400_500_600_700_800_900_variableName_outfit_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin"],"variable":"--body-font","weight":["100","200","300","400","500","600","700","800","900"]}],"variableName":"montserrat"}
var target_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variable_body_font_weight_100_200_300_400_500_600_700_800_900_variableName_montserrat_ = __webpack_require__(7112);
var target_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variable_body_font_weight_100_200_300_400_500_600_700_800_900_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variable_body_font_weight_100_200_300_400_500_600_700_800_900_variableName_montserrat_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/components/topMenu/topMenu.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\EmmanuelKURTZ\Desktop\Squadeo\site_vitrine\frontend\src\app\components\topMenu\topMenu.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const topMenu = (__default__);
;// CONCATENATED MODULE: ./src/app/components/Footer/footer.tsx

const footer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\EmmanuelKURTZ\Desktop\Squadeo\site_vitrine\frontend\src\app\components\Footer\footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: footer_esModule, $$typeof: footer_$$typeof } = footer_proxy;
const footer_default_ = footer_proxy.default;


/* harmony default export */ const footer = (footer_default_);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Squadeo solution de portage",
    description: "Calculez vos revenus en portage salarial",
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        className: `${(target_path_src_app_layout_tsx_import_Outfit_arguments_subsets_latin_variable_title_font_weight_100_200_300_400_500_600_700_800_900_variableName_outfit_default()).variable}`,
        lang: "fr",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(topMenu, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
            ]
        })
    });
}




/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"2777x2777"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;