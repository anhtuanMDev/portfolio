import { apps } from "@/utils/apps";
import { buildDeepLink, validateParams } from "@/utils/deeplink";
import { Apple, Download } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DirectDataPage() {
    const router = useRouter()

    useEffect(() => {
        // Detect if opened in mobile browser
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (!router.isReady) return;
        const { index, ...otherParams } = router.query;

        const appIndex = Number(index as string);
        const app = apps[appIndex];
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
                    window.location.href = 'https://play.google.com/store/apps/details?id=com.stellarscope';
                }
            }, 5000);
        } else {
            // Desktop: show download page or QR code 
            //   router.push(`/download?article=${date}`);
        }
    }, [router.isReady, router.query.date]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {/* App Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-blue-400/30 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="3" strokeWidth="2" />
                            <line x1="12" y1="3" x2="12" y2="5" strokeWidth="2" strokeLinecap="round" />
                            <line x1="12" y1="19" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round" />
                            <line x1="3" y1="12" x2="5" y2="12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="19" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Stellar Scope
                </h1>

                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-12">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white text-sm font-medium tracking-wide">
                        PREMIUM EXPERIENCE
                    </span>
                </div>

                <div className="text-center text-white">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mx-auto mb-4"></div>
                    <p className="text-xl">Opening Stellar Scope...</p>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <button className="group bg-blue-800/40 hover:bg-blue-800/60 backdrop-blur-sm text-white rounded-xl px-6 py-3 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
                        <Download className="w-5 h-5" />
                        <div className="text-left">
                            <div className="text-xs opacity-80">GET IT ON</div>
                            <div className="text-sm font-semibold">Google Play</div>
                        </div>
                    </button>

                    <button className="group bg-blue-800/40 hover:bg-blue-800/60 backdrop-blur-sm text-white rounded-xl px-6 py-3 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
                        <Apple className="w-5 h-5" />
                        <div className="text-left">
                            <div className="text-xs opacity-80">DOWNLOAD ON</div>
                            <div className="text-sm font-semibold">App Store</div>
                        </div>
                    </button>
                </div>

                {/* Stay on Web Link */}
                <button className="text-white/80 hover:text-white text-sm underline transition-colors duration-200">
                    Stay on web
                </button>
            </div>
        </div>
    );
}