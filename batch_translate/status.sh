#!/bin/bash

curl -X GET \
-H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
https://translation.googleapis.com/v3/projects/875826751637/locations/us-central1/operations/20191122-13091574456942-5dd6c9f3-0000-2e9d-8000-883d24fc9b7c
