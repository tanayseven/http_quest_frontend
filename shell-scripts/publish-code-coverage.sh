#!/usr/bin/env bash
aws s3 sync s3://tanayseven-http-quest-frontend-build/$TRAVIS_BUILD_NUMBER/coverage_files/ .
docker-compose run publish-coverage
