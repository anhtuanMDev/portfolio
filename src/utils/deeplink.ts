// utils/deeplink.ts

import { AppConfig } from "./apps";

export function buildDeepLink(
    app: AppConfig,
    params: Record<string, string | string[] | undefined>
): string {
    const { route, ...otherParams } = params;

    // Start with the scheme
    let deepLink = app.deepLinkScheme;

    // Add the route if provided
    if (route && typeof route === 'string') {
        deepLink += route;
    }

    // Add path segments for remaining params
    Object.entries(otherParams).forEach(([, value]) => {
        if (value && typeof value === 'string') {
            deepLink += `/${value}`;
        }
    });

    return deepLink;
}

// Or if you want more control over param order/structure:
export function buildDeepLinkStructured(
    app: AppConfig,
    params: Record<string, string | string[] | undefined>
): string {
    const { route, ...otherParams } = params;

    let deepLink = app.deepLinkScheme;

    // Add route
    if (route && typeof route === 'string') {
        deepLink += route;
    }

    // Build path segments from other params (e.g., /key1/value1/key2/value2)
    const pathSegments = Object.entries(otherParams)
        .filter(([, value]) => value && typeof value === 'string')
        .flatMap(([key, value]) => [key, value as string]);

    if (pathSegments.length > 0) {
        deepLink += '/' + pathSegments.join('/');
    }

    return deepLink;
}

// Or if you prefer query params after the route:
export function buildDeepLinkWithQuery(
    app: AppConfig,
    params: Record<string, string | string[] | undefined>
): string {
    const { route, ...otherParams } = params;

    let deepLink = app.deepLinkScheme;

    // Add route
    if (route && typeof route === 'string') {
        deepLink += route;
    }

    // Add other params as query string
    const queryParams = Object.entries(otherParams)
        .filter(([, value]) => value && typeof value === 'string')
        .reduce((acc, [key, value]) => {
            acc[key] = value as string;
            return acc;
        }, {} as Record<string, string>);

    if (Object.keys(queryParams).length > 0) {
        const queryString = new URLSearchParams(queryParams).toString();
        deepLink += `?${queryString}`;
    }

    return deepLink;
}

export function validateParams(
    app: AppConfig,
    params: Record<string, string | string[] | undefined>
): { valid: boolean; missing: string[] } {
    const missing = app.requiredParams.filter(
        param => !params[param] || params[param] === ''
    );

    return {
        valid: missing.length === 0,
        missing,
    };
}