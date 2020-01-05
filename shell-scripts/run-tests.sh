#!/usr/bin/env bash
docker-compose build test || exit 1
docker-compose run test || exit 1
aws s3 sync . s3://tanayseven-http-quest-frontend-build/$TRAVIS_BUILD_NUMBER/coverage_files/ --exclude="*" --include ".coverage"
