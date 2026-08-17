/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import ErrorBoundary from "@/ui/ErrorBoundary";
import CookieConsent from "@/components/common/CookieConsent";

const Wrapper = ({ children }: any) => {

    return (
        <ErrorBoundary>
            {children}
            <CookieConsent />
            <ScrollToTop />
            <ToastContainer position="top-center" />
        </ErrorBoundary>
    )
}

export default Wrapper
