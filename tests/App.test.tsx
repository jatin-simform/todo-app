import { describe, it, expect, beforeAll } from 'vitest'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import React from 'react';

describe("Todo App ", () => {

    it("should render root element", () => {
        render(<App />);
        expect(document.body).toBeTruthy();
    });

    it("should have header", async () => {
        render(<App />);
        const elem = await screen.findByTestId("header");
        expect(elem).toBeInTheDocument()
    })

    it("should have input ", async () => {
        render(<App />);
        const input = await screen.findByPlaceholderText<HTMLInputElement>("Todo text");

        expect(input).toBeInTheDocument();
    })

    it("should have add button ", async () => {
        render(<App />);
        const elem = await screen.findByTestId("add-btn");
        expect(elem).toBeInTheDocument();
    })

    it("should have todo list container ", async () => {
        render(<App />);
        const elem = await screen.findByTestId("todo-list");
        expect(elem).toBeInTheDocument();
    })

});