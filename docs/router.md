# Name Router

description Router is a utility class for managing client-side routing.

## Instance properties

No properties available for this class.

## Instance methods

| name          | args        | description                                                                                   |
| ------------- | ----------- | --------------------------------------------------------------------------------------------- |
<!-- | setRoutes     | routes: Array, parent: any | Sets routes recursively with parent-child relationship.                                        | -->
<!-- | on            | type: string, listener: Function | Adds an event listener to the window object for a specified event type.                        | -->
<!-- | off           | type: string, listener: Function | Removes an event listener from the window object for a specified event type.                    | -->
<!-- | emit          | type: string, detail: Object | Emits a custom event from the window object with the specified type and detail.                | -->
<!-- | getQuery      |             | Returns an object containing the parsed query parameters from the current URL.                 | -->
<!-- | getRoute      | path: string | Finds and returns the route object that matches the provided path.                             | -->
<!-- | getRoutes     | route: Array | Retrieves all routes in the hierarchy for a given route.                                       | -->
<!-- | getOutlet     | stack: any, container: HTMLElement | Retrieves the outlet element where a component should be rendered.                             | -->
<!-- | handleLoad    | event: Event | Handles the navigation process when the page loads or the URL changes.                         | -->
| navigate      | url: string | Navigates to the specified URL by updating the browser history.                                 |
<!-- | handleClick   | event: Event | Handles click events on elements with a `routerLink` attribute by navigating to the URL specified in the attribute. | -->
| init          | routes: Array | Initializes the router by setting up event listeners and defining routes.                      |

## Events

| name                | description                                            |
| ------------------- | ------------------------------------------------------ |
| onCurrentEntryChange | Event emitted when the current navigation entry changes. |
| onNavigate          | Event emitted when navigation begins.                 |
| onNavigateSuccess   | Event emitted when navigation is successful.           |
| onNavigateError     | Event emitted when an error occurs during navigation.  |
<!-- | onPopstate          | Event emitted when the window's history changes.      | -->
