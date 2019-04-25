#!/bin/bash
# Channel that is output to logfile is stderr only
# std out is output to /dev/null
# Ships logs to logz.io if there is a failure

{
  bundle exec rspec &&
  ./bin/contentful-redirects &&
  ./bin/netlify-redirector &&
  bundle exec jekyll crdsnope &&
  bundle exec jekyll contentful -f &&
  bundle exec jekyll build -- --update-search-index &&
  bash ./cypress/kickOffCypress.sh &&
  ./bin/health-check.sh "we are crossroads"
} 2>&1 | tee buildlog.txt
./bin/logzio.sh
