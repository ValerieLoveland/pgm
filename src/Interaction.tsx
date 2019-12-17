import React from "react";
import { Hangman } from "./hangman";
import "./interaction.css";
import { menu } from "./menu";

export class Interaction extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { letter: "" };
  }

  render() {
    return (
      <div>
        <div className="menu"> {menu()}</div>
        <div className="menu pangram">
          <Hangman letter={this.state.letter} />
        </div>

        <div>
          <h1>Pick a letter: </h1>{" "}
        </div>
        <div className="whatIsInputAnyway">
          <input
            value={this.state.letter}
            type="text"
            id="letter"
            onChange={e => {
              const { value } = e.currentTarget;

              if (value.length > 1) {
                this.setState({ letter: value.charAt(value.length - 1) });
              } else {
                this.setState({ letter: value });
              }
            }}
          />
        </div>
      </div>
    );
  }
}
