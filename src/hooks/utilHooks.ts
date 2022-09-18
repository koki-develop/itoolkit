import { useEffect, useState } from "react";

export const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  return mounted;
};
