# Microsoft Teams UI Components - React

This library provides React components styled according to the [Microsoft Teams](https://products.office.com/en-US/microsoft-teams/group-chat-software) design guidelines found [here](https://aka.ms/msteamsdesignguidelines).

# Installation

Currently this package is only distributed via npmjs. To install run the following:
```bash
npm install msteams-ui-components-react
```

# Usage

The React bindings get the context in which to render the components from a top level Context component. All MS Teams components in this package must be children (direct or indirect) of this top level component. Here is how you would setup a simple React page:

```javascript
const microsoftTeams = require('@microsoft/teams-js');
const React = require('react')
const { getContext, PrimaryButton, TeamsComponentContext, ThemeStyle } = require('msteams-ui-components-react')

// Wherever you want to mount the React page in your HTML.
var mountPoint = ...

class SimplePage extends React.Component {
  state = {
    theme: ThemeStyle.Light,
    fontSize: 16,
  };

  componentDidMount() {
    // If you are deploying your site as a MS Teams static or configurable tab, you should add ?theme={theme} to
    // your tabs URL in the manifest. That way you will get the current theme on start up (calling getContext on
    // the MS Teams SDK has a delay and may cause the default theme to flash before the real one is returned).
    this.updateTheme(this.getQueryVariable('theme'));
    this.setState({
      fontSize: this.pageFontSize(),
    });

    // If you are not using the MS Teams web SDK, you can remove this entire if block, otherwise if you want theme
    // changes in the MS Teams client to propogate to the page, you should leave this here.
    if (this.inTeams()) {
      microsoftTeams.initialize();
      microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
    }
  }

  render() {
    const context = getContext({
      baseFontSize: this.state.fontSize,
      style: this.state.theme
    });

    return (
      <TeamsThemeContext.Provider value={context}>
        <PrimaryButton onClick={() => alert("You clicked me!")}>Click Me!</PrimaryButton>
      </TeamsThemeContext.Provider>
    );
  }

  // Grabs the font size in pixels from the HTML element on your page.
  private pageFontSize = () => {
    let sizeStr = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size');
    sizeStr = sizeStr.replace('px', '');
    let fontSize = parseInt(sizeStr, 10);
    if (!fontSize) {
      fontSize = 16;
    }
    return fontSize;
  }

  // This is a simple method to check if your webpage is running inside of MS Teams.
  // This just checks to make sure that you are or are not iframed.
  private inTeams = () => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  // Sets the correct theme type from the query string parameter.
  private updateTheme = (themeStr) => {
    let theme;
    switch (themeStr) {
      case 'dark':
        theme = ThemeStyle.Dark;
        break;
      case 'contrast':
        theme = ThemeStyle.HighContrast;
        break;
      case 'default':
      default:
        theme = ThemeStyle.Light;
    }
    this.setState({ theme });
  }

  // Returns the value of a query variable.
  private getQueryVariable = (variable) => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (const varPairs of vars) {
      const pair = varPairs.split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  }
}

render(
  <SimplePage />,
  document.getElementById(mountPoint)
);
```

You can also render your own custom components using the MS Teams context in two different ways.

1. You can wrap them using the connectTeamsComponent function.
```javascript
const React = require('react')
const { connectTeamsComponent, ThemeStyle, IITeamsThemeContextProps } = require('msteams-ui-components-react')

const CustomComponentInternal: React.FunctionComponent<ICustomComponentProps & ITeamsThemeContextProps> = (props) => {
  const { context, ...rest } = props;
  const { colors, style } = context;

  const styleProps = {};
  switch(style) {
    case ThemeStyle.Dark:
      styleProps.color = colors.dark.brand00;
      break;
    case ThemeStyle.HighContrast:
      styleProps.color = colors.highContrast.white;
      break;
    case ThemeStyle.Light:
    default:
      styleProps.color = colors.light.brand00;
  }

  return <div style={styleProps} {...rest}>{props.children}</div>;
};

const CustomComponent = connectTeamsComponent(CustomComponentInternal);
```

You can now render CustomComponent like any other normal React component as long as it is a child (direct or indirect) of the TeamsComponentContext.

```javascript
class SimplePage extends React.Component {
  
  ...

  render() {
    const context = getContext({
      baseFontSize: this.state.fontSize,
      style: this.state.theme
    });

    return (
      <TeamsThemeContext.Provider value={context}>
        <CustomComponent>Hello</CustomComponent>
      </TeamsThemeContext.Provider>
    );
  }

  ...

}
```

You should see that the Hello text is colored in the brand00 MS Teams color. If you are testing this in MS Teams, you can change the theme in the settings to see this color get updated. If you are running this directly in a browser, you can just add the theme query variable (theme=dark) to see the color change to the dark variation of brand00.

2. Using the render method of the connected component object.

```javascript
const { ConnectedComponent } = require('msteams-ui-components-react')

class SimplePage extends React.Component {
  
  ...

  render() {
    const context = getContext({
      baseFontSize: this.state.fontSize,
      style: this.state.theme
    });

    return (
      <TeamsThemeContext.Provider value={context}>
        <TeamsThemeContext.Consumer>
          {(context) => {
            const { context, ...rest } = props;
            const { colors, style } = context;

            const styleProps = {};
            switch(style) {
              case ThemeStyle.Dark:
                styleProps.color = colors.dark.brand00;
                break;
              case ThemeStyle.HighContrast:
                styleProps.color = colors.highContrast.white;
                break;
              case ThemeStyle.Light:
              default:
                styleProps.color = colors.light.brand00;
            }

            return <div style={styleProps} {...rest}>{props.children}</div>;
          }}
        </TeamsThemeContext.Consumer>
      </TeamsThemeContext.Provider>
    );
  }

  ...

}
```

As you can see the only difference is where the render code is placed. Using method (1) lets you organize your subcomponents for re-use whereas (2) is a quick way to get at the context. (The code for (1) actually uses (2) under the covers.)

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
