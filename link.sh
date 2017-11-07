cd msteams-ui-icons/core
npm run link:self
cd ../react
npm run link:self
cd ../../msteams-ui-styles-core
npm run link:self
cd ../msteams-ui-components-react
npm run link:self

cd ../msteams-ui-icons/react
npm run link:deps
cd ../../msteams-ui-styles-core
npm run link:deps
cd ../msteams-ui-components-react
npm run link:deps
cd ../gh-pages
npm run link:deps
