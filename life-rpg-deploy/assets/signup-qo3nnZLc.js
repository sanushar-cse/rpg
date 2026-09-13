import { d as logout, f as signup, t as AuthGate } from "./auth-context-BDH5FChT.js";
import { o as useGame } from "./game-CGf3IRY5.js";
import { t as AuthBackdrop } from "./login-page-Bp7VX-Rb.js";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
import { Eye, LoaderCircle } from "lucide-react";
//#region src/components/signup-page.tsx
var _jsxFileName$1 = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/signup-page.tsx";
function SignupPage() {
	const navigate = useNavigate();
	const resetRun = useGame((state) => state.resetRun);
	const [callsign, setCallsign] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;
	const submit = async (event) => {
		event.preventDefault();
		setError(null);
		if (callsign.trim().length < 1) return setError("Enter a callsign.");
		if (!email || !email.includes("@")) return setError("Enter a valid email address.");
		if (password.length < 8) return setError("Password must be at least 8 characters.");
		if (password !== confirmPassword) return setError("Passwords do not match.");
		setLoading(true);
		try {
			await signup(callsign, email, password);
			await logout();
			resetRun();
			await navigate({ to: "/login" });
		} catch (reason) {
			setError(reason instanceof Error ? reason.message : "Unable to create account.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxDEV("main", {
		className: "login-page relative grid min-h-dvh place-items-center overflow-hidden bg-void px-5 py-20",
		children: [/* @__PURE__ */ jsxDEV(AuthBackdrop, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 43,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxDEV("section", {
				className: "login-card signup-card",
				children: [
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/",
						className: "login-brand",
						children: ["LIFE", /* @__PURE__ */ jsxDEV("span", { children: "RPG" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 47,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 46,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "title",
						children: "Create your account"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 49,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "signup-intro",
						children: "Choose your callsign and start your run."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 50,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("form", {
						onSubmit: submit,
						className: "form",
						noValidate: true,
						children: [
							/* @__PURE__ */ jsxDEV("div", {
								className: "input-group",
								children: [/* @__PURE__ */ jsxDEV("label", {
									htmlFor: "signup-callsign",
									children: "Name"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 53,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("input", {
									id: "signup-callsign",
									value: callsign,
									onChange: (event) => setCallsign(event.target.value),
									maxLength: 80,
									placeholder: "Your name",
									autoComplete: "nickname",
									disabled: loading
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 54,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 52,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "input-group",
								children: [/* @__PURE__ */ jsxDEV("label", {
									htmlFor: "signup-email",
									children: "Email"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 65,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("input", {
									id: "signup-email",
									type: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									placeholder: "you@example.com",
									autoComplete: "email",
									disabled: loading
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 66,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 64,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "input-group",
								children: [/* @__PURE__ */ jsxDEV("label", {
									htmlFor: "signup-password",
									children: "Create password"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 77,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("div", {
									className: "password-input-wrap",
									children: [/* @__PURE__ */ jsxDEV("input", {
										id: "signup-password",
										type: showPassword ? "text" : "password",
										value: password,
										onChange: (event) => setPassword(event.target.value),
										placeholder: "At least 8 characters",
										autoComplete: "new-password",
										disabled: loading
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 79,
										columnNumber: 17
									}, this), /* @__PURE__ */ jsxDEV("button", {
										type: "button",
										className: "password-toggle",
										"aria-label": showPassword ? "Hide password" : "Show password",
										onPointerDown: (event) => {
											event.currentTarget.setPointerCapture(event.pointerId);
											setShowPassword(true);
										},
										onPointerUp: () => setShowPassword(false),
										onPointerCancel: () => setShowPassword(false),
										onKeyDown: (event) => {
											if (event.key === "Enter" || event.key === " ") setShowPassword(true);
										},
										onKeyUp: () => setShowPassword(false),
										children: /* @__PURE__ */ jsxDEV(Eye, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 103,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 88,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 78,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 76,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "input-group",
								children: [
									/* @__PURE__ */ jsxDEV("label", {
										htmlFor: "signup-confirm-password",
										children: "Confirm password"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 108,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ jsxDEV("div", {
										className: "password-input-wrap",
										children: [/* @__PURE__ */ jsxDEV("input", {
											id: "signup-confirm-password",
											type: showConfirmPassword ? "text" : "password",
											value: confirmPassword,
											onChange: (event) => setConfirmPassword(event.target.value),
											placeholder: "Repeat your password",
											autoComplete: "new-password",
											disabled: loading,
											"aria-invalid": passwordsMismatch
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 110,
											columnNumber: 17
										}, this), /* @__PURE__ */ jsxDEV("button", {
											type: "button",
											className: "password-toggle",
											"aria-label": showConfirmPassword ? "Hide confirmation password" : "Show confirmation password",
											onPointerDown: (event) => {
												event.currentTarget.setPointerCapture(event.pointerId);
												setShowConfirmPassword(true);
											},
											onPointerUp: () => setShowConfirmPassword(false),
											onPointerCancel: () => setShowConfirmPassword(false),
											onKeyDown: (event) => {
												if (event.key === "Enter" || event.key === " ") setShowConfirmPassword(true);
											},
											onKeyUp: () => setShowConfirmPassword(false),
											children: /* @__PURE__ */ jsxDEV(Eye, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 139,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 120,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 109,
										columnNumber: 15
									}, this),
									passwordsMismatch ? /* @__PURE__ */ jsxDEV("p", {
										className: "login-error",
										children: "Passwords must match."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 142,
										columnNumber: 36
									}, this) : null
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 107,
								columnNumber: 13
							}, this),
							error ? /* @__PURE__ */ jsxDEV("p", {
								role: "alert",
								className: "login-error",
								children: error
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 145,
								columnNumber: 15
							}, this) : null,
							/* @__PURE__ */ jsxDEV("button", {
								className: "sign",
								type: "submit",
								disabled: loading || passwordsMismatch,
								children: loading ? /* @__PURE__ */ jsxDEV(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 150,
									columnNumber: 26
								}, this) : "Create account"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 149,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 51,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "signup",
						children: ["Already have an account? ", /* @__PURE__ */ jsxDEV(Link, {
							to: "/login",
							children: "Log in"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 154,
							columnNumber: 38
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 153,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 45,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 44,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/signup.tsx?tsr-split=component
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/routes/signup.tsx?tsr-split=component";
var SplitComponent = () => /* @__PURE__ */ jsxDEV(AuthGate, {
	requireGuest: true,
	redirectTo: "/play",
	children: /* @__PURE__ */ jsxDEV(SignupPage, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 7
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 3,
	columnNumber: 30
}, void 0);
//#endregion
export { SplitComponent as component };
