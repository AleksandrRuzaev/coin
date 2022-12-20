import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('should render string content', () => {
        render(<Button>label</Button>);

        expect(screen.getByText(/label/)).not.toBeNull();
    });

    it('should render dom content', () => {
        render(
            <Button>
                <img alt="test" />
            </Button>,
        );

        expect(screen.getByAltText(/test/)).not.toBeNull();
    });

    it('should trigger click', () => {
        const onClick = jest.fn();

        render(<Button onClick={onClick}>label</Button>);

        const btn = screen.getByText(/label/);

        fireEvent.click(btn);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
