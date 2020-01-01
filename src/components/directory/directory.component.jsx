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
              id: 1
            },
            {
              title: "Yankee",
              subtitle: "Jobs Sheet",
              imageUrl: "https://i.imgur.com/0qCKA5V.jpg",
              id: 2
            },
            {
              title: "Headcode",
              subtitle: "Know your train",
              imageUrl: "https://i.imgur.com/yX65Bbz.jpg",
              id: 3
            }
          ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, subtitle, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default Directory;