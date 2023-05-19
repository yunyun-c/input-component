import "./App.css";
import React from "react";
import Input from "./Input";

function App() {
  const handleFocus = () => {
    console.log("Input received focus");
  };

  const handleBlur = () => {
    console.log("Input lost focus");
  };
  return (
    <div className="App">
      <h1>Inputs</h1>
      <div className="inputs">
        <p>&lt;Input /&gt; | &:hover | &:focus</p>
        <Input
          label="label"
          type="text"
          placeholder="Placeholder"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <p>&lt;Input error /&gt; | &:hover | &:focus</p>
        <Input
          label="label"
          type="text"
          placeholder="Placeholder"
          error={true}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <p>&lt;Input disabled /&gt;</p>
        <Input
          label="label"
          type="text"
          placeholder="Placeholder"
          disabled={true}
        />

        <div className="helpers">
          <div className="helper">
            <p>&lt;Input helperText="Some interesting text" /&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              helperText="Some interesting text"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="helper">
            <p>&lt;Input helperText="Some interesting text" error /&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              helperText="Some interesting text"
              error={true}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <p>&lt;Input iconPosition="left" /&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              icon="true"
              iconName="phone"
              iconPosition="left"
            />
          </div>
          <div className="icon">
            <p>&lt;Input iconPosition="right" /&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              icon="true"
              iconName="lock"
              iconPosition="right"
            />
          </div>
        </div>

        <p>&lt;Input value="text" /&gt;</p>
        <Input label="label" type="text" value="text" placeholder="Text" />

        <div className="sizes">
          <div className="sm">
            <p>&lt;Input size="sm"/&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              size="sm"
            />
          </div>
          <div className="md">
            <p>&lt;Input size="md" /&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              size="md"
            />
          </div>
          <div className="lg">
            <p>&lt;Input size="lg" /&gt;</p>
            <Input
              label="label"
              type="text"
              placeholder="Placeholder"
              size="lg"
            />
          </div>
        </div>

        <p>&lt;Input fullWidth /&gt;</p>
        <Input
          label="label"
          type="text"
          value="text"
          placeholder="Text"
          fullWidth
        />

        <p>&lt;Input mutiline row={4} /&gt;</p>
        <Input label="label" placeholder="Placeholder" multiline row={4} />
      </div>
    </div>
  );
}

export default App;
