import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/ComponentAcceptingCHildren";
import ListGroup from "./components/ListGroup";
import ParameterizedLabel from "./components/ParameterizedLabel";

function App() {
  let items = ["Mumbai", "Pune", "Delhi", "Bangalore"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const [selectedText, setSelectedText] = useState("Not Clicked");
  const handleSelectItem = (item: string) => {
    console.log(item);
    setSelectedText(item);
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
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <span> World</span>
          </Alert>
        )}
        <ParameterizedLabel text={selectedText}></ParameterizedLabel>
        <Button onclick={() => setAlertVisibility(true)}></Button>
      </>
    </div>
  );
}
export default App;
