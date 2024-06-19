### Coding Style

-   [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
-   [HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

### Naming convention

```js
// Module
class MDExample {
    property = null;

    privateProperty_ = null;

    static property = null;

    static privateProperty_ = null;

    constructor() {}

    method() {}

    privateMethod_() {}

    static method() {}

    static privateMethod_() {}
}

// new MDExample()

// Element
class MDExampleElement {}

// tag-name
// md-example

// Controller
class MDExampleController {}

// this.example = new MDExampleController(this)
```

```css
.md-example {
}

.md-example--modifier {
}

.md-example__child {
}

.md-example__child--modifier {
}

.md-example__child-primary {
}

.md-example__child-secondary {
}

.md-example__child-tertiary {
}
```

```html
<!-- <md-layout></md-layout> -->
<!-- <md-color></md-color> -->
<!-- <md-elevation></md-elevation> -->
<!-- <md-icon></md-icon> -->
<!-- <md-motion></md-motion> -->
<!-- <md-shape></md-shape> -->
<!-- <md-typography></md-typography> -->
<md-bottom-app-bar></md-bottom-app-bar>
<md-top-app-bar></md-top-app-bar>
<md-badge></md-badge>
<md-button></md-button>
<md-fab></md-fab>
<md-icon-button></md-icon-button>
<md-segmented-button></md-segmented-button>
<md-card></md-card>
<md-carousel></md-carousel>
<md-checkbox></md-checkbox>
<md-chip></md-chip>
<md-date-picker></md-date-picker>
<md-dialog></md-dialog>
<md-divider></md-divider>
<md-list></md-list>
<md-menu></md-menu>
<md-navigation-bar></md-navigation-bar>
<md-navigation-drawer></md-navigation-drawer>
<md-navigation-rail></md-navigation-rail>
<md-progress-indicator></md-progress-indicator>
<md-radio-button></md-radio-button>
<md-search></md-search>
<md-bottom-sheet></md-bottom-sheet>
<md-side-sheet></md-side-sheet>
<md-slider></md-slider>
<md-snackbar></md-snackbar>
<md-switch></md-switch>
<md-tab></md-tab>
<md-text-field></md-text-field>
<md-time-picker></md-time-picker>
<md-tooltip></md-tooltip>
```
