import * as ICAL from 'ical.js';
import { derived, writable } from 'svelte/store';

export const holidaysICS = writable(null);
export const birthdaysICS = writable(null);

const parseICS = (ics, set) => {
    if (ics == null) return [];

    ics.text().then(text => {
        var jcalData = ICAL.parse(text);
        console.log('jcalData', jcalData);
        var vcalendar = new ICAL.Component(jcalData);
        console.log('vcalendar', vcalendar);
        var components = vcalendar.getAllSubcomponents("vevent");
        console.log('components', components);
        var events = components.map(it => new ICAL.Event(it));
        console.log('events', events);
        // var result = events.reduce((acc, v) => ({ ...acc, [v.startDate.toJSDate()]: v.summary }), {});
        // console.log('result', result);
        set(events);
    });
}

export const holidays = derived(holidaysICS, parseICS, [])
export const birthdays = derived(birthdaysICS, parseICS, [])