"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

interface TechFilterState {
  selected: string[];
  toggle: (slug: string) => void;
  clear: () => void;
  isSelected: (slug: string) => boolean;
  hasSelection: boolean;
  isRelevant: (techs: string[]) => boolean;
  highlightMatch: (techs: string[]) => boolean;
}

const TechFilterContext = createContext<TechFilterState | null>(null);

export function TechFilterProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }, []);

  const clear = useCallback(() => setSelected([]), []);

  const isSelected = useCallback(
    (slug: string) => selected.includes(slug),
    [selected],
  );

  const hasSelection = selected.length > 0;

  const isRelevant = useCallback(
    (techs: string[]) => {
      if (selected.length === 0) return true;
      return techs.some((t) => selected.includes(t));
    },
    [selected],
  );

  const highlightMatch = useCallback(
    (techs: string[]) => {
      if (selected.length === 0) return false;
      return techs.some((t) => selected.includes(t));
    },
    [selected],
  );

  const value = useMemo(
    () => ({
      selected,
      toggle,
      clear,
      isSelected,
      hasSelection,
      isRelevant,
      highlightMatch,
    }),
    [selected, toggle, clear, isSelected, hasSelection, isRelevant, highlightMatch],
  );

  return (
    <TechFilterContext.Provider value={value}>
      {children}
    </TechFilterContext.Provider>
  );
}

export function useTechFilter() {
  const ctx = useContext(TechFilterContext);
  if (!ctx)
    throw new Error("useTechFilter must be used within TechFilterProvider");
  return ctx;
}
