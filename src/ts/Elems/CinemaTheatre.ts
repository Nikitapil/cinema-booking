import { CinemaTheatreCell } from './CinemaTheatreCell';
import { TimeFilter } from './TimeFilter';
import { App } from "../App";
import { Elem } from "./Elem";
import { Filter } from "./Filter";

export class CinemaTheatre extends Elem {
    app: App
    filter: Filter
    timeFilter: TimeFilter
    constructor(app: App, filter: Filter, timeFilter: TimeFilter) {
        super()
        this.app = app
        this.filter = filter
        this.timeFilter = timeFilter
        this.el = document.createElement('div')
        this.el.className = 'cinema__theatre'
        const container = document.querySelector('.cinema__theatre-container')
        this.addToBlock(container)
        const dataArr = app.data[filter.el.value][timeFilter.el.value]
        const checkDate = new Date(this.filter.el.value + ' ' + this.timeFilter.el.value.split('.').join(':')) < new Date()
        for (let i = 0; i < dataArr.length; i++) {
            new CinemaTheatreCell(this, i, dataArr[i], checkDate)
        }
    }
    updateBooking(id:number) {
        this.app.data[this.filter.el.value][this.timeFilter.el.value][id] = !this.app.data[this.filter.el.value][this.timeFilter.el.value][id]
        localStorage.setItem('cinema-booking', JSON.stringify(this.app.data))
    }
}