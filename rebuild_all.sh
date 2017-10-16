cd msteams-ui-icons/core
npm install
npm run build
cd ../react
npm install
npm run build
cd ../../msteams-ui-styles-core
npm install
npm run link:self
npm run clean
npm run build
cd ../msteams-ui-components-react
npm install
npm run link:self
npm run link:deps
npm run clean
npm run build
cd ../gh-pages
npm install
npm run link:deps
npm run build
