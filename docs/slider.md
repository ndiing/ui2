# MDSliderComponent
The `MDSliderComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-slider>` elements.

## Instance properties

name|type|desc
---|---|---
autocapitalize|`Boolean`|-
autocomplete|`Boolean`|-
disabled|`Boolean`|-
form|`String`|-
list|`String`|-
name|`String`|-
type|`String`|-
max|`Number`|-
min|`Number`|-
step|`Number`|-
defaultValue|`Array`|-
convertLabel|`Function`|-

## Instance methods

block|asynchronous|accessor|name|parameters
---|---|---|---|---

    |-|get |sliderNative1|-
    |-|get |sliderNative2|-

    |-|-|calculatePercentage|min, max, value

    |-|-|calculateDecimal|min, max, value

## Events

name|desc
---|---
