'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { routes } from '../../../../mocks/routes';

export default function ApodPage() {
    const router = useRouter()

    useEffect(() => {
        // Detect if opened in mobile browser
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (!router.isReady) return;

        const date = router.query.date as string;

        if (!date) {
            console.error('Date is missing from URL');
            return;
        }

        if (isMobile) {
            // Try to open the app with deep link
            window.location.href = `stellar.scope://${routes.detailApod}/${date}`;

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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1F6BDB] via-[#9B7BFF] to-[#FFB703]">
            <div className="text-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mx-auto mb-4"></div>
                <p className="text-xl">Opening Stellar Scope...</p>
            </div>
        </div>
    );
}