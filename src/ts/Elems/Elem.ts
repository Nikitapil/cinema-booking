export class Elem {
    el: HTMLElement | null = null

    addToBlock(container: Element) {
        if (this.el) {
            container.append(this.el)
        }
    }
}