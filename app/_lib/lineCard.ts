/* Shared constants for the self-serve Line Card upload feature (see /admin/line-card).
   The file lives in Vercel Blob storage at a fixed pathname with no random suffix, so
   re-uploading always overwrites the same object and every link on the site that points
   at LINE_CARD_HREF keeps working without a code change or a redeploy. */

export const LINE_CARD_BLOB_PATHNAME = "amz-line-card.pdf";

/* Public, permanent link — redirects to whatever is currently uploaded (see
   app/api/line-card/download/route.ts), falling back to the bundled PDF in /public
   until the first upload is made. Every "Our Line Card" link on the site should use
   this constant rather than linking to Blob storage or /public directly. */
export const LINE_CARD_HREF = "/api/line-card/download";

export const LINE_CARD_FALLBACK_PATH = "/amz-line-card.pdf";

export const LINE_CARD_MAX_BYTES = 20 * 1024 * 1024; // 20MB
