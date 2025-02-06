import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import List from '../../src/Components/List'
import React from "react";
import '@testing-library/jest-dom';

describe("Todo list", () => {

    it("should display empty state when given emtpy array", () => {

        render(<List items={[]} onDelete={() => { }} />)
        const res = screen.getByText("No Items");
        expect(res).toBeInTheDocument();

    })

    it("should render n li when given n items", async () => {
        const items=["test0", "test1"]
        render(<List items={items} onDelete={() => { }} />);
        const res = await screen.findAllByRole("list-item");
        expect(res.length).toBe(items.length)
    })

});