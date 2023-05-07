import { Dropdown, DropdownButton } from "react-bootstrap";

function CreateButton() {
    return (
      <DropdownButton id="createButton" title="Add New">
        <Dropdown.Item href="/CreateMenu">Menu</Dropdown.Item>
        <Dropdown.Item href="/CreateCategory">Category</Dropdown.Item>
        <Dropdown.Item href="/CreateDish">Dish</Dropdown.Item>
      </DropdownButton>
    );
  }
  
  export default CreateButton;