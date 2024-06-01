# MDNestedListItemComponent
The `MDNestedListItemComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-nested-list-item>` elements.

## Instance properties

name|type|desc
---|---|---
label|`String`|
selected|`Boolean`|
routerLink|`String`|
indent|`Number`|
isNode|`Boolean`|
ui|`String`|possible values 
expanded|`Boolean`|
activated|`Boolean`|
isParent|`Boolean`|
hasLevel|`Boolean`|

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    |   | get | labelSecondary| 

## Events

name|desc
---|---
`onNestedListItemSelected`|
`onNestedListItemActionClick`|
# MDNestedListRowComponent
The `MDNestedListRowComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-nested-list-row>` elements.

## Instance properties

name|type|desc
---|---|---

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

## Events

name|desc
---|---
# MDNestedListComponent
The `MDNestedListComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-nested-list>` elements.

## Instance properties

name|type|desc
---|---|---
list|`Array`|
rangeSelection|`Boolean`|
multiSelection|`Boolean`|
singleSelection|`Boolean`|
allSelection|`Boolean`|
ui|`String`|possible values tree,level,accordion

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    |   | | createList| list, indent = 0

    |   | | lastList| list

    |   | | selectList| list, data

    |   | | expandList| list, data

## Events

name|desc
---|---
`onNestedListItemClick`|
`onNestedListKeydown`|
