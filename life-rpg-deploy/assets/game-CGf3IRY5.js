import { create } from "zustand";
import { persist } from "zustand/middleware";
//#region src/lib/game.ts
var CATEGORIES = [
	{
		id: "coding",
		label: "CODING",
		attr: "intelligence"
	},
	{
		id: "fitness",
		label: "FITNESS",
		attr: "health"
	},
	{
		id: "study",
		label: "STUDY",
		attr: "discipline"
	},
	{
		id: "reading",
		label: "READING",
		attr: "intelligence"
	},
	{
		id: "work",
		label: "WORK",
		attr: "discipline"
	},
	{
		id: "personal",
		label: "PERSONAL",
		attr: "social"
	}
];
var DIFFICULTY = {
	easy: {
		xp: 60,
		gold: 12,
		label: "EASY"
	},
	medium: {
		xp: 140,
		gold: 40,
		label: "MEDIUM"
	},
	hard: {
		xp: 320,
		gold: 110,
		label: "HARD"
	}
};
var ATTRIBUTE_META = [
	{
		key: "strength",
		label: "STRENGTH",
		tone: "teal"
	},
	{
		key: "intelligence",
		label: "INTELLIGENCE",
		tone: "violet"
	},
	{
		key: "discipline",
		label: "DISCIPLINE",
		tone: "gold"
	},
	{
		key: "creativity",
		label: "CREATIVITY",
		tone: "crimson"
	},
	{
		key: "social",
		label: "SOCIAL",
		tone: "teal"
	},
	{
		key: "health",
		label: "HEALTH",
		tone: "violet"
	}
];
var ARCHETYPES = {
	scholar: {
		name: "Scholar",
		blurb: "Knowledge is the rarest loot.",
		attributes: {
			strength: 18,
			intelligence: 48,
			discipline: 36,
			creativity: 28,
			social: 22,
			health: 24
		}
	},
	athlete: {
		name: "Athlete",
		blurb: "The body is the first dungeon.",
		attributes: {
			strength: 48,
			intelligence: 22,
			discipline: 36,
			creativity: 18,
			social: 26,
			health: 50
		}
	},
	maker: {
		name: "Maker",
		blurb: "Build the world you want to play in.",
		attributes: {
			strength: 24,
			intelligence: 38,
			discipline: 34,
			creativity: 50,
			social: 22,
			health: 26
		}
	},
	wanderer: {
		name: "Wanderer",
		blurb: "Every path is a side quest.",
		attributes: {
			strength: 32,
			intelligence: 32,
			discipline: 30,
			creativity: 34,
			social: 38,
			health: 32
		}
	}
};
var ACHIEVEMENTS = [
	{
		id: "first_quest",
		title: "FIRST QUEST",
		detail: "Complete your first quest.",
		icon: "trophy"
	},
	{
		id: "unstoppable",
		title: "UNSTOPPABLE",
		detail: "Hold a 7-day streak.",
		icon: "flame"
	},
	{
		id: "xp_hunter",
		title: "XP HUNTER",
		detail: "Earn 1,000 lifetime XP.",
		icon: "zap"
	},
	{
		id: "level_up",
		title: "ASCENDED",
		detail: "Reach character level 5.",
		icon: "star"
	},
	{
		id: "gold_hoard",
		title: "TREASURY",
		detail: "Hold 400 gold at once.",
		icon: "trophy"
	},
	{
		id: "ten_clear",
		title: "PARTY LEADER",
		detail: "Clear 10 quests.",
		icon: "swords"
	}
];
var STARTER_QUESTS = [
	{
		title: "Complete 2 hours of coding",
		category: "coding",
		difficulty: "medium",
		xp: 150,
		gold: 50
	},
	{
		title: "30 minute workout",
		category: "fitness",
		difficulty: "easy",
		xp: 100,
		gold: 20
	},
	{
		title: "Read 20 pages",
		category: "reading",
		difficulty: "easy",
		xp: 75,
		gold: 15
	},
	{
		title: "Review lecture notes",
		category: "study",
		difficulty: "easy",
		xp: 60,
		gold: 12
	},
	{
		title: "Ship a side project",
		category: "work",
		difficulty: "hard",
		xp: 400,
		gold: 150
	},
	{
		title: "Meditate 10 minutes",
		category: "personal",
		difficulty: "easy",
		xp: 50,
		gold: 10
	}
];
function xpToNext(level) {
	return Math.round(500 * Math.pow(1.16, Math.max(0, level - 1)));
}
function todayStamp(d = /* @__PURE__ */ new Date()) {
	return d.toISOString().slice(0, 10);
}
function uid() {
	return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}
function applyStreak(character) {
	const today = todayStamp();
	if (character.lastActiveDate === today) return character;
	const yesterday = todayStamp(/* @__PURE__ */ new Date(Date.now() - 864e5));
	const streak = character.lastActiveDate === yesterday ? character.streak + 1 : 1;
	return {
		...character,
		streak,
		lastActiveDate: today
	};
}
function unlockAchievements(character, completedCount, lifetimeXp) {
	const have = new Set(character.achievements);
	const next = [...character.achievements];
	const tryAdd = (id) => {
		if (!have.has(id)) next.push(id);
	};
	if (completedCount >= 1) tryAdd("first_quest");
	if (character.streak >= 7) tryAdd("unstoppable");
	if (lifetimeXp >= 1e3) tryAdd("xp_hunter");
	if (character.level >= 5) tryAdd("level_up");
	if (character.gold >= 400) tryAdd("gold_hoard");
	if (completedCount >= 10) tryAdd("ten_clear");
	return next;
}
var emptyState = {
	character: null,
	quests: [],
	completedCount: 0,
	lifetimeXp: 0,
	onboarded: false
};
var useGame = create()(persist((set, get) => ({
	...emptyState,
	hydrateFromServer: (character, quests, lifetimeXp) => set({
		character,
		quests,
		onboarded: true,
		completedCount: quests.filter((quest) => quest.completed).length,
		lifetimeXp
	}),
	applyServerCompletion: (character, questId, lifetimeXp) => set((state) => ({
		character,
		quests: state.quests.map((quest) => quest.id === questId ? {
			...quest,
			completed: true,
			progress: 100
		} : quest),
		completedCount: state.completedCount + 1,
		lifetimeXp,
		onboarded: true
	})),
	createCharacter: (name, archetype) => {
		const trimmed = name.trim().slice(0, 18) || "Player";
		const base = ARCHETYPES[archetype];
		set({
			character: {
				name: trimmed,
				archetype,
				level: 1,
				xp: 0,
				gold: 40,
				streak: 1,
				lastActiveDate: todayStamp(),
				attributes: { ...base.attributes },
				achievements: [],
				createdAt: Date.now()
			},
			quests: STARTER_QUESTS.map((q) => ({
				...q,
				id: uid(),
				progress: Math.floor(Math.random() * 35),
				completed: false,
				createdAt: Date.now()
			})),
			onboarded: true,
			completedCount: 0,
			lifetimeXp: 0
		});
	},
	addQuest: ({ title, category, difficulty }) => {
		const spec = DIFFICULTY[difficulty];
		const quest = {
			id: uid(),
			title: title.trim().slice(0, 64) || "Untitled quest",
			category,
			difficulty,
			xp: spec.xp,
			gold: spec.gold,
			progress: 0,
			completed: false,
			createdAt: Date.now()
		};
		set({ quests: [quest, ...get().quests] });
		return quest;
	},
	completeQuest: (id) => {
		const { quests, character, completedCount, lifetimeXp } = get();
		if (!character) return null;
		const quest = quests.find((q) => q.id === id && !q.completed);
		if (!quest) return null;
		const next = applyStreak({ ...character });
		next.xp += quest.xp;
		next.gold += quest.gold;
		const attr = CATEGORIES.find((c) => c.id === quest.category)?.attr ?? "discipline";
		const attrDelta = quest.difficulty === "hard" ? 4 : quest.difficulty === "medium" ? 3 : 2;
		next.attributes = {
			...next.attributes,
			[attr]: Math.min(99, next.attributes[attr] + attrDelta)
		};
		if (quest.category === "fitness") next.attributes.strength = Math.min(99, next.attributes.strength + 1);
		let leveledUp = false;
		let needed = xpToNext(next.level);
		while (next.xp >= needed) {
			next.xp -= needed;
			next.level += 1;
			leveledUp = true;
			needed = xpToNext(next.level);
		}
		const newCompleted = completedCount + 1;
		const newLifetime = lifetimeXp + quest.xp;
		const prevAch = new Set(next.achievements);
		next.achievements = unlockAchievements({ ...next }, newCompleted, newLifetime);
		const newAchievements = ACHIEVEMENTS.filter((a) => next.achievements.includes(a.id) && !prevAch.has(a.id));
		set({
			character: next,
			quests: quests.map((q) => q.id === id ? {
				...q,
				completed: true,
				progress: 100
			} : q),
			completedCount: newCompleted,
			lifetimeXp: newLifetime
		});
		return {
			xp: quest.xp,
			gold: quest.gold,
			leveledUp,
			newLevel: next.level,
			newAchievements,
			attr,
			attrDelta
		};
	},
	deleteQuest: (id) => {
		set({ quests: get().quests.filter((q) => q.id !== id) });
	},
	resetRun: () => set({ ...emptyState })
}), { name: "life-rpg-save-v1" }));
//#endregion
export { STARTER_QUESTS as a, CATEGORIES as i, ARCHETYPES as n, useGame as o, ATTRIBUTE_META as r, xpToNext as s, ACHIEVEMENTS as t };
