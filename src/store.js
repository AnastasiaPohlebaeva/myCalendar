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
    submitEvent(title) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({ title, edit:false });
    },
    editEvent(dayId, eventIndex) {
        const day = this.state.defData.find(day => day.id == dayId);
        day.events[eventIndex].edit = true;
    },
    updateEvent(dayId, eventIndex) {
    
    },
    deleteEvent(dayId, index) {
    
    }
}