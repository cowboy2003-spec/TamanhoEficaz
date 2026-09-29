module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/noticias/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-rsc] (ecmascript)");
;
;
;
;
async function Page({ params }) {
    const { slug } = await params;
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["news"].find((x)=>x.slug === slug);
    if (!n) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pagehero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "kicker",
                            children: [
                                "Notícias · ",
                                n.date
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                            lineNumber: 2,
                            columnNumber: 218
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: n.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                            lineNumber: 2,
                            columnNumber: 267
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: n.lead
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                            lineNumber: 2,
                            columnNumber: 285
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                    lineNumber: 2,
                    columnNumber: 196
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                lineNumber: 2,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap article",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "articleImg",
                            src: n.image,
                            alt: n.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                            lineNumber: 2,
                            columnNumber: 375
                        }, this),
                        n.body.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lead",
                                children: p
                            }, i, false, {
                                fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                                lineNumber: 2,
                                columnNumber: 451
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: "button",
                            href: "/noticias",
                            children: "← Todas as notícias"
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                            lineNumber: 2,
                            columnNumber: 488
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                    lineNumber: 2,
                    columnNumber: 345
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/noticias/[slug]/page.tsx",
                lineNumber: 2,
                columnNumber: 316
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/noticias/[slug]/page.tsx",
        lineNumber: 2,
        columnNumber: 164
    }, this);
}
}),
"[project]/src/app/noticias/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/noticias/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "news",
    ()=>news,
    "services",
    ()=>services
]);
const services = [
    {
        slug: "soldadura",
        title: "Soldadura",
        intro: "Soluções de soldadura para necessidades industriais e comerciais, executadas por equipas especializadas.",
        items: [
            "Soldadura MIG/MAG",
            "Soldadura TIG",
            "Soldadura elétrica",
            "Soldadura por ponto",
            "Soldadura de estruturas metálicas"
        ],
        detail: "A Tamanho Eficaz publica competências em soldadura MIG/MAG, TIG, elétrica e por ponto, bem como fabricação e reparação de estruturas metálicas."
    },
    {
        slug: "serralharia",
        title: "Serralharia",
        intro: "Fabricação, montagem, manutenção e reparação de soluções metálicas à medida.",
        items: [
            "Fabricação e montagem de estruturas metálicas",
            "Coberturas metálicas",
            "Manutenção e reparação"
        ],
        detail: "Serviços dirigidos a projetos de diferentes escalas, com soluções adaptadas às necessidades de cada cliente."
    },
    {
        slug: "serralharia-mecanica",
        title: "Serralharia Mecânica",
        intro: "Fabricação e montagem de componentes e estruturas para aplicações industriais.",
        items: [
            "Peças sob encomenda",
            "Montagem de equipamentos industriais",
            "Manutenção e reparação de estruturas",
            "Estruturas metálicas personalizadas",
            "Maquinação e torneamento"
        ],
        detail: "Inclui corte, dobragem, soldadura, montagem de equipamentos, manutenção e trabalhos de maquinação e torneamento."
    },
    {
        slug: "eletricidade",
        title: "Eletricidade",
        intro: "Soluções integradas de eletricidade e automação para instalações industriais.",
        items: [
            "Sistemas elétricos industriais",
            "Automação industrial e PLC",
            "Quadros elétricos",
            "Iluminação industrial",
            "Segurança elétrica"
        ],
        detail: "Instalação e manutenção, automação, programação e instalação de PLC, quadros elétricos, iluminação e inspeções de segurança elétrica."
    },
    {
        slug: "tubistas",
        title: "Tubistas",
        intro: "Instalação, montagem, manutenção, soldadura, inspeção e testes de sistemas de tubagem.",
        items: [
            "Instalação de sistemas de tubagem",
            "Manutenção e reparação",
            "Montagem de tubagem industrial",
            "Soldadura de tubagem",
            "Inspeção e testes"
        ],
        detail: "Competências publicadas para sistemas de transporte de fluidos e gases, incluindo aço carbono, aço inoxidável e cobre."
    },
    {
        slug: "operadores-de-grua",
        title: "Operadores de Grua",
        intro: "Operação e coordenação de movimentação de cargas em contexto industrial.",
        items: [
            "Gruas de torre e móveis",
            "Movimentação de cargas pesadas",
            "Montagem e desmontagem",
            "Planeamento e coordenação",
            "Manutenção preventiva e corretiva"
        ],
        detail: "Serviços publicados de operação, movimentação de cargas, planeamento e coordenação, com enfoque na segurança."
    }
];
const news = [
    {
        slug: "premio-empresas-gazela-2024",
        title: "Prémio Empresas Gazela 2024",
        date: "7 de julho de 2025",
        image: "/images/gazela-2024.jpg",
        lead: "Tamanho Eficaz, Lda. recebe pelo segundo ano consecutivo o prémio GAZELA 2024.",
        body: [
            "A cerimónia de homenagem às 181 empresas Gazela de 2024 decorreu a 25 de junho, no Teatro Municipal de Ourém, no distrito de Santarém.",
            "A Região Centro alcançou o maior número de sempre destas empresas nos últimos 13 anos. Em 2024, as 181 empresas empregavam 6.328 trabalhadores e registaram um volume de negócios superior a 694 milhões de euros em 2023."
        ]
    },
    {
        slug: "premio-empresas-gazela-2023",
        title: "Prémio Empresas Gazela 2023",
        date: "11 de julho de 2024",
        image: "/images/gazela-2023.png",
        lead: "“A trajetória da empresa sempre foi marcada pela aposta na qualidade.”",
        body: [
            "Fundada em 2019, a Tamanho Eficaz destacou na entrevista associada ao reconhecimento Gazela 2023 a aposta na qualidade da mão de obra especializada e o aumento da procura internacional, nomeadamente na Bélgica e em Espanha.",
            "A empresa apontou a entrada no mercado internacional, a resposta às exigências dos clientes e os projetos desafiantes como fatores diferenciadores.",
            "No contexto das parcerias de longo prazo, foi referida a Smulders Projects N.V. A empresa destacou ainda a pré-seleção de candidatos com formação profissional adequada.",
            "Para os anos seguintes, foram apontadas a melhoria contínua dos projetos, a formação especializada dos colaboradores e o acompanhamento das exigências dos clientes."
        ]
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0rfi41z._.js.map