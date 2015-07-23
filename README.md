# ember-cli-ie-check

This ember-cli addon provide a service wrapping a simple function to check if the client browser is

The check function is from here https://gist.github.com/paulirish/357741

## Installation

```
ember install:addon ember-cli-ie-check
```


## Usage

The function isIE(version, comparison) is available on a service named ieCheck injected into routes and controllers.

```
this.ieCheck.isIE(8, 'lte');
```


