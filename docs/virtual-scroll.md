<a name="MDVirtualScrollModule"></a>

## MDVirtualScrollModule
A class representing a virtual scroll.

**Kind**: global class  

* [MDVirtualScrollModule](#MDVirtualScrollModule)
    * [new MDVirtualScrollModule(host, options)](#new_MDVirtualScrollModule_new)
    * [.init()](#MDVirtualScrollModule+init)
    * [.destroy()](#MDVirtualScrollModule+destroy)
    * [.emit(type, detail)](#MDVirtualScrollModule+emit)
    * [.handleScroll()](#MDVirtualScrollModule+handleScroll)
    * [.collectRowsData()](#MDVirtualScrollModule+collectRowsData) ⇒ <code>Array</code>
    * [.calculateVerticalScroll(rows)](#MDVirtualScrollModule+calculateVerticalScroll)
    * [.calculateHorizontalScroll(rows)](#MDVirtualScrollModule+calculateHorizontalScroll)
    * [.calculateAverageHeight(rows)](#MDVirtualScrollModule+calculateAverageHeight) ⇒ <code>number</code>
    * [.calculateAverageWidth(rows)](#MDVirtualScrollModule+calculateAverageWidth) ⇒ <code>number</code>

<a name="new_MDVirtualScrollModule_new"></a>

### new MDVirtualScrollModule(host, options)
Creates an instance of VirtualScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| host | <code>HTMLElement</code> |  | The host element. |
| options | <code>Object</code> |  | Options for the virtual scroll. |
| options.scrollbar | <code>string</code> |  | Selector for the scrollbar. |
| options.container | <code>string</code> |  | Selector for the container element. |
| options.row | <code>string</code> |  | Selector for the row elements. |
| options.column | <code>string</code> |  | Selector for the column elements. |
| options.totalY | <code>number</code> |  | Total number of rows. |
| options.totalX | <code>number</code> |  | Total number of columns. |
| [options.buffer] | <code>number</code> | <code>2</code> | The buffer size for the virtual scroll. |
| [options.rowHeight] | <code>number</code> | <code>56</code> | The default height of a row. |
| [options.rowWidth] | <code>number</code> | <code>56*3</code> | The default width of a row. |

<a name="MDVirtualScrollModule+init"></a>

### mdVirtualScrollModule.init()
Initializes the virtual scroll.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  
<a name="MDVirtualScrollModule+destroy"></a>

### mdVirtualScrollModule.destroy()
Destroys the virtual scroll.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  
<a name="MDVirtualScrollModule+emit"></a>

### mdVirtualScrollModule.emit(type, detail)
Emits a custom event.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The event type. |
| detail | <code>Object</code> | The event detail. |

<a name="MDVirtualScrollModule+handleScroll"></a>

### mdVirtualScrollModule.handleScroll()
Updates the scroll position.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  
<a name="MDVirtualScrollModule+collectRowsData"></a>

### mdVirtualScrollModule.collectRowsData() ⇒ <code>Array</code>
Collects data for rows and columns.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  
**Returns**: <code>Array</code> - The array of row data.  
<a name="MDVirtualScrollModule+calculateVerticalScroll"></a>

### mdVirtualScrollModule.calculateVerticalScroll(rows)
Calculates the vertical scrolling parameters.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array</code> | The array of row data. |

<a name="MDVirtualScrollModule+calculateHorizontalScroll"></a>

### mdVirtualScrollModule.calculateHorizontalScroll(rows)
Calculates the horizontal scrolling parameters.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array</code> | The array of row data. |

<a name="MDVirtualScrollModule+calculateAverageHeight"></a>

### mdVirtualScrollModule.calculateAverageHeight(rows) ⇒ <code>number</code>
Calculates the average row height.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  
**Returns**: <code>number</code> - The average row height.  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array</code> | The array of row data. |

<a name="MDVirtualScrollModule+calculateAverageWidth"></a>

### mdVirtualScrollModule.calculateAverageWidth(rows) ⇒ <code>number</code>
Calculates the average row width.

**Kind**: instance method of [<code>MDVirtualScrollModule</code>](#MDVirtualScrollModule)  
**Returns**: <code>number</code> - The average row width.  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array</code> | The array of row data. |

