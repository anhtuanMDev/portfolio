export type AppConfig = {
    name: string;
    iosLink: string;
    androidLink: string;
    deepLinkScheme: string; // Changed from deepLinkTemplate
    requiredParams: string[];
};

export const apps: AppConfig[] = [
    {
        name: 'Stellar Scope',
        iosLink: 'https://apps.apple.com/app/your-app-id',
        androidLink: 'https://play.google.com/store/apps/details?id=com.stellarscope',
        deepLinkScheme: 'stellar.scope://',
        requiredParams: ['route', 'date'],
    },
] as const;