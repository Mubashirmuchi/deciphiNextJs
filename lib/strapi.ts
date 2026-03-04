const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

if (!STRAPI_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is missing or empty");
}

export async function strapiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN && {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      }),
    },
    ...options,
  });
  
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi ${res.status}: ${text}`);
  }

  return res.json();
}

