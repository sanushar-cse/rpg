import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/lib/apiClient.ts
var API_URL = "http://localhost:4000/api";
var accessToken = null;
var refreshInFlight = null;
var AUTH_STORAGE_KEY = "life-rpg-auth-user";
var isBrowser = typeof window !== "undefined";
function persistUser(user) {
	if (!isBrowser) return;
	if (!user) {
		localStorage.removeItem(AUTH_STORAGE_KEY);
		return;
	}
	localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}
function getStoredUser() {
	if (!isBrowser) return null;
	try {
		const raw = localStorage.getItem(AUTH_STORAGE_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function setAccessToken(token) {
	accessToken = token;
	if (!isBrowser) return;
	if (!token) {
		sessionStorage.removeItem("life-rpg-access-token");
		return;
	}
	sessionStorage.setItem("life-rpg-access-token", token);
}
function getAccessTokenFromSession() {
	if (!isBrowser) return null;
	return sessionStorage.getItem("life-rpg-access-token");
}
async function refreshAccessToken() {
	if (!refreshInFlight) refreshInFlight = fetch(`${API_URL}/auth/refresh`, {
		method: "POST",
		credentials: "include",
		headers: { "x-csrf-token": getCsrfToken() }
	}).then(async (response) => {
		if (!response.ok) return null;
		const nextToken = (await response.json()).data.accessToken;
		setAccessToken(nextToken);
		return nextToken;
	}).finally(() => {
		refreshInFlight = null;
	});
	return refreshInFlight;
}
function getCsrfToken() {
	if (!isBrowser) return "";
	return document.cookie.split("; ").find((entry) => entry.startsWith("csrf_token="))?.split("=")[1] ?? "";
}
async function apiRequest(path, init = {}, retry = true) {
	const headers = new Headers(init.headers);
	headers.set("content-type", "application/json");
	const currentToken = accessToken ?? getAccessTokenFromSession();
	if (currentToken) headers.set("authorization", `Bearer ${currentToken}`);
	if (init.method && init.method !== "GET") headers.set("x-csrf-token", getCsrfToken());
	let response;
	try {
		response = await fetch(`${API_URL}${path}`, {
			...init,
			headers,
			credentials: "include"
		});
	} catch {
		throw new Error(`Unable to reach the API at ${API_URL}. Start the backend or check VITE_API_URL.`);
	}
	if (response.status === 401 && retry && !path.startsWith("/auth/")) {
		if (await refreshAccessToken()) return apiRequest(path, {
			...init,
			headers: new Headers(init.headers)
		}, false);
	}
	const responseText = await response.text();
	let body;
	try {
		body = JSON.parse(responseText);
	} catch {
		throw new Error(response.status === 429 ? "Too many authentication attempts. Please try again in a few minutes." : `Request failed (${response.status}). Please try again.`);
	}
	if (!response.ok || !body.success) throw new Error(body.error.message);
	return body.data;
}
async function login(email, password) {
	const result = await apiRequest("/auth/login", {
		method: "POST",
		body: JSON.stringify({
			email,
			password
		})
	});
	const user = {
		id: result.user.id,
		email: result.user.email,
		displayName: result.user.displayName ?? result.user.name ?? result.user.email,
		name: result.user.name ?? result.user.displayName,
		roles: result.user.roles,
		createdAt: result.user.createdAt
	};
	setAccessToken(result.accessToken);
	persistUser(user);
	return user;
}
async function signup(callsign, email, password) {
	const result = await apiRequest("/auth/signup", {
		method: "POST",
		body: JSON.stringify({
			callsign,
			email,
			password
		})
	});
	const user = {
		id: result.user.id,
		email: result.user.email,
		displayName: result.user.displayName ?? result.user.name ?? result.user.email,
		name: result.user.name ?? result.user.displayName,
		roles: result.user.roles,
		createdAt: result.user.createdAt
	};
	setAccessToken(result.accessToken);
	persistUser(user);
	return user;
}
async function logout() {
	try {
		await apiRequest("/auth/logout", { method: "POST" });
	} catch {}
	accessToken = null;
	sessionStorage.removeItem("life-rpg-access-token");
	persistUser(null);
}
async function getCharacter() {
	return apiRequest("/character");
}
async function createCharacterRecord(name, archetype) {
	return apiRequest("/character", {
		method: "POST",
		body: JSON.stringify({
			name,
			archetype
		})
	});
}
async function getQuestRecords() {
	return apiRequest("/quests");
}
async function createQuestRecord(input) {
	return apiRequest("/quests", {
		method: "POST",
		body: JSON.stringify(input)
	});
}
async function completeQuestRecord(id) {
	return apiRequest(`/quests/${id}/complete`, { method: "PATCH" });
}
async function deleteQuestRecord(id) {
	return apiRequest(`/quests/${id}`, { method: "DELETE" });
}
async function restoreSession() {
	const stored = getStoredUser();
	const storedToken = getAccessTokenFromSession();
	if (storedToken) accessToken = storedToken;
	if (!stored || !storedToken) {
		if (!await refreshAccessToken().catch(() => null)) return null;
	}
	try {
		const me = await apiRequest("/me");
		const user = {
			id: me.id,
			email: me.email,
			displayName: me.displayName,
			roles: me.roles,
			name: stored?.name,
			createdAt: stored?.createdAt
		};
		persistUser(user);
		return user;
	} catch {
		setAccessToken(null);
		persistUser(null);
		return null;
	}
}
//#endregion
//#region src/lib/auth-context.tsx
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/lib/auth-context.tsx";
var AuthContext = createContext(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = useState(() => getStoredUser());
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		let isMounted = true;
		async function bootstrap() {
			const nextUser = await restoreSession();
			if (isMounted) {
				setUser(nextUser);
				setIsLoading(false);
			}
		}
		bootstrap();
		return () => {
			isMounted = false;
		};
	}, []);
	const value = useMemo(() => ({
		user,
		isAuthenticated: Boolean(user),
		isLoading,
		login: (nextUser) => setUser(nextUser),
		logout: async () => {
			await logout();
			setUser(null);
		},
		refresh: async () => {
			const nextUser = await restoreSession();
			setUser(nextUser);
			return nextUser;
		}
	}), [user, isLoading]);
	return /* @__PURE__ */ jsxDEV(AuthContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 10
	}, this);
}
function useAuth() {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used inside AuthProvider");
	return context;
}
function AuthGate({ children, requireAuth = false, requireGuest = false, redirectTo = "/login" }) {
	const { user, isLoading } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (isLoading) return;
		if (requireAuth && !user) {
			navigate({
				to: redirectTo,
				search: { redirect: location.pathname }
			});
			return;
		}
		if (requireGuest && user) {
			const goTo = location.pathname === "/login" || location.pathname === "/signup" ? "/play" : "/play";
			navigate({ to: goTo });
		}
	}, [
		isLoading,
		user,
		requireAuth,
		requireGuest,
		redirectTo,
		location.pathname,
		navigate
	]);
	if (isLoading) return /* @__PURE__ */ jsxDEV("div", {
		className: "grid min-h-screen place-items-center bg-void text-white",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "text-sm uppercase tracking-[0.3em] text-muted-foreground",
			children: "Loading session…"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 7
	}, this);
	if (requireAuth && !user) return null;
	if (requireGuest && user) return null;
	return /* @__PURE__ */ jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 10
	}, this);
}
//#endregion
export { createCharacterRecord as a, getCharacter as c, logout as d, signup as f, completeQuestRecord as i, getQuestRecords as l, AuthProvider as n, createQuestRecord as o, useAuth as r, deleteQuestRecord as s, AuthGate as t, login as u };
