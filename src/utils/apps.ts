export type AppConfig = {
    name: string;
    logo: string;
    iosLink?: string;
    androidLink?: string;
    deepLinkScheme: string; // Changed from deepLinkTemplate
    requiredParams: string[];
};

export const apps: AppConfig[] = [
    {
        name: 'Stellar Scope',
        logo: '/images/stellar_scope/logo.jpg',
        androidLink: 'https://play.google.com/store/apps/details?id=com.stellarscope',
        deepLinkScheme: 'stellar.scope://',
        requiredParams: ['route', 'date'],
    },
] as const;