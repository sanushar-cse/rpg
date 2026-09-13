import { a as prefersReducedMotion, c as ScrollTrigger, i as isFinePointer, l as SplitText, n as Button, o as Flip, s as ScrollSmoother, t as NavBar, u as gsap } from "./nav-bar-D0NQa4EE.js";
import { n as LoginCard, t as AuthBackdrop } from "./login-page-Bp7VX-Rb.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
import { useGSAP } from "@gsap/react";
import { Brain, Dumbbell, Flame, Heart, Sparkles, Star, Trophy, Zap } from "lucide-react";
import { PortalFieldCollection } from "@designcodeio/threeui";
//#region src/components/landing-page.tsx
var _jsxFileName$1 = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/landing-page.tsx";
var PREVIEW_QUESTS = [
	{
		tag: "DAILY QUEST",
		tone: "text-gold",
		title: "Complete 2 hours of coding",
		xp: "+150 XP",
		gold: "+50 GOLD"
	},
	{
		tag: "HEALTH QUEST",
		tone: "text-crimson",
		title: "30 minute workout",
		xp: "+100 XP",
		gold: null
	},
	{
		tag: "LEARNING QUEST",
		tone: "text-violet",
		title: "Read 20 pages",
		xp: "+75 XP",
		gold: null
	},
	{
		tag: "WORK QUEST",
		tone: "text-teal",
		title: "Ship a side project",
		xp: "+400 XP",
		gold: "+150 GOLD"
	},
	{
		tag: "STUDY QUEST",
		tone: "text-gold",
		title: "Review lecture notes",
		xp: "+60 XP",
		gold: null
	},
	{
		tag: "PERSONAL QUEST",
		tone: "text-violet",
		title: "Meditate 10 minutes",
		xp: "+50 XP",
		gold: null
	}
];
var STEPS = [
	{
		n: "01",
		title: "CREATE A QUEST",
		body: "Turn your goal into a challenge."
	},
	{
		n: "02",
		title: "COMPLETE IT",
		body: "Take action in the real world."
	},
	{
		n: "03",
		title: "EARN XP + GOLD",
		body: "Get rewarded for your progress."
	},
	{
		n: "04",
		title: "LEVEL UP",
		body: "Increase your level and improve your character."
	},
	{
		n: "05",
		title: "UNLOCK REWARDS",
		body: "Build achievements and unlock new rewards."
	}
];
var ATTRS = [
	{
		label: "STRENGTH",
		value: 82,
		fill: "stat-fill"
	},
	{
		label: "INTELLIGENCE",
		value: 91,
		fill: "stat-fill-violet"
	},
	{
		label: "DISCIPLINE",
		value: 74,
		fill: "stat-fill-gold"
	},
	{
		label: "CREATIVITY",
		value: 68,
		fill: "stat-fill-crimson"
	},
	{
		label: "SOCIAL",
		value: 55,
		fill: "stat-fill"
	},
	{
		label: "HEALTH",
		value: 88,
		fill: "stat-fill-mix"
	}
];
var BOARD = [
	{
		cat: "coding",
		diff: "HARD",
		diffTone: "text-crimson",
		status: "IN PROGRESS",
		title: "MASTER JAVASCRIPT",
		w: "64%",
		xp: "+300 XP",
		gold: "+100 GOLD"
	},
	{
		cat: "fitness",
		diff: "MEDIUM",
		diffTone: "text-gold",
		status: "ACTIVE",
		title: "RUN 5 KILOMETERS",
		w: "30%",
		xp: "+120 XP",
		gold: "+40 GOLD"
	},
	{
		cat: "study",
		diff: "EASY",
		diffTone: "text-teal",
		status: "ACTIVE",
		title: "REVIEW LECTURE NOTES",
		w: "80%",
		xp: "+60 XP",
		gold: null
	},
	{
		cat: "reading",
		diff: "MEDIUM",
		diffTone: "text-gold",
		status: "ACTIVE",
		title: "FINISH A NEW BOOK",
		w: "45%",
		xp: "+200 XP",
		gold: "+30 GOLD"
	},
	{
		cat: "work",
		diff: "HARD",
		diffTone: "text-crimson",
		status: "ACTIVE",
		title: "SHIP A SIDE PROJECT",
		w: "18%",
		xp: "+400 XP",
		gold: "+150 GOLD"
	},
	{
		cat: "personal",
		diff: "EASY",
		diffTone: "text-teal",
		status: "ACTIVE",
		title: "MEDITATE 10 MINUTES",
		w: "60%",
		xp: "+50 XP",
		gold: null
	}
];
var FILTERS = [
	"all",
	"coding",
	"fitness",
	"study",
	"reading",
	"work",
	"personal"
];
var BADGES = [
	{
		title: "FIRST QUEST",
		detail: "Complete your first quest.",
		Icon: Trophy
	},
	{
		title: "UNSTOPPABLE",
		detail: "Maintain a long streak.",
		Icon: Flame
	},
	{
		title: "XP HUNTER",
		detail: "Earn a major amount of XP.",
		Icon: Zap
	},
	{
		title: "LEVEL UP",
		detail: "Reach a new character level.",
		Icon: Star
	}
];
var MARQUEE = [
	"CODING",
	"FITNESS",
	"STUDY",
	"READING",
	"WORK",
	"PERSONAL",
	"LEARNING"
];
function LandingPage() {
	const wrapRef = useRef(null);
	const contentRef = useRef(null);
	const [loginOpen, setLoginOpen] = useState(false);
	useEffect(() => {
		if (!loginOpen) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") setLoginOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [loginOpen]);
	useGSAP(() => {
		const splits = [];
		let smoother;
		let ctx;
		let cancelled = false;
		let raf = 0;
		const onResize = [];
		const boot = () => {
			if (cancelled) return;
			const reduce = prefersReducedMotion();
			const fine = isFinePointer();
			ctx = gsap.context(() => {
				if (!reduce) smoother = ScrollSmoother.create({
					wrapper: "#smooth-wrapper",
					content: "#smooth-content",
					smooth: fine ? 1.15 : .4,
					effects: fine,
					normalizeScroll: false,
					ignoreMobileResize: true
				});
				bootIntro(reduce);
				heroMotion(reduce, splits);
				raf = particles(reduce, onResize);
				magnetic(reduce, fine);
				headingMasks(reduce, splits);
				reveals(reduce);
				howItWorks(reduce);
				characterSheet(reduce);
				questFilters();
				horizontalQuests(reduce);
				streakMotion(reduce);
				marquee(reduce);
				finalGlow(reduce);
				ScrollTrigger.refresh();
			}, wrapRef);
		};
		if (document.fonts?.ready) document.fonts.ready.then(boot);
		else boot();
		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			onResize.forEach((fn) => window.removeEventListener("resize", fn));
			splits.forEach((s) => s.revert());
			smoother?.kill();
			ctx?.revert();
		};
	}, { scope: wrapRef });
	return /* @__PURE__ */ jsxDEV("div", {
		ref: wrapRef,
		children: [
			/* @__PURE__ */ jsxDEV("a", {
				href: "#main",
				className: "skip-link",
				children: "Skip to content"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 218,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(IntroOverlay, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 221,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(NavBar, { onLoginClick: () => setLoginOpen(true) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 222,
				columnNumber: 7
			}, this),
			loginOpen ? /* @__PURE__ */ jsxDEV("div", {
				className: "login-overlay",
				role: "presentation",
				onMouseDown: () => setLoginOpen(false),
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "login-overlay__background",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsxDEV(AuthBackdrop, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 226,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 225,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "login-overlay__content",
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Log in to Life RPG",
					onMouseDown: (event) => event.stopPropagation(),
					children: [/* @__PURE__ */ jsxDEV("button", {
						type: "button",
						className: "login-overlay__close",
						"aria-label": "Close login",
						onClick: () => setLoginOpen(false),
						children: "×"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 235,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV(LoginCard, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 243,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 228,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 224,
				columnNumber: 9
			}, this) : null,
			/* @__PURE__ */ jsxDEV("div", {
				id: "smooth-wrapper",
				children: /* @__PURE__ */ jsxDEV("div", {
					id: "smooth-content",
					ref: contentRef,
					children: [/* @__PURE__ */ jsxDEV("main", {
						id: "main",
						children: [
							/* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 251,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(Features, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 252,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(HowItWorks, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 253,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(Character, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 254,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(QuestBoard, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 255,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(Streak, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 256,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(Achievements, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 257,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV(FinalCta, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 258,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 250,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 260,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 249,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 248,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 217,
		columnNumber: 5
	}, this);
}
function IntroOverlay() {
	return /* @__PURE__ */ jsxDEV("div", {
		id: "intro-overlay",
		className: "fixed inset-0 z-[70] flex flex-col items-center justify-center bg-void",
		children: [
			/* @__PURE__ */ jsxDEV("p", {
				className: "section-kicker mb-6",
				children: "SYSTEM BOOT"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 273,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "font-display text-4xl tracking-tight md:text-6xl",
				children: ["LIFE", /* @__PURE__ */ jsxDEV("span", {
					className: "text-teal",
					children: "RPG"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 275,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 274,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "stat-track mt-10 h-1.5 w-52 origin-left",
				children: /* @__PURE__ */ jsxDEV("div", {
					id: "intro-bar",
					className: "stat-fill h-full w-full origin-left scale-x-0"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 278,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 277,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-3 font-display text-xs tracking-widest text-muted",
				children: [/* @__PURE__ */ jsxDEV("span", {
					id: "intro-pct",
					className: "tabular-nums text-teal",
					children: "0"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 281,
					columnNumber: 9
				}, this), "% LOADING CHARACTER SHEET"]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 280,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("button", {
				type: "button",
				className: "mt-8 min-h-11 text-xs tracking-widest text-muted hover:text-ink",
				onClick: () => {
					gsap.to("#intro-overlay", {
						yPercent: -100,
						duration: .6,
						ease: "power4.inOut",
						onComplete: () => {
							const el = document.getElementById("intro-overlay");
							if (el) el.style.display = "none";
						}
					});
				},
				children: "SKIP"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 286,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 269,
		columnNumber: 5
	}, this);
}
function Hero() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "hero",
		className: "relative flex min-h-dvh flex-col justify-center overflow-hidden grid-bg noise-veil",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "shader-frame pointer-events-none absolute inset-0 z-0",
				children: /* @__PURE__ */ jsxDEV(PortalFieldCollection, {
					variant: "cloud-field",
					hue: 0,
					saturation: 1,
					brightness: 1
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 314,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 313,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("canvas", {
				id: "particle-canvas",
				className: "absolute inset-0 size-full",
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 316,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-16 md:px-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ jsxDEV("p", {
							id: "hero-eyebrow",
							className: "section-kicker mb-8",
							children: "A BETTER WAY TO BUILD MOMENTUM"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 319,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("h1", {
							className: "font-display tracking-tight",
							style: { perspective: "900px" },
							children: [/* @__PURE__ */ jsxDEV("span", {
								id: "hero-line1",
								className: "hero-title block",
								children: "MAKE LIFE"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 323,
								columnNumber: 13
							}, this), /* @__PURE__ */ jsxDEV("span", {
								id: "hero-line2",
								className: "hero-title text-glow-teal block text-ink",
								children: "MOVE."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 326,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 322,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							id: "hero-sub",
							className: "mt-12 max-w-md text-lg text-ink/90 md:text-xl",
							children: "Your goals are quests. Your progress is XP. Your consistency is your power."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 330,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							id: "hero-desc",
							className: "mt-4 max-w-md text-base text-muted",
							children: "Turn everyday goals into quests, earn XP, build your character, maintain your streak and unlock your next level."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 333,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							id: "hero-ctas",
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ jsxDEV(Button, {
								asChild: true,
								size: "lg",
								"data-magnetic": true,
								children: /* @__PURE__ */ jsxDEV(Link, {
									to: "/play",
									children: ["START YOUR JOURNEY ", /* @__PURE__ */ jsxDEV("span", {
										"aria-hidden": "true",
										children: "→"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 340,
										columnNumber: 36
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 339,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 338,
								columnNumber: 13
							}, this), /* @__PURE__ */ jsxDEV(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ jsxDEV("a", {
									href: "#how-it-works",
									onClick: (e) => {
										e.preventDefault();
										ScrollSmoother.get()?.scrollTo("#how-it-works", true, "top 72px");
									},
									children: "EXPLORE HOW IT WORKS"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 344,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 343,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 337,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 318,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("div", {
					id: "hero-visual",
					className: "relative h-[420px] md:h-[520px] lg:col-span-5",
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							id: "hud-level",
							className: "hud-clip absolute top-2 right-2 w-44 border border-line bg-panel p-4 md:right-6",
							children: [
								/* @__PURE__ */ jsxDEV("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ jsxDEV("span", {
										className: "font-display text-[10px] tracking-widest text-muted",
										children: "CHARACTER"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 363,
										columnNumber: 15
									}, this), /* @__PURE__ */ jsxDEV("span", { className: "size-1.5 rounded-full bg-teal" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 364,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 362,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "font-display text-3xl text-ink",
									children: [
										"LV",
										" ",
										/* @__PURE__ */ jsxDEV("span", {
											id: "hud-level-num",
											className: "text-teal",
											children: "01"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 368,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 366,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "stat-track mt-3 h-1.5",
									children: /* @__PURE__ */ jsxDEV("div", {
										id: "hud-level-bar",
										className: "stat-fill h-full w-0"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 373,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 372,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "mt-1 font-display text-[10px] text-muted",
									children: ["XP ", /* @__PURE__ */ jsxDEV("span", {
										id: "hud-xp-text",
										children: "0 / 500"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 376,
										columnNumber: 18
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 375,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 358,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							id: "hud-card-1",
							className: "hud-clip-sm absolute top-[38%] left-0 w-52 border border-line bg-panel p-4 md:-left-4",
							children: [
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-display text-[10px] tracking-widest text-gold",
									children: "DAILY QUEST"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 384,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("p", {
									className: "mt-1.5 font-display text-sm text-ink",
									children: "Complete 2 hrs of coding"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 385,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "mt-2.5 flex gap-3 font-display text-xs",
									children: [/* @__PURE__ */ jsxDEV("span", {
										className: "text-teal",
										children: "+150 XP"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 387,
										columnNumber: 15
									}, this), /* @__PURE__ */ jsxDEV("span", {
										className: "text-gold",
										children: "+50 GOLD"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 388,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 386,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 380,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							id: "hud-card-2",
							className: "hud-clip-sm absolute right-0 bottom-[14%] w-48 border border-line bg-panel p-4 md:right-2",
							children: [
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-display text-[10px] tracking-widest text-violet",
									children: "HEALTH QUEST"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 396,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("p", {
									className: "mt-1.5 font-display text-sm text-ink",
									children: "30 minute workout"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 399,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "mt-2.5 flex gap-3 font-display text-xs",
									children: /* @__PURE__ */ jsxDEV("span", {
										className: "text-teal",
										children: "+100 XP"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 401,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 400,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 392,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							id: "hud-core",
							className: "absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 md:size-80",
							children: /* @__PURE__ */ jsxDEV("svg", {
								viewBox: "0 0 300 300",
								className: "size-full",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ jsxDEV("defs", { children: /* @__PURE__ */ jsxDEV("radialGradient", {
										id: "coreGrad",
										cx: "50%",
										cy: "50%",
										r: "50%",
										children: [
											/* @__PURE__ */ jsxDEV("stop", {
												offset: "0%",
												stopColor: "#00E64D",
												stopOpacity: "0.35"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 412,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ jsxDEV("stop", {
												offset: "60%",
												stopColor: "#00E64D",
												stopOpacity: "0.06"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 413,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ jsxDEV("stop", {
												offset: "100%",
												stopColor: "#00E64D",
												stopOpacity: "0"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 414,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 411,
										columnNumber: 17
									}, this) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 410,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("circle", {
										cx: "150",
										cy: "150",
										r: "140",
										fill: "url(#coreGrad)"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 417,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("g", {
										id: "core-rings",
										stroke: "#00E64D",
										strokeOpacity: "0.5",
										fill: "none",
										strokeWidth: "1",
										children: [/* @__PURE__ */ jsxDEV("circle", {
											cx: "150",
											cy: "150",
											r: "95"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 419,
											columnNumber: 17
										}, this), /* @__PURE__ */ jsxDEV("circle", {
											cx: "150",
											cy: "150",
											r: "70",
											stroke: "#C6A4FF",
											strokeOpacity: "0.4"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 420,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 418,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("g", {
										id: "core-ticks",
										stroke: "#00E64D",
										strokeOpacity: "0.7",
										strokeWidth: "1.5",
										children: [
											/* @__PURE__ */ jsxDEV("line", {
												x1: "150",
												y1: "10",
												x2: "150",
												y2: "26"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 423,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("line", {
												x1: "150",
												y1: "274",
												x2: "150",
												y2: "290"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 424,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("line", {
												x1: "10",
												y1: "150",
												x2: "26",
												y2: "150"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 425,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ jsxDEV("line", {
												x1: "274",
												y1: "150",
												x2: "290",
												y2: "150"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 426,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 422,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("polygon", {
										points: "150,95 175,140 150,185 125,140",
										fill: "none",
										stroke: "#FBF7DD",
										strokeOpacity: "0.85",
										strokeWidth: "1.5"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 428,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("polygon", {
										points: "150,115 163,140 150,165 137,140",
										fill: "#00E64D",
										fillOpacity: "0.5"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 435,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 409,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 405,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							id: "float-xp",
							className: "text-glow-teal absolute top-[10%] left-[8%] font-display text-sm text-teal opacity-0",
							children: "+150 XP"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 439,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							id: "float-gold",
							className: "text-glow-gold absolute bottom-[30%] left-[30%] font-display text-sm text-gold opacity-0",
							children: "+50 GOLD"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 445,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 357,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 317,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "relative z-10 mx-auto mb-6 flex flex-col items-center gap-2 text-muted",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsxDEV("span", {
					className: "font-display text-[10px] tracking-[0.3em]",
					children: "SCROLL"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 458,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("span", {
					id: "scroll-cue",
					className: "h-8 w-px bg-gradient-to-b from-teal to-transparent"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 459,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 454,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 309,
		columnNumber: 5
	}, this);
}
function Features() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "features",
		className: "relative overflow-hidden border-t border-line px-6 py-28 md:px-10 md:py-36",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "mx-auto max-w-7xl",
				children: /* @__PURE__ */ jsxDEV("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsxDEV("p", {
							className: "section-kicker mb-5",
							children: "WHAT IS LIFE RPG"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 473,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("h2", {
							className: "js-mask max-w-xl font-display text-4xl leading-tight md:text-5xl",
							children: "YOUR LIFE. YOUR QUESTS. YOUR PROGRESS."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 474,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "js-reveal mt-6 max-w-lg text-lg text-muted",
							children: "Life RPG transforms your everyday goals into meaningful quests. Study, exercise, learn, build projects, read, practice skills or complete personal goals — every action becomes progress."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 477,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 472,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 471,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				id: "quest-pin",
				className: "mt-16",
				children: /* @__PURE__ */ jsxDEV("div", {
					id: "quest-preview-track",
					className: "flex gap-6 px-6 md:px-10",
					children: PREVIEW_QUESTS.map((q) => /* @__PURE__ */ jsxDEV("article", {
						className: "hud-clip-sm js-reveal w-[min(80vw,320px)] shrink-0 border border-line bg-panel p-6",
						children: [
							/* @__PURE__ */ jsxDEV("span", {
								className: `font-display text-[10px] tracking-widest ${q.tone}`,
								children: q.tag
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 492,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("h3", {
								className: "mt-3 font-display text-xl",
								children: q.title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 493,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("div", { className: "mt-5 h-px bg-line" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 494,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "mt-5 flex gap-4 font-display text-sm",
								children: [/* @__PURE__ */ jsxDEV("span", {
									className: "text-teal",
									children: q.xp
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 496,
									columnNumber: 17
								}, this), q.gold ? /* @__PURE__ */ jsxDEV("span", {
									className: "text-gold",
									children: q.gold
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 497,
									columnNumber: 27
								}, this) : null]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 495,
								columnNumber: 15
							}, this)
						]
					}, q.title, true, {
						fileName: _jsxFileName$1,
						lineNumber: 488,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 486,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 485,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "marquee-wrap mt-24 border-y border-line py-6",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsxDEV("div", {
					id: "marquee-track",
					className: "flex w-max font-display text-xs tracking-widest text-muted",
					children: [...MARQUEE, ...MARQUEE].map((item, i) => /* @__PURE__ */ jsxDEV("span", {
						className: "inline-flex items-center gap-2.5 px-8 whitespace-nowrap",
						children: [item, /* @__PURE__ */ jsxDEV("span", { className: "size-1.5 rounded-full bg-teal/60" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 515,
							columnNumber: 15
						}, this)]
					}, item + i, true, {
						fileName: _jsxFileName$1,
						lineNumber: 510,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 505,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 504,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 467,
		columnNumber: 5
	}, this);
}
function HowItWorks() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "how-it-works",
		className: "relative border-t border-line px-6 py-28 md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxDEV("div", {
			id: "how-pin",
			className: "mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[0.7fr_1.3fr]",
			children: [/* @__PURE__ */ jsxDEV("div", { children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "section-kicker mb-5",
					children: "THE LOOP"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 535,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("h2", {
					className: "js-mask font-display text-4xl leading-tight md:text-5xl",
					children: "HOW IT WORKS"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 536,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					id: "how-giant",
					className: "mt-10 hidden font-display text-[8rem] leading-none text-teal/20 lg:block",
					"aria-hidden": "true",
					children: "01"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 537,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 534,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "relative",
				id: "steps-wrap",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "absolute top-2 bottom-2 left-[27px] hidden w-px bg-line md:block",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsxDEV("div", {
						id: "steps-line-fill",
						className: "origin-top w-full bg-teal",
						style: {
							height: "0%",
							boxShadow: "0 0 10px rgba(58,220,192,0.6)"
						}
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 550,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 546,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("ol", {
					className: "space-y-14 md:space-y-20",
					children: STEPS.map((s) => /* @__PURE__ */ jsxDEV("li", {
						className: "step-item relative pl-0 md:pl-20",
						"data-step": s.n,
						children: [
							/* @__PURE__ */ jsxDEV("span", {
								className: "step-num hud-clip-sm absolute top-0 left-0 hidden size-14 items-center justify-center border border-line bg-void font-display text-lg text-muted md:flex",
								children: s.n
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 559,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("span", {
								className: "font-display text-xs text-teal md:hidden",
								children: s.n
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 562,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("h3", {
								className: "mt-1 font-display text-2xl md:mt-0 md:text-3xl",
								children: s.title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 563,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "mt-2 max-w-md text-muted",
								children: s.body
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 564,
								columnNumber: 17
							}, this)
						]
					}, s.n, true, {
						fileName: _jsxFileName$1,
						lineNumber: 558,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 556,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 545,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 530,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 526,
		columnNumber: 5
	}, this);
}
function Character() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "character",
		className: "relative border-t border-line px-6 py-28 grid-bg md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ jsxDEV("div", { children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "mb-5 font-display text-xs tracking-[0.25em] text-violet/90",
					children: "CHARACTER SHEET"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 582,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("h2", {
					className: "js-mask font-display text-4xl leading-tight md:text-5xl",
					children: "BUILD YOUR CHARACTER."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 585,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-6 max-w-sm text-lg text-muted",
					children: "Every quest you complete shapes who you become. Track growth across six core attributes as your character evolves."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 588,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-8 flex flex-wrap gap-4 text-sm text-muted",
					children: [
						/* @__PURE__ */ jsxDEV("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ jsxDEV(Dumbbell, { className: "size-4 text-teal" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 594,
								columnNumber: 15
							}, this), " Strength"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 593,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ jsxDEV(Brain, { className: "size-4 text-violet" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 597,
								columnNumber: 15
							}, this), " Intelligence"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 596,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ jsxDEV(Heart, { className: "size-4 text-crimson" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 600,
								columnNumber: 15
							}, this), " Health"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 599,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ jsxDEV(Sparkles, { className: "size-4 text-gold" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 603,
								columnNumber: 15
							}, this), " Creativity"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 602,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 592,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 581,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("div", {
				id: "char-panel",
				className: "hud-clip relative border border-line bg-panel p-7 md:p-9",
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("span", {
							className: "font-display text-[10px] tracking-widest text-muted",
							children: "LEVEL"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 611,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("div", {
							id: "char-level",
							className: "font-display text-5xl tabular-nums text-ink",
							children: "0"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 612,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 610,
							columnNumber: 13
						}, this), /* @__PURE__ */ jsxDEV("div", {
							className: "text-right",
							children: [/* @__PURE__ */ jsxDEV("span", {
								className: "font-display text-[10px] tracking-widest text-muted",
								children: "EXPERIENCE"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 617,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "mt-1 font-display text-sm tabular-nums text-teal",
								children: [/* @__PURE__ */ jsxDEV("span", {
									id: "char-xp-current",
									children: "0"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 621,
									columnNumber: 17
								}, this), " / 1000"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 620,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 616,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 609,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "stat-track mt-4 h-2",
						children: /* @__PURE__ */ jsxDEV("div", {
							id: "char-xp-bar",
							className: "stat-fill h-full w-0"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 626,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 625,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-9 space-y-5",
						id: "attr-list",
						children: ATTRS.map((a) => /* @__PURE__ */ jsxDEV("div", {
							className: "attr-row",
							"data-value": a.value,
							children: [/* @__PURE__ */ jsxDEV("div", {
								className: "mb-1.5 flex justify-between font-display text-xs",
								children: [/* @__PURE__ */ jsxDEV("span", {
									className: "text-ink/90",
									children: a.label
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 632,
									columnNumber: 19
								}, this), /* @__PURE__ */ jsxDEV("span", {
									className: "attr-val tabular-nums text-muted",
									children: "0%"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 633,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 631,
								columnNumber: 17
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "stat-track h-1.5",
								children: /* @__PURE__ */ jsxDEV("div", { className: `attr-bar h-full w-0 ${a.fill}` }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 636,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 635,
								columnNumber: 17
							}, this)]
						}, a.label, true, {
							fileName: _jsxFileName$1,
							lineNumber: 630,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 628,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 608,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 580,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 576,
		columnNumber: 5
	}, this);
}
function QuestBoard() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "quests",
		className: "relative border-t border-line px-6 py-28 md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "mb-5 font-display text-xs tracking-[0.25em] text-gold/90",
					children: "QUEST BOARD"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 651,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("h2", {
					className: "js-mask max-w-xl font-display text-4xl leading-tight md:text-5xl",
					children: "EVERY GOAL IS A QUEST."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 652,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "relative mt-9 flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Quest categories",
					id: "quest-filters",
					children: [/* @__PURE__ */ jsxDEV("span", {
						id: "filter-pill",
						className: "pointer-events-none absolute top-0 left-0 h-11 bg-teal/10 shadow-[0_0_0_1px_rgba(58,220,192,0.6)]",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 662,
						columnNumber: 11
					}, this), FILTERS.map((cat, i) => /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						className: "quest-filter relative z-10 min-h-11 px-3.5 font-display text-xs tracking-wide text-muted",
						"data-cat": cat,
						"data-active": i === 0 ? "true" : "false",
						children: cat.toUpperCase()
					}, cat, false, {
						fileName: _jsxFileName$1,
						lineNumber: 668,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 656,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					id: "quest-grid",
					children: BOARD.map((q) => /* @__PURE__ */ jsxDEV("article", {
						className: "quest-card tab-clip card-lift js-reveal border border-line bg-panel p-6",
						"data-cat": q.cat,
						children: [
							/* @__PURE__ */ jsxDEV("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxDEV("span", {
									className: `font-display text-[10px] tracking-widest ${q.diffTone}`,
									children: q.diff
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 688,
									columnNumber: 17
								}, this), /* @__PURE__ */ jsxDEV("span", {
									className: "font-display text-[10px] text-muted",
									children: q.status
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 691,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 687,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("h3", {
								className: "mt-4 font-display text-xl",
								children: q.title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 693,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "stat-track mt-5 h-1.5",
								children: /* @__PURE__ */ jsxDEV("div", {
									className: "stat-fill h-full",
									style: { width: q.w }
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 695,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 694,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "mt-5 flex gap-3 font-display text-sm",
								children: [/* @__PURE__ */ jsxDEV("span", {
									className: "text-teal",
									children: q.xp
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 698,
									columnNumber: 17
								}, this), q.gold ? /* @__PURE__ */ jsxDEV("span", {
									className: "text-gold",
									children: q.gold
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 699,
									columnNumber: 27
								}, this) : null]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 697,
								columnNumber: 15
							}, this)
						]
					}, q.title, true, {
						fileName: _jsxFileName$1,
						lineNumber: 682,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 680,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 650,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 649,
		columnNumber: 5
	}, this);
}
function Streak() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "streak",
		className: "relative overflow-hidden border-t border-line px-6 py-28 md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "relative mx-auto max-w-4xl text-center",
			children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "mb-5 font-display text-xs tracking-[0.25em] text-crimson/90",
					children: "MOMENTUM"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 716,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("h2", {
					className: "js-mask font-display text-4xl leading-tight md:text-5xl",
					children: "CONSISTENCY BUILDS POWER."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 717,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mx-auto mt-6 max-w-lg text-lg text-muted",
					children: "Stay consistent. Build momentum. Keep your streak alive."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 720,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "hud-clip mt-14 inline-flex items-center gap-3 border border-line bg-panel px-6 py-3",
					children: [
						/* @__PURE__ */ jsxDEV(Flame, {
							className: "size-6 text-crimson",
							"aria-hidden": "true"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 724,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							id: "streak-count",
							className: "font-display text-2xl tabular-nums",
							children: "0"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 725,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("span", {
							className: "font-display text-xs tracking-widest text-muted",
							children: "DAY STREAK"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 728,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 723,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-10 flex flex-wrap justify-center gap-2.5",
					id: "streak-days",
					"aria-label": "14 day streak visualization",
					children: Array.from({ length: 14 }, (_, i) => /* @__PURE__ */ jsxDEV("div", {
						className: "streak-day hud-clip-sm flex size-8 items-center justify-center border border-line font-display text-[10px] text-muted opacity-0 md:size-9",
						children: i + 1
					}, i, false, {
						fileName: _jsxFileName$1,
						lineNumber: 736,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 730,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 715,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 711,
		columnNumber: 5
	}, this);
}
function Achievements() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "achievements",
		className: "relative border-t border-line px-6 py-28 md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "mb-5 font-display text-xs tracking-[0.25em] text-gold/90",
					children: "HALL OF RECORDS"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 756,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("h2", {
					className: "js-mask max-w-xl font-display text-4xl leading-tight md:text-5xl",
					children: "TURN PROGRESS INTO REWARDS."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 757,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: BADGES.map(({ title, detail, Icon }) => /* @__PURE__ */ jsxDEV("div", {
						className: "hud-clip-sm js-reveal border border-line bg-panel p-6 text-center transition-transform duration-300 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ jsxDEV(Icon, {
								className: "mx-auto mb-4 size-8 text-gold",
								"aria-hidden": "true"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 766,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("h3", {
								className: "font-display text-base",
								children: title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 767,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "mt-2 text-sm text-muted",
								children: detail
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 768,
								columnNumber: 15
							}, this)
						]
					}, title, true, {
						fileName: _jsxFileName$1,
						lineNumber: 762,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 760,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 755,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 751,
		columnNumber: 5
	}, this);
}
function FinalCta() {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "final-cta",
		className: "relative flex min-h-[85vh] items-center justify-center overflow-hidden border-t border-line px-6 md:px-10",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "relative mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "js-mask font-display text-4xl leading-tight md:text-6xl",
					children: "EVERY DAY IS A NEW QUEST."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 784,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-6 text-lg text-muted",
					children: "Your next level starts today."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 787,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(Button, {
					asChild: true,
					size: "lg",
					className: "mt-10",
					"data-magnetic": true,
					children: /* @__PURE__ */ jsxDEV(Link, {
						to: "/play",
						children: ["BEGIN YOUR JOURNEY ", /* @__PURE__ */ jsxDEV("span", {
							"aria-hidden": "true",
							children: "→"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 790,
							columnNumber: 32
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 789,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 788,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-6 font-display text-xs tracking-widest text-muted",
					children: "EVERY GREAT CHARACTER STARTS AT LEVEL 1"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 793,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 783,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 779,
		columnNumber: 5
	}, this);
}
function Footer() {
	return /* @__PURE__ */ jsxDEV("footer", {
		id: "about",
		className: "border-t border-line px-6 py-12 md:px-10",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row",
			children: [
				/* @__PURE__ */ jsxDEV(Link, {
					to: "/",
					className: "font-display text-lg tracking-wide",
					children: ["LIFE", /* @__PURE__ */ jsxDEV("span", {
						className: "text-teal",
						children: "RPG"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 806,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 805,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-muted",
					children: "© 2026 Life RPG. Every goal is a quest."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 808,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex gap-6 font-display text-xs text-muted",
					children: [
						/* @__PURE__ */ jsxDEV("a", {
							href: "#about",
							className: "transition-colors hover:text-ink",
							children: "Privacy"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 810,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("a", {
							href: "#about",
							className: "transition-colors hover:text-ink",
							children: "Terms"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 813,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("a", {
							href: "mailto:hello@liferpg.app",
							className: "transition-colors hover:text-ink",
							children: "Contact"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 816,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 809,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 804,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 803,
		columnNumber: 5
	}, this);
}
function bootIntro(reduce) {
	const overlay = document.getElementById("intro-overlay");
	if (!overlay) return;
	if (reduce) {
		overlay.style.display = "none";
		return;
	}
	const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
	tl.to("#intro-bar", {
		scaleX: 1,
		duration: 1.15
	}, .15);
	tl.to({ v: 0 }, {
		v: 100,
		duration: 1.15,
		onUpdate: function() {
			const n = document.getElementById("intro-pct");
			if (n) n.textContent = String(Math.round(this["targets"]()[0].v));
		}
	}, .15);
	tl.to("#intro-overlay", {
		yPercent: -100,
		duration: .9,
		ease: "power4.inOut"
	}, 1.4);
	tl.set("#intro-overlay", { display: "none" });
}
function heroMotion(reduce, splits) {
	const line1 = document.getElementById("hero-line1");
	const line2 = document.getElementById("hero-line2");
	if (reduce) {
		gsap.set([
			"#hero-eyebrow",
			"#hero-sub",
			"#hero-desc",
			"#hero-ctas",
			"#hero-visual"
		], {
			opacity: 1,
			y: 0,
			filter: "none"
		});
		gsap.set("#hud-level-bar", { width: "68%" });
		return;
	}
	gsap.set([
		"#hero-eyebrow",
		"#hero-sub",
		"#hero-desc",
		"#hero-ctas"
	], {
		opacity: 0,
		y: 24
	});
	gsap.set("#hero-visual", { opacity: 0 });
	if (line1 && line2) {
		const s1 = SplitText.create(line1, {
			type: "chars,words",
			charsClass: "hero-ch"
		});
		const s2 = SplitText.create(line2, {
			type: "chars,words",
			charsClass: "hero-ch"
		});
		splits.push(s1, s2);
		gsap.set([s1.chars, s2.chars], {
			opacity: 0,
			y: 48,
			rotateX: -70,
			transformOrigin: "50% 100%"
		});
		gsap.to(s1.chars, {
			opacity: 1,
			y: 0,
			rotateX: 0,
			duration: .9,
			stagger: .018,
			ease: "expo.out",
			delay: 1.55
		});
		gsap.to(s2.chars, {
			opacity: 1,
			y: 0,
			rotateX: 0,
			duration: .9,
			stagger: .018,
			ease: "expo.out",
			delay: 1.85
		});
	}
	gsap.timeline({
		defaults: { ease: "expo.out" },
		delay: 1.45
	}).to("#hero-eyebrow", {
		opacity: 1,
		duration: .7
	}, 0).to("#hero-sub", {
		opacity: 1,
		y: 0,
		duration: .7
	}, .55).to("#hero-desc", {
		opacity: 1,
		y: 0,
		duration: .7
	}, .68).to("#hero-ctas", {
		opacity: 1,
		y: 0,
		duration: .7,
		ease: "back.out(1.6)"
	}, .8).to("#hero-visual", {
		opacity: 1,
		duration: .8
	}, .3).from("#hud-level", {
		opacity: 0,
		x: 30,
		duration: .7,
		ease: "power4.out"
	}, .8).from("#hud-card-1", {
		opacity: 0,
		x: -30,
		duration: .7,
		ease: "power4.out"
	}, .95).from("#hud-card-2", {
		opacity: 0,
		x: 30,
		duration: .7,
		ease: "power4.out"
	}, 1.1);
	gsap.from("#core-rings circle", {
		drawSVG: "0%",
		duration: 1.6,
		stagger: .18,
		ease: "power2.out",
		delay: 2.1
	});
	gsap.to("#hud-card-1", {
		y: "+=10",
		duration: 3.2,
		ease: "sine.inOut",
		yoyo: true,
		repeat: -1,
		delay: 3
	});
	gsap.to("#hud-card-2", {
		y: "-=10",
		duration: 2.8,
		ease: "sine.inOut",
		yoyo: true,
		repeat: -1,
		delay: 3.2
	});
	gsap.to("#hud-level", {
		y: "+=6",
		duration: 3.6,
		ease: "sine.inOut",
		yoyo: true,
		repeat: -1,
		delay: 3
	});
	gsap.to("#core-rings", {
		rotation: 360,
		transformOrigin: "50% 50%",
		duration: 40,
		ease: "none",
		repeat: -1
	});
	gsap.to("#core-ticks", {
		rotation: -360,
		transformOrigin: "50% 50%",
		duration: 60,
		ease: "none",
		repeat: -1
	});
	gsap.to("#scroll-cue", {
		scaleY: .3,
		transformOrigin: "top",
		duration: 1.2,
		yoyo: true,
		repeat: -1,
		ease: "sine.inOut"
	});
	gsap.timeline({
		repeat: -1,
		repeatDelay: 1.4,
		delay: 2.4
	}).fromTo("#float-xp", {
		opacity: 0,
		y: 0
	}, {
		opacity: 1,
		y: -16,
		duration: .8
	}).fromTo("#float-gold", {
		opacity: 0,
		y: 0
	}, {
		opacity: 1,
		y: -16,
		duration: .8
	}, .25).to(["#float-xp", "#float-gold"], {
		opacity: 0,
		duration: .6
	}, 1.6);
	gsap.to({ val: 0 }, {
		val: 340,
		duration: 2,
		delay: 2.2,
		onUpdate: function() {
			const el = document.getElementById("hud-xp-text");
			if (el) el.textContent = `${Math.round(this["targets"]()[0].val)} / 500`;
		}
	});
	gsap.to("#hud-level-bar", {
		width: "68%",
		duration: 2,
		delay: 2.2,
		ease: "power2.out"
	});
	if (isFinePointer()) {
		const hero = document.getElementById("hero");
		if (!hero) return;
		const layers = [
			{
				el: "#hud-level",
				s: 18
			},
			{
				el: "#hud-card-1",
				s: 26
			},
			{
				el: "#hud-card-2",
				s: 22
			},
			{
				el: "#hud-core",
				s: 10
			}
		];
		hero.addEventListener("mousemove", (e) => {
			const rect = hero.getBoundingClientRect();
			const px = (e.clientX - rect.left) / rect.width - .5;
			const py = (e.clientY - rect.top) / rect.height - .5;
			layers.forEach((l) => {
				gsap.to(l.el, {
					x: px * l.s,
					y: py * l.s * .45,
					duration: .6,
					ease: "power2.out",
					overwrite: "auto"
				});
			});
		});
	}
}
function particles(reduce, onResize) {
	const canvas = document.getElementById("particle-canvas");
	if (!canvas || reduce) return 0;
	const ctx = canvas.getContext("2d");
	if (!ctx) return 0;
	let w = 0;
	let h = 0;
	const dots = [];
	const count = window.innerWidth < 768 ? 22 : 55;
	const resize = () => {
		w = canvas.width = canvas.offsetWidth;
		h = canvas.height = canvas.offsetHeight;
	};
	resize();
	window.addEventListener("resize", resize);
	onResize.push(resize);
	for (let i = 0; i < count; i++) dots.push({
		x: Math.random() * w,
		y: Math.random() * h,
		r: Math.random() * 1.4 + .3,
		vy: Math.random() * .18 + .03,
		vx: (Math.random() - .5) * .08,
		a: Math.random() * .5 + .15,
		c: Math.random() > .75 ? "157,111,255" : "58,220,192"
	});
	let raf = 0;
	let running = true;
	const draw = () => {
		if (!running) return;
		ctx.clearRect(0, 0, w, h);
		for (const p of dots) {
			p.y -= p.vy;
			p.x += p.vx;
			if (p.y < -5) {
				p.y = h + 5;
				p.x = Math.random() * w;
			}
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(${p.c},${p.a})`;
			ctx.fill();
		}
		raf = requestAnimationFrame(draw);
	};
	draw();
	ScrollTrigger.create({
		trigger: "#hero",
		start: "top bottom",
		end: "bottom top",
		onToggle: (self) => {
			running = self.isActive;
			if (running) {
				cancelAnimationFrame(raf);
				draw();
			}
		}
	});
	return raf;
}
function magnetic(reduce, fine) {
	if (reduce || !fine) return;
	document.querySelectorAll("[data-magnetic]").forEach((el) => {
		const xTo = gsap.quickTo(el, "x", {
			duration: .4,
			ease: "power3.out"
		});
		const yTo = gsap.quickTo(el, "y", {
			duration: .4,
			ease: "power3.out"
		});
		el.addEventListener("mousemove", (e) => {
			const r = el.getBoundingClientRect();
			xTo((e.clientX - r.left - r.width / 2) * .28);
			yTo((e.clientY - r.top - r.height / 2) * .28);
		});
		el.addEventListener("mouseleave", () => {
			xTo(0);
			yTo(0);
		});
	});
}
function headingMasks(reduce, splits) {
	document.querySelectorAll(".js-mask").forEach((el) => {
		if (reduce) return;
		const split = SplitText.create(el, {
			type: "lines",
			mask: "lines"
		});
		splits.push(split);
		gsap.from(split.lines, {
			yPercent: 110,
			duration: 1.05,
			ease: "expo.out",
			stagger: .08,
			scrollTrigger: {
				trigger: el,
				start: "top 88%"
			}
		});
	});
}
function reveals(reduce) {
	if (reduce) {
		gsap.set(".js-reveal", {
			opacity: 1,
			y: 0
		});
		return;
	}
	gsap.set(".js-reveal", {
		opacity: 0,
		y: 28
	});
	ScrollTrigger.batch(".js-reveal", {
		start: "top 88%",
		onEnter: (els) => gsap.to(els, {
			opacity: 1,
			y: 0,
			duration: .8,
			ease: "power2.out",
			stagger: .08,
			overwrite: true
		})
	});
}
function howItWorks(reduce) {
	const steps = gsap.utils.toArray(".step-item");
	const giant = document.getElementById("how-giant");
	const fill = document.getElementById("steps-line-fill");
	const activate = (index) => {
		steps.forEach((step, i) => {
			const num = step.querySelector(".step-num");
			if (!num) return;
			num.classList.toggle("is-on", i <= index);
		});
		if (giant) giant.textContent = String(index + 1).padStart(2, "0");
	};
	if (reduce) {
		activate(4);
		if (fill) fill.style.height = "100%";
		return;
	}
	const mm = gsap.matchMedia();
	mm.add("(min-width: 1024px)", () => {
		gsap.fromTo(fill, { height: "0%" }, {
			height: "100%",
			ease: "none",
			scrollTrigger: {
				trigger: "#how-pin",
				start: "top 14%",
				end: "+=220%",
				pin: true,
				scrub: .7,
				anticipatePin: 1,
				onUpdate: (self) => {
					const i = Math.min(steps.length - 1, Math.floor(self.progress * .999 * steps.length));
					activate(i);
				}
			}
		});
	});
	mm.add("(max-width: 1023px)", () => {
		ScrollTrigger.create({
			trigger: "#steps-wrap",
			start: "top 70%",
			end: "bottom 40%",
			scrub: .6,
			onUpdate: (self) => {
				if (fill) fill.style.height = `${self.progress * 100}%`;
				activate(Math.min(steps.length - 1, Math.floor(self.progress * steps.length)));
			}
		});
	});
}
function characterSheet(reduce) {
	const play = () => {
		gsap.to("#char-xp-bar", {
			width: "82%",
			duration: reduce ? 0 : 1.4,
			ease: "power2.out"
		});
		gsap.to({ val: 0 }, {
			val: 820,
			duration: reduce ? 0 : 1.6,
			onUpdate: function() {
				const el = document.getElementById("char-xp-current");
				if (el) el.textContent = String(Math.round(this["targets"]()[0].val));
			}
		});
		gsap.to({ val: 0 }, {
			val: 12,
			duration: reduce ? 0 : 1.2,
			onUpdate: function() {
				const el = document.getElementById("char-level");
				if (el) el.textContent = String(Math.round(this["targets"]()[0].val));
			}
		});
		document.querySelectorAll(".attr-row").forEach((row, i) => {
			const value = row.dataset["value"] ?? "0";
			const bar = row.querySelector(".attr-bar");
			const label = row.querySelector(".attr-val");
			gsap.to(bar, {
				width: `${value}%`,
				duration: reduce ? 0 : 1.2,
				delay: i * .12,
				ease: "power2.out"
			});
			gsap.to({ val: 0 }, {
				val: Number(value),
				duration: reduce ? 0 : 1.2,
				delay: i * .12,
				onUpdate: function() {
					if (label) label.textContent = `${Math.round(this["targets"]()[0].val)}%`;
				}
			});
		});
	};
	ScrollTrigger.create({
		trigger: "#char-panel",
		start: "top 70%",
		once: true,
		onEnter: play
	});
}
function questFilters() {
	const btns = Array.from(document.querySelectorAll(".quest-filter"));
	const cards = gsap.utils.toArray(".quest-card");
	const pill = document.getElementById("filter-pill");
	const movePill = (btn) => {
		if (!pill) return;
		const parent = btn.parentElement;
		if (!parent) return;
		const pr = parent.getBoundingClientRect();
		const br = btn.getBoundingClientRect();
		gsap.to(pill, {
			x: br.left - pr.left,
			y: br.top - pr.top,
			width: br.width,
			height: br.height,
			duration: .4,
			ease: "power3.out"
		});
	};
	if (btns[0]) movePill(btns[0]);
	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			btns.forEach((b) => {
				b.dataset["active"] = "false";
				b.classList.remove("text-teal");
				b.classList.add("text-muted");
			});
			btn.dataset["active"] = "true";
			btn.classList.add("text-teal");
			btn.classList.remove("text-muted");
			movePill(btn);
			const cat = btn.dataset["cat"];
			const state = Flip.getState(cards);
			cards.forEach((card) => {
				const match = cat === "all" || card.dataset["cat"] === cat;
				card.style.display = match ? "" : "none";
			});
			Flip.from(state, {
				duration: .55,
				ease: "power2.inOut",
				absoluteOnLeave: true,
				stagger: .03,
				scale: true,
				onEnter: (el) => gsap.fromTo(el, {
					opacity: 0,
					scale: .96
				}, {
					opacity: 1,
					scale: 1,
					duration: .4
				}),
				onLeave: (el) => gsap.to(el, {
					opacity: 0,
					scale: .96,
					duration: .25
				})
			});
		});
	});
}
function horizontalQuests(reduce) {
	if (reduce) return;
	gsap.matchMedia().add("(min-width: 768px)", () => {
		const track = document.getElementById("quest-preview-track");
		const pin = document.getElementById("quest-pin");
		if (!track || !pin) return;
		const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
		gsap.to(track, {
			x: () => -distance(),
			ease: "none",
			scrollTrigger: {
				trigger: pin,
				start: "top 28%",
				end: () => `+=${distance()}`,
				pin: true,
				scrub: .8,
				anticipatePin: 1,
				invalidateOnRefresh: true
			}
		});
	});
}
function streakMotion(reduce) {
	ScrollTrigger.create({
		trigger: "#streak",
		start: "top 65%",
		once: true,
		onEnter: () => {
			document.querySelectorAll(".streak-day").forEach((day, i) => {
				gsap.to(day, {
					opacity: 1,
					duration: reduce ? 0 : .35,
					delay: reduce ? 0 : i * .06,
					onStart: () => {
						day.style.borderColor = "rgba(0,230,77,0.6)";
						day.style.background = "rgba(0,230,77,0.12)";
						day.style.color = "#00E64D";
					}
				});
			});
			gsap.to({ val: 0 }, {
				val: 14,
				duration: reduce ? 0 : 1.4,
				delay: .3,
				ease: "power1.out",
				onUpdate: function() {
					const el = document.getElementById("streak-count");
					if (el) el.textContent = String(Math.round(this["targets"]()[0].val));
				}
			});
		}
	});
}
function marquee(reduce) {
	const track = document.getElementById("marquee-track");
	if (!track || reduce) return;
	const tween = gsap.to(track, {
		xPercent: -50,
		duration: 26,
		ease: "none",
		repeat: -1
	});
	track.addEventListener("mouseenter", () => tween.pause());
	track.addEventListener("mouseleave", () => tween.play());
}
function finalGlow(reduce) {
	if (reduce) return;
	gsap.to("#final-glow", {
		x: 60,
		y: -40,
		duration: 8,
		ease: "sine.inOut",
		yoyo: true,
		repeat: -1
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/routes/index.tsx?tsr-split=component";
function Home() {
	return /* @__PURE__ */ jsxDEV(LandingPage, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
