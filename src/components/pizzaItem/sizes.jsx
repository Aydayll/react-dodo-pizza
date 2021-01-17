import React from 'react';
import classNames from 'classnames';
const Sizes = ({ sizes }) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const sizesItems = [30, 24, 50];
  const handleClickActive = (index) => setActiveItem(index);
  return (
    <ul>
      {sizes.map((item, index) => (
        <li onClick={() => handleClickActive(index)}
          className={classNames({
            active: activeItem === sizesItems[0],
            disable: !sizes.includes(sizesItems[index]),

          })}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Sizes;