<a name="MDTimePickerComponent"></a>

## MDTimePickerComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDTimePickerComponent](#MDTimePickerComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.first](#MDTimePickerComponent+first)
        -   [.last](#MDTimePickerComponent+last)
        -   [.months](#MDTimePickerComponent+months)
        -   [.weekdays](#MDTimePickerComponent+weekdays)
        -   [.days](#MDTimePickerComponent+days)
        -   [.hours](#MDTimePickerComponent+hours)
        -   [.minutes](#MDTimePickerComponent+minutes)
        -   [.label](#MDTimePickerComponent+label)
        -   [.subLabel](#MDTimePickerComponent+subLabel)
        -   [.renderYears()](#MDTimePickerComponent+renderYears)
        -   [.renderMonths()](#MDTimePickerComponent+renderMonths)
        -   [.renderDays()](#MDTimePickerComponent+renderDays)
        -   [.renderHours()](#MDTimePickerComponent+renderHours)
        -   [.renderMinutes()](#MDTimePickerComponent+renderMinutes)
        -   [.renderCard()](#MDTimePickerComponent+renderCard)
        -   [.render()](#MDTimePickerComponent+render)
        -   [.connectedCallback()](#MDTimePickerComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDTimePickerComponent+disconnectedCallback)
        -   [.firstUpdated()](#MDTimePickerComponent+firstUpdated)
        -   [.updated()](#MDTimePickerComponent+updated)
        -   [.updateFromValue()](#MDTimePickerComponent+updateFromValue)
        -   [.show()](#MDTimePickerComponent+show)
        -   [.close()](#MDTimePickerComponent+close)
        -   [.toggle()](#MDTimePickerComponent+toggle)
        -   [.handleTimePickerScrimClick()](#MDTimePickerComponent+handleTimePickerScrimClick)
        -   [.handleTimePickerLabelPrimaryClick()](#MDTimePickerComponent+handleTimePickerLabelPrimaryClick)
        -   [.handleTimePickerLabelSecondaryClick()](#MDTimePickerComponent+handleTimePickerLabelSecondaryClick)
        -   [.handleTimePickerActionNavigateBeforeClick()](#MDTimePickerComponent+handleTimePickerActionNavigateBeforeClick)
        -   [.handleTimePickerActionNavigateNextClick()](#MDTimePickerComponent+handleTimePickerActionNavigateNextClick)
        -   [.handleTimePickerYearClick()](#MDTimePickerComponent+handleTimePickerYearClick)
        -   [.handleTimePickerMonthClick()](#MDTimePickerComponent+handleTimePickerMonthClick)
        -   [.handleTimePickerDayClick()](#MDTimePickerComponent+handleTimePickerDayClick)
        -   [.handleTimePickerHourClick()](#MDTimePickerComponent+handleTimePickerHourClick)
        -   [.handleTimePickerMinuteClick()](#MDTimePickerComponent+handleTimePickerMinuteClick)
        -   [.handleTimePickerButtonCancelClick()](#MDTimePickerComponent+handleTimePickerButtonCancelClick)
        -   [.handleTimePickerButtonOkClick()](#MDTimePickerComponent+handleTimePickerButtonOkClick)
    -   _static_
        -   [.properties](#MDTimePickerComponent.properties)

<a name="MDTimePickerComponent+first"></a>

### mdTimePickerComponent.first

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+last"></a>

### mdTimePickerComponent.last

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+months"></a>

### mdTimePickerComponent.months

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+weekdays"></a>

### mdTimePickerComponent.weekdays

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+days"></a>

### mdTimePickerComponent.days

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+hours"></a>

### mdTimePickerComponent.hours

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+minutes"></a>

### mdTimePickerComponent.minutes

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+label"></a>

### mdTimePickerComponent.label

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+subLabel"></a>

### mdTimePickerComponent.subLabel

**Kind**: instance property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+renderYears"></a>

### mdTimePickerComponent.renderYears()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+renderMonths"></a>

### mdTimePickerComponent.renderMonths()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+renderDays"></a>

### mdTimePickerComponent.renderDays()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+renderHours"></a>

### mdTimePickerComponent.renderHours()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+renderMinutes"></a>

### mdTimePickerComponent.renderMinutes()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+renderCard"></a>

### mdTimePickerComponent.renderCard()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+render"></a>

### mdTimePickerComponent.render()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+connectedCallback"></a>

### mdTimePickerComponent.connectedCallback()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+disconnectedCallback"></a>

### mdTimePickerComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+firstUpdated"></a>

### mdTimePickerComponent.firstUpdated()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+updated"></a>

### mdTimePickerComponent.updated()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerShow</code>, <code>MDTimePickerComponent#event:onTimePickerClose</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+updateFromValue"></a>

### mdTimePickerComponent.updateFromValue()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+show"></a>

### mdTimePickerComponent.show()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+close"></a>

### mdTimePickerComponent.close()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+toggle"></a>

### mdTimePickerComponent.toggle()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
<a name="MDTimePickerComponent+handleTimePickerScrimClick"></a>

### mdTimePickerComponent.handleTimePickerScrimClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerScrimClick</code>  
<a name="MDTimePickerComponent+handleTimePickerLabelPrimaryClick"></a>

### mdTimePickerComponent.handleTimePickerLabelPrimaryClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerLabelPrimaryClick</code>  
<a name="MDTimePickerComponent+handleTimePickerLabelSecondaryClick"></a>

### mdTimePickerComponent.handleTimePickerLabelSecondaryClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerLabelSecondaryClick</code>  
<a name="MDTimePickerComponent+handleTimePickerActionNavigateBeforeClick"></a>

### mdTimePickerComponent.handleTimePickerActionNavigateBeforeClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerActionNavigateBeforeClick</code>  
<a name="MDTimePickerComponent+handleTimePickerActionNavigateNextClick"></a>

### mdTimePickerComponent.handleTimePickerActionNavigateNextClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerActionNavigateNextClick</code>  
<a name="MDTimePickerComponent+handleTimePickerYearClick"></a>

### mdTimePickerComponent.handleTimePickerYearClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerYearClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+handleTimePickerMonthClick"></a>

### mdTimePickerComponent.handleTimePickerMonthClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerMonthClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+handleTimePickerDayClick"></a>

### mdTimePickerComponent.handleTimePickerDayClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerDayClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+handleTimePickerHourClick"></a>

### mdTimePickerComponent.handleTimePickerHourClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerHourClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+handleTimePickerMinuteClick"></a>

### mdTimePickerComponent.handleTimePickerMinuteClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerMinuteClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+handleTimePickerButtonCancelClick"></a>

### mdTimePickerComponent.handleTimePickerButtonCancelClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerButtonCancelClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent+handleTimePickerButtonOkClick"></a>

### mdTimePickerComponent.handleTimePickerButtonOkClick()

**Kind**: instance method of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Emits**: <code>MDTimePickerComponent#event:onTimePickerButtonOkClick</code>, <code>MDTimePickerComponent#event:onTimePickerChange</code>  
<a name="MDTimePickerComponent.properties"></a>

### MDTimePickerComponent.properties

**Kind**: static property of [<code>MDTimePickerComponent</code>](#MDTimePickerComponent)  
**Properties**

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| [ui]    | <code>String</code>  | full-screen |
| [open]  | <code>Boolean</code> | -           |
| [index] | <code>Number</code>  | -           |
| [value] | <code>String</code>  | -           |
