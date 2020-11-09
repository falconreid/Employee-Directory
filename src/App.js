import React, { Component } from "react";
// import EmpContext from "./utils/empContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styling imports
import EmpCard from "./components/EmpCard";
import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";
import Sort from "./components/Sort";
import SearchForm from "./components/SearchForm";
import LogoImage from "./components/Logo/EmpDirLogo.png";
// import employees...
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    logo: LogoImage,
  };

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
      console.log("employees B: ", employeesB);
      this.setState({ ...this.state, employees: employeesB });
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
      console.log("employees A: ", employeesA);
      this.setState({ ...this.state, employees: employeesA });
    }
  };

  // handleInputChange = (event) => {
  //   const { value } = event.target;

  //   // setSearch(value);
  //   console.log(value);
  //   let newResults = employees.filter((employee) => {
  //     return (
  //       employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
  //       employee.name.last.toLowerCase().includes(value.toLowerCase())
  //     );
  //   });
  //   setResults(newResults);
  // };

  render() {
    return (
      <Wrapper>
        <Container
          fluid="md"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginBottom: 25,
          }}
        >
          <Row className="justify-content-md-center">
            <Logo logo={this.state.logo} fluid />
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6}>
              <Sort>
                <p>Change Sorted Order</p>
                <Button variant="info" onClick={this.sortEmp}>
                  Arrange Employees
                </Button>
              </Sort>
            </Col>
            <Col md={6}>
              <p id="search-name">Search by Name</p>
              <SearchForm
              // handleInputChange={this.employee.handleInputChange}
              // search={this.search}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row md={12}>
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
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
