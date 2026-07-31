import { OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE, OG_IMAGE_ALT, renderOgImage } from "./_shared-og-image";

export const runtime = "nodejs";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;
export const alt = OG_IMAGE_ALT;

export default async function OpengraphImage() {
  return renderOgImage();
}
