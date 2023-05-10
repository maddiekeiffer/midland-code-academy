import React from "react";
import LoginPage from "../../components/LoginPage";
import { UserProvider } from "../../context/UserContext";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

//! If password or username is too short, make sure button is disabled
describe('LoginPage', () => {
    let mockUser;
    let mockSetUser;
    let mockClearUser;

    beforeEach(() => { //beforeEach test
        mockUser = null;
        mockSetUser = jest.fn();
        mockClearUser = jest.fn(); //jest is mainly for mocking functions
    });

    afterEach(() => {
        jest.clearAllMocks();
    })
    
    it('should disable the button is username or password is less than 3 characters', () => {
        const { getByTestId } = render(
        <UserProvider user={mockUser} setUser={mockSetUser} clearUser={mockClearUser}>
            <LoginPage />
        </UserProvider>
        );

        const button = getByTestId('login');

        expect(button).toBeDisabled();

        fireEvent.change(screen.getByTestId('username'), {
            target: {value: "Test"},
        });

        fireEvent.change(screen.getByTestId('password'), {
            target: {value: "pa$$w0rd"},
        });

        expect(button).not.toBeDisabled();

        fireEvent.click(button);

        //expect(mockSetUser).toHaveBeenCalledWith({username: 'Test'});
    });
})

//! Mock a success; make sure full functionality works

//! Mock a failure; display message to the user

//! Ensure the correct format & data is being sent off
