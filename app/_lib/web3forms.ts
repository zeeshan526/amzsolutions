/* Web3Forms submission helper.

   The access key is public by design — Web3Forms state it is safe in client-side code,
   and delivery is bound to the inbox the key was created with, not to anything sent in
   the payload. It still lives in an env var so the key isn't baked into source control;
   see .env.example. */

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitToWeb3Forms(fields: Record<string, string>): Promise<SubmitResult> {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      ok: false,
      error: "This form isn't connected yet. Please call us on 610-306-9027 and we'll take the details directly.",
    };
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });

    const data: { success?: boolean; message?: string } = await response.json().catch(() => ({}));

    if (response.ok && data.success !== false) return { ok: true };

    return { ok: false, error: data.message || "We couldn't send that. Please try again, or call us on 610-306-9027." };
  } catch {
    // Network failure, offline, or the request was blocked.
    return { ok: false, error: "We couldn't reach our server. Check your connection, or call us on 610-306-9027." };
  }
}

/* Same submission, but for forms that can carry a file attachment (the Contact page).
   Web3Forms accepts multipart/form-data for this — pass a FormData already populated
   with your fields plus an optional File under whatever field name you gave it; the
   access key is added here so callers don't have to remember it. Deliberately no
   explicit Content-Type header: the browser sets the multipart boundary itself. */
export async function submitFormDataToWeb3Forms(formData: FormData): Promise<SubmitResult> {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      ok: false,
      error: "This form isn't connected yet. Please call us on 610-306-9027 and we'll take the details directly.",
    };
  }

  formData.set("access_key", WEB3FORMS_ACCESS_KEY);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    const data: { success?: boolean; message?: string } = await response.json().catch(() => ({}));

    if (response.ok && data.success !== false) return { ok: true };

    return { ok: false, error: data.message || "We couldn't send that. Please try again, or call us on 610-306-9027." };
  } catch {
    return { ok: false, error: "We couldn't reach our server. Check your connection, or call us on 610-306-9027." };
  }
}
