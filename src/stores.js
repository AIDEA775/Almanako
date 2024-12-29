import * as ICAL from 'ical.js';
import { derived, writable } from 'svelte/store';

export const holidaysICS = writable(null);
export const birthdaysICS = writable(null);

const parseICS = (ics, set) => {
    if (ics == null) return [];

    ics.text().then(text => {
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
        set(result);
    });
}

export const holidays = derived(holidaysICS, parseICS, [])
export const birthdays = derived(birthdaysICS, parseICS, [])