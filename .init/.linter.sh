#!/bin/bash
cd /home/kavia/workspace/code-generation/paris-english-pub-experience-229915-229924/frontend_pub_website
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

