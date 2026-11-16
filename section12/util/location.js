const GOOGLE_API_KEY = "AIzaSyAERJlwwoG_C5nB9pREkr_645Tu8eI4Q7w";

export function getMapPreview({ lat, lng }) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x300&markers=color:red%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
