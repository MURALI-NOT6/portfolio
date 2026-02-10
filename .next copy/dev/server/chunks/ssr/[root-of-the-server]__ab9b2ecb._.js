module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/utils/sound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playClickSound",
    ()=>playClickSound,
    "playHomeBackgroundSound",
    ()=>playHomeBackgroundSound,
    "playLoadingSound",
    ()=>playLoadingSound,
    "playTechSound",
    ()=>playTechSound
]);
const clickSound = '/assets/sound/soundbg.wav';
const loadingSound = '/assets/sound/loadingsound.wav';
const homeBgSound = '/assets/sound/userinfo.wav';
const techSound = '/assets/sound/tech.wav';
// We need to be SSR safe
let clickAudio = null;
let loadingAudio = null;
let homeBgAudio = null;
let techAudio = null;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const playClickSound = ()=>{
    if (!clickAudio) return;
    // Clone node for click sounds to allow rapid successive plays
    const audio = clickAudio.cloneNode();
    audio.play().catch((error)=>{
        console.warn('Click audio play failed:', error);
    });
};
const playLoadingSound = ()=>{
    if (!loadingAudio) return {
        pause: ()=>{}
    };
    loadingAudio.loop = true;
    loadingAudio.play().catch((error)=>{
        console.warn('Loading audio play failed:', error);
    });
    return loadingAudio; // Return to allow stopping it later
};
const playHomeBackgroundSound = ()=>{
    if (!homeBgAudio) return {
        pause: ()=>{}
    };
    homeBgAudio.loop = true;
    homeBgAudio.play().catch((error)=>{
        console.warn('Home background audio play failed:', error);
    });
    return homeBgAudio;
};
const playTechSound = ()=>{
    if (!techAudio) return {
        pause: ()=>{}
    };
    techAudio.play().catch((error)=>{
        console.warn('Tech sound play failed:', error);
    });
    return techAudio;
};
}),
"[project]/src/components/SecurityGate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.ts [app-ssr] (ecmascript)");
;
;
;
;
const SecurityGate = ({ onUnlock })=>{
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('SYSTEM_IDLE');
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isGranted, setIsGranted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasStarted, setHasStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasStarted) return;
        const startTime = Date.now();
        const audio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playLoadingSound"])();
        const steps = [
            {
                msg: 'ENCRYPTING CONNECTION...',
                time: 0
            },
            {
                msg: 'VERIFYING IDENTITY...',
                time: 1500
            },
            {
                msg: 'BYPASSING FIREWALL...',
                time: 3000
            },
            {
                msg: 'ESTABLISHING SECURE TUNNEL...',
                time: 4500
            },
            {
                msg: 'ACCESS GRANTED',
                time: 5500
            }
        ];
        const interval = setInterval(()=>{
            const elapsed = Date.now() - startTime;
            // Update Progress
            const newProgress = Math.min(elapsed / 6000 * 100, 100);
            setProgress(newProgress);
            // Update Message
            const step = steps.slice().reverse().find((s)=>elapsed >= s.time);
            if (step) {
                setMsg(step.msg);
                if (step.msg === 'ACCESS GRANTED' && !isGranted) {
                    setIsGranted(true);
                }
            }
            // Completion
            if (elapsed > 6500) {
                clearInterval(interval);
                audio.pause();
                onUnlock();
            }
        }, 50);
        return ()=>{
            clearInterval(interval);
            audio.pause();
        };
    }, [
        hasStarted,
        onUnlock
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 50,
            fontFamily: 'var(--font-mono)'
        },
        children: !hasStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            style: {
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        opacity: [
                            0.4,
                            1,
                            0.4
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: 2
                    },
                    style: {
                        color: 'var(--accent-red)',
                        fontSize: '0.8rem',
                        marginBottom: '2rem',
                        letterSpacing: '5px'
                    },
                    children: "TERMINAL_IDLE // AWAITING_INPUT"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecurityGate.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                        setHasStarted(true);
                        setMsg('ENCRYPTING CONNECTION...');
                    },
                    className: "tech-border",
                    style: {
                        background: 'transparent',
                        color: 'var(--text-white)',
                        border: '1px solid var(--accent-red)',
                        padding: '1.5rem 3rem',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    children: "INITIALIZE INTERFACE"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecurityGate.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecurityGate.tsx",
            lineNumber: 76,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: '300px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 10
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        color: isGranted ? '#00ff00' : 'var(--accent-red)'
                    },
                    style: {
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        fontWeight: 'bold',
                        textShadow: isGranted ? '0 0 10px #00ff00' : '0 0 10px var(--accent-red)',
                        letterSpacing: '2px'
                    },
                    children: msg
                }, void 0, false, {
                    fileName: "[project]/src/components/SecurityGate.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        height: '4px',
                        background: '#1a1a1a',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid #333'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            width: `${progress}%`,
                            height: '100%',
                            background: isGranted ? '#00ff00' : 'var(--accent-red)',
                            boxShadow: isGranted ? '0 0 10px #00ff00' : '0 0 10px var(--accent-red)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SecurityGate.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/SecurityGate.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '0.5rem',
                        fontSize: '0.7rem',
                        color: 'var(--text-dim)',
                        opacity: 0.7,
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--font-mono)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "SECURE_LAYER_V2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecurityGate.tsx",
                            lineNumber: 162,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                Math.floor(progress),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SecurityGate.tsx",
                            lineNumber: 163,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecurityGate.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecurityGate.tsx",
            lineNumber: 118,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SecurityGate.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SecurityGate;
}),
"[project]/src/components/CyberpunkCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const CyberpunkCanvas = ()=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId;
        let particles = [];
        let activeCells = [];
        const gridSize = 40; // Size of grid squares
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        const initParticles = ()=>{
            const particleCount = Math.floor(canvas.width * canvas.height / 20000);
            particles = [];
            for(let i = 0; i < particleCount; i++){
                spawnParticle();
            }
        };
        const spawnParticle = ()=>{
            // Snap to grid
            const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
            const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
            const axis = Math.random() > 0.5 ? 'x' : 'y';
            const color = Math.random() > 0.5 ? '#ff003c' : '#00f3ff'; // Red or Cyan
            particles.push({
                x,
                y,
                vx: axis === 'x' ? Math.random() > 0.5 ? 2 : -2 : 0,
                vy: axis === 'y' ? Math.random() > 0.5 ? 2 : -2 : 0,
                size: Math.random() * 2 + 1,
                color,
                speed: 2 + Math.random(),
                axis
            });
        };
        const spawnActiveCell = ()=>{
            const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
            const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
            const color = Math.random() > 0.7 ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 0, 60, 0.1)';
            activeCells.push({
                x,
                y,
                life: 0,
                maxLife: 30 + Math.random() * 50,
                color
            });
        };
        const draw = ()=>{
            // Clear with trail effect for "warp speed" feel if desired, but here specific clear
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slight trail?
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw Grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            for(let x = 0; x <= canvas.width; x += gridSize){
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for(let y = 0; y <= canvas.height; y += gridSize){
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            // Draw Active Cells (System Activity)
            if (Math.random() > 0.9) spawnActiveCell();
            activeCells.forEach((cell, index)=>{
                cell.life++;
                if (cell.life > cell.maxLife) {
                    activeCells.splice(index, 1);
                    return;
                }
                // Fade in/out
                const opacity = cell.life < 10 ? cell.life / 10 : (cell.maxLife - cell.life) / 20;
                ctx.fillStyle = cell.color.replace('0.1)', `${Math.max(0, opacity * 0.2)})`);
                ctx.fillRect(cell.x, cell.y, gridSize, gridSize);
                // Border highlight
                ctx.strokeStyle = cell.color.replace('0.1)', `${Math.max(0, opacity * 0.5)})`);
                ctx.strokeRect(cell.x + 2, cell.y + 2, gridSize - 4, gridSize - 4);
            });
            // Update and Draw Data Particles
            particles.forEach((p, i)=>{
                p.x += p.vx;
                p.y += p.vy;
                // Random chance to change axis at intersection
                if (p.x % gridSize === 0 && p.y % gridSize === 0 && Math.random() > 0.95) {
                    p.axis = p.axis === 'x' ? 'y' : 'x';
                    if (p.axis === 'x') {
                        p.vx = Math.random() > 0.5 ? p.speed : -p.speed;
                        p.vy = 0;
                    } else {
                        p.vx = 0;
                        p.vy = Math.random() > 0.5 ? p.speed : -p.speed;
                    }
                }
                // Wrap around edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                // Draw 'Data Packet' Head
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 5;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.rect(p.x - 1, p.y - 1, 3, 3);
                ctx.fill();
                ctx.shadowBlur = 0;
            // Draw Trail
            // (Optional: keep simple for performance)
            });
            // Maintain particle count
            if (particles.length < canvas.width * canvas.height / 20000) {
                spawnParticle();
            }
            animationFrameId = requestAnimationFrame(draw);
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();
        return ()=>{
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.6 // Blend with background
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CyberpunkCanvas.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CyberpunkCanvas;
}),
"[project]/src/components/CyberpunkBorder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const CyberpunkBorder = ()=>{
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set initial dimensions on mount (client-side)
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
        const handleResize = ()=>{
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const { width: w, height: h } = dimensions;
    const isMobile = w < 768;
    const p = isMobile ? 8 : 20; // Padding
    const c = isMobile ? 15 : 30; // Corner cut size
    const tabW = isMobile ? 120 : 300; // Top left tab width for logo
    // Calculate path for the main frame border
    // Starting closely under the logo tab area
    const borderPath = `
    M ${p + c} ${p} 
    L ${p + tabW} ${p} 
    L ${p + tabW + c} ${p + c / 2} 
    L ${w - p - c} ${p + c / 2} 
    L ${w - p} ${p + c + c / 2} 
    L ${w - p} ${h - p - c} 
    L ${w - p - c} ${h - p} 
    L ${p + c} ${h - p} 
    L ${p} ${h - p - c} 
    L ${p} ${p + c} 
    Z
  `;
    // Decorative lines or accents
    const topLine = `M ${p + tabW + c + 10} ${p - 5} L ${w - p - c} ${p - 5}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 40,
            pointerEvents: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "glow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "3",
                            result: "coloredBlur"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CyberpunkBorder.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "coloredBlur"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CyberpunkBorder.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "SourceGraphic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CyberpunkBorder.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CyberpunkBorder.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CyberpunkBorder.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CyberpunkBorder.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: borderPath,
                fill: "none",
                stroke: "rgba(255, 255, 255, 0.2)",
                strokeWidth: "1.5",
                style: {
                    filter: 'url(#glow)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CyberpunkBorder.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M ${p} ${p + c} L ${p + c} ${p}`,
                fill: "none",
                stroke: "var(--accent-red)",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/CyberpunkBorder.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M ${w - p - c} ${h - p} L ${w - p} ${h - p - c}`,
                fill: "none",
                stroke: "var(--accent-red)",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/CyberpunkBorder.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: w - p - 100,
                y: h - p - 15,
                width: "60",
                height: "4",
                fill: "var(--text-dim)",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/CyberpunkBorder.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: w - p - 30,
                y: h - p - 15,
                width: "10",
                height: "4",
                fill: "var(--accent-red)"
            }, void 0, false, {
                fileName: "[project]/src/components/CyberpunkBorder.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CyberpunkBorder.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CyberpunkBorder;
}),
"[project]/src/components/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.ts [app-ssr] (ecmascript)");
;
;
;
;
const AboutSection = ({ onClose, onMinimize })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-wrapper",
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '20px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: 0.5
            },
            className: "cyber-border-animated about-container-inner",
            style: {
                background: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(10px)',
                maxWidth: '1280px',
                width: 'min(98%, 1280px)',
                position: 'relative',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
                height: 'min(76vh, 700px)',
                display: 'flex',
                flexDirection: 'column'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          div::-webkit-scrollbar { display: none; }
          @media (max-width: 1024px) {
            .section-wrapper { padding: 0 !important; }
            .about-container-inner {
              width: 100% !important;
              height: 100% !important;
              min-height: 0 !important;
              padding: 0 !important;
              clip-path: none !important;
            }
          }
          @media (max-width: 768px) {
            .hud-header {
              padding: 10px 10px !important;
            }
            .hud-timer {
              display: none !important;
            }
             .section-scroll-container {
               padding: 1rem !important;
            }
            .hud-decoration {
              display: none !important;
            }
            .terminate-text {
              display: none !important;
            }
            .terminate-button {
              padding: 5px !important;
              border: none !important;
              background: transparent !important;
            }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud-header",
                    style: {
                        padding: '12px 30px',
                        background: 'rgba(255, 0, 60, 0.15)',
                        borderBottom: '1px solid rgba(255, 0, 60, 0.4)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 30
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '4px 10px',
                                        background: 'var(--accent-red)',
                                        color: '#000',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        fontWeight: 900
                                    },
                                    children: "PERSONNEL_DATA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-timer",
                                    style: {
                                        color: 'var(--accent-cyan)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        letterSpacing: '2px',
                                        opacity: 0.8
                                    },
                                    children: [
                                        "SEC_LEVEL_RESTRICTED // ",
                                        new Date().getHours(),
                                        ":",
                                        new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-decoration",
                                    style: {
                                        width: '10px',
                                        height: '2px',
                                        background: 'var(--accent-cyan)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-decoration",
                                    style: {
                                        width: '30px',
                                        height: '2px',
                                        background: 'var(--accent-red)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminate-button",
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        border: '1px solid rgba(255, 0, 60, 0.5)',
                                        padding: '2px 8px',
                                        background: 'rgba(255, 0, 60, 0.1)',
                                        fontSize: '0.6rem',
                                        color: 'var(--accent-red)',
                                        fontFamily: 'var(--font-mono)'
                                    },
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                                        onClose?.();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminate-text",
                                            children: "TERMINATE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14,
                                            color: "var(--accent-red)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 116,
                                            columnNumber: 67
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-scroll-container",
                    style: {
                        flex: 1,
                        minHeight: 0,
                        overflowY: 'auto',
                        padding: 'max(1rem, 4vw)',
                        scrollbarWidth: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: -20,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.2
                            },
                            style: {
                                marginBottom: '2rem'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                                    color: 'var(--text-white)',
                                    textTransform: 'uppercase',
                                    lineHeight: 1,
                                    letterSpacing: '2px',
                                    position: 'relative',
                                    display: 'inline-block'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--accent-red)'
                                        },
                                        children: "SYSTEM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ARCHITECT"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.4
                            },
                            style: {
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                lineHeight: 1.8,
                                color: 'var(--text-dim)',
                                marginBottom: '2rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '1rem'
                                    },
                                    children: "I am a Frontend developer with 6+ years of experience in building scalable, user-friendly web applications and UI/Frontend in a startup environment. My expertise spans HTML, CSS, SASS, JavaScript, and React.js, with a strong focus on delivering seamless user experiences."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '1rem'
                                    },
                                    children: "Beyond frontend, I specialize in automation and AI-driven development, leveraging tools like n8n for workflow automation and Gemini AI for building intelligent, efficient, and modern applications. I also have hands-on knowledge in AWS deployment and cloud setup."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "I am passionate about scalable UI solutions, automation, and AI integration, and thrive in dynamic environments where innovation and problem-solving drive business growth."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                                gap: '1.5rem',
                                marginTop: '3rem'
                            },
                            children: [
                                {
                                    label: 'EXPERIENCE',
                                    val: '6+ YEARS'
                                },
                                {
                                    label: 'PROJECTS',
                                    val: '20+ DEPLOYED'
                                },
                                {
                                    label: 'STACK',
                                    val: 'MERN / AI'
                                },
                                {
                                    label: 'STATUS',
                                    val: 'AVAILABLE'
                                }
                            ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.6 + i * 0.1
                                    },
                                    whileHover: {
                                        y: -5,
                                        borderColor: 'var(--accent-cyan)'
                                    },
                                    style: {
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        padding: '1.5rem 1rem',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                width: '15px',
                                                height: '15px',
                                                borderRight: '2px solid var(--accent-red)',
                                                borderTop: '2px solid var(--accent-red)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--accent-red)',
                                                fontSize: '0.7rem',
                                                marginBottom: '0.7rem',
                                                letterSpacing: '1px',
                                                opacity: 0.8
                                            },
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: 'var(--font-ui)',
                                                color: 'var(--text-white)',
                                                fontSize: '1.3rem',
                                                fontWeight: 800,
                                                letterSpacing: '1px'
                                            },
                                            children: stat.val
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AboutSection;
}),
"[project]/src/components/DecipherText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const DecipherText = ({ text, className, style, revealSpeed = 50, revealStep = 0.3, initialDelay = 0, animateOnHover = false, colors = [
    '#FF003C',
    '#00F3FF',
    '#FFFFFF'
] // Cyberpunk defaults
 })=>{
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(text);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Expanded character set for richer matrix effect
    const chars = 'AZ0123456789!@#$%^&*()_+={}[]|:;<>,.?/~`';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let iteration = 0;
        const runAnimation = ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(()=>{
                setDisplayText((prev)=>text.split('').map((char, index)=>{
                        if (index < iteration) {
                            return text[index];
                        }
                        // Return random character
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join(''));
                if (iteration >= text.length) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setDisplayText(text); // Ensure final text is exact
                }
                iteration += revealStep;
            }, revealSpeed);
        };
        let timeoutId;
        if (!animateOnHover) {
            if (initialDelay > 0) {
                // Start with scrambled text immediately if delayed
                setDisplayText(text.split('').map(()=>chars[Math.floor(Math.random() * chars.length)]).join(''));
                timeoutId = setTimeout(runAnimation, initialDelay);
            } else {
                runAnimation();
            }
        } else {
            // Reset to original text if not hovering and animOnHover is true
            if (!isHovered) {
                setDisplayText(text);
                if (intervalRef.current) clearInterval(intervalRef.current);
            } else {
                // Only animate if hovered
                runAnimation();
            }
        }
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [
        text,
        revealSpeed,
        revealStep,
        initialDelay,
        animateOnHover,
        isHovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        style: {
            display: 'inline-block',
            ...style
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: displayText
    }, void 0, false, {
        fileName: "[project]/src/components/DecipherText.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DecipherText;
}),
"[project]/src/components/SkillsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DecipherText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DecipherText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const SkillsSection = ({ onClose, onMinimize })=>{
    const [hoveredSkill, setHoveredSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const skillCategories = [
        {
            title: 'CORE_ENGINE (FRONTEND)',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            skills: [
                {
                    name: 'React',
                    level: 95,
                    desc: 'Architecting high-performance UI systems with advanced state patterns.'
                },
                {
                    name: 'Next.js',
                    level: 90,
                    desc: 'Optimizing data delivery via SSR, ISR, and edge computing.'
                },
                {
                    name: 'TypeScript',
                    level: 85,
                    desc: 'Implementing strict type systems for mission-critical stability.'
                },
                {
                    name: 'JavaScript',
                    level: 95,
                    desc: 'Core logic execution and asynchronous memory management.'
                },
                {
                    name: 'Tailwind CSS',
                    level: 90,
                    desc: 'Rapid deployment of utility-first visual frameworks.'
                },
                {
                    name: 'SASS/CSS3',
                    level: 90,
                    desc: 'Quantum-level styling and kinetic animation sequences.'
                },
                {
                    name: 'Webpack',
                    level: 80,
                    desc: 'Compiling complex modules into optimized system payloads.'
                }
            ]
        },
        {
            title: 'DATA_STRUCTURE (BACKEND)',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            skills: [
                {
                    name: 'Node.js',
                    level: 85,
                    desc: 'Server-side runtime optimization and event-loop management.'
                },
                {
                    name: 'Express',
                    level: 85,
                    desc: 'Middleware pipeline construction for high-traffic API routing.'
                },
                {
                    name: 'MongoDB',
                    level: 80,
                    desc: 'Non-relational data modeling and high-speed retrieval.'
                }
            ]
        },
        {
            title: 'NEURAL_LINK (AI & AUTOMATION)',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            skills: [
                {
                    name: 'Gemini AI',
                    level: 90,
                    desc: 'LLM orchestration and advanced generative integration.'
                },
                {
                    name: 'n8n',
                    level: 85,
                    desc: 'Automating complex business logic via node-based workflows.'
                }
            ]
        },
        {
            title: 'SYSTEM_TOOLS',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            skills: [
                {
                    name: 'Git & GitHub',
                    level: 90,
                    desc: 'Distributed version control and repository synchronization.'
                },
                {
                    name: 'AWS',
                    level: 75,
                    desc: 'Deploying robust infrastructure across global cloud nodes.'
                },
                {
                    name: 'Docker',
                    level: 70,
                    desc: 'Encapsulating system environments for consistent execution.'
                }
            ]
        }
    ];
    const currentSkillData = skillCategories.flatMap((c)=>c.skills).find((s)=>s.name === hoveredSkill);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-wrapper",
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '20px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.98,
                y: 10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            transition: {
                duration: 0.4
            },
            className: "cyber-border-animated skills-container-inner",
            style: {
                background: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(10px)',
                maxWidth: '1280px',
                width: 'min(98%, 1280px)',
                position: 'relative',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
                height: 'min(76vh, 700px)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 0, 60, 0.2)',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          .skill-item-container {
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.03);
            margin-bottom: 8px;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          .skill-item-container:hover {
            background: rgba(255, 0, 60, 0.05);
            border-color: rgba(255, 0, 60, 0.3);
            transform: translateX(5px);
          }
          .skill-progress-bar {
            height: 2px;
            background: rgba(255, 255, 255, 0.05);
            margin-top: 10px;
            position: relative;
          }
          .skill-progress-segment {
            height: 100%;
            background: var(--accent-red);
            box-shadow: 0 0 10px var(--accent-red);
            position: relative;
          }
          .skill-progress-segment::after {
            content: '';
            position: absolute;
            right: 0;
            top: -2px;
            width: 4px;
            height: 6px;
            background: var(--text-white);
            box-shadow: 0 0 5px var(--text-white);
          }
          .tech-grid {
            columns: 2 380px;
            column-gap: 40px;
          }
          .skill-category-wrapper {
            break-inside: avoid;
            margin-bottom: 40px;
          }
          @media (max-width: 1024px) {
            .tech-grid { columns: 1; column-gap: 0; }
            .section-layout { 
              display: flex !important; 
              flex-direction: column !important; 
              overflow-y: auto !important;
              gap: 20px;
            }
            .custom-scroll { 
                border-right: none !important; 
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                overflow-y: visible !important;
                flex: none !important;
                padding: 20px !important;
            }
            .info-panel { 
                height: auto !important; 
                min-height: 350px;
                order: 1 !important; 
                padding: 20px !important;
                margin-top: 10px;
            }
            .skills-container-inner {
              width: 100% !important;
              height: 100% !important;
              min-height: 0 !important;
              clip-path: none !important;
              padding: 0 !important;
            }
            .section-wrapper {
               padding: 0 !important;
            }
          }
          .custom-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2);
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: var(--accent-red);
          }
          @media (max-width: 768px) {
            .hud-header {
              padding: 10px 10px !important;
            }
            .hud-timer {
              display: none !important;
            }
            .section-scroll-container {
               padding: 1rem !important;
            }
            .hud-decoration {
              display: none !important;
            }
            .terminate-text {
              display: none !important;
            }
            .terminate-button {
              padding: 5px !important;
              border: none !important;
              background: transparent !important;
            }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/SkillsSection.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud-header",
                    style: {
                        padding: '12px 30px',
                        background: 'rgba(255, 0, 60, 0.15)',
                        borderBottom: '1px solid rgba(255, 0, 60, 0.4)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 30
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '4px 10px',
                                        background: 'var(--accent-red)',
                                        color: '#000',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        fontWeight: 900
                                    },
                                    children: "CRITICAL_ASSETS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-timer",
                                    style: {
                                        color: 'var(--accent-cyan)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        letterSpacing: '2px',
                                        opacity: 0.8
                                    },
                                    children: [
                                        "SEC_LEVEL_UNRESTRICTED // ",
                                        new Date().getHours(),
                                        ":",
                                        new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SkillsSection.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-decoration",
                                    style: {
                                        width: '10px',
                                        height: '2px',
                                        background: 'var(--accent-cyan)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-decoration",
                                    style: {
                                        width: '30px',
                                        height: '2px',
                                        background: 'var(--accent-red)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminate-button",
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        padding: '2px 8px',
                                        border: '1px solid rgba(255, 0, 60, 0.5)',
                                        background: 'rgba(255, 0, 60, 0.1)',
                                        fontSize: '0.6rem',
                                        color: 'var(--accent-red)',
                                        fontFamily: 'var(--font-mono)'
                                    },
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                                        onClose?.();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminate-text",
                                            children: "TERMINATE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14,
                                            color: "var(--accent-red)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 240,
                                            columnNumber: 67
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SkillsSection.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SkillsSection.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-layout",
                    style: {
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '70% 30%',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "custom-scroll",
                            style: {
                                overflowY: 'auto',
                                padding: '3rem 2rem',
                                borderRight: '1px solid rgba(255, 255, 255, 0.05)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        x: -20,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    style: {
                                        marginBottom: '2.5rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: 'var(--font-ui)',
                                            fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                                            color: 'var(--text-white)',
                                            textTransform: 'uppercase',
                                            lineHeight: 1,
                                            letterSpacing: '2px',
                                            position: 'relative',
                                            display: 'inline-block'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--accent-red)'
                                                },
                                                children: "TECHNICAL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " STACK"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tech-grid",
                                    children: skillCategories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-category-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        color: 'rgba(255, 255, 255, 0.4)',
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '0.7rem',
                                                        letterSpacing: '2px',
                                                        marginBottom: '20px',
                                                        paddingLeft: '5px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '4px',
                                                                height: '12px',
                                                                background: 'var(--accent-red)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        cat.icon,
                                                        " ",
                                                        cat.title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                cat.skills.map((skill, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "skill-item-container",
                                                        onMouseEnter: ()=>{
                                                            setHoveredSkill(skill.name);
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                                                        },
                                                        onMouseLeave: ()=>setHoveredSkill(null),
                                                        initial: {
                                                            opacity: 0,
                                                            x: -10
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            x: 0
                                                        },
                                                        transition: {
                                                            delay: 0.2 + i * 0.1 + idx * 0.05
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: 'var(--font-ui)',
                                                                            fontSize: '0.95rem',
                                                                            color: hoveredSkill === skill.name ? 'var(--accent-cyan)' : 'var(--text-white)',
                                                                            fontWeight: 600,
                                                                            letterSpacing: '1px'
                                                                        },
                                                                        children: skill.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 41
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: 'var(--font-mono)',
                                                                            fontSize: '0.65rem',
                                                                            color: 'var(--accent-red)',
                                                                            opacity: 0.6
                                                                        },
                                                                        children: [
                                                                            "MOD_",
                                                                            100 + idx
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 41
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "skill-progress-bar",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "skill-progress-segment",
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    animate: {
                                                                        width: `${skill.level}%`
                                                                    },
                                                                    transition: {
                                                                        duration: 1,
                                                                        delay: 0.5 + i * 0.1
                                                                    },
                                                                    style: {
                                                                        backgroundColor: hoveredSkill === skill.name ? 'var(--accent-cyan)' : 'var(--accent-red)',
                                                                        boxShadow: hoveredSkill === skill.name ? '0 0 15px var(--accent-cyan)' : '0 0 10px var(--accent-red)'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, skill.name, true, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, cat.title, true, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 281,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SkillsSection.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "info-panel",
                            style: {
                                background: 'rgba(5, 5, 5, 0.4)',
                                padding: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.65rem',
                                        color: 'var(--accent-red)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 361,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " MODULE_INSPECTOR_v4.0"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 353,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        padding: '20px',
                                        position: 'relative',
                                        background: 'rgba(0,0,0,0.2)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: -1,
                                                left: -1,
                                                width: '15px',
                                                height: '15px',
                                                borderLeft: '1px solid var(--accent-cyan)',
                                                borderTop: '1px solid var(--accent-cyan)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 377,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: -1,
                                                right: -1,
                                                width: '15px',
                                                height: '15px',
                                                borderRight: '1px solid var(--accent-cyan)',
                                                borderBottom: '1px solid var(--accent-cyan)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 378,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: hoveredSkill ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    scale: 0.95
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                style: {
                                                    width: '100%'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.6rem',
                                                            color: 'var(--accent-cyan)',
                                                            marginBottom: '5px',
                                                            textAlign: 'left',
                                                            letterSpacing: '2px'
                                                        },
                                                        children: "TARGET_IDENTIFIED:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                                        style: {
                                                            fontFamily: 'var(--font-ui)',
                                                            color: 'var(--text-white)',
                                                            fontSize: '1.8rem',
                                                            margin: '0 0 20px 0',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 900,
                                                            textAlign: 'left',
                                                            textShadow: '0 0 10px rgba(255,255,255,0.2)'
                                                        },
                                                        children: hoveredSkill
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '15px',
                                                            marginBottom: '25px'
                                                        },
                                                        children: [
                                                            {
                                                                label: 'VISUAL_FIDELITY',
                                                                val: 90 + Math.random() * 10
                                                            },
                                                            {
                                                                label: 'USER_EXPERIENCE',
                                                                val: 85 + Math.random() * 10
                                                            },
                                                            {
                                                                label: 'LOGIC_STRUCTURE',
                                                                val: 95 + Math.random() * 5
                                                            }
                                                        ].map((metric, mi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '5px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: 'var(--font-mono)',
                                                                                    fontSize: '0.55rem',
                                                                                    color: 'rgba(255,255,255,0.4)'
                                                                                },
                                                                                children: metric.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                                lineNumber: 422,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: 'var(--font-mono)',
                                                                                    fontSize: '0.55rem',
                                                                                    color: 'var(--accent-cyan)'
                                                                                },
                                                                                children: [
                                                                                    Math.floor(metric.val),
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                                lineNumber: 423,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: '2px',
                                                                            background: 'rgba(0, 243, 255, 0.1)',
                                                                            position: 'relative'
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            initial: {
                                                                                width: 0
                                                                            },
                                                                            animate: {
                                                                                width: `${metric.val}%`
                                                                            },
                                                                            style: {
                                                                                height: '100%',
                                                                                background: 'var(--accent-cyan)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                                                            lineNumber: 426,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, mi, true, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: 'rgba(255, 0, 60, 0.05)',
                                                            padding: '15px',
                                                            border: '1px solid rgba(255, 0, 60, 0.1)',
                                                            textAlign: 'left'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: 'var(--font-mono)',
                                                                color: 'rgba(255,255,255,0.8)',
                                                                fontSize: '0.75rem',
                                                                lineHeight: 1.5,
                                                                margin: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--accent-red)',
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    children: "// ANALYZING_ITEM: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                currentSkillData?.desc
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, hoveredSkill, true, {
                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                lineNumber: 382,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'relative'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                animate: {
                                                                    rotate: 360
                                                                },
                                                                transition: {
                                                                    repeat: Infinity,
                                                                    duration: 20,
                                                                    ease: "linear"
                                                                },
                                                                style: {
                                                                    border: '2px dashed rgba(255, 0, 60, 0.2)',
                                                                    borderRadius: '50%',
                                                                    padding: '20px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    animate: {
                                                                        rotate: -360
                                                                    },
                                                                    transition: {
                                                                        repeat: Infinity,
                                                                        duration: 10,
                                                                        ease: "linear"
                                                                    },
                                                                    style: {
                                                                        border: '1px solid var(--accent-red)',
                                                                        borderRadius: '50%',
                                                                        padding: '15px',
                                                                        opacity: 0.5
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                        size: 40,
                                                                        color: "var(--accent-red)",
                                                                        style: {
                                                                            opacity: 0.8
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                animate: {
                                                                    opacity: [
                                                                        0.3,
                                                                        1,
                                                                        0.3
                                                                    ]
                                                                },
                                                                transition: {
                                                                    repeat: Infinity,
                                                                    duration: 2
                                                                },
                                                                style: {
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    left: '50%',
                                                                    transform: 'translate(-50%, -50%)',
                                                                    width: '100px',
                                                                    height: '1px',
                                                                    background: 'var(--accent-cyan)',
                                                                    boxShadow: '0 0 10px var(--accent-cyan)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.65rem',
                                                            letterSpacing: '2px',
                                                            color: 'rgba(255,255,255,0.4)'
                                                        },
                                                        children: [
                                                            "ESTABLISHING_LINK...",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DecipherText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                text: "NEURAL_INTERFACE_READY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsSection.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, "idle", true, {
                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                lineNumber: 455,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 380,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '0.6rem',
                                                color: 'var(--text-dim)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "SYSTEM_HEALTH"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--accent-cyan)'
                                                    },
                                                    children: "OPTIMAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 491,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: '4px',
                                                background: 'rgba(255,255,255,0.05)',
                                                display: 'flex'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '90%',
                                                    background: 'var(--accent-cyan)',
                                                    boxShadow: '0 0 10px var(--accent-cyan)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsSection.tsx",
                                                lineNumber: 496,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 495,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '5px',
                                                marginTop: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 12,
                                                    color: "var(--accent-red)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '0.6rem',
                                                        color: 'var(--accent-red)'
                                                    },
                                                    children: "OVERCLOCK_ACTIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SkillsSection.tsx",
                                            lineNumber: 498,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SkillsSection.tsx",
                                    lineNumber: 490,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SkillsSection.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SkillsSection.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SkillsSection.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SkillsSection.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SkillsSection;
}),
"[project]/src/components/ProjectsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const metadeskImage = '/assets/image/metadesk.webp';
const nfticketImage = '/assets/image/nfticket.webp';
const fenceImage = '/assets/image/fence.webp';
const easImage = '/assets/image/eas.webp';
const vikaasaImage = '/assets/image/vikaasa.webp';
const heathhouseImage = '/assets/image/heathhouse.webp';
const alphaImage = '/assets/image/alpha.webp';
const govtImage = '/assets/image/govt.webp';
const autopostImage = '/assets/image/autopost.webp';
const humAineImage = '/assets/image/humAine.webp';
const speedTreadImage = '/assets/image/speed-tread.webp';
const ProjectsSection = ({ onClose, onMinimize })=>{
    const projects = [
        {
            title: 'Renzy',
            year: '2025',
            category: 'NestJS application',
            description: 'Developed a web-based FinTech application that allows users to pay rent using credit cards. Enabled rent payments via direct bank transfers to landlord accounts or by mailing physical rent checks.',
            responsibilities: [
                'Designed and developed a responsive frontend using React.js.',
                'Integrated frontend with NestJS backend APIs for secure and reliable transaction processing.',
                'Owned UI implementation, API integration, and frontend feature development.',
                'Collaborated closely with the QA team to identify, debug, and resolve functional and performance issues.',
                'Worked with cross-functional teams (backend, QA, product, stakeholders) to ensure smooth delivery within timelines and scope.',
                'Contributed to improving user experience and payment flow reliability through iterative enhancements.'
            ],
            tech: [
                'React.js',
                'NestJS',
                'FinTech',
                'Payments',
                'Agile'
            ],
            image: null,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'CyberSafe Advisor',
            year: '2025',
            category: 'Next and AI web application',
            description: 'Built an AI-driven web application that helps individuals who face cyber scams or online incidents and are unsure about the next steps to take. Provides users with step-by-step guidance on incident response, prevention of future attacks, and how to report cyber crimes. Includes sample FIR (First Information Report) formats and official reporting guidance to support users during real-world cyber incidents.',
            responsibilities: [
                'Designed and developed the frontend application using Next.js, ensuring a user-friendly and accessible experience.',
                'Integrated the application with Gemini AI models to generate contextual, real-time advice based on the user’s reported issue.',
                'Built AI interaction flows to provide: Recommended next actions, Preventive measures to avoid future incidents, Guidance on legal reporting procedures.',
                'Owned frontend architecture, UI development, and AI model integration.',
                'Led testing, debugging, and issue resolution to ensure reliability and accuracy of AI-generated responses.',
                'Designed the end-to-end technical architecture, enabling scalable and modular AI pipelines for real-time content analysis.',
                'Led deployment and delivery, aligning technical outcomes with stakeholder and industry-specific requirements.',
                'Delivered a high-impact solution supporting digital trust, misinformation prevention, and cyber safety across multiple sectors.'
            ],
            tech: [
                'Next.js',
                'TypeScript',
                'TailwindCSS',
                'Gemini AI',
                'Genkit'
            ],
            image: null,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'Speed Tread',
            year: '2025',
            category: 'Next.js application',
            description: 'Developed a web-based application to manage financial transactions, currency conversions, and training workflows for users across multiple time zones. Designed to support role-based access control, allowing different user roles to access specific screens, modules, and features. Enabled seamless usage by global users, handling time-zone differences and real-time data consistency.',
            responsibilities: [
                'Designed and developed the frontend UI using React.js, ensuring usability across regions and time zones.',
                'Implemented API integration to support transaction processing, currency conversion, and training data management.',
                'Built role-based access control (RBAC), restricting screens and features based on user roles.',
                'Led and coordinated Frontend, Backend, and QA teams, ensuring smooth collaboration and timely delivery.',
                'Planned and delivered sprint tasks, collected QA feedback, and resolved issues aligned with release timelines.',
                'Provided production support, quickly addressing live issues and ensuring system stability.',
                'Collaborated with DevOps teams to support deployments across development, staging, and production environments.',
                'Contributed to AWS-based deployments, supporting scalability and reliability.'
            ],
            tech: [
                'React.js',
                'API Integration',
                'RBAC',
                'AWS',
                'CI/CD',
                'Agile'
            ],
            image: speedTreadImage,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'HumAine',
            year: '2025',
            category: 'Next.js application',
            description: 'Built a powerful AI-driven platform that detects and verifies the authenticity of multiple content types—including text, images, and videos—to support industries such as media, marketing, education, cybersecurity, and HR. The platform was developed using Next.js as a web application.',
            responsibilities: [
                'Led R&D efforts focused on AI-based detection of fake or manipulated content (text, images, and videos), ensuring high accuracy and reliability.',
                'Designed the architecture and end-to-end technical strategy to support scalable and modular AI pipelines for real-time content analysis.',
                'Integrated Gemini AI (via Google Genkit) to handle advanced detection tasks such as: AI-generated text classification, Deepfake or altered image detection, Video authenticity analysis.',
                'Developed core application features using Next.js, TypeScript, and TailwindCSS, ensuring a responsive and user-friendly interface.',
                'Led deployment and delivery of the project, aligning technical outcomes with stakeholder and industry-specific needs.',
                'Delivered a high-value solution used across various sectors to combat misinformation, ensure content integrity, and support digital trust.'
            ],
            tech: [
                'Next.js',
                'Gemini AI',
                'TypeScript',
                'TailwindCSS',
                'Shadcn UI'
            ],
            image: humAineImage,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'Auto Post',
            year: '2025',
            category: 'Next.js application',
            description: 'Built a web application for social media automation that integrates AI (Gemini) and n8n workflows. The application can generate content and images automatically, or allow users to manually add post details, and then schedule or post directly to multiple social networks.',
            responsibilities: [
                'Led the research and development (R&D) efforts for this project, focusing on the integration of AI and automation to create a seamless user experience.',
                'Architected the application and designed its overall flow, ensuring an efficient, scalable, and intuitive system for users.',
                'Developed the AI-powered features using Gemini AI, enabling automatic content generation, including text and images, based on user-defined themes or keywords.',
                'Integrated n8n to automate backend workflows, allowing the application to schedule and post directly to platforms like Facebook, Twitter, LinkedIn, etc., without manual intervention.',
                'Managed project progress by tracking development milestones, ensuring alignment with business objectives, and delivering iterative improvements.',
                'Oversaw testing and debugging phases, addressing issues related to integration between AI and social media APIs, as well as enhancing the overall user experience.',
                'Delivered regular updates and progress reports, ensuring stakeholders were aligned on the status and improvements made to the platform.'
            ],
            tech: [
                'Next.js',
                'Gemini AI',
                'n8n',
                'AWS',
                'TypeScript',
                'TailwindCSS'
            ],
            image: autopostImage,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'GOVT',
            year: '2024',
            category: 'Web Site',
            description: 'Developed a dynamic, responsive, and animation-rich website that delivered real-time content updates with smooth transitions and user interactions. The website focused on delivering a modern, interactive experience. Key features included content loader animations, scroll-based effects, and transition components to enhance user engagement. The project was built using a Gsap for animations and Wordpress as a headless CMS to manage and deliver content efficiently.',
            responsibilities: [
                'Led the end-to-end development of the project, guiding a frontend team to implement advanced UI animations and real-time content delivery.',
                'Architected and built a responsive design that dynamically loads content from APIs and displays it with smooth UI animations to enhance user engagement.',
                'Implemented content loader animations, scroll-based effects, and transition components to create a modern, engaging user experience.',
                'Ensured cross-browser compatibility and mobile responsiveness using best practices in CSS and component-based frontend frameworks.',
                'Managed project timelines, delegated tasks to the team, and ensured the project met performance, accessibility, and design standards.',
                'Collaborated with backend developers and designers to create a cohesive, scalable frontend system for ongoing content updates.'
            ],
            tech: [
                'Wordpress',
                'CSS',
                'GSAP',
                'Javascript'
            ],
            image: govtImage,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'Alpha Deserve',
            year: '2024',
            category: 'Web Site',
            description: 'Alpha Deserve, a responsive, multi-page static website using React.js. This project combines modern design with seamless functionality, ensuring optimal performance and adaptability across devices. Built with a focus on user experience, the website efficiently showcases content while leveraging React.js for enhanced interactive elements.',
            responsibilities: [
                'Developed UI for all screens Figma to web screen with responsive screen.',
                'Conducted testing, identified issues, and implemented fixes.',
                'Guided team members and provided training to maintain code standards.'
            ],
            tech: [
                'React JS',
                'HTML',
                'CSS',
                'Javascript'
            ],
            image: alphaImage,
            links: {
                demo: 'https://alphadeserve.com/',
                github: '#'
            }
        },
        {
            title: 'Heathhouseprepschool',
            year: '2024',
            category: 'Web Site',
            description: 'Developed a multi-page CMS website for Heathhouseprepschool, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.',
            responsibilities: [
                'Development of technical designs for a single-page CMS website.',
                'Ensured the website was fully mobile responsive.',
                'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
            ],
            tech: [
                'WordPress',
                'Divi Builder',
                'HTML',
                'CSS',
                'UI Developer'
            ],
            image: heathhouseImage,
            links: {
                demo: 'https://heathhouseprepschool.com/',
                github: '#'
            }
        },
        {
            title: 'Vikaasa',
            year: '2024',
            category: 'Web Site',
            description: 'Developed a multi-page CMS website for Vikaasa, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.',
            responsibilities: [
                'Development of technical designs for multiple pages CMS website development.',
                'Ensured the website was fully mobile responsive.',
                'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
            ],
            tech: [
                'Wordpress',
                'Divi Builder',
                'UI Developer'
            ],
            image: vikaasaImage,
            links: {
                demo: 'https://vikaasa.org/',
                github: '#'
            }
        },
        {
            title: 'Emirates American School',
            year: '2024',
            category: 'Web Site',
            description: 'Developed a single-page website for Emirates American School, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with HTML, CSS, JQuery, and Git, and conducting thorough testing and debugging.',
            responsibilities: [
                'Development of technical designs for single page website development.',
                'Ensured the website was fully mobile responsive.',
                'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
            ],
            tech: [
                'HTML',
                'CSS',
                'JQuery',
                'Git',
                'UI Developer'
            ],
            image: easImage,
            links: {
                demo: 'https://eas.deweyolivia.work/',
                github: '#'
            }
        },
        {
            title: 'Fenceabroad',
            year: '2024',
            category: 'Web Site',
            description: 'Developed a multi-page CMS website for Fenceabroad, ensuring it was fully mobile responsive. The project involved creating technical designs, developing the site with Wordpress and the Divi builder, and conducting thorough testing and debugging.',
            responsibilities: [
                'Development of technical designs for multiple pages CMS website development.',
                'Ensured the website was fully mobile responsive.',
                'Conducted testing and debugging to ensure a high-quality, bug-free launch.'
            ],
            tech: [
                'Wordpress',
                'Divi Builder',
                'UI Developer'
            ],
            image: fenceImage,
            links: {
                demo: 'https://www.fenceabroad.com/',
                github: '#'
            }
        },
        {
            title: 'NFTICKET',
            year: '2023',
            category: 'Web3-Web Site',
            description: 'The NFTicket event ticket was designed for a digital event. The website is built on React and Mindbase blockchain technology. Users can use cryptocurrency tokens (NEAR) to purchase tickets and create event tokens on the website.',
            responsibilities: [
                'Developed user interfaces for multiple pages, translating designs from Figma into responsive web layouts.',
                'Conducted thorough testing of the application, identified issues, and implemented fixes to ensure smooth functionality.',
                'Integrated the web application with Mind-based blockchain technology for seamless interaction and data management.'
            ],
            tech: [
                'React.js',
                'Redux',
                'Mindbase',
                'Metamask'
            ],
            image: nfticketImage,
            links: {
                demo: '',
                github: '#'
            }
        },
        {
            title: 'Metadesk',
            year: '2023',
            category: 'Web Application',
            description: 'Metadesk is a platform for managing internal communications and materials activities, tracking our progress and ensuring all team members are aligned.',
            responsibilities: [
                'Developed the responsive web application, ensuring a consistent user experience across all devices.',
                'Conducted thorough testing, identified issues, and implemented fixes to maintain smooth functionality.',
                'Connected the backend to a centralized WooCommerce database, ensuring seamless data synchronization and unified management.'
            ],
            tech: [
                'React.js',
                'SASS',
                'Redux'
            ],
            image: metadeskImage,
            links: {
                demo: '',
                github: '#'
            }
        }
    ];
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (event)=>{
            if (event.key === 'Escape') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                setSelectedProject(null);
            }
        };
        if (selectedProject) {
            window.addEventListener('keydown', handleEsc);
        }
        return ()=>{
            window.removeEventListener('keydown', handleEsc);
        };
    }, [
        selectedProject
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-wrapper",
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.5
                },
                className: "cyber-border-animated projects-container-inner",
                style: {
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '1280px',
                    width: 'min(98%, 1280px)',
                    position: 'relative',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
                    height: 'min(76vh, 700px)',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          div::-webkit-scrollbar { display: none; }
          @media (max-width: 1024px) {
            .section-wrapper { padding: 0 !important; }
            .projects-container-inner {
              width: 100% !important;
              height: 100% !important;
              min-height: 0 !important;
              clip-path: none !important;
              padding: 0 !important;
            }
          }
          @media (max-width: 768px) {
            .hud-header {
              padding: 10px 10px !important;
            }
            .hud-timer {
              display: none !important;
            }
            .section-scroll-container {
               padding: 1rem !important;
            }
            .hud-decoration {
              display: none !important;
            }
            .terminate-text {
              display: none !important;
            }
            .terminate-button {
              padding: 5px !important;
              border: none !important;
              background: transparent !important;
            }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hud-header",
                        style: {
                            padding: '12px 30px',
                            background: 'rgba(255, 0, 60, 0.15)',
                            borderBottom: '1px solid rgba(255, 0, 60, 0.4)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 30
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '4px 10px',
                                            background: 'var(--accent-red)',
                                            color: '#000',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.7rem',
                                            fontWeight: 900
                                        },
                                        children: "PROJECT_ARCHIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hud-timer",
                                        style: {
                                            color: 'var(--accent-cyan)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.7rem',
                                            letterSpacing: '2px',
                                            opacity: 0.8
                                        },
                                        children: [
                                            "SEC_LEVEL_UNRESTRICTED // ",
                                            new Date().getHours(),
                                            ":",
                                            new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '10px',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hud-decoration",
                                        style: {
                                            width: '10px',
                                            height: '2px',
                                            background: 'var(--accent-cyan)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hud-decoration",
                                        style: {
                                            width: '30px',
                                            height: '2px',
                                            background: 'var(--accent-red)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "terminate-button",
                                        style: {
                                            cursor: 'pointer',
                                            opacity: 0.8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            padding: '2px 8px',
                                            border: '1px solid rgba(255, 0, 60, 0.5)',
                                            background: 'rgba(255, 0, 60, 0.1)',
                                            fontSize: '0.6rem',
                                            color: 'var(--accent-red)',
                                            fontFamily: 'var(--font-mono)'
                                        },
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                                            onClose?.();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "terminate-text",
                                                children: "TERMINATE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 14,
                                                color: "var(--accent-red)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 355,
                                                columnNumber: 67
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-scroll-container",
                        style: {
                            flex: 1,
                            minHeight: 0,
                            overflowY: 'auto',
                            padding: 'max(1rem, 4vw)',
                            scrollbarWidth: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    x: -20,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.2
                                },
                                style: {
                                    marginBottom: '1rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: 'var(--font-ui)',
                                        fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                                        color: 'var(--text-white)',
                                        textTransform: 'uppercase',
                                        lineHeight: 1,
                                        letterSpacing: '2px',
                                        position: 'relative',
                                        display: 'inline-block'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--accent-red)'
                                            },
                                            children: "SELECTED"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " PROJECTS"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.3
                                },
                                style: {
                                    color: 'var(--text-dim)',
                                    marginBottom: '2rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.9rem'
                                },
                                children: "Deploying scalable solutions across the digital frontier."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `
          .custom-scroll::-webkit-scrollbar { display: none; }
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
          }
          @media (max-width: 1024px) {
            .projects-container-inner {
              height: 100% !important;
              min-height: 0 !important;
              clip-path: none !important;
            }
          }
        `
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: 'max(1rem, 2vw)'
                                },
                                children: projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: project,
                                        index: i,
                                        onClick: ()=>setSelectedProject(project)
                                    }, i, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 423,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                    setSelectedProject(null);
                },
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.92)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    onClick: (e)=>e.stopPropagation(),
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "cyber-border-animated",
                    style: {
                        background: 'linear-gradient(135deg, rgba(8, 8, 8, 0.98) 0%, rgba(15, 15, 15, 0.99) 100%)',
                        maxWidth: '1000px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)',
                        boxShadow: '0 0 100px rgba(255, 0, 60, 0.1), inset 0 0 40px rgba(0, 243, 255, 0.03)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "corner-bracket tl",
                            style: {
                                position: 'absolute',
                                top: '15px',
                                left: '15px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 469,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "corner-bracket tr",
                            style: {
                                position: 'absolute',
                                top: '15px',
                                right: '15px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 470,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "corner-bracket bl",
                            style: {
                                position: 'absolute',
                                bottom: '15px',
                                left: '15px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 471,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "corner-bracket br",
                            style: {
                                position: 'absolute',
                                bottom: '15px',
                                right: '15px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 472,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                padding: 'clamp(0.8rem, 2vw, 1.5rem) clamp(1rem, 3vw, 3rem)',
                                background: 'rgba(10, 10, 10, 0.6)',
                                borderBottom: '1px solid rgba(0, 243, 255, 0.15)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                zIndex: 10,
                                backdropFilter: 'blur(10px)',
                                flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                                gap: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--accent-cyan)',
                                        fontSize: window.innerWidth < 640 ? '0.7rem' : '0.85rem',
                                        letterSpacing: '3px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: '4px',
                                                height: '4px',
                                                background: 'var(--accent-red)',
                                                display: 'inline-block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 497,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "CORE_SYSTEM_INTERFACE // ",
                                        selectedProject.year || '2025'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 488,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                                        setSelectedProject(null);
                                    },
                                    style: {
                                        background: 'transparent',
                                        border: '1px solid var(--accent-red)',
                                        color: 'var(--accent-red)',
                                        fontFamily: 'var(--font-mono)',
                                        padding: '0.5rem 1rem',
                                        cursor: 'pointer',
                                        fontSize: '0.7rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        transition: 'all 0.3s ease',
                                        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = 'rgba(255, 0, 60, 0.1)';
                                        e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 60, 0.2)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.boxShadow = 'none';
                                    },
                                    children: "DISCONNECT [ESC]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 500,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 475,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "custom-scrollbar",
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: 'clamp(1rem, 3vw, 2rem) clamp(1rem, 4vw, 3rem)',
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'repeating-linear-gradient(transparent 0, rgba(0, 243, 255, 0.01) 1px, transparent 2px)',
                                        pointerEvents: 'none',
                                        zIndex: 2,
                                        opacity: 0.5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 539,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedProject.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-tech-wrapper",
                                    style: {
                                        marginBottom: '2.5rem',
                                        border: '1px solid rgba(0, 243, 255, 0.1)',
                                        boxShadow: '0 0 30px rgba(0, 243, 255, 0.05)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedProject.image && typeof selectedProject.image === 'object' ? selectedProject.image.src : selectedProject.image,
                                            alt: selectedProject.title,
                                            style: {
                                                width: '100%',
                                                height: 'auto',
                                                display: 'block',
                                                opacity: 0.9,
                                                transition: 'opacity 0.3s ease'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 554,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "scanline-anim"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 566,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-bracket tl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 567,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-bracket tr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 568,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-bracket bl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 569,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-bracket br"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 570,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "system-status-overlay",
                                            style: {
                                                opacity: 1,
                                                transform: 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--accent-red)'
                                                    },
                                                    children: "TARGET_ID:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                selectedProject.title.toUpperCase(),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 133
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--accent-cyan)'
                                                    },
                                                    children: "ACCESS:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " GRANTED",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 101
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--text-dim)'
                                                    },
                                                    children: "ENCRYPT:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " 256-BIT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                            lineNumber: 572,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 549,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'minmax(0, 1fr)',
                                        gap: '2.5rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.5rem',
                                                    marginBottom: '2rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                                        initial: {
                                                            opacity: 0,
                                                            x: -20
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            x: 0
                                                        },
                                                        style: {
                                                            fontFamily: 'var(--font-ui)',
                                                            fontSize: 'clamp(2rem, 8vw, 4rem)',
                                                            color: 'var(--text-white)',
                                                            margin: 0,
                                                            textTransform: 'uppercase',
                                                            lineHeight: '1.1',
                                                            letterSpacing: '2px',
                                                            textShadow: '0 0 30px rgba(0, 243, 255, 0.4)',
                                                            wordBreak: 'break-word'
                                                        },
                                                        children: selectedProject.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    selectedProject.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '40px',
                                                                    height: '1px',
                                                                    background: 'var(--accent-cyan)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'var(--font-mono)',
                                                                    color: 'var(--accent-cyan)',
                                                                    fontSize: '0.9rem',
                                                                    letterSpacing: '4px',
                                                                    textTransform: 'uppercase',
                                                                    opacity: 0.8
                                                                },
                                                                children: selectedProject.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 582,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '1rem',
                                                    marginBottom: '2.5rem',
                                                    flexWrap: 'wrap'
                                                },
                                                children: selectedProject.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: 'rgba(0, 243, 255, 0.05)',
                                                            border: '1px solid rgba(0, 243, 255, 0.25)',
                                                            padding: '0.5rem 1.2rem',
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.85rem',
                                                            color: 'var(--accent-cyan)',
                                                            position: 'relative',
                                                            overflow: 'hidden',
                                                            boxShadow: '0 0 15px rgba(0, 243, 255, 0.05)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: '4px',
                                                                    height: '4px',
                                                                    background: 'var(--accent-red)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            t
                                                        ]
                                                    }, t, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 621,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'rgba(255, 255, 255, 0.02)',
                                                    padding: '2rem',
                                                    borderLeft: '4px solid var(--accent-red)',
                                                    position: 'relative',
                                                    marginBottom: '2.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            color: 'var(--text-white)',
                                                            fontFamily: 'var(--font-ui)',
                                                            fontSize: '1.2rem',
                                                            marginBottom: '1rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '2px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                                size: 18,
                                                                color: "var(--accent-red)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " MISSION_METADATA.LOG"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            lineHeight: '1.8',
                                                            fontSize: '1.1rem',
                                                            margin: 0,
                                                            fontFamily: 'var(--font-main)'
                                                        },
                                                        children: selectedProject.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 650,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedProject.responsibilities && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '2.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            color: 'var(--text-white)',
                                                            fontFamily: 'var(--font-ui)',
                                                            fontSize: '1.2rem',
                                                            marginBottom: '1.5rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '2px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                size: 18,
                                                                color: "var(--accent-cyan)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " SYSTEM_DIRECTIVES"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '1rem'
                                                        },
                                                        children: selectedProject.responsibilities.map((resp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    delay: idx * 0.1
                                                                },
                                                                style: {
                                                                    color: 'rgba(255, 255, 255, 0.65)',
                                                                    lineHeight: '1.7',
                                                                    padding: '1rem',
                                                                    background: 'rgba(255, 255, 255, 0.02)',
                                                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                                                    fontSize: '1rem',
                                                                    display: 'flex',
                                                                    gap: '15px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: 'var(--accent-cyan)',
                                                                            fontFamily: 'var(--font-mono)',
                                                                            fontSize: '0.8rem',
                                                                            opacity: 0.5
                                                                        },
                                                                        children: [
                                                                            "[0",
                                                                            idx + 1,
                                                                            "]"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                        lineNumber: 718,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    resp
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 682,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '1.5rem',
                                                    marginTop: '3rem'
                                                },
                                                children: selectedProject.links && selectedProject.links.demo && selectedProject.links.demo !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                                    href: selectedProject.links.demo,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])(),
                                                    whileHover: {
                                                        scale: 1.05,
                                                        boxShadow: '0 0 30px rgba(255, 0, 60, 0.5)'
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    style: {
                                                        padding: '1.2rem 3rem',
                                                        background: 'var(--accent-red)',
                                                        color: '#000',
                                                        textDecoration: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '15px',
                                                        fontWeight: 900,
                                                        fontFamily: 'var(--font-ui)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '2px',
                                                        clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " INITIALIZE_LIVE_SYSTEM"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 733,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 581,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 580,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 529,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 448,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 432,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ProjectCard = ({ project, index, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.4 + index * 0.1
        },
        whileHover: {
            y: -5,
            borderColor: 'var(--accent-red)'
        },
        onClick: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
            onClick();
        },
        style: {
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 794,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: 'var(--text-white)',
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: '1.2rem',
                                    textTransform: 'uppercase',
                                    wordBreak: 'break-word',
                                    letterSpacing: '1px'
                                },
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 798,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--accent-red)',
                                    fontSize: '0.7rem',
                                    opacity: 0.6
                                },
                                children: project.year
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 808,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 797,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontFamily: 'var(--font-main)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        },
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 816,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 796,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            marginBottom: '1.5rem'
                        },
                        children: [
                            project.tech.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.65rem',
                                        color: 'var(--accent-cyan)',
                                        background: 'rgba(0, 243, 255, 0.05)',
                                        padding: '0.2rem 0.5rem',
                                        border: '1px solid rgba(0, 243, 255, 0.1)',
                                        fontFamily: 'var(--font-mono)',
                                        letterSpacing: '0.5px'
                                    },
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 834,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            project.tech.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.7rem',
                                    color: 'var(--text-dim)',
                                    alignSelf: 'center',
                                    opacity: 0.5
                                },
                                children: [
                                    "+",
                                    project.tech.length - 3
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 847,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 832,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tech-link",
                        style: {
                            color: 'var(--accent-red)',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            fontFamily: 'var(--font-mono)'
                        },
                        children: [
                            "Initialize_System ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 865,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 851,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 831,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 774,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProjectsSection;
}),
"[project]/src/components/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
const TacticalLoading = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '180px',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                },
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1px dashed rgba(0, 243, 255, 0.2)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ],
                    boxShadow: [
                        '0 0 10px rgba(0, 243, 255, 0.2)',
                        '0 0 30px rgba(0, 243, 255, 0.5)',
                        '0 0 10px rgba(0, 243, 255, 0.2)'
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity
                },
                style: {
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                    size: 30,
                    color: "var(--accent-cyan)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            [
                0,
                90,
                180,
                270
            ].map((angle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    style: {
                        position: 'absolute',
                        width: '140px',
                        height: '140px',
                        transform: `rotate(${angle}deg)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '6px',
                            height: '6px',
                            background: 'var(--accent-cyan)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--accent-cyan)',
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    top: [
                        '10%',
                        '90%',
                        '10%'
                    ],
                    opacity: [
                        0,
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                style: {
                    position: 'absolute',
                    left: '10%',
                    right: '10%',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 0 15px white',
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TransmissionLogs = ()=>{
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const possibleLogs = [
        "ENCRYPTING_PACKETS...",
        "ESTABLISHING_VPN_TUNNEL...",
        "SOURCE_HANDSHAKE_INITIATED",
        "ROUTING_THROUGH_SECURE_NODES",
        "PARITY_CHECK_VALIDATED",
        "BUFFERING_PAYLOAD_DATA",
        "UPLINK_STRENGTH_OPTIMAL",
        "BYPASSING_FIREWALL_PROTOCOL"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setLogs((prev)=>[
                    possibleLogs[Math.floor(Math.random() * possibleLogs.length)],
                    ...prev
                ].slice(0, 5));
        }, 800);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--accent-cyan)',
            textAlign: 'left',
            opacity: 0.6,
            height: '80px',
            overflow: 'hidden',
            marginTop: '1.5rem',
            padding: '10px',
            background: 'rgba(0, 243, 255, 0.05)',
            borderLeft: '2px solid var(--accent-cyan)'
        },
        children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '4px'
                },
                children: `> ${log}`
            }, i, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ContactSection = ({ onClose, onMinimize })=>{
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: null,
        show: false
    });
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { register, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (statusMessage.type === 'loading' && statusMessage.show) {
            setProgress(0);
            interval = setInterval(()=>{
                setProgress((prev)=>prev < 95 ? prev + Math.random() * 5 : prev);
            }, 100);
        } else {
            setProgress(0);
        }
        return ()=>clearInterval(interval);
    }, [
        statusMessage.type,
        statusMessage.show
    ]);
    const onSubmit = async (data)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
        setIsSending(true);
        setStatusMessage({
            type: 'loading',
            show: true
        });
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            setStatusMessage({
                type: 'success',
                show: true
            });
            reset();
            setTimeout(()=>setStatusMessage((prev)=>({
                        ...prev,
                        show: false
                    })), 5000);
        } catch (error) {
            console.error('Email Error:', error);
            setStatusMessage({
                type: 'error',
                show: true,
                customMsg: 'TRANSMISSION_FAILED: SERVER_RELAY_ERROR'
            });
        } finally{
            setIsSending(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-wrapper",
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '20px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: 0.5
            },
            className: "cyber-border-animated contact-container-inner",
            style: {
                background: 'rgba(5, 5, 5, 0.95)',
                backdropFilter: 'blur(15px)',
                maxWidth: '1280px',
                width: 'min(98%, 1280px)',
                position: 'relative',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))',
                height: 'min(82vh, 750px)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 0, 60, 0.2)',
                top: "20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          div::-webkit-scrollbar { display: none; }
          @media (max-width: 1024px) {
            .section-wrapper { padding: 0 !important; }
            .contact-container-inner {
              width: 100% !important;
              height: 100% !important;
              min-height: 0 !important;
              padding: 0 !important;
              clip-path: none !important;
              border: none !important;
            }
          }
          @media (max-width: 768px) {
            .hud-header {
              padding: 10px 10px !important;
            }
            .hud-timer {
              display: none !important;
            }
            .section-scroll-container {
               padding: 1rem !important;
            }
            .hud-decoration {
              display: none !important;
            }
            .terminate-text {
              display: none !important;
            }
            .terminate-button {
              padding: 5px !important;
              border: none !important;
              background: transparent !important;
            }
            .submit-btn {
              padding: 0.8rem !important;
              font-size: 0.8rem !important;
            }
          }
          @media (max-width: 465px) {
            .contact-container-inner {
              height: 100vh !important;
              max-height: 100vh !important;
              overflow: hidden !important;
            }
            .section-scroll-container {
               overflow-y: auto !important;
               padding-bottom: 80px !important;
            }
          }
          .error-text {
            color: #ff003c;
            font-size: 0.7rem;
            font-family: var(--font-mono);
            margin-top: 0.2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            alignItems: center;
            gap: 5px;
          }
          /* ... other styles ... */
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 232,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud-header",
                    style: {
                        padding: '12px 30px',
                        background: 'rgba(255, 0, 60, 0.15)',
                        borderBottom: '1px solid rgba(255, 0, 60, 0.4)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 50
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '4px 15px',
                                        background: 'var(--accent-red)',
                                        color: '#000',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        fontWeight: 900,
                                        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
                                        boxShadow: '0 0 15px rgba(255, 0, 60, 0.4)'
                                    },
                                    children: "COMMS_INTERFACE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-timer",
                                    style: {
                                        color: 'var(--accent-cyan)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.7rem',
                                        letterSpacing: '2px',
                                        opacity: 0.8
                                    },
                                    children: [
                                        "ENCRYPTED_LINK // ",
                                        new Date().getHours(),
                                        ":",
                                        new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-decoration",
                                    style: {
                                        width: '10px',
                                        height: '2px',
                                        background: 'var(--accent-cyan)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-decoration",
                                    style: {
                                        width: '30px',
                                        height: '2px',
                                        background: 'var(--accent-red)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminate-button",
                                    style: {
                                        cursor: 'pointer',
                                        opacity: 0.8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        border: '1px solid rgba(255, 0, 60, 0.5)',
                                        padding: '2px 8px',
                                        background: 'rgba(255, 0, 60, 0.1)',
                                        fontSize: '0.6rem',
                                        color: 'var(--accent-red)',
                                        fontFamily: 'var(--font-mono)'
                                    },
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                                        onClose?.();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminate-text",
                                            children: "TERMINATE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14,
                                            color: "var(--accent-red)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 344,
                                            columnNumber: 67
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-scroll-container",
                    style: {
                        flex: 1,
                        minHeight: 0,
                        overflowY: 'auto',
                        padding: 'max(2rem, 5vw)',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '4rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: 'var(--font-ui)',
                                            fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                                            color: 'var(--text-white)',
                                            textTransform: 'uppercase',
                                            lineHeight: 1.2,
                                            letterSpacing: '2px',
                                            position: 'relative',
                                            display: 'inline-block',
                                            marginBottom: '2rem',
                                            marginTop: '1rem',
                                            paddingTop: '0.2em'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--accent-red)'
                                                },
                                                children: "INITIATE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 381,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " UPLINK"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 368,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    color: "var(--accent-cyan)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 35
                                                }, void 0),
                                                label: "P2P_MAIL",
                                                value: "muralinot6@gmail.com",
                                                href: "mailto:muralinot6@gmail.com",
                                                delay: 0.1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 385,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                    color: "var(--accent-cyan)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 35
                                                }, void 0),
                                                label: "LINKED_ID",
                                                value: "linkedin.com/in/murali...",
                                                href: "https://linkedin.com/in/murali-dharan-m-897243195",
                                                delay: 0.2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 392,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    color: "var(--accent-cyan)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 35
                                                }, void 0),
                                                label: "GEO_COORD",
                                                value: "Salem, Tamil Nadu, IN.",
                                                delay: 0.3
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 399,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 384,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 364,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                style: {
                                    background: 'rgba(10, 10, 10, 0.4)',
                                    padding: '2.5rem',
                                    border: '1px solid rgba(0, 243, 255, 0.1)',
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: -1,
                                            left: -1,
                                            width: 20,
                                            height: 20,
                                            borderTop: '2px solid var(--accent-cyan)',
                                            borderLeft: '2px solid var(--accent-cyan)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 419,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: -1,
                                            right: -1,
                                            width: 20,
                                            height: 20,
                                            borderBottom: '2px solid var(--accent-cyan)',
                                            borderRight: '2px solid var(--accent-cyan)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 420,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit(onSubmit),
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.6rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.7rem',
                                                            color: 'var(--accent-red)',
                                                            letterSpacing: '2px'
                                                        },
                                                        children: "// ORIGIN_ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ...register('name', {
                                                            required: 'REQUIRED'
                                                        }),
                                                        type: "text",
                                                        placeholder: "ENTER_NAME",
                                                        className: `cyber-input ${errors.name ? 'error' : ''}`,
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 423,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.6rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.7rem',
                                                            color: 'var(--accent-red)',
                                                            letterSpacing: '2px'
                                                        },
                                                        children: "// COMMS_ADDR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ...register('email', {
                                                            required: 'REQUIRED',
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: 'INVALID'
                                                            }
                                                        }),
                                                        type: "email",
                                                        placeholder: "USER@TECH.COM",
                                                        className: `cyber-input ${errors.email ? 'error' : ''}`,
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 436,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.6rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.7rem',
                                                            color: 'var(--accent-red)',
                                                            letterSpacing: '2px'
                                                        },
                                                        children: "// DATA_PAYLOAD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        ...register('message', {
                                                            required: 'REQUIRED',
                                                            minLength: {
                                                                value: 10,
                                                                message: 'SHORT'
                                                            }
                                                        }),
                                                        rows: 5,
                                                        placeholder: "INPUT_MESSAGE...",
                                                        className: `cyber-input ${errors.message ? 'error' : ''}`,
                                                        style: {
                                                            resize: 'none'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 455,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "submit",
                                                disabled: isSending,
                                                style: {
                                                    marginTop: '1rem',
                                                    padding: '1.2rem',
                                                    background: isSending ? 'rgba(255, 0, 60, 0.05)' : 'rgba(255, 0, 60, 0.1)',
                                                    border: '1px solid var(--accent-red)',
                                                    color: 'var(--accent-red)',
                                                    fontFamily: 'var(--font-mono)',
                                                    fontWeight: 'bold',
                                                    cursor: isSending ? 'not-allowed' : 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '15px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '3px'
                                                },
                                                children: [
                                                    isSending ? 'BUFFERING...' : 'INITIATE_UPLINK',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 471,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 422,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 409,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 358,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: statusMessage.show && /* Unified Holographic Modal for All States */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        style: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1000,
                            background: 'rgba(0, 0, 0, 0.7)',
                            backdropFilter: 'blur(5px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.8,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.8,
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            },
                            style: {
                                width: 'min(90%, 450px)',
                                padding: '2px',
                                background: `linear-gradient(45deg, transparent 5%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 5%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 10%, transparent 10%, transparent 90%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 90%, ${statusMessage.type === 'error' ? 'var(--accent-red)' : 'var(--accent-cyan)'} 95%, transparent 95%)`,
                                position: 'relative'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(10, 15, 20, 0.95)',
                                    padding: '2rem',
                                    border: `1px solid ${statusMessage.type === 'error' ? 'rgba(255, 0, 60, 0.3)' : 'rgba(0, 243, 255, 0.3)'}`,
                                    boxShadow: `0 0 30px ${statusMessage.type === 'error' ? 'rgba(255, 0, 60, 0.15)' : 'rgba(0, 243, 255, 0.15)'}`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                children: [
                                    statusMessage.type === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '2px',
                                            background: 'var(--accent-cyan)',
                                            boxShadow: '0 0 10px var(--accent-cyan)',
                                            zIndex: 10
                                        },
                                        animate: {
                                            top: [
                                                '0%',
                                                '100%',
                                                '0%'
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            ease: "linear",
                                            repeat: Infinity
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 545,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: statusMessage.type === 'loading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TacticalLoading, {}, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    style: {
                                                        position: 'absolute',
                                                        inset: -10,
                                                        border: '2px dashed rgba(0, 243, 255, 0.3)',
                                                        borderRadius: '50%'
                                                    },
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 10,
                                                        ease: "linear",
                                                        repeat: Infinity
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : statusMessage.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            size: 80,
                                            color: "var(--accent-cyan)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 578,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            size: 80,
                                            color: "var(--accent-red)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 580,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 561,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            width: '100%'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'var(--font-ui)',
                                                    fontSize: '1.2rem',
                                                    color: 'white',
                                                    letterSpacing: '3px',
                                                    marginBottom: '0.5rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '10px',
                                                    textTransform: 'uppercase'
                                                },
                                                children: statusMessage.type === 'loading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                background: 'var(--accent-cyan)',
                                                                borderRadius: '50%'
                                                            },
                                                            className: "blinking-cursor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "PROCESSING_DATA"
                                                    ]
                                                }, void 0, true) : statusMessage.type === 'success' ? 'UPLINK_ESTABLISHED' : 'CONNECTION_FAILED'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 586,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'var(--font-mono)',
                                                    fontSize: '0.8rem',
                                                    color: 'rgba(255,255,255,0.6)',
                                                    marginBottom: '1rem',
                                                    lineHeight: '1.5'
                                                },
                                                children: statusMessage.type === 'loading' ? 'Encrypting payload packet...' : statusMessage.customMsg || (statusMessage.type === 'success' ? 'Message transmission complete. Secure channel closed.' : 'Transmission interrupted. Signal lost.')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 607,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            statusMessage.type === 'loading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '100%',
                                                            height: '6px',
                                                            background: 'rgba(255,255,255,0.1)',
                                                            borderRadius: '3px',
                                                            overflow: 'hidden',
                                                            position: 'relative'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            style: {
                                                                height: '100%',
                                                                background: 'var(--accent-cyan)',
                                                                boxShadow: '0 0 10px var(--accent-cyan)'
                                                            },
                                                            animate: {
                                                                width: `${progress}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginTop: '5px',
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.7rem',
                                                            color: 'var(--accent-cyan)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "PKT_00",
                                                                    Math.floor(progress / 10)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    Math.floor(progress),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setStatusMessage({
                                                        ...statusMessage,
                                                        show: false
                                                    }),
                                                style: {
                                                    marginTop: '1rem',
                                                    padding: '0.8rem 2rem',
                                                    background: 'transparent',
                                                    border: `1px solid ${statusMessage.type === 'success' ? 'var(--accent-cyan)' : 'var(--accent-red)'}`,
                                                    color: statusMessage.type === 'success' ? 'var(--accent-cyan)' : 'var(--accent-red)',
                                                    fontFamily: 'var(--font-mono)',
                                                    fontSize: '0.8rem',
                                                    cursor: 'pointer',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px',
                                                    transition: 'all 0.2s ease'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = statusMessage.type === 'success' ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 0, 60, 0.1)';
                                                    e.currentTarget.style.boxShadow = `0 0 15px ${statusMessage.type === 'success' ? 'rgba(0, 243, 255, 0.2)' : 'rgba(255, 0, 60, 0.2)'}`;
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                },
                                                children: "ACKNOWLEDGE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 652,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 585,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 531,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 519,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, "status-overlay", false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 503,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 500,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ContactItem = ({ icon, label, value, href, delay })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            delay,
            duration: 0.5
        },
        whileHover: {
            x: 5
        },
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '1.2rem',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'var(--accent-red)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 707,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'var(--accent-cyan)'
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 708,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'var(--accent-red)',
                            fontSize: '0.65rem',
                            fontFamily: 'var(--font-mono)',
                            letterSpacing: '1px'
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 710,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'white',
                            fontFamily: 'var(--font-ui)',
                            fontWeight: 700,
                            fontSize: '0.95rem'
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 711,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 709,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 692,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContactSection;
}),
"[project]/src/components/PortfolioMain.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CyberpunkCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CyberpunkCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CyberpunkBorder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CyberpunkBorder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SkillsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SecurityGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SecurityGate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const bannerVideo = '/assets/image/banner.mp4';
;
;
;
;
;
;
const resumePdf = '/assets/pdf/muralidharan.pdf';
;
const PortfolioMain = ()=>{
    const [activeTab, setActiveTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('HOME');
    const [securityCleared, setSecurityCleared] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(true);
    const [showAbout, setShowAbout] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [menuOpen, setMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Play tech sound once on initial load of the portfolio interface
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playTechSound"])();
    }, []);
    // Handle Tab Change
    const handleTabChange = (tab)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
        setActiveTab(tab);
        setMenuOpen(false); // Close menu after selection
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "portfolio-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CyberpunkBorder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                            background: `
            linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%),
            linear-gradient(to right, rgba(0, 255, 128, 0.1), rgba(255, 0, 60, 0.1))
          `
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: bannerVideo,
                        muted: true,
                        playsInline: true,
                        autoPlay: true,
                        preload: "auto",
                        onLoadedMetadata: (e)=>{
                            const video = e.currentTarget;
                            if (video.duration > 4) {
                                video.currentTime = video.duration - 4;
                            }
                        },
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.8)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CyberpunkCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !securityCleared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SecurityGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onUnlock: ()=>setSecurityCleared(true)
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "main-header-nav",
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    marginTop: '0.5rem',
                    padding: '0.5rem 1.5rem',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 100,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "glitch-text",
                            style: {
                                fontFamily: 'var(--font-ui)',
                                fontWeight: 900,
                                fontSize: '1.4rem',
                                color: 'var(--accent-red)',
                                textShadow: '0 0 10px rgba(255, 0, 60, 0.5)'
                            },
                            children: "PORTFOLIO"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioMain.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu-toggle",
                        style: {
                            display: 'none'
                        },
                        onClick: ()=>{
                            setMenuOpen(!menuOpen);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])();
                        },
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            color: "var(--accent-red)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioMain.tsx",
                            lineNumber: 107,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            color: "var(--accent-red)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioMain.tsx",
                            lineNumber: 107,
                            columnNumber: 57
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `navigation-bar ${menuOpen ? 'mobile-open' : ''}`,
                        style: {
                            display: 'flex',
                            gap: '4px',
                            alignItems: 'center'
                        },
                        children: [
                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-only-header",
                                style: {
                                    width: '100%',
                                    marginBottom: '2rem',
                                    padding: '0 1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--accent-red)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.6rem',
                                            letterSpacing: '3px',
                                            opacity: 0.8,
                                            marginBottom: '5px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                size: 10,
                                                style: {
                                                    marginRight: '5px',
                                                    verticalAlign: 'middle'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " SYSTEM_NAVIGATOR_v2.1"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '1px',
                                            width: '100%',
                                            background: 'linear-gradient(90deg, var(--accent-red), transparent)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                {
                                    id: 'HOME',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 129,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'ABOUT',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 130,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'SKILLS',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 131,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'PROJECTS',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 132,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'CONTACT',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 133,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                }
                            ].map((item, i)=>{
                                const isActive = activeTab === item.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: `nav-button ${isActive ? 'active' : ''}`,
                                    initial: {
                                        opacity: 0,
                                        x: menuOpen ? 20 : 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0,
                                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.4)',
                                        color: isActive ? 'var(--text-white)' : 'rgba(255, 255, 255, 0.9)',
                                        border: isActive ? '1px solid var(--accent-red)' : '1px solid rgba(255, 255, 255, 0.1)'
                                    },
                                    transition: {
                                        delay: menuOpen ? 0.1 + i * 0.05 : 0,
                                        duration: 0.3
                                    },
                                    whileHover: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'var(--text-white)',
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    onClick: ()=>handleTabChange(item.id),
                                    style: {
                                        padding: '0.4rem 1.2rem',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        clipPath: menuOpen ? 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' : 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        minWidth: menuOpen ? '100%' : 'auto',
                                        margin: menuOpen ? '2px 0' : '0 4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        transition: 'all 0.2s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                opacity: 0.8
                                            },
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioMain.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.id,
                                        isActive && menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "activeGlow",
                                            style: {
                                                position: 'absolute',
                                                left: 0,
                                                width: '3px',
                                                height: '100%',
                                                background: 'var(--accent-red)',
                                                boxShadow: '0 0 10px var(--accent-red)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioMain.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/components/PortfolioMain.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-only-footer",
                                style: {
                                    marginTop: 'auto',
                                    width: '100%',
                                    padding: '2rem 1rem 0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'rgba(255, 255, 255, 0.4)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.55rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 10,
                                                color: "var(--accent-cyan)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " NETWORK_LATENCY: 24ms"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 195,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'rgba(255, 255, 255, 0.4)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.55rem',
                                            marginTop: '5px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                size: 10,
                                                color: "var(--accent-red)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " CORE_TEMP: OPTIMAL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 198,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-layout",
                style: {
                    position: 'relative',
                    zIndex: 10,
                    opacity: securityCleared ? 1 : 0,
                    transition: 'opacity 0.5s',
                    display: activeTab === 'ABOUT' || activeTab === 'SKILLS' || activeTab === 'PROJECTS' || activeTab === 'CONTACT' ? 'block' : 'grid',
                    width: '100%'
                },
                children: [
                    activeTab === 'HOME' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "hero-content",
                                initial: {
                                    x: -50,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 0.8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        animate: {
                                            skewX: [
                                                0,
                                                -10,
                                                0,
                                                10,
                                                0
                                            ],
                                            opacity: [
                                                1,
                                                0.8,
                                                1,
                                                0.9,
                                                1
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 3,
                                            times: [
                                                0,
                                                0.1,
                                                0.2,
                                                0.3,
                                                1
                                            ]
                                        },
                                        style: {
                                            fontFamily: 'var(--font-ui)',
                                            fontSize: 'clamp(2rem, 10vw, 4rem)',
                                            lineHeight: 1,
                                            fontWeight: 900,
                                            marginBottom: '0.8rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '-0.02em',
                                            background: 'linear-gradient(to right, #FFFFFF 0%, #B0B0B0 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))'
                                        },
                                        children: "MURALIDHARAN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            maxWidth: '600px',
                                            color: 'var(--text-white)',
                                            lineHeight: 1.4,
                                            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
                                            opacity: 0.9,
                                            marginBottom: '1.5rem',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                        },
                                        children: "Creative Full Stack Developer skilled in building immersive web experiences. Blending cyber-aesthetics with robust functionality to create the future of the web."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-buttons",
                                        style: {
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'center',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: resumePdf,
                                                download: "muralidharan.pdf",
                                                className: "tech-border",
                                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])(),
                                                style: {
                                                    background: 'var(--text-white)',
                                                    color: 'black',
                                                    padding: '0.8rem 1.8rem',
                                                    border: 'none',
                                                    fontFamily: 'var(--font-ui)',
                                                    fontWeight: 700,
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    textTransform: 'uppercase',
                                                    textDecoration: 'none',
                                                    fontSize: '0.9rem'
                                                },
                                                children: "Download Resume"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "tech-border",
                                                onClick: ()=>handleTabChange('CONTACT'),
                                                style: {
                                                    background: 'transparent',
                                                    color: 'var(--text-white)',
                                                    padding: '0.8rem 1.8rem',
                                                    border: '1px solid var(--text-white)',
                                                    fontFamily: 'var(--font-ui)',
                                                    fontWeight: 700,
                                                    cursor: 'pointer',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem'
                                                },
                                                children: "Contact Me"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "hidden-mobile",
                                initial: {
                                    x: 50,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.7,
                                    duration: 0.8
                                },
                                style: {
                                    position: 'relative'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'right',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        maxWidth: '400px',
                                        marginLeft: 'auto'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '1rem',
                                            opacity: 0.8,
                                            fontSize: '0.9rem',
                                            textAlign: 'right',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--accent-red)'
                                        },
                                        children: [
                                            "SYSTEM STATUS: ONLINE ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 314,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "LOCATION: CHENNAI, IND ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                                lineNumber: 315,
                                                columnNumber: 42
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "ROLE: FRONTEND DEVELOPER"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioMain.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioMain.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioMain.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    activeTab === 'ABOUT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setActiveTab('HOME'),
                        onMinimize: ()=>setActiveTab('HOME')
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'SKILLS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setActiveTab('HOME'),
                        onMinimize: ()=>setActiveTab('HOME')
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'PROJECTS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setActiveTab('HOME'),
                        onMinimize: ()=>setActiveTab('HOME')
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'CONTACT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setActiveTab('HOME'),
                        onMinimize: ()=>setActiveTab('HOME')
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bottom-signal-indicator",
                style: {
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px'
                },
                children: [
                    [
                        0.4,
                        0.7,
                        0.2,
                        0.9,
                        0.5,
                        0.8,
                        0.3
                    ].map((delay, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                height: [
                                    '8px',
                                    '24px',
                                    '12px',
                                    '28px',
                                    '8px'
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 1,
                                delay: delay
                            },
                            style: {
                                width: '4px',
                                background: 'var(--accent-red)',
                                borderRadius: '2px'
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/PortfolioMain.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: '12px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            color: 'var(--accent-red)',
                            letterSpacing: '1px'
                        },
                        children: "SIGNAL ACTIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioMain.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioMain.tsx",
                lineNumber: 342,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioMain.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PortfolioMain;
}),
"[project]/src/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SecurityGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SecurityGate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PortfolioMain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PortfolioMain.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const App = ()=>{
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black min-h-screen text-white overflow-x-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SecurityGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onUnlock: ()=>setIsLoading(false)
            }, void 0, false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PortfolioMain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, "main", false, {
                fileName: "[project]/src/App.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/App.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab9b2ecb._.js.map