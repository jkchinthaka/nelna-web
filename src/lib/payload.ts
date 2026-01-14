import config from "@payload-config";
import { defaultHTMLConverters, convertLexicalToHTML } from "@payloadcms/richtext-lexical";
import { getPayload } from "payload";

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null;

export async function getPayloadClient() {
  if (cachedPayload) return cachedPayload;
  cachedPayload = await getPayload({ config });
  return cachedPayload;
}

export async function lexicalToHtml(data: unknown): Promise<string> {
  if (!data) return "";

  const payload = await getPayloadClient();

  return convertLexicalToHTML({
    converters: defaultHTMLConverters,
    data: data as any,
    depth: 0,
    draft: false,
    overrideAccess: false,
    showHiddenFields: false,
    req: null,
    payload,
  });
}
