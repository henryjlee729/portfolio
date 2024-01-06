"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./components/Navbar.js






const Navbar = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const handleMobileNav = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "fixed z-20 bg-white w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center h-20 w-full ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center sm:mx-10 md:mx-10 justify-between w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-center items-center flex-shrink-0 ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: " font-bold text-xl cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "text-2xl pl-8 sm:pl-0",
                                                    children: [
                                                        "Henry ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-blue-500",
                                                            children: "Lee"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden md:block",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-baseline space-x-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "about",
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/about" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "about",
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "About"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/portfolio" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "portfolio",
                                                        href: "/portfolio",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Portfolio"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/contact" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "contact",
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Contact"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-center items-center flex-shrink-0 md:block",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex space-x-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://github.com/LofiTea",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsGithub, {
                                                            className: "hidden md:block",
                                                            size: "2rem"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.linkedin.com/in/lofitea/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsLinkedin, {
                                                            className: "hidden md:block",
                                                            size: "2rem"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: handleMobileNav,
                                className: "mr-14 md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMenu, {
                                    size: "2rem"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: isOpen ? "fixed left-0 top-0 w-full sm:w[40%] md:w-[30%] h-screen bg-culturedWhite p-10 ease-in duration-300" : "fixed left-[-100%] top-0 p-10 ease-in duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex w-full items-center justify-between",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: handleMobileNav,
                                            className: "rounded shadow-lg shadow-gray-400 p-3 cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col space-y-4 pt-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "about",
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: handleMobileNav,
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/about" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "about",
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: handleMobileNav,
                                                            children: "About"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/projects" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "portfolio",
                                                        href: "/portfolio",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: handleMobileNav,
                                                            children: "Portfolio"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: router.pathname == "/contact" ? "text-blue-500" : "cursor-pointer hover:text-blue-500",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        id: "contact",
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: handleMobileNav,
                                                            children: "Contact"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "space-x-4 pt-20",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex space-x-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded shadow-lg shadow-gray-400 p-3 cursor-pointer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://github.com/LofiTea",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsGithub, {
                                                                size: "2rem"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded shadow-lg shadow-gray-400 p-3 cursor-pointer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.linkedin.com/in/lofitea/",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsLinkedin, {
                                                                size: "2rem"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(650)));
module.exports = __webpack_exports__;

})();