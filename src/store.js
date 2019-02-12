import { defData } from './defaultData'

export const store = {
    state: {
        defData
    },
    getActiveDay() {
        return this.state.defData.find(day => day.active)
    },
    setActiveDay(dayId) {
        return this.state.defData.forEach(day => {
            if (day.id === dayId) {
                day.active = true;
            } else {
                day.active = false;
            }
        })
    },
    updateEvent(dayId, eventIndex, newEventTitle) {
        const day = this.state.defData.find(day => day.id == dayId);
        if (newEventTitle == '') {
            newEventTitle = day.events[eventIndex].title;
        }
        day.events[eventIndex].title = newEventTitle;
        day.events[eventIndex].edit = false;
        
    },
    submitEvent(title) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({ title, edit:false });
    },
    editEvent(dayId, eventIndex) {
        const day = this.state.defData.find(day => day.id == dayId);
        day.events[eventIndex].edit = true;
    },
    deleteEvent(dayId, eventIndex) {
        const day = this.state.defData.find(day => day.id == dayId);
        day.events.splice(eventIndex, 1);
    }
}