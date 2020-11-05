import React, { Component } from "react";
import EmpCard from "./components/EmpCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Logo from "./components/Logo";
import LogoImage from "./components/Logo/EmpDirLogo.png";
// import employees...
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    logo: LogoImage,
  };

  removeEmp = (id) => {
    const employees = this.state.employees.filter((emp) => emp.id !== id);

    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Logo logo={this.state.logo} />
        <Title>Employees</Title>
        {this.state.employees.map((emp) => (
          <EmpCard
            removeEmp={this.removeEmp}
            id={emp.id}
            key={emp.id}
            name={emp.name}
            image={emp.image}
            position={emp.position}
            email={emp.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
