cd msteams-ui-icons/core
yarn
yarn clean
yarn link:self
yarn build
cd ../react
yarn
yarn clean
yarn link:self
yarn link:deps
yarn build
cd ../../msteams-ui-styles-core
yarn
yarn clean
yarn link:self
yarn link:deps
yarn build
cd ../msteams-ui-components-react
yarn
yarn clean
yarn link:self
yarn link:deps
yarn build
cd ../gh-pages
yarn
yarn link:deps
yarn build
