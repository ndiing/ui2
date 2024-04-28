import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDPane extends MDElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-pane__header">
                <!-- <div class="md-pane__actions">
                    <md-icon-button class="md-pane__action" icon="image"></md-icon-button>
                </div> -->
                <div class="md-pane__label">label</div>
                <div class="md-pane__actions">
                    <!-- <md-icon-button class="md-pane__action" icon="image"></md-icon-button> -->
                    <md-icon-button class="md-pane__action" icon="image"></md-icon-button>
                </div>
            </div>
            <div class="md-pane__body">
                <div class="md-pane__inner">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit dignissimos tempora doloremque iusto libero praesentium dolor. Soluta magnam architecto consequatur cupiditate explicabo! Quae adipisci ea alias ipsa enim culpa!
                    Totam sit atque quod! Ipsum deserunt perferendis, natus harum atque sequi quibusdam neque tempore corporis officia nobis eveniet officiis, distinctio eos fugit dolorum debitis laudantium obcaecati in. Vitae, alias expedita!
                    Beatae voluptate eos laborum fugiat molestias repellendus incidunt animi sequi delectus quisquam, vitae deserunt numquam. In culpa laudantium rerum, sed facere exercitationem error recusandae sequi fugiat, hic beatae minima corrupti.
                    Nesciunt itaque possimus praesentium fugit id nulla esse, veritatis reprehenderit quam suscipit natus deleniti, quo harum impedit, alias eaque numquam! Voluptatem laborum officiis possimus consequuntur, unde omnis doloremque alias nostrum?
                    Dolores officiis sit molestias excepturi quod, illo tenetur ipsam necessitatibus nobis fugit enim voluptatibus quia officia sed possimus veritatis alias unde sint. Natus consequatur suscipit eligendi perspiciatis quidem fugiat minima.
                </div>
                <div class="md-pane__footer">
                    <md-button label="button" ui="outlined"></md-button>
                    <md-button label="button" ui="filled"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pane");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-pane");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-pane", MDPane);

export { MDPane };
