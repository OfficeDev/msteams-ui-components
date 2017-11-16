module.exports = () => {
  const { ThemeConfig } = require('./lib/theme-config')
  const { ThemeStyle } = require('./lib/theme-style')
  const { Context, getContext } = require('./lib/context')
  const { Colors } = require('./lib/colors')
  const { createTypeStyle } = require('typestyle')
  const fs = require('fs')
  const { surface, panel, primaryButton, secondaryButton, radioButton, radioButtonGroup, toggle, tab, fontSizes, fontWeights } = require('./lib');

  const themeConfigs = [{
    filename: 'msteams-16-light.css',
    baseFontSize: 16,
    style: ThemeStyle.Light
  }, {
    filename: 'msteams-16-dark.css',
    baseFontSize: 16,
    style: ThemeStyle.Dark
  }, {
    filename: 'msteams-16-contrast.css',
    baseFontSize: 16,
    style: ThemeStyle.HighContrast
  }, {
    filename: 'msteams-14-light.css',
    baseFontSize: 14,
    style: ThemeStyle.Light
  }, {
    filename: 'msteams-14-dark.css',
    baseFontSize: 14,
    style: ThemeStyle.Dark
  }, {
    filename: 'msteams-14-contrast.css',
    baseFontSize: 14,
    style: ThemeStyle.HighContrast
  }, {
    filename: 'msteams-10-light.css',
    baseFontSize: 10,
    style: ThemeStyle.Light
  }, {
    filename: 'msteams-10-dark.css',
    baseFontSize: 10,
    style: ThemeStyle.Dark
  }, {
    filename: 'msteams-10-contrast.css',
    baseFontSize: 10,
    style: ThemeStyle.HighContrast
  }];

  themeConfigs.forEach(themeConfig => {
    // Setup
    const nameMapping = {};
    const ts = createTypeStyle();
    const cssFunction = (name, ...styles) => {
      const hashedName = ts.style(...styles);
      if (nameMapping[hashedName] && nameMapping[hashedName] !== name) {
        throw new Error("Duplicate class generated for '" + nameMapping[hashedName] + "' and '" + name + "'");
      }
      nameMapping[hashedName] = name;
      return hashedName;
    }
    const config = {
      baseFontSize: themeConfig.baseFontSize,
      style: themeConfig.style,
      colors: Colors,
      css: cssFunction,
    };
    const context = getContext(config);

    // Generate styles
    surface(context);
    panel(context);
    primaryButton(context);
    secondaryButton(context);
    radioButton(context);
    radioButtonGroup(context);
    tab(context);
    toggle(context);
    fontSizes(context);
    fontWeights(context);

    // Build stylesheet
    let stylesheet = ts.getStyles();
    const hashedNames = Object.keys(nameMapping);
    hashedNames.forEach(hashedName => {
      const regexp = new RegExp('.' + hashedName + '(:|{|\\s|-)', 'gi');
      stylesheet = stylesheet.replace(regexp, '.' + nameMapping[hashedName] + '$1');
    });

    // Write stylesheet
    if (!fs.existsSync('./css')) {
      fs.mkdirSync('./css');
    }

    fs.writeFileSync('./css/' + themeConfig.filename, stylesheet);
  });
}
