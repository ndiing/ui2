
# Name {{1}}

description {{2}}

## Instance properties

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
{{3}}


## Instance methods

| name | args | description |
| ---- | ---- | ----------- |
{{4}}


## Events

| name | description |
| ---- | ----------- |
{{5}}


Create documentation with the template above using the markdown from the javascript code that I gave
rule:
{{1}} take the name of the class name
{{2}} Create a description for class
{{3}} Take from the properties
{{4}} Take all the methods on the class except (properties,constructor,render,connectedCallback,disconnectedCallback,updated,firstUpdated, and the method that begins with handle...)
{{5}} Take the event from this.emit()


