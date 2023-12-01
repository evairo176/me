import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const useCookieStorage = (
  key: string,
  initialValue: any,
  maxAge?: any
  // eslint-disable-next-line no-unused-vars
) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  const maxAgeValue = maxAge ? maxAge : 60 * 6 * 24;

  useEffect(() => {
    // Retrieve from localStorage
    const item = getCookie(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  const setValue = (value: any) => {
    // Save state
    setStoredValue(value);
    // Save to localStorage
    setCookie(key, JSON.stringify(value), { maxAge: maxAgeValue });
  };
  return [storedValue, setValue];
};

export default useCookieStorage;
