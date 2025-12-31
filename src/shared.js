import * as ICAL from 'ical.js';
import { writable } from 'svelte/store';

export const currentTheme = writable("default");
export const themes = [
	{ id: "default", name: "Default" },
	{ id: "gemini", name: "Gemini" },
	{ id: "legacy", name: "Legacy (2025)" },
];

export const showTestPage = writable(false);

export const icsList = writable([
	{ file: null, label: "Birthdays 🎂", data: [] },
	{ file: null, label: "Holidays 📅", data: [] },
	{ file: null, label: "Day of ⭐", data: [] },
]);

export const parse = async (ics) => {
	// TODO: ics is a list
	const text = await ics[0].text();
	const jcalData = ICAL.parse(text);
	const vcalendar = new ICAL.Component(jcalData);
	const components = vcalendar.getAllSubcomponents("vevent");
	const events = components.map(it => new ICAL.Event(it));

	const result = events.map(it => ({
		isRecurring: it.isRecurring(),
		start: it.startDate.toJSDate(),
		end: it.endDate.toJSDate(),
		summary: it.summary,
	}));

	console.table(result);
	return result;
}

export const getMonthName = (month) => {
	let now = new Date(Date.UTC(2025, month + 1));
	return now.toLocaleDateString("es-US", {
		month: "short",
	}).substring(0, 3); // Only 3 characters
}