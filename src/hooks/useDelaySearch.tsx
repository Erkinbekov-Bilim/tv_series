import { useEffect, useState } from 'react';

const useDelaySearch = (value: string, delay: number) => {
  const [delayValue, setDelayValue] = useState<string>(value);

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setDelayValue(value);
    }, delay);

    return () => {
      clearTimeout(delayTime);
    };
  }, [value, delay]);

  return delayValue;
};

export default useDelaySearch;
