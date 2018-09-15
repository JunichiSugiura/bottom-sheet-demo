#!/bin/bash

watchman watch-del-all
rm -rf node_modules/
yarn cache clean
rm -rf /tmp/haste-map-react-native-packager-*
yarn
