import { CinemaTheatre } from "./CinemaTheatre";
import { Elem } from "./Elem";

export class CinemaTheatreCell extends Elem {
    theatreContainer: CinemaTheatre
    id: number
    constructor(theatreContainer: CinemaTheatre, id:number, checked: boolean, disabled: boolean) {
        super()
        this.theatreContainer = theatreContainer
        this.id = id
        this.el = document.createElement('div')
        this.el.className = 'cinema__checkbox'
        this.el.innerHTML = `<input type="checkbox" class='cinema-checkbox' id=${id}>
        <label for=${id}></label>`
        this.el.querySelector('input').checked = checked
        this.el.querySelector('input').disabled = disabled
        this.addToBlock(this.theatreContainer.el)
        this.el.addEventListener('change', () => this.theatreContainer.updateBooking(this.id))
    }
}