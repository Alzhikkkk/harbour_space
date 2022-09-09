import { Select } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
const { Option } = Select;

function Question() {
    return(
     <section className="question">
          <div className="question-header">
            <h1>Frequently asked questions</h1>
            <span>
                Filled by:
                <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        defaultValue="Program conditions"
                        >
                        <Option value="1">Program conditions</Option>
                </Select>
            </span>
          </div>

        <div className="question-body">
            <div className="faq faq-one">
                <h3>Program conditions</h3>

                <div className="faq-answer">
                    <span className='faq-q'>
                        <h1 className="faq-page">What is an FAQ Page?</h1>
                        <button className="circle">
                            <div className="line-wrapper">
                                <div className="horizontal"></div>
                                <div className="vertical"></div>
                            </div>
                        </button>
                    </span>
                    <div className="faq-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                            necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                            aperiam.
                            Perspiciatis, porro!</p>
                    </div>

                   
                </div>
            </div>
            <hr className="hr-line" />
            <div className="faq faq-two">
                    <h3>Program conditions</h3>
                   

                <div className="faq-answer">
                    <span className='faq-q'>
                        <h1 className="faq-page">Why do you need an FAQ page?</h1>
                        <button className="circle">
                            <div className="line-wrapper">
                                <div className="horizontal"></div>
                                <div className="vertical"></div>
                            </div>
                        </button>
                    </span>
                    <div className="faq-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                            necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                            aperiam.
                            Perspiciatis, porro!</p>
                    </div>
                </div>
            </div>
            <hr className="hr-line" />
            <div className="faq faq-three">
                <h3>Program conditions</h3>

                <div className="faq-answer">
                    <span className='faq-q'>
                        <h1 className="faq-page">Does it improves the user experience of a website?</h1>
                        <button className="circle">
                            <div className="line-wrapper">
                                <div className="horizontal"></div>
                                <div className="vertical"></div>
                            </div>
                        </button>
                    </span>
                    <div className="faq-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                            necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                            aperiam.
                            Perspiciatis, porro!</p>
                    </div>
                </div>
            </div>
          </div>
     </section>
     );
}

export default Question;