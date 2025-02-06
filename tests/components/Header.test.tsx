import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, expect, it } from "vitest";
import Header from "../../src/Components/Header";
import React from "react";

describe("Header",()=>{


    it("should have text passed by user",async ()=>{

        const title="Hello world";

        render(<Header title={title}/>)
        screen.debug();
        const elem =await screen.findByText(title);

        expect(elem).toBeInTheDocument();

    });



})
