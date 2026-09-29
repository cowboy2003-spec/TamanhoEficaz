module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/projetos/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>P
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-rsc] (ecmascript)");
;
;
;
async function P({ params }) {
    const { slug } = await params;
    const p = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectData"][slug];
    if (!p) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "projectHero",
                style: {
                    background: `linear-gradient(90deg,rgba(4,25,43,.9),rgba(4,25,43,.25)),url("${p.imgs[0]}") center/cover`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "kicker",
                            children: "Portefólio"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                            lineNumber: 1,
                            columnNumber: 431
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 54,
                                margin: "8px 0"
                            },
                            children: p.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                            lineNumber: 1,
                            columnNumber: 471
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge",
                            children: p.tag
                        }, void 0, false, {
                            fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                            lineNumber: 1,
                            columnNumber: 526
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                    lineNumber: 1,
                    columnNumber: 409
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                lineNumber: 1,
                columnNumber: 262
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "title",
                            children: "Galeria do projeto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                            lineNumber: 1,
                            columnNumber: 631
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lead",
                            children: "Imagens publicadas no portefólio da Tamanho Eficaz."
                        }, void 0, false, {
                            fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                            lineNumber: 1,
                            columnNumber: 676
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gallery",
                            children: p.imgs.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: x,
                                    alt: p.title
                                }, x, false, {
                                    fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                                    lineNumber: 1,
                                    columnNumber: 791
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                            lineNumber: 1,
                            columnNumber: 751
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                    lineNumber: 1,
                    columnNumber: 609
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projetos/[slug]/page.tsx",
                lineNumber: 1,
                columnNumber: 580
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projetos/[slug]/page.tsx",
        lineNumber: 1,
        columnNumber: 260
    }, this);
}
}),
"[project]/src/app/projetos/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projetos/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectData",
    ()=>projectData,
    "services",
    ()=>services
]);
const services = [
    [
        "soldadura",
        "Soldadura",
        "MIG/MAG, TIG, soldadura elétrica, por ponto e estruturas metálicas."
    ],
    [
        "serralharia",
        "Serralharia",
        "Fabricação e montagem de estruturas metálicas, coberturas, manutenção e reparação."
    ],
    [
        "serralharia-mecanica",
        "Serralharia Mecânica",
        "Fabricação, montagem de equipamentos, manutenção e estruturas metálicas personalizadas."
    ],
    [
        "eletricidade",
        "Eletricidade Industrial",
        "Instalação e manutenção de sistemas elétricos, automação, quadros e iluminação industrial."
    ],
    [
        "tubistas",
        "Tubagem Industrial",
        "Instalação, manutenção, montagem, soldadura, inspeção e testes de sistemas de tubagem."
    ],
    [
        "operadores-grua",
        "Operadores de Grua",
        "Operação e movimentação de cargas, planeamento e coordenação de operações de elevação."
    ]
];
const projectData = {
    "jacket-baltic-eagle": {
        title: "Jacket Baltic Eagle",
        tag: "Portefólio publicado",
        imgs: [
            "/images/projects/baltic/Jacket-Baltic-Eagle-01-1-1024x766.jpg",
            "/images/projects/baltic/Captura-de-ecra-2024-07-24-141016.png",
            "/images/projects/baltic/Captura-de-ecra-2024-07-24-141043_2.png"
        ]
    },
    "brug-henneaulann-zaventem": {
        title: "Brug Henneaulann Zaventem",
        tag: "Portefólio publicado",
        imgs: [
            "/images/projects/zaventem/Brug-Henneaulann-Zaventem_1.png",
            "/images/projects/zaventem/Brug-Henneaulann-Zaventem_2.png"
        ]
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09btyya._.js.map