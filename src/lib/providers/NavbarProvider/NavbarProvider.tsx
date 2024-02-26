import { PropsWithChildren, createContext, useContext, useMemo } from "react";

const PERSIST_KEY = "NAVBAR_STATE";

// Main Context
type NavbarContextArgs = {
  isOpen: boolean;
  toggle: () => void;
  setOpen: (value: boolean) => void;
};

const NavbarContext = createContext<NavbarContextArgs | null>(null);

type NavbarProviderProps = NavbarContextArgs & {
  persist?: boolean;
};

// Provider
export const NavbarProvider = ({
  children,
  persist,
  ...props
}: PropsWithChildren<NavbarProviderProps>) => {
  // const toggle = persist
  //   ? withPersist<void>(props.isOpen, props.toggle)
  //   : props.toggle;

  // const setOpen = persist
  //   ? withPersist(props.isOpen, props.setOpen)
  //   : props.setOpen;

  const isOpen = useMemo(() => {
    if (!persist) return props.isOpen;
    const persistedState = localStorage.getItem(PERSIST_KEY);
    if (!persistedState) return props.isOpen;
    return Boolean(persistedState);
  }, [props.isOpen, persist]);

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setOpen: props.setOpen,
        toggle: props.toggle,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

// HOC Persist Function
type FnCallback<T> = (value: T) => void;

const withPersist = <T,>(currentValue: boolean, fn: FnCallback<T>) => {
  localStorage.setItem(PERSIST_KEY, `${!currentValue}`);
  return fn;
};

// useNavbar

export const useNavbar = () => {
  const ctx = useContext(NavbarContext);

  if (!ctx) throw new Error("No NavbarProvider found !!!");
  return ctx;
};
