call cd msteams-ui-icons/core
call yarn
call yarn clean
call yarn link:self
call yarn build
call cd ../react
call yarn
call yarn clean
call yarn link:self
call yarn link:deps
call yarn build
call cd ../../msteams-ui-styles-core
call yarn
call yarn clean
call yarn link:self
call yarn link:deps
call yarn build
call cd ../msteams-ui-components-react
call yarn
call yarn clean
call yarn link:self
call yarn link:deps
call yarn build
call cd ../gh-pages
call yarn
call yarn link:deps
call yarn build
call cd ..
