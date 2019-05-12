import React from 'react';
import { shallow } from 'enzyme';
import Results from '../../../containers/academics/results/Results';
import CardContent from '@material-ui/core/CardContent';

describe('Results', () =>{

    const props = {
        classes: {}
    }

    const wrapper = shallow(
        <Results {...props} />
    ).dive();

    it('should render correctly', () =>{
        expect(wrapper.find(CardContent)).toHaveLength(12);
    })
} );
