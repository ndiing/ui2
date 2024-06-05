<a name="MDLayoutModule"></a>

## MDLayoutModule

MDLayoutModule manages the layout changes based on media queries.

**Kind**: global class

-   [MDLayoutModule](#MDLayoutModule)
    -   [new MDLayoutModule()](#new_MDLayoutModule_new)
    -   [.list](#MDLayoutModule+list)
    -   [.init()](#MDLayoutModule+init)
    -   [.callback()](#MDLayoutModule+callback)

<a name="new_MDLayoutModule_new"></a>

### new MDLayoutModule()

Initializes the MDLayoutModule instance.

The constructor sets up the list of layout configurations, binds the callback, and initializes the module.

<a name="MDLayoutModule+list"></a>

### mdLayoutModule.list

**Kind**: instance property of [<code>MDLayoutModule</code>](#MDLayoutModule)  
**Properties**

| Name       | Type                              | Description                                                     |
| ---------- | --------------------------------- | --------------------------------------------------------------- |
| list       | <code>Array.&lt;Object&gt;</code> | An array of layout configurations with names and media queries. |
| list.name  | <code>String</code>               | The name of the layout configuration.                           |
| list.query | <code>MediaQueryList</code>       | The media query associated with the layout configuration.       |

<a name="MDLayoutModule+init"></a>

### mdLayoutModule.init()

Initializes the layout module.

The init method calls the callback method to set the initial layout state.

**Kind**: instance method of [<code>MDLayoutModule</code>](#MDLayoutModule)  
<a name="MDLayoutModule+callback"></a>

### mdLayoutModule.callback()

Handles layout changes and dispatches a custom event.

The callback method determines the current layout configuration based on the matching media query,
dispatches an "onLayoutChange" event with the layout details, and sets up an event listener for changes.

**Kind**: instance method of [<code>MDLayoutModule</code>](#MDLayoutModule)
