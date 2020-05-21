import * as React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../components/NavBar';

const resizeWindow = (x, y) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
}


  