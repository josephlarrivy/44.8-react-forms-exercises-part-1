import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Box from './Box'


it("renders the Box components", function () {
    render(<Box />);
});