const canUseLocalStorage = (): boolean =>
   typeof window !== "undefined" && typeof window.localStorage?.getItem === "function";

export const setLocalStorage = <T>(name: string, items: T[]): void => {
   if (!canUseLocalStorage()) return;
   window.localStorage.setItem(name, JSON.stringify(items));
};

export const getLocalStorage = <T>(name: string): T[] => {
   if (!canUseLocalStorage()) return [];
   const data = window.localStorage.getItem(name);
   if (data) {
      return JSON.parse(data) as T[];
   }
   return [];
};
