import React, { useState } from 'react';

const NavTabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  


const Tab = ({ label, content }) => (
  <div>{content}</div>
);


  return (
    <div  className='taps'>
      <ul className=" nav-tabs moverres ">
        {props.tab.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'nav-item active' : 'nav-item'}
            onClick={() => setActiveTab(index)}
          >
            <a className="nav-link" href="#!">
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {props.tab.map((tab, index) => (
          <div
            key={index}
            className= {index === activeTab ? 'tab-pane active' : 'tab-pane'}
          >
            <Tab  label={tab.label} content={tab.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavTabs;
