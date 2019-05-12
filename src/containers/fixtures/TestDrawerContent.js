import React, { Component } from 'react';
import { Divider, Col, Row,} from 'antd';
import { pStyle } from '../../styles/TestDrawerContent';

export const DescriptionItem = ({ title, content }) => (
    <div
        style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
        color: 'rgba(0,0,0,0.65)',
        }}
    >
        <p
            style={{
            marginRight: 8,
            display: 'inline-block',
            color: 'rgba(0,0,0,0.85)',
            }}
        >
            {title}:
        </p>
            {content}
    </div>
);
  
class TestDrawerContent extends Component {
  render() {
    return (
    <div>
        <p style={{...pStyle, marginTop: 60, fontWeight: 'bold'}}>Personal Information</p>
        <Row>
            <Col span={12}>
            <DescriptionItem title="Full Name" content="Bongomin Daniel" />{' '}
            </Col>
            <Col span={12}>
            <DescriptionItem title="Student Age" content="13" />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
            <DescriptionItem title="Sex" content="Female" />
            </Col>
            <Col span={12}>
            <DescriptionItem title="School" content="Gulu Public School" />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2, 2000" />
            </Col>
            <Col span={12}>
            <DescriptionItem title="Current Class" content="Primary Seven (P.7)" />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <DescriptionItem
                title="Behaviour in Class"
                content="Very active in class"
            />
            </Col>
        </Row>
        <Divider />
        <p style={{...pStyle, fontWeight: 'bold'}}>Academic History and Road Map</p>
        <Row>
            <Col span={12}>
            <DescriptionItem title="General Average in English" content="43%" />
            </Col>
            <Col span={12}>
            <DescriptionItem title="General Average in Mathematics" content="56%" />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
            <DescriptionItem title="General Average in Science" content="67%" />
            </Col>
            <Col span={12}>
            <DescriptionItem title="General Average in Social Studies" content="75%" />
            </Col>
        </Row>
        <Divider />
        <p style={{...pStyle, fontWeight: 'bold'}}>Academic Recommendation</p>
        <Row>
            <Col span={24}>
            <DescriptionItem
                title="Recommendation"
                content="Daniel needs to work harder in English"
            />
            </Col>
        </Row>
        <Divider />
        <p style={{...pStyle, fontWeight: 'bold'}}>Parents Information</p>
        <Row>
            <Col span={12}>
            <DescriptionItem title="Name of Parent" content="Ouma Kenneth Clein" />
            </Col>
            <Col span={12}>
            <DescriptionItem title="Phone Number" content="+256 786 277 071" />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <DescriptionItem
                title="Email"
                content="oumakenneth@gmail.com"
            />
            </Col>
        </Row>
    </div>
    )
  }
}
export default TestDrawerContent;
