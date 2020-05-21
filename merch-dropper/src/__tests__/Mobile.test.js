import * as React from 'react';
import { shallow } from 'enzyme';
//import Adapter from "enzyme-adapter-react-16";

import Navbar from '../components/NavBar';

// const resizeWindow = (x, y) => {
//     window.innerWidth = x;
//     window.innerHeight = y;
//     window.dispatchEvent(new Event('resize'));
// }

describe('Navbar', () => {
    it('should not display Hamburger @ 769px screen width', () => {
        const mobileWrapper = shallow(
            <Navbar>
                <div className="MobileWrapper" />
            </Navbar>);
            expect(mobileWrapper).toBeTruthy();
             expect(mobileWrapper).toHaveStyleRule('display', 'none');
    });
   
})
  