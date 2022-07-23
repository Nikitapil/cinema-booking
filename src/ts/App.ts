import { CinemaTheatre } from './Elems/CinemaTheatre';
import { Filter } from "./Elems/Filter"
import { createTimesObject } from "./Elems/helpers"
import { TimeFilter } from "./Elems/TimeFilter"
import { appData } from "./types"

export class App {
    data: appData
    dateFilter: Filter
    timeFilter: TimeFilter

    initApp() {
       this.dateFilter = new Filter(this)
       this.timeFilter =  new TimeFilter(this)
       new CinemaTheatre(this, this.dateFilter, this.timeFilter)
    }

    createData(initialKey: string) {
        this.data = JSON.parse(localStorage.getItem('cinema-booking'))
        if (!this.data?.[initialKey]) {
            this.data = {
                [initialKey]: createTimesObject()
            }
            localStorage.setItem('cinema-booking', JSON.stringify(this.data))
        }
    }

    updateData(dateKey = this.dateFilter.el.value, timeKey = this.timeFilter.el.value) {
        if (!this.data?.[dateKey]?.[timeKey]) {
            this.data[dateKey] = createTimesObject()
            localStorage.setItem('cinema-booking', JSON.stringify(this.data))
        }
        const currentCinema = document.querySelector('.cinema__theatre')
        currentCinema.remove()
        new CinemaTheatre(this, this.dateFilter, this.timeFilter)
    }
}