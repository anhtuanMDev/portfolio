'use client';
import { AppConfig, apps } from "@/utils/apps";
import { buildDeepLink, validateParams } from "@/utils/deeplink";
import { Apple, Download } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function DirectDataPage() {
    const router = useRouter()
    const [currentApp, setCurrentApp] = useState<AppConfig | null>(null);

    useEffect(() => {
        // Detect if opened in mobile browser
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (!router.isReady) return;
        const { index, ...otherParams } = router.query;

        const appIndex = Number(index as string);
        const app = apps[appIndex];
        setCurrentApp(app);
        const validation = validateParams(app, otherParams);

        if (isMobile && validation.valid) {
            // Try to open the app with deep link
            window.location.href = buildDeepLink(app, otherParams);
            // Fallback: redirect to app store if app doesn't open
            setTimeout(() => {
                const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                const isAndroid = /Android/i.test(navigator.userAgent);

                if (isIOS) {
                    //   window.location.href = 'https://apps.apple.com/app/your-app-id';
                } else if (isAndroid) {
                    window.location.href = app.androidLink || '';
                }
            }, 5000);
        } else {
            // Desktop: show download page or QR code 
            //   router.push(`/download?article=${date}`);
        }
    }, [router.isReady, router.query.date]);

    const onAndroidPress = () => {
        if (currentApp?.androidLink) {
            window.location.href = currentApp?.androidLink || '';
        }
    }

    const onIOSPress = () => {
        if (currentApp?.iosLink) {
            window.location.href = currentApp?.iosLink || '';
        }
    }

    return (
        <div className="min-h-screen flex pt-24 md:pt-4 md:items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {/* App Icon */}
                <div className="mb-12 flex justify-center rounded-sm">
                    <div className="w-24 h-24 bg-blue-400/30 backdrop-blur-sm rounded-3xl flex items-center justify-center overflow-hidden">
                        {currentApp && (
                            <Image
                                src={currentApp.logo}
                                alt={currentApp.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold  mb-4">
                    {currentApp?.name}
                </h1>

                <div className="text-center mt-14 mb-14">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto mb-8"></div>
                    <p className="text-xl">Opening {currentApp?.name}...</p>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    {currentApp?.androidLink && (
                        <button onClick={onAndroidPress} className="group bg-blue-500 hover:bg-blue-800 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
                            <Download className="w-5 h-5 text-white" />
                            <div className="text-left">
                                <div className="text-xs text-white opacity-80">GET IT ON</div>
                                <div className="text-sm text-white font-semibold">Google Play</div>
                            </div>
                        </button>
                    )}

                    {currentApp?.iosLink && (
                        <button onClick={onIOSPress} className="group bg-blue-500 hover:bg-blue-800/ backdrop-blur-sm rounded-xl px-6 py-3 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
                            <Apple className="w-5 h-5 text-white" />
                            <div className="text-left">
                                <div className="text-xs opacity-80 text-white">DOWNLOAD ON</div>
                                <div className="text-sm font-semibold text-white">App Store</div>
                            </div>
                        </button>
                    )}
                </div>

                {/* Stay on Web Link */}
                <button className="text-sm underline transition-colors duration-200">
                    Stay on web
                </button>
            </div>
        </div>
    );
}