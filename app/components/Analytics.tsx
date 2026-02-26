"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    goatcounter?: {
      count: (options?: {
        path?: string;
        title?: string;
        event?: boolean;
      }) => void;
    };
  }
}

export function Analytics() {
  const goatCounterUrl = process.env.NEXT_PUBLIC_GOATCOUNTER_URL;
  const pathname = usePathname();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!goatCounterUrl || !scriptLoaded) {
      return;
    }

    const query = window.location.search;
    const path = query ? `${pathname}${query}` : pathname;

    window.goatcounter?.count({
      path,
      title: document.title,
    });
  }, [goatCounterUrl, pathname, scriptLoaded]);

  if (!goatCounterUrl) {
    return null;
  }

  return (
    <Script
      src="https://gc.zgo.at/count.js"
      data-goatcounter={goatCounterUrl}
      data-goatcounter-settings='{"no_onload": true}'
      strategy="afterInteractive"
      onLoad={() => setScriptLoaded(true)}
    />
  );
}
