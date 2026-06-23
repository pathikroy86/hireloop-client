const DEFAULT_API_URL = "http://localhost:8000";

export function getApiBaseUrl() {
    const baseUrl = process.env.NEXT_SERVER_PUBLIC_URL || DEFAULT_API_URL;
    return baseUrl.replace(/\/$/, "");
}

