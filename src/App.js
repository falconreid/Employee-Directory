import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import EmpCard from "./components/EmpCard";
import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";
import Sort from "./components/Sort";
import LogoImage from "./components/Logo/EmpDirLogo.png";
// import employees...
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    logo: LogoImage,
  };

  // removeEmp = (id) => {
  //   const employees = this.state.employees.filter((emp) => emp.id !== id);

  //   this.setState({ employees });
  // };

  // Sort Employees in reverse order

  sortEmp = () => {
    if (this.state.employees[0].name === "Bin Chun") {
      const employeesB = this.state.employees.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      console.log(employeesB);
    } else if (this.state.employees[0].name !== "Bin Chun") {
      const employeesA = this.state.employees.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      console.log(employeesA);
    }
  };

  render() {
    return (
      <Wrapper>
        <Logo logo={this.state.logo} />

        <Sort>
          <Button variant="info">Arrange Employees</Button>
          {this.sortEmp()}
        </Sort>
        {this.state.employees.map((emp) => (
          <EmpCard
            id={emp.id}
            key={emp.id}
            name={emp.name}
            image={emp.image}
            position={emp.position}
            email={emp.email}
          />
        ))}

        {console.log("these blessed people: ", this.state.employees)}
      </Wrapper>
    );
  }
}

export default App;
