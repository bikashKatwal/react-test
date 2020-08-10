import React from "react";
import {render, cleanup, screen, fireEvent, waitForElement, wait} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Clicker from "./Clicker";

describe("should have a counter features", () => {
    afterEach(cleanup)
    let counter;
    beforeEach(() => {
        counter = render(<Clicker/>);
        // screen.debug();
    });
    it('should have a span', function () {
        const {getByTestId} = counter;
        expect(getByTestId('count')).toHaveTextContent("0");
    });

    // it('should have a button with Increase and Decrease and increase and decrease the counter', async function () {
    //     const {getByTestId, getByText} = counter;
    //     fireEvent.click(getByText('Increase'));
    //     expect(getByTestId('count')).toHaveTextContent("1");
    //
    //     fireEvent.click(getByText('Decrease'));
    //
    //     const countSpan = await waitForElement(() => getByText("0"));
    //     expect(countSpan).toHaveTextContent("0");
    //
    //     fireEvent.click(getByText('Decrease'));
    //     const countSpan1 = await waitForElement(() => getByText("0"));
    //
    //     expect(countSpan1).toHaveTextContent("0");
    // });

    it('should increase the value by 1', function () {
        const {getByTestId, getByText} = counter;
        fireEvent.click(getByText('Increase'));
        expect(getByTestId('count')).toHaveTextContent("1");

    });
    it('should have min value to be 0', function () {

        const {getByTestId, getByText} = counter;
        fireEvent.click(getByText('Increase'));
        expect(getByTestId('count')).toHaveTextContent("1");


        fireEvent.click(getByText('Decrease'));
        expect(getByTestId('count')).toHaveTextContent("0");

        fireEvent.click(getByText('Decrease'));
        expect(getByTestId('count')).toHaveTextContent("0");
        
    });


});