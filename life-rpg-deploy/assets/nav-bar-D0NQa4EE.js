import { o as useGame, s as xpToNext } from "./game-CGf3IRY5.js";
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Observer } from "gsap/Observer";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { Menu, X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
//#region src/lib/gsap-init.ts
var registered = false;
function registerGsap() {
	if (registered || typeof window === "undefined") return;
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText, ScrambleTextPlugin, Flip, DrawSVGPlugin, MotionPathPlugin, CustomEase, TextPlugin, Observer);
	CustomEase.create("lifeOut", "M0,0 C0.16,1 0.3,1 1,1");
	CustomEase.create("lifeHop", "M0,0 C0.34,1.36 0.64,1 1,1");
	gsap.config({ nullTargetWarn: false });
	registered = true;
}
registerGsap();
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function isFinePointer() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(pointer: fine)").matches;
}
//#endregion
//#region src/components/ui/button.tsx
var _jsxFileName$1 = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-display tracking-wide whitespace-nowrap transition-[transform,filter,color,background-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "btn-gradient",
			primary: "btn-gradient rounded-full",
			outline: "rounded-full shadow-[0_0_0_1px_var(--color-ink)] text-ink hover:bg-ink hover:text-void",
			ghost: "text-muted hover:text-ink",
			gold: "btn-gradient rounded-full"
		},
		size: {
			default: "h-12 px-6 text-sm",
			sm: "h-11 px-4 text-sm",
			md: "h-12 px-6 text-sm",
			lg: "h-14 px-8 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	const Comp = asChild ? Slot : "button";
	return asChild ? /* @__PURE__ */ jsxDEV(Comp, {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 41,
		columnNumber: 5
	}, this) : /* @__PURE__ */ jsxDEV(Comp, {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props,
		children: /* @__PURE__ */ jsxDEV("span", {
			className: "button-content",
			children: props.children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 44,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/nav-bar.tsx
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/nav-bar.tsx";
var LANDING_LINKS = [
	{
		href: "#main",
		label: "Home"
	},
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#how-it-works",
		label: "The Loop"
	},
	{
		href: "#quests",
		label: "Board"
	}
];
function scrollToHash(hash) {
	const smoother = ScrollSmoother.get();
	if (smoother) {
		smoother.scrollTo(hash, true, "top 72px");
		return;
	}
	document.querySelector(hash)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function NavBar({ onLoginClick }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isPlay = pathname.startsWith("/play");
	const character = useGame((s) => s.character);
	const [open, setOpen] = useState(false);
	const [elevated, setElevated] = useState(false);
	useEffect(() => {
		const st = ScrollTrigger.create({
			start: "top -64",
			end: 99999,
			onUpdate: (self) => setElevated(self.scroll() > 48)
		});
		return () => st.kill();
	}, [pathname]);
	useEffect(() => {
		const list = document.getElementById("nav-links");
		const underline = document.getElementById("nav-underline");
		if (!list || !underline) return;
		const links = list.querySelectorAll("a");
		const enter = (link) => {
			const linkRect = link.getBoundingClientRect();
			const listRect = list.getBoundingClientRect();
			gsap.to(underline, {
				left: linkRect.left - listRect.left,
				width: linkRect.width,
				opacity: 1,
				duration: .35,
				ease: "power3.out"
			});
		};
		const leave = () => gsap.to(underline, {
			opacity: 0,
			duration: .25
		});
		const handlers = [];
		links.forEach((link) => {
			const onEnter = () => enter(link);
			link.addEventListener("mouseenter", onEnter);
			handlers.push(() => link.removeEventListener("mouseenter", onEnter));
		});
		list.addEventListener("mouseleave", leave);
		return () => {
			handlers.forEach((fn) => fn());
			list.removeEventListener("mouseleave", leave);
		};
	}, [isPlay]);
	return /* @__PURE__ */ jsxDEV("header", {
		id: "navbar",
		className: cn("fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow] duration-500", elevated && "nav-elevated"),
		children: [
			!isPlay ? /* @__PURE__ */ jsxDEV("div", {
				className: "flex min-h-9 items-center justify-center bg-teal px-4 text-center text-xs font-semibold text-void",
				children: "Life RPG is ready for everyone — make your next move count."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 9
			}, this) : null,
			/* @__PURE__ */ jsxDEV("nav", {
				className: "mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-5 md:gap-6 md:px-10",
				"aria-label": "Primary",
				children: [
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/",
						className: "flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-lg tracking-wide text-ink md:text-xl",
						children: [
							/* @__PURE__ */ jsxDEV("span", { className: "inline-block size-3 rounded-full bg-teal" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 11
							}, this),
							"LIFE",
							/* @__PURE__ */ jsxDEV("span", {
								className: "text-teal",
								children: "RPG"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 9
					}, this),
					!isPlay ? /* @__PURE__ */ jsxDEV("ul", {
						className: "relative hidden items-center gap-9 text-sm text-muted md:flex",
						id: "nav-links",
						children: [LANDING_LINKS.map((l) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", {
							href: l.href,
							className: "transition-colors hover:text-ink",
							onClick: (e) => {
								e.preventDefault();
								scrollToHash(l.href);
							},
							children: l.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 17
						}, this) }, l.href, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 15
						}, this)), /* @__PURE__ */ jsxDEV("span", {
							id: "nav-underline",
							"aria-hidden": "true",
							className: "pointer-events-none"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 11
					}, this) : /* @__PURE__ */ jsxDEV(PlayHud, { character }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex items-center gap-3",
						children: isPlay ? /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "home-nav-button",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/",
								children: "Home"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 13
						}, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "login-nav-button",
							children: onLoginClick ? /* @__PURE__ */ jsxDEV("button", {
								type: "button",
								onClick: onLoginClick,
								children: "Sign in"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 19
							}, this) : /* @__PURE__ */ jsxDEV(Link, {
								to: "/login",
								children: "Sign in"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 130,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center text-ink md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ jsxDEV(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 25
							}, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 52
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 7
			}, this),
			open && !isPlay ? /* @__PURE__ */ jsxDEV("div", {
				className: "border-t border-line bg-void px-5 py-6 md:hidden",
				children: /* @__PURE__ */ jsxDEV("ul", {
					className: "flex flex-col gap-2",
					children: [LANDING_LINKS.map((l) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", {
						href: l.href,
						className: "flex min-h-11 items-center font-display tracking-wide text-ink",
						onClick: (e) => {
							e.preventDefault();
							setOpen(false);
							scrollToHash(l.href);
						},
						children: l.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 17
					}, this) }, l.href, false, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 15
					}, this)), /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, {
						to: "/play",
						className: "flex min-h-11 items-center font-display text-teal",
						onClick: () => setOpen(false),
						children: "Enter HQ →"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 170,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 5
	}, this);
}
function PlayHud({ character }) {
	if (!character) return null;
	const needed = xpToNext(character.level);
	const pct = Math.min(100, Math.round(character.xp / needed * 100));
	return /* @__PURE__ */ jsxDEV("div", {
		className: "hidden min-w-0 items-center gap-5 md:flex",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "w-44",
			children: [/* @__PURE__ */ jsxDEV("div", {
				className: "mb-1 flex items-center justify-between font-display text-[10px] tracking-widest text-muted",
				children: [/* @__PURE__ */ jsxDEV("span", { children: ["LV ", /* @__PURE__ */ jsxDEV("span", {
					className: "text-teal",
					children: String(character.level).padStart(2, "0")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 195,
					columnNumber: 16
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 194,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("span", {
					className: "tabular-nums text-teal",
					children: [
						character.xp,
						" / ",
						needed
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 197,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("div", {
				id: "nav-xp-bar",
				className: "stat-track h-1.5",
				children: /* @__PURE__ */ jsxDEV("div", {
					className: "stat-fill h-full",
					style: { width: `${pct}%` }
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 202,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 201,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 192,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("span", {
			className: "font-display text-sm tracking-wide text-gold",
			children: [character.gold, " G"]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 205,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 191,
		columnNumber: 5
	}, this);
}
//#endregion
export { prefersReducedMotion as a, ScrollTrigger as c, isFinePointer as i, SplitText as l, Button as n, Flip as o, cn as r, ScrollSmoother as s, NavBar as t, gsap as u };
