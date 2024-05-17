import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExample extends MDElement {
    constructor(){
        super()


    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                
                <md-top-app-bar
                    id="topAppBar"
                    ui="modal"
                    .leadingActions="${[
                        {"icon": "home"},
                    ]}"
                    label="Title"
                    .trailingActions="${[
                        {"icon": "settings"},
                        {"icon": "account_circle"},
                        {"icon": "notifications"}
                    ]}"
                ></md-top-app-bar>
                
                <md-side-sheet
                    id="sideSheet"
                    ui="modal"
                >side-sheet</md-side-sheet>
                
                <md-bottom-app-bar
                    id="bottomAppBar"
                    ui="modal"
                    .actions="${[
                        {"label": "Home", "icon": "home", "selected": false},
                        {"label": "Settings", "icon": "settings", "selected": false},
                        {"label": "Account", "icon": "account_circle", "selected": true},
                        {"label": "Notifications", "icon": "notifications", "selected": false}
                    ]}"
                    .fab="${{
                        "icon":"add"
                    }}"
                ></md-bottom-app-bar>
                <md-bottom-sheet
                    id="bottomSheet"
                    ui="modal"
                >bottom-sheet</md-bottom-sheet>
                <md-navigation-bar
                    id="navigationBar"
                    ui="modal"
                    .list="${[
                        {"label": "Home", "icon": "home", "selected": false},
                        {"label": "Settings", "icon": "settings", "selected": false},
                        {"label": "Account", "icon": "account_circle", "selected": true},
                        {"label": "Notifications", "icon": "notifications", "selected": false}
                    ]}"
                ></md-navigation-bar>
                
                <md-navigation-drawer
                    id="navigationDrawer"
                    ui="modal"
                    .list="${[
                        {"label": "Home", "icon": "home", "selected": false},
                        {"label": "Settings", "icon": "settings", "selected": false},
                        {"label": "Account", "icon": "account_circle", "selected": true},
                        {"label": "Notifications", "icon": "notifications", "selected": false}
                    ]}"
                ></md-navigation-drawer>
                <md-navigation-rail
                    id="navigationRail"
                    ui="modal"
                    .list="${[
                        {"label": "Home", "icon": "home", "selected": false},
                        {"label": "Settings", "icon": "settings", "selected": false},
                        {"label": "Account", "icon": "account_circle", "selected": true},
                        {"label": "Notifications", "icon": "notifications", "selected": false}
                    ]}"
                ></md-navigation-rail>
                
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column" style="margin: 24px;">
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button @click="${() => {
                                if(topAppBar.open){topAppBar.close()}
                                else{topAppBar.show()}
                            }}" label="topAppBar" ui="filled-tonal"></md-button>

                            <md-button @click="${() => {
                                if(sideSheet.open){sideSheet.close()}
                                else{sideSheet.show()}
                            }}" label="sideSheet" ui="filled-tonal"></md-button>

                            <md-button @click="${() => {
                                if(bottomAppBar.open){bottomAppBar.close()}
                                else{bottomAppBar.show()}
                            }}" label="bottomAppBar" ui="filled-tonal"></md-button>
                            <md-button @click="${() => {
                                if(bottomSheet.open){bottomSheet.close()}
                                else{bottomSheet.show()}
                            }}" label="bottomSheet" ui="filled-tonal"></md-button>
                            <md-button @click="${() => {
                                if(navigationBar.open){navigationBar.close()}
                                else{navigationBar.show()}
                            }}" label="navigationBar" ui="filled-tonal"></md-button>

                            <md-button @click="${() => {
                                if(navigationDrawer.open){navigationDrawer.close()}
                                else{navigationDrawer.show()}
                            }}" label="navigationDrawer" ui="filled-tonal"></md-button>
                            <md-button @click="${() => {
                                if(navigationRail.open){navigationRail.close()}
                                else{navigationRail.show()}
                            }}" label="navigationRail" ui="filled-tonal"></md-button>
                            
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-emoji>🎉</md-emoji>
                            <md-emoji>😊</md-emoji>
                            <md-emoji>❤️</md-emoji>
                            <md-emoji>🌟</md-emoji>
                            <md-emoji>🍕</md-emoji>
                            <md-emoji>🌈</md-emoji>
                            <md-emoji>🐱‍👤</md-emoji>
                            <md-emoji>📚</md-emoji>
                            <md-emoji>🎶</md-emoji>
                            <md-emoji>🚀</md-emoji>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-icon>home</md-icon>
                            <md-icon>settings</md-icon>
                            <md-icon>person</md-icon>
                            <md-icon>shopping_cart</md-icon>
                            <md-icon>mail</md-icon>
                            <md-icon>notifications</md-icon>
                            <md-icon>search</md-icon>
                            <md-icon>favorite</md-icon>
                            <md-icon>place</md-icon>
                            <md-icon>menu</md-icon>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="16/9"></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/2"></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="4/3"></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="1/1"></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/4"></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="2/3"></md-image>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="16/9"></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/2"></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="4/3"></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="1/1"></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/4"></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="2/3"></md-image>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="16/9" rounded></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/2" rounded></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="4/3" rounded></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="1/1" rounded></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/4" rounded></md-image>
                                    <md-image style="width: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="2/3" rounded></md-image>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="16/9" rounded></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/2" rounded></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="4/3" rounded></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="1/1" rounded></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="3/4" rounded></md-image>
                                    <md-image style="height: 56px" src="https://via.placeholder.com/800x450" alt="" ratio="2/3" rounded></md-image>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-badge
                                label=""
                                max="999"
                            ></md-badge>
                            <md-badge
                                label="1"
                                max="999"
                            ></md-badge>
                            <md-badge
                                label="1000"
                                max="999"
                            ></md-badge>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button label="Title" type="" ui=""></md-button>
                                    <md-button icon="image" label="Title" type="" ui=""></md-button>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button label="Title" type="" ui="filled"></md-button>
                                    <md-button icon="image" label="Title" type="" ui="filled"></md-button>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button label="Title" type="" ui="filled-tonal"></md-button>
                                    <md-button icon="image" label="Title" type="" ui="filled-tonal"></md-button>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button label="Title" type="" ui="outlined"></md-button>
                                    <md-button icon="image" label="Title" type="" ui="outlined"></md-button>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-extended-fab label="Title"></md-extended-fab>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-extended-fab icon="image" label="Title"></md-extended-fab>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-fab icon="image" ui=""></md-fab>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-fab icon="image" ui="small"></md-fab>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-fab icon="image" ui="large"></md-fab>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-icon-button icon="image" type="" ui=""></md-icon-button>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-icon-button icon="image" type="" ui="filled"></md-icon-button>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-icon-button icon="image" type="" ui="filled-tonal"></md-icon-button>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-segmented-button
                                        .buttons="${[
                                            {"label": "Home", "icon": "home",selected:true},
                                            {"label": "Settings", "icon": "settings"},
                                            {"label": "Account", "icon": "account_circle"},
                                        ]}"
                                    ></md-segmented-button>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-segmented-button
                                        .buttons="${[
                                            {"label": "Home", "icon": "home",selected:true},
                                            {"label": "Settings", "icon": "settings",selected:true},
                                            {"label": "Account", "icon": "account_circle"},
                                        ]}"
                                    ></md-segmented-button>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-card leadingActions="" label="Title" labelSecondary="" trailingActions="" buttons="" ui="elevated"></md-card>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-card leadingActions="" label="Title" labelSecondary="" trailingActions="" buttons="" ui="filled"></md-card>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-card leadingActions="" label="Title" labelSecondary="" trailingActions="" buttons="" ui="outlined"></md-card>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane 
                                        label="Title" 
                                    >Body</md-pane>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane 
                                        label="Title" 
                                        labelSecondary="Title" 
                                    >Body</md-pane>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane 
                                        .leadingActions="${[
                                            {"icon": "home"},
                                        ]}" 
                                        label="Title" 
                                        labelSecondary="Title" 
                                    >Body</md-pane>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane 
                                        .leadingActions="${[
                                            {"icon": "home"},
                                        ]}" 
                                        label="Title" 
                                        labelSecondary="Title" 
                                        .trailingActions="${[
                                            {"icon": "settings"},
                                            {"icon": "account_circle"},
                                            {"icon": "notifications"}
                                        ]}" 
                                    >Body</md-pane>
                                </div>
                                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-pane 
                                        .leadingActions="${[
                                            {"icon": "home"},
                                        ]}" 
                                        label="Title" 
                                        labelSecondary="Title" 
                                        .trailingActions="${[
                                            {"icon": "settings"},
                                            {"icon": "account_circle"},
                                            {"icon": "notifications"}
                                        ]}" 
                                        .buttons="${[
                                            {"label": "Home"},
                                            {"label": "Settings"}
                                        ]}" 
                                    >Body</md-pane>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-carousel
                            ></md-carousel>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-dialog
                                leadingActions=""
                                label="Title"
                                labelSecondary=""
                                trailingActions=""
                                buttons=""
                                ui=""
                            ></md-dialog>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-chip
                            ></md-chip>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-data-table
                                .columns="${ [
                                    {"name": "column1", "label": "Column 1"},
                                    {"name": "column2", "label": "Column 2"},
                                    {"name": "column3", "label": "Column 3"}
                                ]}"
                                .rows="${[
                                    {"column1": "value1_row1", "column2": "value2_row1", "column3": "value3_row1"},
                                    {"column1": "value1_row2", "column2": "value2_row2", "column3": "value3_row2"},
                                    {"column1": "value1_row3", "column2": "value2_row3", "column3": "value3_row3"},
                                    {"column1": "value1_row4", "column2": "value2_row4", "column3": "value3_row4"},
                                    {"column1": "value1_row5", "column2": "value2_row5", "column3": "value3_row5"},
                                    {"column1": "value1_row6", "column2": "value2_row6", "column3": "value3_row6"},
                                    {"column1": "value1_row7", "column2": "value2_row7", "column3": "value3_row7"},
                                    {"column1": "value1_row8", "column2": "value2_row8", "column3": "value3_row8"},
                                    {"column1": "value1_row9", "column2": "value2_row9", "column3": "value3_row9"},
                                    {"column1": "value1_row10", "column2": "value2_row10", "column3": "value3_row10"}
                                ]}"
                            ></md-data-table>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-list
                                .list="${[
                                    {"label": "Home", "icon": "home"},
                                    {"label": "Settings", "icon": "settings"},
                                    {"label": "Account", "icon": "account_circle"},
                                    {"label": "Notifications", "icon": "notifications"},
                                    {"label": "Messages", "icon": "message"},
                                    {"label": "Calendar", "icon": "event"},
                                    {"label": "Contacts", "icon": "contacts"},
                                    {"label": "Search", "icon": "search"},
                                    {"label": "Favorites", "icon": "star"},
                                    {"label": "Help", "icon": "help"}
                                ]}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-menu
                            ></md-menu>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-nested-list
                                .list="${[
                                    {"label": "Home", "icon": "home"},
                                    {"label": "Settings", "icon": "settings"},
                                    {"label": "Account", "icon": "account_circle"},
                                    {"label": "Notifications", "icon": "notifications"},
                                    {"label": "Messages", "icon": "message"},
                                    {"label": "Calendar", "icon": "event"},
                                    {"label": "Contacts", "icon": "contacts"},
                                    {"label": "Search", "icon": "search"},
                                    {"label": "Favorites", "icon": "star"},
                                    {"label": "Help", "icon": "help"}
                                ]}"
                            ></md-nested-list>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-tab
                            ></md-tab>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-divider
                            ></md-divider>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-form
                                action=""
                                enctype=""
                                method=""
                            >
                                <div class="md-layout-column">
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-color-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-color-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-date-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-date-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-datetime-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-datetime-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-email-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-email-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-file-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-file-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-month-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-month-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-number-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-number-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-password-field
                                            label="Title"
                                            type=""
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-password-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-search-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-search-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-select-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-select-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-tel-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-tel-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-text-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-text-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-textarea-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-textarea-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-time-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-time-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-url-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-url-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-week-field
                                            label="Title"
                                            name=""
                                            placeholder=""
                                            required
                                            ui=""
                                            text=""
                                        ></md-week-field>
                                    </div>
                                    <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-slider
                                        ></md-slider>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-color-picker
                                        ></md-color-picker>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-date-picker
                                        ></md-date-picker>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-datetime-picker
                                        ></md-datetime-picker>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-month-picker
                                        ></md-month-picker>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-time-picker
                                        ></md-time-picker>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-week-picker
                                        ></md-week-picker>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-checkbox
                                        ></md-checkbox>
                                        <md-checkbox
                                            indeterminate
                                        ></md-checkbox>
                                        <md-checkbox
                                            checked
                                            defaultChecked
                                        ></md-checkbox>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-radio-button
                                        ></md-radio-button>
                                        <md-radio-button
                                            checked
                                            defaultChecked
                                        ></md-radio-button>
                                    </div>
                                    <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                        <md-switch
                                        ></md-switch>
                                        <md-switch
                                            checked
                                            defaultChecked
                                        ></md-switch>
                                    </div>
                                </div>
                            </md-form>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-layout
                            ></md-layout>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-pagination
                            ></md-pagination>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-progress-indicator
                                max=""
                            ></md-progress-indicator>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-snackbar
                            ></md-snackbar>
                        </div>
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-tooltip
                            ></md-tooltip>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");
