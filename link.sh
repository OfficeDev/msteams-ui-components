cd msteams-ui-icons/core
yarn link:self
cd ../react
yarn link:self
cd ../../msteams-ui-styles-core
yarn link:self
cd ../msteams-ui-components-react
yarn link:self

cd ../msteams-ui-icons/react
yarn link:deps
cd ../../msteams-ui-styles-core
yarn link:deps
cd ../msteams-ui-components-react
yarn link:deps
cd ../gh-pages
yarn link:deps
