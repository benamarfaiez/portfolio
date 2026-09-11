import { render, screen, fireEvent } from '@testing-library/react';
import { RealizationItem } from '../RealizationItem';

describe('RealizationItem', () => {
    const onOpen = jest.fn();

    beforeEach(() => {
        onOpen.mockClear();
    });

    it('renders a regular realization item and does not show the details button when there is no description or image', () => {
        render(<RealizationItem realization={{ name: 'experience.apf.projects.actions_associatives.realization.tache1' }} onOpen={onOpen} />);

        expect(screen.getByText('experience.apf.projects.actions_associatives.realization.tache1')).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /common\.learn_more_about/i })).not.toBeInTheDocument();
    });

    it('renders a subtask item with the chevron icon and shows the details button when details exist', () => {
        render(
            <RealizationItem
                realization={{
                    name: 'experience.apf.projects.actions_associatives.realization.sous_tache1',
                    description: 'Some description',
                }}
                onOpen={onOpen}
            />
        );

        expect(screen.getByText('experience.apf.projects.actions_associatives.realization.sous_tache1')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /common\.learn_more_about/i })).toBeInTheDocument();
    });

    it('calls onOpen with the realization when the details button is clicked', () => {
        const realization = {
            name: 'experience.apf.projects.actions_associatives.realization.tache1',
            description: 'Some description',
            image: '/image.png',
        };

        render(<RealizationItem realization={realization} onOpen={onOpen} />);

        fireEvent.click(screen.getByRole('button', { name: /common\.learn_more_about/i }));

        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(onOpen).toHaveBeenCalledWith(realization);
    });
});
