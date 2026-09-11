import { render, screen, fireEvent } from '@testing-library/react';
import type { ReactNode } from 'react';
import { useModalDialog } from '../useModal';

describe('useModalDialog', () => {
    beforeAll(() => {
        HTMLDialogElement.prototype.showModal = jest.fn(function (this: HTMLDialogElement) {
            this.open = true;
        });

        HTMLDialogElement.prototype.close = jest.fn(function (this: HTMLDialogElement) {
            this.open = false;
        });
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    function TestDialog({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children?: ReactNode }) {
        const dialogRef = useModalDialog(isOpen, onClose);

        return <dialog ref={dialogRef} data-testid="modal-dialog">{children}</dialog>;
    }

    it('opens the dialog when isOpen becomes true', () => {
        const onClose = jest.fn();

        const { container } = render(<TestDialog isOpen={true} onClose={onClose} />);

        const dialog = container.querySelector('dialog');

        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveProperty('open', true);
        expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
    });

    it('closes the dialog when isOpen becomes false', () => {
        const onClose = jest.fn();
        const { container, rerender } = render(<TestDialog isOpen={true} onClose={onClose} />);

        expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);

        rerender(<TestDialog isOpen={false} onClose={onClose} />);

        expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
        expect((container.querySelector('dialog') as HTMLDialogElement).open).toBe(false);
    });

    it('calls onClose when the native cancel event is triggered', () => {
        const onClose = jest.fn();

        const { container } = render(<TestDialog isOpen={true} onClose={onClose} />);
        const dialog = container.querySelector('dialog') as HTMLDialogElement;

        dialog.dispatchEvent(new Event('cancel'));

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call showModal again when the dialog is already open', () => {
        const onClose = jest.fn();
        const { rerender } = render(<TestDialog isOpen={true} onClose={onClose} />);

        expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);

        (HTMLDialogElement.prototype.showModal as jest.Mock).mockClear();
        rerender(<TestDialog isOpen={true} onClose={onClose} />);

        expect(HTMLDialogElement.prototype.showModal).not.toHaveBeenCalled();
    });

    it('does not call onClose when the click target is inside the dialog content', () => {
        const onClose = jest.fn();

        const { container } = render(
            <TestDialog isOpen={true} onClose={onClose}>
                <button type="button">Inside content</button>
            </TestDialog>
        );

        const button = container.querySelector('button');

        fireEvent.click(button as HTMLButtonElement, { clientX: 50, clientY: 50 });

        expect(onClose).not.toHaveBeenCalled();
    });

    it('calls onClose when an outside click occurs on the dialog backdrop', () => {
        const onClose = jest.fn();

        render(<TestDialog isOpen={true} onClose={onClose} />);

        const dialog = screen.getByRole('dialog');
        Object.defineProperty(dialog, 'getBoundingClientRect', {
            configurable: true,
            value: jest.fn(() => ({
                left: 0,
                top: 0,
                right: 100,
                bottom: 100,
            })),
        });

        fireEvent.click(dialog, { clientX: 200, clientY: 200 });

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
