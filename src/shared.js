import * as ICAL from 'ical.js';
import { writable } from 'svelte/store';

export const icsList = writable([
    { file: null, label: "Birthdays 🎂", data: [] },
    { file: null, label: "Holidays 🥳", data: [] },
    { file: null, label: "Day of 📅", data: [] },
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
