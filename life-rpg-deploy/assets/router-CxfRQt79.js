import { a as prefersReducedMotion, i as isFinePointer, u as gsap } from "./nav-bar-D0NQa4EE.js";
import { n as AuthProvider } from "./auth-context-BDH5FChT.js";
import "./play-app-5Ezf5bgF.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/styles.css?url
var styles_default = "/assets/styles-CPkrmtOC.css";
//#endregion
//#region src/components/cursor.tsx
var _jsxFileName$1 = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/cursor.tsx";
function Cursor() {
	useEffect(() => {
		if (!isFinePointer() || prefersReducedMotion()) return;
		const dot = document.getElementById("cursor-dot");
		const ring = document.getElementById("cursor-ring");
		if (!dot || !ring) return;
		gsap.set([dot, ring], { opacity: 0 });
		const dotX = gsap.quickTo(dot, "x", {
			duration: .12,
			ease: "power3.out"
		});
		const dotY = gsap.quickTo(dot, "y", {
			duration: .12,
			ease: "power3.out"
		});
		const ringX = gsap.quickTo(ring, "x", {
			duration: .45,
			ease: "power3.out"
		});
		const ringY = gsap.quickTo(ring, "y", {
			duration: .45,
			ease: "power3.out"
		});
		const onMove = (e) => {
			dotX(e.clientX);
			dotY(e.clientY);
			ringX(e.clientX);
			ringY(e.clientY);
			gsap.to([dot, ring], {
				opacity: 1,
				duration: .25,
				overwrite: "auto"
			});
		};
		const onLeave = () => gsap.to([dot, ring], {
			opacity: 0,
			duration: .25
		});
		const grow = () => gsap.to(ring, {
			scale: 1.85,
			duration: .3,
			ease: "power3.out"
		});
		const shrink = () => gsap.to(ring, {
			scale: 1,
			duration: .3,
			ease: "power3.out"
		});
		window.addEventListener("mousemove", onMove);
		document.addEventListener("mouseleave", onLeave);
		const hoverables = () => document.querySelectorAll("a, button, [data-magnetic]");
		const bind = () => {
			hoverables().forEach((el) => {
				el.addEventListener("mouseenter", grow);
				el.addEventListener("mouseleave", shrink);
			});
		};
		bind();
		const mo = new MutationObserver(bind);
		mo.observe(document.body, {
			childList: true,
			subtree: true
		});
		return () => {
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseleave", onLeave);
			mo.disconnect();
		};
	}, []);
	return /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("div", {
		id: "cursor-dot",
		"aria-hidden": "true"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 52,
		columnNumber: 7
	}, this), /* @__PURE__ */ jsxDEV("div", {
		id: "cursor-ring",
		"aria-hidden": "true"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 53,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 51,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
//#endregion
//#region src/routes/__root.tsx
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsxDEV("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsxDEV(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsxDEV("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsxDEV("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#050505"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxDEV("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxDEV("head", { children: /* @__PURE__ */ jsxDEV(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 102,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("body", { children: [children, /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 106,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 100,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ jsxDEV(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxDEV(AuthProvider, { children: [/* @__PURE__ */ jsxDEV(Cursor, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 9
		}, this), /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 120,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$3 = () => import("./routes-C0zP3gwb.js");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Life RPG — Turn Goals Into Quests" },
		{
			name: "description",
			content: "Turn everyday goals into quests, earn XP, build your character, and level up your real life."
		},
		{
			property: "og:title",
			content: "Life RPG — Turn Goals Into Quests"
		},
		{
			property: "og:description",
			content: "Build momentum through quests, XP, streaks, and real-world progress."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/login.tsx
var $$splitComponentImporter$2 = () => import("./login-WA-olaW7.js");
var Route$2 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login — Life RPG" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/play.tsx
var $$splitComponentImporter$1 = () => import("./play-DC9E9FjD.js");
var Route$1 = createFileRoute("/play")({
	head: () => ({ meta: [
		{ title: "Headquarters — Life RPG" },
		{
			name: "description",
			content: "Create your character, complete quests, earn XP, and build your streak."
		},
		{
			property: "og:title",
			content: "Headquarters — Life RPG"
		},
		{
			property: "og:description",
			content: "Your personal quest board for real-world progress."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/signup.tsx
var $$splitComponentImporter = () => import("./signup-qo3nnZLc.js");
var Route = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Create account — Life RPG" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	LoginRoute: Route$2.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$4
	}),
	PlayRoute: Route$1.update({
		id: "/play",
		path: "/play",
		getParentRoute: () => Route$4
	}),
	SignupRoute: Route.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { getRouter };
