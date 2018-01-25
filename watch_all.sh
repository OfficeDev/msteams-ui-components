cd msteams-ui-icons/core
yarn build:watch &
cd ../react
yarn build:watch &
cd ../../msteams-ui-styles-core
yarn build:watch &
cd ../msteams-ui-components-react
yarn build:watch &
cd ../gh-pages
yarn dev
