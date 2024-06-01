import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppLayoutElement extends MDElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-absolute md-layout-fit">
                <div class="md-layout-absolute__item"></div>
            </div>


            <div class="md-layout-accordion md-layout-fit">
                <div class="md-layout-accordion__item">item 1</div>
                <div class="md-layout-accordion__item">item 2</div>
                <div class="md-layout-accordion__item">item 3</div>
                <div class="md-layout-accordion__item">item 4</div>
            </div>


            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item md-layout-border__item--north">north</div>
                <div class="md-layout-border__item md-layout-border__item--west">west</div>
                <div class="md-layout-border__item md-layout-border__item--center">center</div>
                <div class="md-layout-border__item md-layout-border__item--east">east</div>
                <div class="md-layout-border__item md-layout-border__item--south">south</div>
            </div>


            <div class="md-layout-card md-layout-fit">
                <div class="md-layout-card__item">item 1</div>
                <div class="md-layout-card__item">item 2</div>
                <div class="md-layout-card__item">item 3</div>
                <div class="md-layout-card__item">item 4</div>
            </div>


            <div class="md-layout-column md-layout-fit">
                <div class="md-layout-column__item md-layout-column__item--expanded1"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded11"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded2"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded10"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded3"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded9"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded4"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded8"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded5"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded7"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded6"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded6"></div>
                <div class="md-layout-column__item md-layout-column__item--expanded12"></div>
            </div>

            <div class="md-layout-column md-layout-fit">
                <div class="md-layout-column__item md-layout-column__item--medium1"></div>
                <div class="md-layout-column__item md-layout-column__item--medium7"></div>
                <div class="md-layout-column__item md-layout-column__item--medium2"></div>
                <div class="md-layout-column__item md-layout-column__item--medium6"></div>
                <div class="md-layout-column__item md-layout-column__item--medium3"></div>
                <div class="md-layout-column__item md-layout-column__item--medium5"></div>
                <div class="md-layout-column__item md-layout-column__item--medium4"></div>
                <div class="md-layout-column__item md-layout-column__item--medium4"></div>
                <div class="md-layout-column__item md-layout-column__item--medium8"></div>
            </div>

            <div class="md-layout-column md-layout-fit">
                <div class="md-layout-column__item md-layout-column__item--compact1"></div>
                <div class="md-layout-column__item md-layout-column__item--compact3"></div>
                <div class="md-layout-column__item md-layout-column__item--compact2"></div>
                <div class="md-layout-column__item md-layout-column__item--compact2"></div>
                <div class="md-layout-column__item md-layout-column__item--compact4"></div>
            </div>


            <div class="md-layout-fit">
            </div>
        `
    }
}

customElements.define("app-layout", AppLayoutElement);

export default document.createElement("app-layout");
