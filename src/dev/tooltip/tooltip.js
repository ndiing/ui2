import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Popper } from "../../lib/popper/popper";

class DevTooltip extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip id="tooltip">Lorem, ipsum.</md-tooltip>
                    <md-button label="tooltip" 
                        @click="${this.handleClick}"
                        @mouseenter="${this.handleMouseenter}"
                        @mouseleave="${this.handleMouseleave}"
                    ></md-button>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip id="tooltip2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, doloribus.</md-tooltip>
                    <md-button label="tooltip" 
                        @click="${this.handleClick2}"
                        @mouseenter="${this.handleMouseenter2}"
                        @mouseleave="${this.handleMouseleave2}"
                    ></md-button>
                    
                </div>
                
                
            </div>
        `;
    }
    handleClick(event) {
        if (tooltip.open) {
            tooltip.close();
        } else {
            tooltip.show(event.currentTarget);
        }
    }
    handleMouseenter(event) {
        tooltip.show(event.currentTarget);
    }
    handleMouseleave(event) {
        tooltip.close();
    }
    handleClick2(event) {
        if (tooltip2.open) {
            tooltip2.close();
        } else {
            tooltip2.show(event.currentTarget);
        }
    }
    handleMouseenter2(event) {
        tooltip2.show(event.currentTarget);
    }
    handleMouseleave2(event) {
        tooltip2.close();
    }
}

customElements.define("dev-tooltip", DevTooltip);

export default document.createElement("dev-tooltip");
