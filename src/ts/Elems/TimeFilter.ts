import { App } from "../App";
import { Elem } from "./Elem";

export class TimeFilter extends Elem {
    el: HTMLSelectElement;
    app: App
    constructor(app: App) {
        super()
        this.app = app
        this.el = document.createElement('select')
        this.el.id = 'select-input'
        for (let i = 10; i<=20; i+=2) {
            this.el.options.add(new Option(`${i}.00`, `${i}.00`))
        }
        const filterContainer = document.querySelector('.cinema__date')
        this.addToBlock(filterContainer)
        this.el.addEventListener('change', () => this.app.updateData())
    }
}