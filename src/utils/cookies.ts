export const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null; // SSR safety
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
};

export const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === "undefined") return; // SSR safety
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};
