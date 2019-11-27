# PROJECT_ID='sulbaguia'
# PROJECT_REGION='us-central1'

curl -X POST \
  -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
  -H "Content-Type: application/json; charset=utf-8" \
  -d @request.json \
  https://translation.googleapis.com/v3/projects/sulbaguia/locations/us-central1:batchTranslateText