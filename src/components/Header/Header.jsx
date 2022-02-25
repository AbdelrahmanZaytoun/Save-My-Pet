export const Header = (props) => {
  const goList = () => props.isListLayout(true);
  const goAdd = () => props.isListLayout(false);
  return (
    <div className="header">
      <h2>Save my pet</h2>
      <ul>
        <li onClick={goList}>Pet List</li>
        <li onClick={goAdd}>Add Pet</li>
        <li onClick={props.logout}>Logout</li>
      </ul>
    </div>
  );
};
