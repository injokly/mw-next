import React,{useState} from 'react'
import ListItem from './ListItem';

const List = ({items}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (index) => {
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems[index] = !updatedSelectedItems[index];
        setSelectedItems(updatedSelectedItems);
      };
    
      const handleSelectChange = (index, event) => {
        // Handle select change
      };

    return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <ListItem
            name={item.name}
            age={item.age}
            isSelected={selectedItems[index]}
            onCheckboxChange={() => handleCheckboxChange(index)}
            onSelectChange={(event) => handleSelectChange(index, event)}
          />
        </li>
      ))}
    </ul>
  )
}

export default List