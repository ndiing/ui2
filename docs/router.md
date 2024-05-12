# Name Router

description Router is a utility class for managing client-side routing.

## Instance properties

No properties available for this class.

## Instance methods

| name          | args        | description                                                                                   |
| ------------- | ----------- | --------------------------------------------------------------------------------------------- |
| navigate      | url: string | Navigates to the specified URL by updating the browser history.                                 |
| init          | routes: Array | Initializes the router by setting up event listeners and defining routes.                      |

## Events

| name                | description                                            |
| ------------------- | ------------------------------------------------------ |
| onCurrentEntryChange | Event emitted when the current navigation entry changes. |
| onNavigate          | Event emitted when navigation begins.                 |
| onNavigateSuccess   | Event emitted when navigation is successful.           |
| onNavigateError     | Event emitted when an error occurs during navigation.  |
