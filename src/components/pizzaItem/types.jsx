import React from 'react';
import classNames from 'classnames';

const Types = ({ types }) => {
    const [activeItem, setactiveItem] = React.useState(types[0])
    const typesItems = ['Тонкое', 'Традиционное']
    const handleClickActive = (index) => setactiveItem(index);
    return (
        <ul>
            {typesItems.map((item, index) => {
                <li
                    onClick={() => handleClickActive(index)}
                    className={classNames({
                        active: activeItem === index,
                        disable: !types.includes(index),
                    })}>
                        {item}
                </li>
            })}
        </ul>
    )
}

export default Types;
