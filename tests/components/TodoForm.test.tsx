import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from "vitest";
import React from "react";
import TodoForm from '../../src/Components/TodoForm'
import userEvent from '@testing-library/user-event'; // Import user-event for handling input


describe("Todo Form", () => {

    it("should render input element", async () => {

        render(<TodoForm onAdd={vi.fn()} />);

        screen.debug();

        let res = await screen.findByPlaceholderText<HTMLInputElement>("Todo text");

        expect(res).toBeInTheDocument();

        res = await screen.findByTestId("add-btn");

        expect(res).toBeInTheDocument();

    });


    it("should call onAdd if input is not empty", async () => {

        const mockFn = vi.fn();
        const inputdata="New Todo"

        render(<TodoForm onAdd={mockFn} />);

        const input = await screen.findByPlaceholderText<HTMLInputElement>("Todo text");

        
        const button = await screen.findByText("Add");

        expect(input).toBeInTheDocument();
        await userEvent.type(input, inputdata);

        expect(input).toHaveValue(inputdata)


        expect(button).toBeInTheDocument();

        await userEvent.click(button);

        await waitFor(() => {
              expect(mockFn).toHaveBeenCalledWith(inputdata);
        });


    });

})