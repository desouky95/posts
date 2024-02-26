import { PropsWithChildren, useEffect, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type DialogProps = { open?: boolean; onClose?: () => void };
export const Dialog = ({
  children,
  open = false,
  onClose,
}: PropsWithChildren<DialogProps>) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) ref.current?.showModal();
    else ref.current?.close();
  }, [open]);

  useOnClickOutside(ref, () => {
    onClose?.();
  });

  return <dialog ref={ref}>{children}</dialog>;
};
