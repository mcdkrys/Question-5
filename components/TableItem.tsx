import React, { MouseEventHandler } from "react";

type props = {
  id?: number;
  userName?: string;
  displayName?: string;
  phone?: string;
  email?: string;
  userRole?: "Guest" | "Admin" | "SuperAdmin" | string;
  enabled?: boolean;
};

class TableItem extends React.Component<props> {
  constructor(props: props) {
    super(props);
  }

  clickCounter = 0;

  // Double click to open editing menu
  clickEventHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    this.clickCounter++;
    if (this.clickCounter >= 2) {
        this.clickCounter = 0;
        // Open a editing menu
    }
    if (this.clickCounter > 0) {
        setTimeout(() => {
            this.clickCounter=0
        })
    }
  };

  checkHeader(type: string) {
    return document.getElementById(type) ? true : false;
  }

  render() {
    return (
      <div className="Row" onClick={this.clickEventHandler}>
        {this.checkHeader("ID") ? (
          <div className="cell ID">{this.props.id ?? "null"}</div>
        ) : (
          <></>
        )}
        {this.checkHeader("User Name") ? (
          <div className="cell">{this.props.userName ?? "null"}</div>
        ) : (
          <></>
        )}
        {this.checkHeader("Display Name") ? (
          <div className="cell">{this.props.displayName ?? "null"}</div>
        ) : (
          <></>
        )}
        {this.checkHeader("Phone") ? (
          <div className="cell">{this.props.phone ?? "null"}</div>
        ) : (
          <></>
        )}
        {this.checkHeader("Email") ? (
          <div className="cell">{this.props.email ?? "null"}</div>
        ) : (
          <></>
        )}
        {this.checkHeader("User Role") ? (
          <div className="cell">{this.props.userRole ?? "null"}</div>
        ) : (
          <></>
        )}
        {this.checkHeader("Enabled") ? (
          <div className="cell">{this.props.enabled ? "true" : "false"}</div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default TableItem;
