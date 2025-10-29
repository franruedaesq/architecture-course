import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setIsMobile(mql.matches);
      });
    };

    const listener = () => update();

    const legacyMql = mql as MediaQueryList & {
      addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
    };

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", listener);
    } else {
      legacyMql.addListener?.(listener);
    }

    update();

    return () => {
      cancelAnimationFrame(frame);
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", listener);
      } else {
        legacyMql.removeListener?.(listener);
      }
    };
  }, []);

  return !!isMobile;
}
