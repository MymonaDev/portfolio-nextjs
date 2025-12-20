import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useDebouncedNavigation(delay = 300) {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleMouseEnter = (id: string) => {
    if (debounceRef.current) return; // Prevent multiple timeouts

    debounceRef.current = setTimeout(() => {
      router.push(`#${id}`);
      debounceRef.current = null; // Reset after execution
    }, delay);
  };

  const handleMouseLeave = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
  };

  // ✅ Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return { handleMouseEnter, handleMouseLeave };
}
