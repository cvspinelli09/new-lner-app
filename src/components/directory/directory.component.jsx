import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
 
        this.state = {
          sections: [
            {
              title: "The Knowledge",
              subtitle: "Timetables 2020",
              imageUrl: "https://i.imgur.com/Uysz4nv.jpg",
              id: 1,
              linkUrl: "Knowledge"
            },
            {
              title: "Yankee",
              subtitle: "Jobs Sheet",
              imageUrl: "https://i.imgur.com/0qCKA5V.jpg",
              id: 2,
              linkUrl: "Yankee"
            },
            {
              title: "Tickets",
              subtitle: "Know your tickes",
              imageUrl: "https://i.imgur.com/XMo5mPp.jpg",
              id: 3,
              linkUrl: "Tickets"
            },
            {
              title: "Headcode",
              subtitle: "Know your train",
              imageUrl: "https://i.imgur.com/yX65Bbz.jpg",
              id: 4,
              linkUrl: "Headcode"
            }
          ]
        };
    }

    render() {
        return (
          <div className='directory-container'>
            <div className="directory-menu">
              {this.state.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
              ))}
            </div>
          </div>
        );
    }
}

export default Directory;