import { addPet } from "../../../api";

export const AddPet = (props) => {
  const newPet = () => {
    const name = document.getElementsByName("name")[0].value;
    const type = document.getElementsByName("type")[0].value;
    const license = document.getElementsByName("license")[0].value;
    addPet({ name, type, license }).then(props.isListLayout);
  };
  return (
    <div className="form-container">
      <h2>Add Pet</h2>
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Type" name="type" />
      <input type="text" placeholder="license" name="license" />
      <button onClick={newPet}>Add</button>
    </div>
  );
};
