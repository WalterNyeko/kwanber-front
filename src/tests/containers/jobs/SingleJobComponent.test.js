import React from 'react';
import { shallow } from 'enzyme';
import SingleJobComponent from '../../../containers/jobs/SingleJobComponent';
import Typography from '@material-ui/core/Typography';

describe('Results', () =>{

    const props = {
        classes: {}
    }
    const wrapper = shallow(
        <SingleJobComponent {...props}/>
    ).dive();

    it('should render correctly', () =>{
        expect(wrapper.find(Typography)).toHaveLength(2);
    })
} );
