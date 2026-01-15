
# Deployment to Google Cloud Run

To deploy this portfolio to Google Cloud Run for the **Dev New Year 2026** challenge, use the following command.

## Step 1: Build the Image
```bash
gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/sanjeev-portfolio
```

## Step 2: Deploy to Cloud Run
```bash
gcloud run deploy sanjeev-portfolio \
  --image gcr.io/[YOUR_PROJECT_ID]/sanjeev-portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --labels dev-tutorial=devnewyear2026
```

> **Note:** Replace `[YOUR_PROJECT_ID]` with your actual Google Cloud Project ID.
