import { App } from "../App";
import { Elem } from "./Elem";
import { getAvailableDates, getValidDate } from "./helpers";

export class Filter extends Elem {
    el: HTMLInputElement
    app: App
    constructor(app: App) {
        super()
        this.app = app
        this.el = document.createElement('input')
        this.el.type = 'date'
        this.el.id = 'date-input'
        this.el.value = getValidDate()
        const availableDates = getAvailableDates()
        this.el.min = availableDates.minDate as any
        this.el.max = availableDates.maxDate as any
        this.app.createData(this.el.value)
        const filterContainer = document.querySelector('.cinema__date')
        this.addToBlock(filterContainer)
        this.el.addEventListener('input', () => this.app.updateData())
    }
}