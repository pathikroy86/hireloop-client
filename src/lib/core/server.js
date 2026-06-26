import { getApiBaseUrl } from "@/lib/actions/api/base-url";

export const serverFetch = async (path) => {
    const res = await fetch(`${getApiBaseUrl()}${path}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    const text = await res.text();
    return text ? JSON.parse(text) : null;
}

export const serverMutation = async (path, data) => {
    const res = await fetch(`${getApiBaseUrl()}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const text = await res.text();

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}${text ? ` - ${text}` : ""}`);
    }

    return text ? JSON.parse(text) : null;
}
