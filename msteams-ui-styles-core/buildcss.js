module.exports = () => {
  const { ThemeConfig } = require('./lib/theme-config')
  const { ThemeStyle } = require('./lib/theme-style')
  const { getContext } = require('./lib/context')
  const { Colors } = require('./lib/colors')
  const { createTypeStyle } = require('typestyle')
  const fs = require('fs')
  const { input, textArea, surface, panel, primaryButton, secondaryButton, radioButton, radioButtonGroup, toggle, tab, fontSizes, fontWeights } = require('./lib');

  const themeConfigs = [{
    prefix: 'theme-light',
    style: ThemeStyle.Light
  }, {
    prefix: 'theme-dark',
    style: ThemeStyle.Dark
   }, {
     prefix: 'theme-contrast',
     style: ThemeStyle.HighContrast
   }];

  const sizeConfigs = [{
    filename: 'msteams-16.css',
    baseFontSize: 16
  }, {
    filename: 'msteams-14.css',
    baseFontSize: 14
  }, {
    filename: 'msteams-10.css',
    baseFontSize: 10,
  }];

  sizeConfigs.forEach(sizeConfig => {
    // Setup
    let result = '';
    themeConfigs.forEach(themeConfig => {
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
        baseFontSize: sizeConfig.baseFontSize,
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
      input(context);
      textArea(context);
  
      // Build stylesheet
      let stylesheet = ts.getStyles();
      const hashedNames = Object.keys(nameMapping);
      hashedNames.forEach(hashedName => {
        const regexp = new RegExp(hashedName, 'gi');
        stylesheet = stylesheet.replace(regexp, nameMapping[hashedName]);
      });
      const addThemeRegexp = new RegExp(/(}|,|^)\s*\./gi);
      stylesheet = stylesheet.replace(addThemeRegexp, '$1 .' + themeConfig.prefix + ' .');
      result += stylesheet;
    });

    // Write stylesheet
    if (!fs.existsSync('./css')) {
      fs.mkdirSync('./css');
    }

    fs.writeFileSync('./css/' + sizeConfig.filename, result);
  });
}
