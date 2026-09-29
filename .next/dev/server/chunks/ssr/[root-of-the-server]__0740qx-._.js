module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/servicos/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicePages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicePages.ts [app-rsc] (ecmascript)");
;
;
;
;
async function Page({ params }) {
    const { slug } = await params;
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicePages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicePages"].find((x)=>x.slug === slug);
    if (!s) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "servicePhotoHero",
                style: {
                    backgroundImage: `linear-gradient(90deg,rgba(4,30,49,.91),rgba(4,30,49,.42)),url("${s.image}")`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "kicker",
                            children: "Serviços"
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 3,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: s.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 3,
                            columnNumber: 204
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: s.intro
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 3,
                            columnNumber: 222
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                    lineNumber: 3,
                    columnNumber: 144
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap serviceEditorial",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "serviceIntroImage",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: s.image,
                                alt: s.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                lineNumber: 4,
                                columnNumber: 104
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 4,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "kicker",
                                    children: "Competências"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                    lineNumber: 4,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "title",
                                    children: "Os nossos serviços incluem"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                    lineNumber: 4,
                                    columnNumber: 191
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "serviceRows",
                                    children: s.items.map(([a, b], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "serviceRow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: String(i + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                                    lineNumber: 4,
                                                    columnNumber: 333
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: a
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                                            lineNumber: 4,
                                                            columnNumber: 380
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: b
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                                            lineNumber: 4,
                                                            columnNumber: 392
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                                    lineNumber: 4,
                                                    columnNumber: 375
                                                }, this)
                                            ]
                                        }, a, true, {
                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                            lineNumber: 4,
                                            columnNumber: 297
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                    lineNumber: 4,
                                    columnNumber: 244
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 4,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                    lineNumber: 4,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section serviceWhy",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "kicker",
                            children: "Porquê escolher-nos"
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 5,
                            columnNumber: 63
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "title",
                            children: "Qualidade, segurança e acompanhamento"
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 5,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "whyGrid",
                            children: s.why.map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "whyCard",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: a
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                            lineNumber: 5,
                                            columnNumber: 254
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: b
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                            lineNumber: 5,
                                            columnNumber: 266
                                        }, this)
                                    ]
                                }, a, true, {
                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                    lineNumber: 5,
                                    columnNumber: 221
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 5,
                            columnNumber: 176
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "serviceCTA",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Tem um projeto nesta área?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                            lineNumber: 5,
                                            columnNumber: 323
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Fale connosco para analisarmos as necessidades do seu projeto."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                            lineNumber: 5,
                                            columnNumber: 358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                    lineNumber: 5,
                                    columnNumber: 318
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/pedir-proposta",
                                    className: "button",
                                    children: "Pedir proposta"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                                    lineNumber: 5,
                                    columnNumber: 433
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                            lineNumber: 5,
                            columnNumber: 290
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                    lineNumber: 5,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/servicos/[slug]/page.tsx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/servicos/[slug]/page.tsx",
        lineNumber: 2,
        columnNumber: 172
    }, this);
}
}),
"[project]/src/app/servicos/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/servicos/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/servicePages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "servicePages",
    ()=>servicePages
]);
const servicePages = [
    {
        "slug": "soldadura",
        "title": "Soldadura",
        "image": "/images/services/soldadura.jpg",
        "intro": "A nossa empresa é especializada em serviços de soldadura na área de metalomecânica, oferecendo soluções de alta qualidade e precisão para as necessidades industriais e comerciais dos nossos clientes. Com uma equipa de soldadores altamente qualificados e experientes, garantimos um serviço eficiente, seguro e conforme com as normas e padrões exigidos no mercado.",
        "items": [
            [
                "Soldadura MIG/MAG",
                "Ideal para soldadura de metais ferrosos e não ferrosos, proporcionando uma fusão forte e duradoura."
            ],
            [
                "Soldadura TIG",
                "Adequada para soldaduras de alta precisão em materiais como aço inoxidável, alumínio e outros metais não ferrosos."
            ],
            [
                "Soldadura Eléctrica",
                "Utilizada principalmente em construção civil e na reparação de estruturas metálicas."
            ],
            [
                "Soldadura por Ponto",
                "Excelente para união de chapas metálicas finas, comum em indústrias automotivas e de eletrodomésticos."
            ],
            [
                "Soldadura de Estruturas Metálicas",
                "Fabricação e reparação de estruturas metálicas para construção civil, infraestruturas e projetos industriais."
            ]
        ],
        "why": [
            [
                "Qualidade e Precisão",
                "Utilizamos equipamentos de última geração e técnicas avançadas para garantir acabamentos de alta qualidade."
            ],
            [
                "Experiência e Profissionalismo",
                "A nossa equipa é composta por soldadores certificados com vasta experiência no setor."
            ],
            [
                "Prazos Cumpridos",
                "Comprometemo-nos a entregar os projetos dentro dos prazos estipulados, sem comprometer a qualidade."
            ],
            [
                "Segurança",
                "Priorizamos a segurança dos nossos colaboradores e clientes, cumprindo todas as normas de segurança vigentes."
            ],
            [
                "Atendimento Personalizado",
                "Oferecemos soluções adaptadas às necessidades específicas de cada cliente, assegurando a sua satisfação total."
            ]
        ]
    },
    {
        "slug": "serralharia",
        "title": "Serralharia",
        "image": "/images/services/serralharia.jpg",
        "intro": "A nossa empresa é líder em serviços de serralharia na área de metalomecânica, oferecendo soluções personalizadas e de alta qualidade para atender às diversas necessidades dos nossos clientes. Contamos com uma equipa de serralheiros altamente qualificados e experientes, prontos para realizar projetos de pequena, média e grande escala com excelência e profissionalismo.",
        "items": [
            [
                "Fabricação e Montagem de Estruturas Metálicas",
                "Desenvolvemos e instalamos estruturas metálicas robustas e seguras, ideais para construção civil, industriais e comerciais."
            ],
            [
                "Coberturas Metálicas",
                "Desenvolvemos coberturas metálicas resistentes e duradouras, ideais para proteções externas em diversos ambientes."
            ],
            [
                "Manutenção e Reparação",
                "Oferecemos serviços de manutenção e reparação de estruturas metálicas, prolongando a vida útil e garantindo a segurança das instalações."
            ]
        ],
        "why": [
            [
                "Qualidade Superior",
                "Utilizamos materiais de alta qualidade e técnicas avançadas para garantir a durabilidade e resistência das nossas obras."
            ],
            [
                "Experiência Comprovada",
                "A nossa equipa possui vasta experiência no setor, assegurando a execução precisa e eficiente de cada projeto."
            ],
            [
                "Cumprimento de Prazos",
                "Comprometemo-nos com a entrega pontual dos projetos, respeitando os prazos acordados sem comprometer a qualidade."
            ],
            [
                "Segurança",
                "Priorizamos a segurança em todas as etapas do trabalho, cumprindo rigorosamente as normas de segurança estabelecidas."
            ],
            [
                "Atendimento Personalizado",
                "Oferecemos soluções feitas à medida das necessidades específicas de cada cliente, garantindo a sua plena satisfação."
            ]
        ]
    },
    {
        "slug": "serralharia-mecanica",
        "title": "Serralharia Mecânica",
        "image": "/images/services/serralharia-mecanica.jpg",
        "intro": "Na nossa empresa, somos especialistas em serviços de serralharia mecânica na área de metalomecânica, oferecendo soluções inovadoras e de alta qualidade para os mais diversos setores industriais. Com uma equipa de serralheiros mecânicos altamente qualificados e equipados com tecnologia de ponta, garantimos a execução precisa e eficiente de cada projeto.",
        "items": [
            [
                "Fabricação de Peças Sob Encomenda",
                "Produzimos peças e componentes metálicos personalizados, utilizando técnicas avançadas de corte, dobragem e soldadura."
            ],
            [
                "Montagem de Equipamentos Industriais",
                "Realizamos a montagem de equipamentos industriais complexos, assegurando a precisão e qualidade em cada etapa."
            ],
            [
                "Manutenção e Reparação de Estruturas Metálicas",
                "Serviços de manutenção e reparação destinados a garantir durabilidade, segurança e eficiência operacional."
            ],
            [
                "Construção de Estruturas Metálicas Personalizadas",
                "Estruturas metálicas sob medida para suporte de máquinas, estruturas de apoio e outros projetos industriais específicos."
            ],
            [
                "Serviços de Usinagem e Torneamento",
                "Serviços de usinagem e torneamento de precisão, com atenção à qualidade dimensional e acabamento."
            ]
        ],
        "why": [
            [
                "Tecnologia de Ponta",
                "Utilizamos equipamentos modernos e tecnologias avançadas para assegurar precisão e qualidade."
            ],
            [
                "Equipa Especializada",
                "Profissionais experientes e certificados, com experiência em serralharia mecânica e metalomecânica."
            ],
            [
                "Compromisso com Prazos",
                "Cumprimos os prazos acordados sem comprometer a qualidade."
            ],
            [
                "Segurança e Conformidade",
                "Seguimos práticas de segurança e normas e regulamentos aplicáveis."
            ],
            [
                "Soluções Personalizadas",
                "Desenvolvemos soluções para as necessidades específicas de cada cliente."
            ]
        ]
    },
    {
        "slug": "eletricidade",
        "title": "Eletricidade",
        "image": "/images/services/eletricidade.jpg",
        "intro": "A nossa empresa é especializada em serviços de eletricidade na área de metalomecânica, oferecendo soluções integradas e de alta qualidade para projetos industriais e comerciais. Contamos com uma equipa de eletricistas altamente qualificados e experientes, prontos para atender às necessidades específicas dos nossos clientes com eficiência e profissionalismo.",
        "items": [
            [
                "Instalação e Manutenção de Sistemas Elétricos Industriais",
                "Instalação e manutenção de sistemas elétricos em instalações industriais, visando uma operação segura e eficiente."
            ],
            [
                "Automação Industrial",
                "Soluções de automação industrial, incluindo programação e instalação de controladores lógicos programáveis (PLC) e sistemas de controlo de processos."
            ],
            [
                "Quadros Elétricos",
                "Projeto, montagem e instalação de quadros elétricos personalizados."
            ],
            [
                "Iluminação Industrial",
                "Instalação e manutenção de sistemas de iluminação industrial, visando eficiência energética e melhores condições de trabalho."
            ],
            [
                "Segurança Elétrica",
                "Auditorias e inspeções de segurança elétrica, identificação e correção de possíveis riscos."
            ]
        ],
        "why": [
            [
                "Qualidade e Precisão",
                "Materiais de qualidade e técnicas destinadas à fiabilidade e durabilidade dos sistemas."
            ],
            [
                "Equipa Especializada",
                "Eletricistas certificados e com experiência no setor da metalomecânica."
            ],
            [
                "Cumprimento de Prazos",
                "Compromisso com os prazos acordados."
            ],
            [
                "Segurança",
                "Cumprimento das normas e regulamentos de segurança."
            ],
            [
                "Soluções Personalizadas",
                "Soluções adaptadas às necessidades específicas de cada cliente."
            ]
        ]
    },
    {
        "slug": "tubistas",
        "title": "Tubistas",
        "image": "/images/services/tubistas.jpg",
        "intro": "A nossa empresa é especialista em serviços de tubagem na área de metalomecânica, oferecendo soluções completas e de alta qualidade para projetos industriais e comerciais. Contamos com uma equipa de tubistas altamente qualificados e experientes, prontos para atender às necessidades específicas dos nossos clientes com eficiência e profissionalismo.",
        "items": [
            [
                "Instalação de Sistemas de Tubagem",
                "Instalação de sistemas de tubagem para transporte de fluidos e gases em instalações industriais."
            ],
            [
                "Manutenção e Reparação de Tubagens",
                "Manutenção e reparação destinadas a assegurar a durabilidade e a operação contínua dos sistemas."
            ],
            [
                "Montagem de Tubagem Industrial",
                "Montagem de tubagem em fábricas, refinarias, centrais elétricas e outras instalações industriais."
            ],
            [
                "Soldadura de Tubagem",
                "Soldadura especializada em aço carbono, aço inoxidável, cobre e outros materiais."
            ],
            [
                "Inspeção e Testes de Tubagem",
                "Inspeções e testes dos sistemas de tubagem para verificação de segurança e qualidade."
            ]
        ],
        "why": [
            [
                "Qualidade e Precisão",
                "Materiais e técnicas orientados para a durabilidade e eficiência."
            ],
            [
                "Equipa Especializada",
                "Tubistas certificados e com experiência no setor."
            ],
            [
                "Cumprimento de Prazos",
                "Compromisso com os prazos acordados."
            ],
            [
                "Segurança",
                "Prioridade à segurança em todas as etapas do trabalho."
            ],
            [
                "Soluções Personalizadas",
                "Soluções adaptadas às necessidades específicas de cada cliente."
            ]
        ]
    },
    {
        "slug": "operadores-de-grua",
        "title": "Operadores de Grua",
        "image": "/images/services/operadores-de-grua.jpg",
        "intro": "A nossa empresa oferece serviços especializados de operadores de grua na área de metalomecânica, garantindo a movimentação segura e eficiente de cargas pesadas e materiais em projetos industriais e comerciais. Contamos com uma equipa de operadores de grua altamente qualificados e experientes.",
        "items": [
            [
                "Operação de Gruas de Torre e Móveis",
                "Operação de gruas de torre e gruas móveis para diferentes tipos de projetos e condições de trabalho."
            ],
            [
                "Movimentação de Cargas Pesadas",
                "Movimentação de cargas pesadas e volumosas com atenção à integridade dos materiais e à segurança."
            ],
            [
                "Montagem e Desmontagem de Gruas",
                "Montagem e desmontagem de gruas em estaleiros de obras."
            ],
            [
                "Planeamento e Coordenação de Operações",
                "Planeamento e coordenação das operações de movimentação de cargas."
            ],
            [
                "Manutenção Preventiva e Corretiva",
                "Manutenção preventiva e corretiva das gruas, visando operacionalidade e segurança."
            ]
        ],
        "why": [
            [
                "Profissionalismo e Experiência",
                "Operadores de grua certificados e com experiência no setor."
            ],
            [
                "Segurança Prioritária",
                "Cumprimento das normas de segurança."
            ],
            [
                "Equipamentos Modernos",
                "Utilização de equipamentos adequados às operações."
            ],
            [
                "Cumprimento de Prazos",
                "Compromisso com a conclusão das operações dentro do tempo previsto."
            ],
            [
                "Atendimento Personalizado",
                "Soluções adaptadas às necessidades específicas de cada cliente."
            ]
        ]
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0740qx-._.js.map