ng-material-floating-button
========================

Material design floating action button implemented as an Angularjs directive. 

Made to be semantic, fast and easy to customize.
~~Shamelessly~~ inspired by action buttons from Google Inbox, Evernote and Path.

##Demo##
Head over to the project [homepage](http://nobitagit.github.io/ng-material-floating-button/) to see it in action.

**Other versions**
- [Vanilla html](https://github.com/nobitagit/material-floating-button) (original, upstream version of the component)

##How to use##
Download the whole repo directly here on Github or clone it, then (optionally) run `npm install` to have access to the configured Grunt tasks.

Docs are still in the works (and coming soon), for the time being look in the `src` folder for usage examples and head to the original component [docs](https://github.com/nobitagit/material-floating-button#how-to-use) to see how to customise the styles of the menu.

###Basic setup###
Download the whole repo or clone it, then reference the directive css file (here is `mfb/src/mfb.css`)in your `<head>`:

```html
<link href="../path/to/css/mfb.css" rel="stylesheet"/>
```
Place a reference to the directive before the closing `<body>` tag or anywhere after your angular script tag.

```html
<link href="../mfb/src/mfb.css" rel="stylesheet"/>
```

Place the html structure in you template. As a first example, assuming your example is using [Ionicons](http://ionicons.com/) as icon font:

```html
<nav mfb-menu position="br" effect="zoomin" label="hover here" active-icon="ion-edit" resting-icon="ion-plus-round">
  <a mfb-button icon="paper-airplane" label="menu item"></a>
</nav>
```
This example shows the two basic components of the directive, a unique `mfb-menu` element which serves as a wrapper to a variable number of child buttons, defined by the `mfb-button` attribute.
This above code will output a basic button menu on the bottom right corner of the screen with a single menu item. Hardly amazing, so let's see how to customise it. 

###Element attributes###
A number of attributes can be passed to the elements from the template in order to customise both behavior and appearance.

####mfb-menu element####
This can be defined as an attribute or an element. So this is valid:
```html
<ul mfb-menu></ul>
```
...and this is valid too:
```html
<mfb-menu></mfb-menu>
```
#####position####
Defines in which corner of the screen the component should be displayed.

value | explanation
--- | --- 
`tl` |  top-left corner
`tr` |  top-right corner
`br` |  bottom-right corner
`bl` |  bottom-left corner

Example:
```html
<ul mfb-menu position="br">
  <!-- this will be displayed on the bottom-right corner of the screen -->
</ul>
```

#####effect####
Defines the effect that is performed when the menu opens up to show its child buttons.

value | explanation
--- | --- 
`zoomin` |  test it [here](http://nobitagit.github.io/ng-material-floating-button/)
`slidein` | test it [here](http://nobitagit.github.io/ng-material-floating-button/)
`fountain` | test it [here](http://nobitagit.github.io/ng-material-floating-button/)

Example:
```html
<ul mfb-menu effect="zoomin">
</ul>
```
#####label####
The text that is displayed when hovering the main button.
Example:
```html
<ul mfb-menu label="your text here">
</ul>
```

#####active-icon####
The icon that will be displayed by default on the main button.
Example:
```html
<ul mfb-menu active-icon="ion-edit">
</ul>
```
#####resting-icon####
The icon that will be displayed on the main button when hovering/interacting with the menu.
Example:
```html
<ul mfb-menu resting-icon="ion-plus-round">
</ul>
```

##How to use##
To run the tests you need Jasmine and Karma runner. They can be run from the console with either `grunt karma` or `karma start test/karma.conf.js` commands.

Demo icons courtesy of [Ionicons](ionicons.com)

