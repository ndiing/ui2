## Functions

<dl>
<dt><a href="#toPascalCase">toPascalCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to PascalCase.</p>
<p>This function transforms a given string to PascalCase, where the first letter of each word is capitalized
and all non-alphanumeric characters are removed.</p>
</dd>
<dt><a href="#toCamelCase">toCamelCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to camelCase.</p>
<p>This function transforms a given string to camelCase, where the first letter of the first word is lowercase
and the first letter of each subsequent word is capitalized, with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to snake_case.</p>
<p>This function transforms a given string to snake_case, where each word is lowercase and separated by underscores,
with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toKebabCase">toKebabCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to kebab-case.</p>
<p>This function transforms a given string to kebab-case, where each word is lowercase and separated by hyphens,
with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toFlatCase">toFlatCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to flatcase.</p>
<p>This function transforms a given string to flatcase, where all words are concatenated in lowercase
and all non-alphanumeric characters are removed.</p>
</dd>
<dt><a href="#toUpperFlatCase">toUpperFlatCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to UPPERFLATCASE.</p>
<p>This function transforms a given string to UPPERFLATCASE, where all words are concatenated in uppercase
and all non-alphanumeric characters are removed.</p>
</dd>
<dt><a href="#toPascalSnakeCase">toPascalSnakeCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to Pascal_Snake_Case.</p>
<p>This function transforms a given string to Pascal_Snake_Case, where each word is capitalized and separated
by underscores, with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toCamelSnakeCase">toCamelSnakeCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to camel_Snake_Case.</p>
<p>This function transforms a given string to camel_Snake_Case, where the first letter of the first word is lowercase
and the first letter of each subsequent word is capitalized, with words separated by underscores.</p>
</dd>
<dt><a href="#toScreamingSnakeCase">toScreamingSnakeCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to SCREAMING_SNAKE_CASE.</p>
<p>This function transforms a given string to SCREAMING_SNAKE_CASE, where each word is uppercase and separated
by underscores, with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toTrainCase">toTrainCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to Train-Case.</p>
<p>This function transforms a given string to Train-Case, where each word is capitalized and separated by hyphens,
with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toCobolCase">toCobolCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to COBOL-CASE.</p>
<p>This function transforms a given string to COBOL-CASE, where each word is uppercase and separated by hyphens,
with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#toTitleCase">toTitleCase(string)</a> ⇒ <code>String</code></dt>
<dd><p>Converts a string to Title Case.</p>
<p>This function transforms a given string to Title Case, where each word is capitalized and separated by spaces,
with all non-alphanumeric characters removed.</p>
</dd>
<dt><a href="#queue">queue()</a> ⇒ <code>function</code></dt>
<dd><p>Creates a queue to ensure that asynchronous callbacks are executed in order.</p>
<p>This function returns an <code>enqueue</code> function that schedules a callback to be executed sequentially, ensuring
that each callback runs after the previous one has completed.</p>
</dd>
<dt><a href="#notEmpty">notEmpty(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if a value is not empty.</p>
<p>This function returns true if the given value is not undefined, not null, and not an empty string.</p>
</dd>
</dl>

<a name="toPascalCase"></a>

## toPascalCase(string) ⇒ <code>String</code>

Converts a string to PascalCase.

This function transforms a given string to PascalCase, where the first letter of each word is capitalized
and all non-alphanumeric characters are removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in PascalCase.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toCamelCase"></a>

## toCamelCase(string) ⇒ <code>String</code>

Converts a string to camelCase.

This function transforms a given string to camelCase, where the first letter of the first word is lowercase
and the first letter of each subsequent word is capitalized, with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in camelCase.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toSnakeCase"></a>

## toSnakeCase(string) ⇒ <code>String</code>

Converts a string to snake_case.

This function transforms a given string to snake_case, where each word is lowercase and separated by underscores,
with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in snake_case.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toKebabCase"></a>

## toKebabCase(string) ⇒ <code>String</code>

Converts a string to kebab-case.

This function transforms a given string to kebab-case, where each word is lowercase and separated by hyphens,
with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in kebab-case.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toFlatCase"></a>

## toFlatCase(string) ⇒ <code>String</code>

Converts a string to flatcase.

This function transforms a given string to flatcase, where all words are concatenated in lowercase
and all non-alphanumeric characters are removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in flatcase.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toUpperFlatCase"></a>

## toUpperFlatCase(string) ⇒ <code>String</code>

Converts a string to UPPERFLATCASE.

This function transforms a given string to UPPERFLATCASE, where all words are concatenated in uppercase
and all non-alphanumeric characters are removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in UPPERFLATCASE.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toPascalSnakeCase"></a>

## toPascalSnakeCase(string) ⇒ <code>String</code>

Converts a string to Pascal_Snake_Case.

This function transforms a given string to Pascal_Snake_Case, where each word is capitalized and separated
by underscores, with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in Pascal_Snake_Case.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toCamelSnakeCase"></a>

## toCamelSnakeCase(string) ⇒ <code>String</code>

Converts a string to camel_Snake_Case.

This function transforms a given string to camel_Snake_Case, where the first letter of the first word is lowercase
and the first letter of each subsequent word is capitalized, with words separated by underscores.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in camel_Snake_Case.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toScreamingSnakeCase"></a>

## toScreamingSnakeCase(string) ⇒ <code>String</code>

Converts a string to SCREAMING_SNAKE_CASE.

This function transforms a given string to SCREAMING_SNAKE_CASE, where each word is uppercase and separated
by underscores, with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in SCREAMING_SNAKE_CASE.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toTrainCase"></a>

## toTrainCase(string) ⇒ <code>String</code>

Converts a string to Train-Case.

This function transforms a given string to Train-Case, where each word is capitalized and separated by hyphens,
with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in Train-Case.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toCobolCase"></a>

## toCobolCase(string) ⇒ <code>String</code>

Converts a string to COBOL-CASE.

This function transforms a given string to COBOL-CASE, where each word is uppercase and separated by hyphens,
with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in COBOL-CASE.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="toTitleCase"></a>

## toTitleCase(string) ⇒ <code>String</code>

Converts a string to Title Case.

This function transforms a given string to Title Case, where each word is capitalized and separated by spaces,
with all non-alphanumeric characters removed.

**Kind**: global function  
**Returns**: <code>String</code> - The converted string in Title Case.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| string | <code>String</code> | The string to be converted. |

<a name="queue"></a>

## queue() ⇒ <code>function</code>

Creates a queue to ensure that asynchronous callbacks are executed in order.

This function returns an `enqueue` function that schedules a callback to be executed sequentially, ensuring
that each callback runs after the previous one has completed.

**Kind**: global function  
**Returns**: <code>function</code> - The `enqueue` function which takes a callback to be executed in the queue.  
<a name="notEmpty"></a>

## notEmpty(value) ⇒ <code>Boolean</code>

Checks if a value is not empty.

This function returns true if the given value is not undefined, not null, and not an empty string.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if the value is not empty, otherwise false.

| Param | Type            | Description         |
| ----- | --------------- | ------------------- |
| value | <code>\*</code> | The value to check. |
