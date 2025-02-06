import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ListItem from '../../src/Components/ListItem';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe("ListItem", () => {

    it("should render list item with given text and delete button", async () => {
        const input = 'test'
        render(<ListItem onDelete={() => { }} text={input} index={1} />);
        let res = screen.getByRole("list-item");

        expect(res).toBeInTheDocument();
        expect(res).toHaveTextContent(input);
        expect(res).toHaveTextContent("Delete")

    });

    it("should call delete function when clicked on delete button", async () => {

        const input = 'test'
        const index = 1;
        const mockDelete = vi.fn();

        render(<ListItem onDelete={mockDelete} text={input} index={index} />);

        let res = screen.getByText("Delete");
        expect(res).toBeInTheDocument();

        await userEvent.click(res);

        await waitFor(() => {
            expect(mockDelete).toHaveBeenCalledWith(index);
        });

    });

})