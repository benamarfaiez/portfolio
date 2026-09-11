import { useEffect, useRef } from 'react';

export function useModalDialog(isOpen: boolean, onClose: () => void) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (isOpen) {
      if (!dialogNode.open) dialogNode.showModal();
    } else {
      if (dialogNode.open) dialogNode.close();
    }
  }, [isOpen]);

  // Gestion de la fermeture natif (Escape + Clic Backdrop)
  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialogNode) {
        const rect = dialogNode.getBoundingClientRect();
        const isOutsideClick =
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom;

        if (isOutsideClick) {
          onClose();
        }
      }
    };

    dialogNode.addEventListener('cancel', handleCancel);
    dialogNode.addEventListener('click', handleClick);

    return () => {
      dialogNode.removeEventListener('cancel', handleCancel);
      dialogNode.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return dialogRef;
}