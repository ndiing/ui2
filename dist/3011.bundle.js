"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[3011],{3011:(a,n,c)=>{c.r(n),c.d(n,{default:()=>l});var t=c(6684),m=c(1421);class o extends m.UX{render(){return t.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        .buttons="${[{label:"Action"}]}"
                        id="snackbar1"
                        @onSnackbarButtonClick="${()=>snackbar1.close()}"
                        >Single-line snackbar with action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar1.show()}"
                        label="snackbar"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        .buttons="${[{label:"Action"},{is:"icon-button",icon:"close"}]}"
                        id="snackbar2"
                        @onSnackbarButtonClick="${()=>snackbar2.close()}"
                        >Single-line snackbar with action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar2.show()}"
                        label="snackbar"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        id="snackbar3"
                        @onSnackbarButtonClick="${()=>snackbar3.close()}"
                        >Single-line snackbar without action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar3.show()}"
                        label="snackbar"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        .buttons="${[{label:"Action"}]}"
                        id="snackbar4"
                        @onSnackbarButtonClick="${()=>snackbar4.close()}"
                        >Single-line snackbar with action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar4.show()}"
                        label="snackbar"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        id="snackbar5"
                        @onSnackbarButtonClick="${()=>snackbar5.close()}"
                        >Two-line snackbar<br />without action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar5.show()}"
                        label="snackbar"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        .buttons="${[{label:"Action"}]}"
                        id="snackbar6"
                        @onSnackbarButtonClick="${()=>snackbar6.close()}"
                        >Two-line snackbar<br />with action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar6.show()}"
                        label="snackbar"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-snackbar
                        .buttons="${[{label:"Longer action"}]}"
                        id="snackbar7"
                        @onSnackbarButtonClick="${()=>snackbar7.close()}"
                        >Two-line snackbar<br />with longer action</md-snackbar
                    >
                    <md-button
                        @click="${()=>snackbar7.show()}"
                        label="snackbar"
                    ></md-button>
                </div>
            </div>
        `}}customElements.define("app-snackbar",o);const l=document.createElement("app-snackbar")}}]);