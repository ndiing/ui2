<a name="MDWeekPickerComponent"></a>

## MDWeekPickerComponent ⇐ <code>MDDatetimePickerComponent</code>
Week picker component for selecting a specific week.

**Kind**: global class  
**Extends**: <code>MDDatetimePickerComponent</code>  
**Emits**: <code>MDWeekPickerComponent#event:onWeekPickerSelection - Fired when a week is selected.</code>, <code>MDWeekPickerComponent#event:onWeekPickerIconButtonPrevClick - Fired when the previous button is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerIconButtonNextClick - Fired when the next button is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerButtonLabelClick - Fired when the label button is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerButtonCancelClick - Fired when the cancel button is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerButtonOkClick - Fired when the OK button is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerYearItemClick - Fired when a year item is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerMonthItemClick - Fired when a month item is clicked.</code>, <code>MDWeekPickerComponent#event:onWeekPickerDayItemClick - Fired when a day item is clicked.</code>  
**Tagname**: md-week-picker  

* [MDWeekPickerComponent](#MDWeekPickerComponent) ⇐ <code>MDDatetimePickerComponent</code>
    * [.weekdays](#MDWeekPickerComponent+weekdays) ⇒ <code>Array</code>
    * [.days](#MDWeekPickerComponent+days) ⇒ <code>Array</code>
    * [.body](#MDWeekPickerComponent+body) ⇒ <code>Array</code>
    * [.body](#MDWeekPickerComponent+body)
    * [.leadingActions](#MDWeekPickerComponent+leadingActions) ⇒ <code>Array</code>
    * [.updateDate()](#MDWeekPickerComponent+updateDate)
    * [.getValue()](#MDWeekPickerComponent+getValue) ⇒ <code>String</code>

<a name="MDWeekPickerComponent+weekdays"></a>

### mdWeekPickerComponent.weekdays ⇒ <code>Array</code>
Gets the formatted weekdays.

**Kind**: instance property of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  
**Returns**: <code>Array</code> - An array of weekday objects.  
<a name="MDWeekPickerComponent+days"></a>

### mdWeekPickerComponent.days ⇒ <code>Array</code>
Gets the formatted days of the current selection.

**Kind**: instance property of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  
**Returns**: <code>Array</code> - An array of day objects with their corresponding weeks.  
<a name="MDWeekPickerComponent+body"></a>

### mdWeekPickerComponent.body ⇒ <code>Array</code>
Gets the body of the week picker component.

**Kind**: instance property of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  
**Returns**: <code>Array</code> - An array containing the HTML template for the body.  
<a name="MDWeekPickerComponent+body"></a>

### mdWeekPickerComponent.body
Sets the body of the week picker component.

**Kind**: instance property of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | The new body value. |

<a name="MDWeekPickerComponent+leadingActions"></a>

### mdWeekPickerComponent.leadingActions ⇒ <code>Array</code>
Gets the leading actions of the week picker component.

**Kind**: instance property of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  
**Returns**: <code>Array</code> - An array containing the leading action buttons.  
<a name="MDWeekPickerComponent+updateDate"></a>

### mdWeekPickerComponent.updateDate()
Updates the date based on the selected week.

**Kind**: instance method of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  
<a name="MDWeekPickerComponent+getValue"></a>

### mdWeekPickerComponent.getValue() ⇒ <code>String</code>
Gets the stringified value of the selected week.

**Kind**: instance method of [<code>MDWeekPickerComponent</code>](#MDWeekPickerComponent)  
**Returns**: <code>String</code> - The stringified week.  
