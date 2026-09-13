import { a as prefersReducedMotion, n as Button, r as cn, t as NavBar, u as gsap } from "./nav-bar-D0NQa4EE.js";
import { a as createCharacterRecord, c as getCharacter, i as completeQuestRecord, l as getQuestRecords, o as createQuestRecord, r as useAuth, s as deleteQuestRecord } from "./auth-context-BDH5FChT.js";
import { a as STARTER_QUESTS, i as CATEGORIES, n as ARCHETYPES, o as useGame, r as ATTRIBUTE_META, s as xpToNext, t as ACHIEVEMENTS } from "./game-CGf3IRY5.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
import { useGSAP } from "@gsap/react";
import { Flame, Plus, Star, Swords, Trophy, X, Zap } from "lucide-react";
//#region src/components/play-app.tsx
var _jsxFileName = "C:/Users/rithi/OneDrive/Desktop/rithik/life-rpg/src/components/play-app.tsx";
var ICONS = {
	trophy: Trophy,
	flame: Flame,
	zap: Zap,
	star: Star,
	swords: Swords,
	book: Star
};
function mapServerCharacter(savedCharacter) {
	return {
		name: savedCharacter.name,
		archetype: savedCharacter.archetype,
		level: savedCharacter.level,
		xp: savedCharacter.xp,
		gold: savedCharacter.gold,
		streak: savedCharacter.streak,
		lastActiveDate: savedCharacter.last_active_date,
		attributes: {
			strength: savedCharacter.attributes.strength ?? 0,
			intelligence: savedCharacter.attributes.intelligence ?? 0,
			discipline: savedCharacter.attributes.discipline ?? 0,
			creativity: savedCharacter.attributes.creativity ?? 0,
			social: savedCharacter.attributes.social ?? 0,
			health: savedCharacter.attributes.health ?? 0
		},
		achievements: savedCharacter.achievements,
		createdAt: Date.now()
	};
}
function PlayApp() {
	const [hydrated, setHydrated] = useState(false);
	const [serverLoading, setServerLoading] = useState(true);
	const [serverError, setServerError] = useState(null);
	const { user } = useAuth();
	const onboarded = useGame((s) => s.onboarded);
	const character = useGame((s) => s.character);
	const resetRun = useGame((s) => s.resetRun);
	const hydrateFromServer = useGame((s) => s.hydrateFromServer);
	useEffect(() => {
		setHydrated(true);
	}, []);
	const loadServerState = useCallback(async () => {
		setServerLoading(true);
		setServerError(null);
		try {
			const savedCharacter = await getCharacter();
			if (!savedCharacter) {
				resetRun();
				return;
			}
			const savedQuests = await getQuestRecords();
			hydrateFromServer(mapServerCharacter(savedCharacter), savedQuests.map((quest) => ({
				id: quest.id,
				title: quest.title,
				category: quest.category,
				difficulty: quest.difficulty,
				xp: quest.xp_reward,
				gold: quest.gold_reward,
				progress: quest.progress,
				completed: quest.completed,
				createdAt: new Date(quest.created_at).getTime()
			})), savedCharacter.lifetime_xp);
		} catch (reason) {
			resetRun();
			setServerError(reason instanceof Error ? reason.message : "Unable to load your headquarters.");
			throw reason;
		} finally {
			setServerLoading(false);
		}
	}, [hydrateFromServer, resetRun]);
	useEffect(() => {
		if (!hydrated || !user) return;
		resetRun();
		loadServerState().catch(() => void 0);
	}, [
		hydrated,
		loadServerState,
		resetRun,
		user
	]);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "min-h-dvh bg-void",
		children: [/* @__PURE__ */ jsxDEV(NavBar, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 7
		}, this), !hydrated || user && serverLoading ? /* @__PURE__ */ jsxDEV("main", {
			className: "grid-bg flex min-h-dvh items-center justify-center px-6 pt-20",
			"aria-busy": "true",
			"aria-label": "Loading your headquarters",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "hud-clip-sm w-full max-w-sm border border-line bg-panel p-6 text-center",
				children: [
					/* @__PURE__ */ jsxDEV("p", {
						className: "section-kicker",
						children: "HEADQUARTERS"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "mt-3 font-display text-2xl",
						children: "LOADING YOUR RUN"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "stat-track mt-6 h-1.5 overflow-hidden",
						children: /* @__PURE__ */ jsxDEV("div", { className: "stat-fill h-full w-2/3 animate-pulse" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-3 text-sm text-muted",
						children: "Preparing your character sheet…"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 135,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 124,
			columnNumber: 9
		}, this) : serverError ? /* @__PURE__ */ jsxDEV("main", {
			className: "grid min-h-dvh place-items-center px-6 pt-20",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "max-w-md text-center",
				children: [
					/* @__PURE__ */ jsxDEV("p", {
						className: "section-kicker",
						children: "HEADQUARTERS UNAVAILABLE"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-4 text-muted",
						children: serverError
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(Button, {
						className: "mt-6",
						onClick: () => void loadServerState(),
						children: "Retry connection"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 140,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 139,
			columnNumber: 9
		}, this) : onboarded && character ? /* @__PURE__ */ jsxDEV(Headquarters, { onReload: loadServerState }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 149,
			columnNumber: 9
		}, this) : /* @__PURE__ */ jsxDEV(Onboarding, {
			onCreated: loadServerState,
			onError: setServerError
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 151,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 121,
		columnNumber: 5
	}, this);
}
function Onboarding({ onCreated, onError }) {
	const createCharacter = useGame((s) => s.createCharacter);
	const [name, setName] = useState("");
	const [archetype, setArchetype] = useState("wanderer");
	const [saving, setSaving] = useState(false);
	const root = useRef(null);
	useGSAP(() => {
		if (prefersReducedMotion()) return;
		gsap.from(".ob-item", {
			opacity: 0,
			y: 22,
			duration: .7,
			stagger: .08,
			ease: "expo.out"
		});
	}, { scope: root });
	return /* @__PURE__ */ jsxDEV("div", {
		ref: root,
		className: "mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 pt-24 pb-16",
		children: [
			/* @__PURE__ */ jsxDEV("p", {
				className: "ob-item section-kicker mb-5",
				children: "CHARACTER CREATION"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("h1", {
				className: "ob-item font-display text-4xl leading-tight md:text-6xl",
				children: "NAME YOUR HERO."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 190,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "ob-item mt-4 max-w-md text-muted",
				children: "Choose an archetype. Stats can still grow — this is just where you spawn."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 191,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("label", {
				className: "ob-item mt-10 block font-display text-xs tracking-widest text-muted",
				htmlFor: "hero-name",
				children: "CALLSIGN"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("input", {
				id: "hero-name",
				value: name,
				onChange: (e) => setName(e.target.value),
				maxLength: 18,
				placeholder: "Aria, Kai, Nova…",
				className: "ob-item mt-2 h-14 w-full border-0 bg-panel px-4 font-display text-xl text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-muted/50 focus:shadow-[0_0_0_1px_var(--color-teal)]",
				autoComplete: "nickname"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 201,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "ob-item mt-10 font-display text-xs tracking-widest text-muted",
				children: "ARCHETYPE"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "ob-item mt-3 grid gap-3 sm:grid-cols-2",
				children: Object.keys(ARCHETYPES).map((key) => {
					const a = ARCHETYPES[key];
					return /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						onClick: () => setArchetype(key),
						className: cn("hud-clip-sm min-h-24 border p-5 text-left transition-[box-shadow,transform] duration-200", archetype === key ? "border-teal bg-teal/10" : "border-line bg-panel hover:border-ink/40"),
						children: [/* @__PURE__ */ jsxDEV("div", {
							className: "font-display text-lg",
							children: a.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 226,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 text-sm text-muted",
							children: a.blurb
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 227,
							columnNumber: 15
						}, this)]
					}, key, true, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(Button, {
				className: "ob-item mt-10 self-start",
				size: "lg",
				"data-magnetic": true,
				onClick: async () => {
					setSaving(true);
					onError(null);
					try {
						await createCharacterRecord(name, archetype);
						await Promise.all(STARTER_QUESTS.map((quest) => createQuestRecord(quest)));
						createCharacter(name, archetype);
						await onCreated();
					} catch (reason) {
						onError(reason instanceof Error ? reason.message : "Unable to save your character.");
					} finally {
						setSaving(false);
					}
				},
				disabled: saving,
				children: [
					saving ? "SAVING..." : "BEGIN YOUR JOURNEY",
					" ",
					/* @__PURE__ */ jsxDEV("span", {
						"aria-hidden": "true",
						children: "→"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 253,
						columnNumber: 55
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 233,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 185,
		columnNumber: 5
	}, this);
}
function Headquarters({ onReload }) {
	const character = useGame((s) => s.character);
	const quests = useGame((s) => s.quests);
	const applyServerCompletion = useGame((s) => s.applyServerCompletion);
	const deleteQuest = useGame((s) => s.deleteQuest);
	const completedCount = useGame((s) => s.completedCount);
	const [filter, setFilter] = useState("all");
	const [composer, setComposer] = useState(false);
	const [levelUp, setLevelUp] = useState(null);
	const [toast, setToast] = useState(null);
	const [actionError, setActionError] = useState(null);
	const [pendingQuestIds, setPendingQuestIds] = useState(/* @__PURE__ */ new Set());
	if (!character) return null;
	const visible = quests.filter((q) => !q.completed).filter((q) => filter === "all" || q.category === filter);
	const needed = xpToNext(character.level);
	const xpPct = Math.min(100, character.xp / needed * 100);
	const celebrate = (result, origin) => {
		spawnFloat(`+${result.xp} XP`, origin, "teal");
		if (result.gold) spawnFloat(`+${result.gold} GOLD`, origin, "gold", 90);
		if (result.leveledUp) setLevelUp(result.newLevel);
		if (result.newAchievements.length) {
			setToast(`Unlocked: ${result.newAchievements.map((a) => a.title).join(", ")}`);
			window.setTimeout(() => setToast(null), 2800);
		}
	};
	return /* @__PURE__ */ jsxDEV("div", {
		className: "mx-auto max-w-7xl px-5 pt-24 pb-16 md:px-10",
		children: [
			/* @__PURE__ */ jsxDEV("header", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxDEV("div", { children: [
					/* @__PURE__ */ jsxDEV("p", {
						className: "section-kicker mb-2",
						children: "HEADQUARTERS"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 302,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "font-display text-3xl md:text-5xl",
						children: character.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 303,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							ARCHETYPES[character.archetype].name,
							" · ",
							completedCount,
							" quests cleared"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 304,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 301,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							className: "hud-clip-sm flex items-center gap-2 border border-line bg-panel px-4 py-2",
							children: [
								/* @__PURE__ */ jsxDEV(Flame, { className: "size-4 text-crimson" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 310,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-display tabular-nums",
									children: character.streak
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 311,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-display text-[10px] tracking-widest text-muted",
									children: "STREAK"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 312,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 309,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "hud-clip-sm flex items-center gap-2 border border-line bg-panel px-4 py-2",
							children: [/* @__PURE__ */ jsxDEV("span", {
								className: "font-display text-gold tabular-nums",
								children: character.gold
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 315,
								columnNumber: 13
							}, this), /* @__PURE__ */ jsxDEV("span", {
								className: "font-display text-[10px] tracking-widest text-muted",
								children: "GOLD"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 316,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 314,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => void onReload(),
							children: "Refresh"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 318,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 308,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 300,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]",
				children: [/* @__PURE__ */ jsxDEV("aside", {
					className: "hud-clip border border-line bg-panel p-6 md:p-7",
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("span", {
								className: "font-display text-[10px] tracking-widest text-muted",
								children: "LEVEL"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "font-display text-5xl tabular-nums",
								children: String(character.level).padStart(2, "0")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 329,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 13
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "text-right",
								children: [/* @__PURE__ */ jsxDEV("span", {
									className: "font-display text-[10px] tracking-widest text-muted",
									children: "EXPERIENCE"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 334,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("div", {
									className: "mt-1 font-display text-sm tabular-nums text-teal",
									children: [
										character.xp,
										" / ",
										needed
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 337,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 333,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 326,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "stat-track mt-4 h-2",
							children: /* @__PURE__ */ jsxDEV("div", {
								className: "stat-fill h-full",
								style: { width: `${xpPct}%` }
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 343,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 342,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mt-8 space-y-4",
							children: ATTRIBUTE_META.map((a) => {
								const val = character.attributes[a.key];
								const fill = a.tone === "violet" ? "stat-fill-violet" : a.tone === "gold" ? "stat-fill-gold" : a.tone === "crimson" ? "stat-fill-crimson" : "stat-fill";
								return /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("div", {
									className: "mb-1.5 flex justify-between font-display text-xs",
									children: [/* @__PURE__ */ jsxDEV("span", { children: a.label }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 360,
										columnNumber: 21
									}, this), /* @__PURE__ */ jsxDEV("span", {
										className: "tabular-nums text-muted",
										children: val
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 361,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 359,
									columnNumber: 19
								}, this), /* @__PURE__ */ jsxDEV("div", {
									className: "stat-track h-1.5",
									children: /* @__PURE__ */ jsxDEV("div", {
										className: cn("h-full", fill),
										style: { width: `${val}%` }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 364,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 19
								}, this)] }, a.key, true, {
									fileName: _jsxFileName,
									lineNumber: 358,
									columnNumber: 17
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 346,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("h2", {
							className: "mt-10 font-display text-sm tracking-widest text-muted",
							children: "ACHIEVEMENTS"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 371,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("ul", {
							className: "mt-4 grid grid-cols-2 gap-3",
							children: ACHIEVEMENTS.map((a) => /* @__PURE__ */ jsxDEV(AchievementChip, {
								def: a,
								unlocked: character.achievements.includes(a.id)
							}, a.id, false, {
								fileName: _jsxFileName,
								lineNumber: 374,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 372,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 325,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("section", { children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ jsxDEV("h2", {
							className: "font-display text-2xl",
							children: "QUEST BOARD"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 385,
							columnNumber: 13
						}, this), /* @__PURE__ */ jsxDEV("button", {
							type: "button",
							className: "quest-generate-button",
							"aria-expanded": composer,
							onClick: () => setComposer((v) => !v),
							children: [/* @__PURE__ */ jsxDEV(Plus, {
								className: "quest-generate-button__icon",
								"aria-hidden": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 392,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("span", {
								className: "quest-generate-button__text",
								children: [/* @__PURE__ */ jsxDEV("span", {
									className: "quest-generate-button__label",
									children: "New quest"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 394,
									columnNumber: 17
								}, this), /* @__PURE__ */ jsxDEV("span", {
									className: "quest-generate-button__label quest-generate-button__label--active",
									children: "Creating"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 395,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 393,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 386,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 384,
						columnNumber: 11
					}, this),
					composer ? /* @__PURE__ */ jsxDEV(QuestComposer, {
						onCancel: () => setComposer(false),
						onCreate: async (payload) => {
							setActionError(null);
							try {
								await createQuestRecord(payload);
								await onReload();
								setComposer(false);
							} catch (reason) {
								setActionError(reason instanceof Error ? reason.message : "Unable to create quest.");
							}
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 403,
						columnNumber: 13
					}, this) : null,
					actionError ? /* @__PURE__ */ jsxDEV("p", {
						className: "mt-4 text-sm text-crimson",
						role: "alert",
						children: actionError
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 421,
						columnNumber: 13
					}, this) : null,
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-5 flex flex-wrap gap-2",
						role: "tablist",
						"aria-label": "Filter quests",
						children: ["all", ...CATEGORIES.map((c) => c.id)].map((id) => /* @__PURE__ */ jsxDEV("button", {
							type: "button",
							onClick: () => setFilter(id),
							className: cn("min-h-11 px-3.5 font-display text-xs tracking-wide", filter === id ? "bg-teal/10 text-teal shadow-[0_0_0_1px_rgba(58,220,192,0.6)]" : "text-muted shadow-[0_0_0_1px_var(--color-line)] hover:text-ink"),
							children: id.toUpperCase()
						}, id, false, {
							fileName: _jsxFileName,
							lineNumber: 428,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 426,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: visible.length === 0 ? /* @__PURE__ */ jsxDEV("p", {
							className: "col-span-full py-16 text-center text-muted",
							children: "Board is clear. Add a quest to keep the streak alive."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 446,
							columnNumber: 15
						}, this) : visible.map((q) => /* @__PURE__ */ jsxDEV("article", {
							className: "quest-live tab-clip border border-line bg-panel p-5",
							children: [
								/* @__PURE__ */ jsxDEV("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ jsxDEV("span", {
										className: cn("font-display text-[10px] tracking-widest", q.difficulty === "hard" ? "text-crimson" : q.difficulty === "medium" ? "text-gold" : "text-teal"),
										children: q.difficulty.toUpperCase()
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 453,
										columnNumber: 21
									}, this), /* @__PURE__ */ jsxDEV("span", {
										className: "font-display text-[10px] tracking-widest text-muted",
										children: q.category.toUpperCase()
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 465,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 452,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ jsxDEV("h3", {
									className: "mt-3 font-display text-lg",
									children: q.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 469,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "stat-track mt-4 h-1.5",
									children: /* @__PURE__ */ jsxDEV("div", {
										className: "stat-fill h-full",
										style: { width: `${q.progress}%` }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 471,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 470,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "mt-4 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ jsxDEV("div", {
										className: "flex gap-3 font-display text-sm",
										children: [/* @__PURE__ */ jsxDEV("span", {
											className: "text-teal",
											children: [
												"+",
												q.xp,
												" XP"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 475,
											columnNumber: 23
										}, this), /* @__PURE__ */ jsxDEV("span", {
											className: "text-gold",
											children: [
												"+",
												q.gold,
												" GOLD"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 476,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 474,
										columnNumber: 21
									}, this), /* @__PURE__ */ jsxDEV("div", {
										className: "flex gap-1",
										children: [/* @__PURE__ */ jsxDEV("button", {
											type: "button",
											className: "complete-quest-button",
											disabled: pendingQuestIds.has(q.id),
											onClick: async (e) => {
												const card = e.currentTarget.closest(".quest-live");
												const rect = e.currentTarget.getBoundingClientRect();
												setActionError(null);
												setPendingQuestIds((ids) => new Set(ids).add(q.id));
												try {
													const result = await completeQuestRecord(q.id);
													applyServerCompletion(mapServerCharacter(result.character), q.id, result.character.lifetime_xp);
													celebrate({
														xp: result.quest.xp_reward,
														gold: result.quest.gold_reward,
														leveledUp: result.leveledUp,
														newAchievements: result.newAchievements
													}, rect);
													if (card && !prefersReducedMotion()) gsap.to(card, {
														opacity: 0,
														y: -12,
														scale: .97,
														duration: .32,
														ease: "power2.in"
													});
												} catch (reason) {
													setActionError(reason instanceof Error ? reason.message : "Unable to complete quest.");
													await onReload().catch(() => void 0);
												} finally {
													setPendingQuestIds((ids) => {
														const next = new Set(ids);
														next.delete(q.id);
														return next;
													});
												}
											},
											children: [/* @__PURE__ */ jsxDEV("span", { children: "Complete" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 529,
												columnNumber: 25
											}, this), /* @__PURE__ */ jsxDEV("span", {
												className: "complete-quest-button__sparkle",
												"aria-hidden": "true",
												children: "✦"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 530,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 479,
											columnNumber: 23
										}, this), /* @__PURE__ */ jsxDEV("button", {
											type: "button",
											className: "inline-flex size-11 items-center justify-center text-muted hover:text-ink",
											"aria-label": "Delete quest",
											onClick: async () => {
												setActionError(null);
												try {
													await deleteQuestRecord(q.id);
													deleteQuest(q.id);
													await onReload();
												} catch (reason) {
													setActionError(reason instanceof Error ? reason.message : "Unable to delete quest.");
												}
											},
											children: /* @__PURE__ */ jsxDEV(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 551,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 534,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 478,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 473,
									columnNumber: 19
								}, this)
							]
						}, q.id, true, {
							fileName: _jsxFileName,
							lineNumber: 451,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 444,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 383,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 324,
				columnNumber: 7
			}, this),
			levelUp !== null ? /* @__PURE__ */ jsxDEV(LevelUpOverlay, {
				level: levelUp,
				onDone: () => setLevelUp(null)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 562,
				columnNumber: 27
			}, this) : null,
			toast ? /* @__PURE__ */ jsxDEV("div", {
				className: "hud-clip-sm fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-gold/50 bg-panel px-5 py-3 font-display text-sm text-gold",
				children: toast
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 565,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 299,
		columnNumber: 5
	}, this);
}
function AchievementChip({ def, unlocked }) {
	const Icon = ICONS[def.icon];
	return /* @__PURE__ */ jsxDEV("li", {
		className: cn("hud-clip-sm border p-3", unlocked ? "border-gold/40 bg-gold/5" : "border-line bg-void/40 opacity-50"),
		children: [/* @__PURE__ */ jsxDEV(Icon, { className: cn("mb-2 size-4", unlocked ? "text-gold" : "text-muted") }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 582,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "font-display text-[11px] tracking-wide",
			children: def.title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 583,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 576,
		columnNumber: 5
	}, this);
}
function QuestComposer({ onCancel, onCreate }) {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("personal");
	const [difficulty, setDifficulty] = useState("easy");
	return /* @__PURE__ */ jsxDEV("form", {
		className: "hud-clip-sm mt-5 border border-line bg-panel p-5",
		onSubmit: (e) => {
			e.preventDefault();
			onCreate({
				title,
				category,
				difficulty
			});
		},
		children: [
			/* @__PURE__ */ jsxDEV("label", {
				className: "font-display text-xs tracking-widest text-muted",
				htmlFor: "q-title",
				children: "QUEST TITLE"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 611,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("input", {
				id: "q-title",
				value: title,
				onChange: (e) => setTitle(e.target.value),
				required: true,
				className: "mt-2 h-12 w-full bg-void px-3 font-display text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none focus:shadow-[0_0_0_1px_var(--color-teal)]",
				placeholder: "Run 5 kilometers"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 614,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ jsxDEV("label", {
					className: "block",
					children: [/* @__PURE__ */ jsxDEV("span", {
						className: "font-display text-xs tracking-widest text-muted",
						children: "CATEGORY"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 624,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("select", {
						className: "mt-2 h-12 w-full bg-void px-3 font-display text-ink shadow-[0_0_0_1px_var(--color-line)]",
						value: category,
						onChange: (e) => setCategory(e.target.value),
						children: CATEGORIES.map((c) => /* @__PURE__ */ jsxDEV("option", {
							value: c.id,
							children: c.label
						}, c.id, false, {
							fileName: _jsxFileName,
							lineNumber: 631,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 625,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 623,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("label", {
					className: "block",
					children: [/* @__PURE__ */ jsxDEV("span", {
						className: "font-display text-xs tracking-widest text-muted",
						children: "DIFFICULTY"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 638,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("select", {
						className: "mt-2 h-12 w-full bg-void px-3 font-display text-ink shadow-[0_0_0_1px_var(--color-line)]",
						value: difficulty,
						onChange: (e) => setDifficulty(e.target.value),
						children: [
							/* @__PURE__ */ jsxDEV("option", {
								value: "easy",
								children: "EASY"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 644,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "medium",
								children: "MEDIUM"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 645,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "hard",
								children: "HARD"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 646,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 639,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 637,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 622,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 flex gap-3",
				children: [/* @__PURE__ */ jsxDEV(Button, {
					type: "submit",
					size: "sm",
					children: "Add to board"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 651,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: onCancel,
					children: "Cancel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 654,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 650,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 604,
		columnNumber: 5
	}, this);
}
function LevelUpOverlay({ level, onDone }) {
	useEffect(() => {
		const reduce = prefersReducedMotion();
		const tl = gsap.timeline({ onComplete: onDone });
		gsap.set("#levelup", { display: "flex" });
		if (reduce) {
			tl.to({}, { duration: .8 });
			return () => {
				tl.kill();
			};
		}
		tl.fromTo("#levelup", { opacity: 0 }, {
			opacity: 1,
			duration: .25
		}).from("#levelup-copy", {
			y: 40,
			duration: .7,
			ease: "expo.out"
		}, .05).to("#levelup", {
			opacity: 0,
			duration: .4,
			delay: 1.4
		});
		return () => {
			tl.kill();
		};
	}, [level, onDone]);
	return /* @__PURE__ */ jsxDEV("div", {
		id: "levelup",
		className: "fixed inset-0 z-[80] hidden items-center justify-center bg-void/95",
		role: "status",
		children: /* @__PURE__ */ jsxDEV("div", {
			id: "levelup-copy",
			className: "text-center",
			children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "section-kicker mb-4",
					children: "SYSTEM NOTICE"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 688,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-glow-teal font-display text-5xl text-teal md:text-7xl",
					children: "LEVEL UP"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 689,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-4 font-display text-2xl tabular-nums",
					children: ["You are now LV ", String(level).padStart(2, "0")]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 690,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 687,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 682,
		columnNumber: 5
	}, this);
}
function spawnFloat(text, origin, tone, delay = 0) {
	const el = document.createElement("div");
	el.className = "xp-float";
	el.textContent = text;
	if (tone === "gold") el.style.color = "var(--color-gold)";
	const x = origin.left + origin.width / 2;
	const y = origin.top;
	el.style.left = `${x}px`;
	el.style.top = `${y}px`;
	document.body.appendChild(el);
	const r = (document.getElementById("nav-xp-bar") ?? document.getElementById("navbar"))?.getBoundingClientRect();
	gsap.fromTo(el, {
		opacity: 0,
		y: 8,
		scale: .9
	}, {
		opacity: 1,
		y: r ? r.top - y : -80,
		x: r ? r.left + r.width / 2 - x : 0,
		duration: .95,
		delay: delay / 1e3,
		ease: "power2.in",
		onComplete: () => el.remove()
	});
}
//#endregion
export { PlayApp as t };
