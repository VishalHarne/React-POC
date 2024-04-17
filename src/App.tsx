import Button from "./components/Button";
import Alert from "./components/ComponentAcceptingCHildren";
import ListGroup from "./components/ListGroup";
import ParameterizedLabel from "./components/ParameterizedLabel";

function App() {
  let items = ["Mumbai", "Pune", "Delhi", "Bangalore"];
  let selectedText = "Not Clicked";
  const handleSelectItem = (item: string) => {
    console.log(item);
    selectedText = item;
  };
  return (
    <div>
      {/*  */}
      <>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <Alert>
          Hello <span> World</span>
        </Alert>
        <ParameterizedLabel text={selectedText}></ParameterizedLabel>
        <Button></Button>
      </>
    </div>
  );
}
export default App;
