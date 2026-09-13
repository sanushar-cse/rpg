import { r as useAuth, u as login } from "./auth-context-BDH5FChT.js";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
import { LoaderCircle } from "lucide-react";
import { PredictiveArcCanvas } from "@designcodeio/threeui";
//#region src/components/login-page.tsx
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/login-page.tsx";
function LoginCard() {
	const navigate = useNavigate();
	const { login: setAuthenticatedUser, logout: clearAuthenticatedUser } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const openSignup = async (event) => {
		event.preventDefault();
		await clearAuthenticatedUser();
		await navigate({ to: "/signup" });
	};
	const submit = async (event) => {
		event.preventDefault();
		setError(null);
		if (!email || !email.includes("@")) return setError("Enter a valid email address.");
		if (password.length < 8) return setError("Password must be at least 8 characters.");
		setLoading(true);
		try {
			const authenticatedUser = await login(email, password);
			setAuthenticatedUser(authenticatedUser);
			await navigate({ to: "/play" });
		} catch (reason) {
			setError(reason instanceof Error ? reason.message : "Unable to sign in.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxDEV("section", {
		className: "login-card",
		children: [
			/* @__PURE__ */ jsxDEV(Link, {
				to: "/",
				className: "login-brand",
				children: ["LIFE", /* @__PURE__ */ jsxDEV("span", { children: "RPG" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "title",
				children: "Login"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("form", {
				onSubmit: submit,
				className: "form",
				noValidate: true,
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "input-group",
						children: [/* @__PURE__ */ jsxDEV("label", {
							htmlFor: "login-email",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV("input", {
							id: "login-email",
							type: "email",
							value: email,
							onChange: (event) => setEmail(event.target.value),
							placeholder: "you@example.com",
							autoComplete: "email",
							disabled: loading
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "input-group",
						children: [
							/* @__PURE__ */ jsxDEV("label", {
								htmlFor: "login-password",
								children: "Password"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("input", {
								id: "login-password",
								type: "password",
								value: password,
								onChange: (event) => setPassword(event.target.value),
								placeholder: "Enter your password",
								autoComplete: "current-password",
								disabled: loading
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "forgot",
								children: /* @__PURE__ */ jsxDEV("a", {
									href: "#forgot-password",
									onClick: (event) => event.preventDefault(),
									children: "Forgot Password?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 9
					}, this),
					error ? /* @__PURE__ */ jsxDEV("p", {
						role: "alert",
						className: "login-error",
						children: error
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 11
					}, this) : null,
					/* @__PURE__ */ jsxDEV("button", {
						className: "sign",
						type: "submit",
						disabled: loading,
						children: loading ? /* @__PURE__ */ jsxDEV(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 22
						}, this) : "Sign in"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "signup",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/signup",
						onClick: openSignup,
						children: "Sign up"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "demo-account",
				children: "Demo account: demo@liferpg.local / ChangeMe123!"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
function LoginPage() {
	return /* @__PURE__ */ jsxDEV("main", {
		className: "login-page relative grid min-h-dvh place-items-center overflow-hidden bg-void px-5 py-20",
		children: [/* @__PURE__ */ jsxDEV(AuthBackdrop, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxDEV(LoginCard, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 97,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 5
	}, this);
}
function AuthBackdrop() {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "auth-backdrop",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxDEV(PredictiveArcCanvas, {
			variant: "predictive",
			mode: "dark",
			speed: 1,
			hue: 0,
			saturation: 1,
			brightness: 1
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 106,
		columnNumber: 5
	}, this);
}
//#endregion
export { LoginCard as n, LoginPage as r, AuthBackdrop as t };
