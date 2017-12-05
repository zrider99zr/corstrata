import React from 'react';
import { mount,configure } from 'enzyme';
import '../createPatient.js';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



