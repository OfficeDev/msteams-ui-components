# Microsoft Teams UI Styles - Core

This library provides styles styled according to the [Microsoft Teams](https://products.office.com/en-US/microsoft-teams/group-chat-software) design guidelines found [here](https://aka.ms/msteamsdesignguidelines).

# Installation

Currently this package is only distributed via npmjs. To install run the following:
```bash
npm install msteams-ui-styles-core
```

# Usage

By default, this package relies on typestyle to produce its css styles and to inject them into the site. You can inject your own css producing function via the config. If you are using a specific UI framework, such as React, there may exist framework-specific binding packages so you do not need to interface with this package directly.

To use this package directly, you will need to setup a context object:
```javascript
const { Colors, Context, getContext, ThemeStyle } = require('msteams-ui-styles-core')
// This is the styling function from typestyle
const { style } = require('typestyle/lib')

// This function is optional. The default one will use Typestyle.
// 'name' is the advised potential name of the class, your function can ignore this and return anything.
// 'cssProperties' is the object containing the css properties to generate the class from.
const cssFunction = (name, cssProperties) => {
  // default typestyle styling function.
  return style(...cssProperties);
}

const config = {
   // This is the root font size in pixels specified at the HTML element.
  baseFontSize: 16,
  // Other options: ThemeStyle.Dark, ThemeStyle.HighContrast
  style: ThemeStyle.Light,
  // Optional; default = Teams colors; You can customize the colors here, however changing this will deviate from
  // the MS Teams guidelines.
  colors: Colors,
  // Optional; default = typestyle; This function takes a style object compatible with Typestyle, should perform
  // whatever is required to materialize the CSS style, and return the name of the CSS class generated.
  css: cssFunction,
};
const context = getContext(config);
```

Once you have the context object you can call any of the styles provided in this package with it to generate the CSS.

```javascript
const { primaryButton } = require('msteams-ui-styles-core');

var bodyElement = document.getElementsByTagName("BODY")[0]; 
var newElement = document.createElement('button');

// Here is the magic.
newElement.className = primaryButton(context);
// Note: some of the style functions return an object with different class names for different elements.
// For example, checkbox is usually built by hiding a real input checkbox element and adding a properly styled div
// element (multiple class names for all of these elements are produced).

newElement.textContent = "Styled Button";
bodyElement.appendChild(newElement);
```

You should now see a MS Teams styled button added to your body tag. It is usually much easier to use the bindings packages instead of directly inserting elements like this into a site.

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
