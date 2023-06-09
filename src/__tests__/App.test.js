import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });
    //test to show upcoming events
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    //test to show suggestions during search 
    test ('render CitySearch', () => {
        expect (AppWrapper.find(CitySearch)).toHaveLength(1);
    });
});