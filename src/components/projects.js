import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
} from "react-mdl";
import PasswordImg from "../images/Generator.png";
import BurgerImg from "../images/burger.png";
import Weather from "../images/weather.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${PasswordImg}) center / cover`,
              }}
            >
              {" "}
            </CardTitle>
            <CardText>Password Generator</CardText>
            <CardActions border>
              <a href="https://jvieira1919.github.io/8balle/" colored>
                Link
              </a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${Weather}) center / cover`,
              }}
            ></CardTitle>
            <CardText>Weather Dashboard</CardText>
            <CardActions border>
              <a href="https://jvieira1919.github.io/prous/" colored>
                Link
              </a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${BurgerImg}) center / cover`,
              }}
            >
              {" "}
            </CardTitle>
            <CardText>Eat Da Burger App</CardText>
            <CardActions border>
              <a href="https://nameless-woodland-62737.herokuapp.com/" colored>
                Link
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Javascript</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Nodejs</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          {/* <Tab>Javascript</Tab>
          <Tab>Nodejs</Tab>
          <Tab>React</Tab> */}
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
