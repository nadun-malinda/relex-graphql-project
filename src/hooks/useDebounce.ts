import { useState, useEffect } from "react";

interface DebounceProps {
  value: string;
  delay?: number;
}

/**
 * Debounces a value with the specified delay.
 *
 * @param {Object} props - The input props.
 * @param {string} props.value - The value to debounce.
 * @param {number} [props.delay=500] - The delay in milliseconds.
 * @returns {string} - The debounced value.
 */
const useDebounce = ({ value, delay = 500 }: DebounceProps): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // clean up and cancel the timeout when value or delay change
    return () => clearTimeout(handler);
  }, [value, delay]);

  // this will return the latest value,
  // if "value" hasn't been updated within last "delay" time
  return debouncedValue;
};

export default useDebounce;
