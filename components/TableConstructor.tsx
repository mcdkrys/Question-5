import React, { ReactNode } from "react";
type tableHeaders =
  | "ID"
  | "User Name"
  | "Display Name"
  | "Phone"
  | "Email"
  | "User Role"
  | "Enabled";

type props = {
  headers: tableHeaders[];
  children?: ReactNode;
};

class TableContrustor extends React.Component<props> {
  constructor(props: props) {
    super(props);
  }

  render() {
    return (
      <div className="Wrap-Table">
        <div className="Table">
          <div className="THeader">
            <div className="Row">
              {this.props.headers.map((val, key) => (
                <div
                  className={`cell ${val == "ID" ? "ID" : ""}`}
                  id={val}
                  key={key}
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
          <div className="TItem">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default TableContrustor;
