import React from 'react';
import { shallow } from 'enzyme';
import DeleteModal from '../../../containers/helpers/DeleteModal';
import MainBar from '../../../containers/helpers/MainBar';

describe('DeleteModal',() =>{
  
    const wrapper = shallow(
    <DeleteModal 
        buttonText="Register Pupils"
        modalTitle="Register New Pupils"
        modalContent={<p>Yess</p>}
        modalButtonType="pprimary"
        okButtonText="Register"
        modalWidth="600px"
    />);
    it('renders DeleteModal without crashing', () => {
        expect(wrapper.find(MainBar)).toHaveLength(0);
    });
})

