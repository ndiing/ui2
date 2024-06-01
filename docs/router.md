# MDRouterModule
The `MDRouterModule` interface provides special properties (beyond the regular `undefined` interface it also has available to it by inheritance) for manipulating `<undefined>` elements.

## Instance properties

name|type|desc
---|---|---

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---
static |  | | setRoutes| routes = [], parent
static |  | get| location| 
static |  | get| path| 
static |  | get| query| 
static |  | | getRoute| path
static |  | | getRoutes| route
static |  | | getOutlet| container, name
static |  | | emit| type, detail
static |  | | beforeLoad| beforeLoad
static |  | | navigate| url
static |  | | change| event
static |  | | init| routes = [], options = {}

## Events

name|desc
---|---
