# MDRouterModule

The `MDRouterModule` interface provides special properties (beyond the regular `undefined` interface it also has available to it by inheritance) for manipulating `<undefined>` elements.

## Instance properties

| name | type | desc |
| ---- | ---- | ---- |

## Instance methods

| static | asynchronous | accessor | name       | parameters                |
| ------ | ------------ | -------- | ---------- | ------------------------- |
| true   | -            | -        | setRoutes  | routes = [], parent       |
| true   | -            | get      | location   | -                         |
| true   | -            | get      | path       | -                         |
| true   | -            | get      | query      | -                         |
| true   | -            | -        | getRoute   | path                      |
| true   | -            | -        | getRoutes  | route                     |
| true   | -            | -        | getOutlet  | container, name           |
| true   | -            | -        | emit       | type, detail              |
| true   | -            | -        | beforeLoad | beforeLoad                |
| true   | -            | -        | navigate   | url                       |
| true   | -            | -        | change     | event                     |
| true   | -            | -        | init       | routes = [], options = {} |

## Events

| name | desc |
| ---- | ---- |
