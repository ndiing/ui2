import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Popper } from "../../lib/popper/popper";

class DevPopper extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <!-- <br>
                    <br>
                    <br>
                    <br>
                    <br> -->
                    <div class="dev-popper__container">container</div>
                    <div class="dev-popper__button">button</div>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
    firstUpdated(){
        const buttons=this.querySelectorAll('.dev-popper__button')
        this.querySelectorAll('.dev-popper__container')
        .forEach((element,index)=>{
            new Popper(element,{
                button:buttons[index],
                boundary:this.parentElement,
                placements:[
                    'bottom',
                    'bottom-start',
                ],
                offset:8
            })
        })
    }
}

customElements.define("dev-popper", DevPopper);

export default document.createElement("dev-popper");
