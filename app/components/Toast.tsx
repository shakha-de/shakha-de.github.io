"use client";

import { useEffect, useState, useCallback } from "react";

export interface ToastEventDetail {
    message: string;
    tag?: string;
}

export function triggerToast(message: string, tag: string = "STDOUT") {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("app-toast", { detail: { message, tag } }));
    }
}

interface ToastItem {
    id: number;
    message: string;
    tag: string;
}

export default function ToastContainer() {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const removeToast = useCallback((id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    useEffect(() => {
        const handleToast = (e: Event) => {
            const customEvent = e as CustomEvent<ToastEventDetail>;
            if (!customEvent.detail || !customEvent.detail.message) return;

            const id = Date.now() + Math.random();
            const newToast: ToastItem = {
                id,
                message: customEvent.detail.message,
                tag: customEvent.detail.tag || "STDOUT",
            };

            setToasts(prev => [...prev.slice(-2), newToast]);

            setTimeout(() => {
                removeToast(id);
            }, 3200);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setToasts([]);
            }
        };

        window.addEventListener("app-toast", handleToast);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("app-toast", handleToast);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [removeToast]);

    if (toasts.length === 0) return null;

    return (
        <div
            aria-live="polite"
            className="fixed bottom-5 right-5 z-[500] flex flex-col gap-2.5 max-w-[calc(100vw-40px)] sm:max-w-[420px] pointer-events-none"
        >
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className="pointer-events-auto border border-[var(--border-navy)] bg-[var(--surface)]/95 backdrop-blur-md shadow-2xl p-3.5 flex flex-col gap-1.5 animate-fadeIn"
                    role="status"
                >
                    {/* Header line */}
                    <div className="flex items-center justify-between font-mono text-[10.5px] text-[var(--gray)] border-b border-[var(--border-navy)]/60 pb-1.5">
                        <span className="flex items-center gap-1.5 text-[var(--nous-blue)] font-bold tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--nous-blue)] inline-block animate-pulse" />
                            <span>[SYS // {toast.tag}]</span>
                        </span>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="hover:text-[var(--text-main)] cursor-pointer tracking-wider"
                            aria-label="Dismiss toast"
                        >
                            [✕]
                        </button>
                    </div>

                    {/* Message line */}
                    <div className="font-mono text-xs text-[var(--text-main)] flex items-start gap-2 pt-0.5">
                        <span className="text-[var(--nous-blue)] select-none font-bold">&gt;</span>
                        <span className="leading-relaxed break-all">{toast.message}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
