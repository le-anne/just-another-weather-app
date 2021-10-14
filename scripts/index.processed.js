import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const Container = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, props.children);
};

var _ref$3 = /*#__PURE__*/React.createElement("div", {
  className: "header"
}, /*#__PURE__*/React.createElement("h1", null, "Weather"));

class Header extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, _ref$3);
  }

}

var _ref$2 = /*#__PURE__*/React.createElement("input", {
  name: "location",
  className: "user-input",
  type: "text",
  placeholder: "Location"
});

var _ref2$1 = /*#__PURE__*/React.createElement("button", {
  className: "search-button"
}, "\u2192");

class WeatherSearch extends React.Component {
  render() {
    const request = this.props.api_call;
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: request,
      className: "search-form"
    }, _ref$2, _ref2$1);
  }

}

class WeatherDetails extends React.Component {
  render() {
    const {
      pressure,
      humidity
    } = this.props.main;
    return /*#__PURE__*/React.createElement("div", {
      className: "weather-details"
    }, /*#__PURE__*/React.createElement("p", {
      className: "weather-detail"
    }, "Pressure: ", pressure), /*#__PURE__*/React.createElement("p", {
      className: "weather-detail"
    }, "Humidity: ", humidity));
  }

}

class WeatherData extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showWeatherDetails: false
    });
  }

  render() {
    const {
      main,
      name,
      sys,
      weather
    } = this.props.weatherData;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    return /*#__PURE__*/React.createElement("div", {
      className: "weather-data"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "city-name"
    }, name, ", ", sys.country), /*#__PURE__*/React.createElement("p", {
      className: "weather-temperature"
    }, main.temp, "\xB0F"), /*#__PURE__*/React.createElement("img", {
      className: "weather-icon",
      src: weatherIcon,
      alt: "WeatherIcon"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.setState({
        showWeatherDetails: true
      }),
      className: "weather-details-button"
    }, "Details"), this.state.showWeatherDetails && /*#__PURE__*/React.createElement(WeatherDetails, {
      main: main
    }));
  }

}

var _ref$1 = /*#__PURE__*/React.createElement("div", {
  className: "error"
}, /*#__PURE__*/React.createElement("p", {
  className: "error-text"
}, "Please enter the name of the city."));

class ErrorMessage extends React.Component {
  render() {
    return _ref$1;
  }

}

var _ref = /*#__PURE__*/React.createElement(Header, null);

var _ref2 = /*#__PURE__*/React.createElement(ErrorMessage, null);

class App extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      weather: null,
      showError: false
    });

    _defineProperty(this, "api_call", async e => {
      e.preventDefault();
      const location = e.target.elements.location.value;

      if (location) {
        const API_KEY = "9c3cb98520f309bd159e77512e8e5e28";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`;
        const request = await fetch(url);
        const response = await request.json();
        this.setState({
          weather: response,
          showError: false
        });
      } else {
        return this.setState({
          showError: true,
          weather: null
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(Container, null, _ref, /*#__PURE__*/React.createElement(WeatherSearch, {
      api_call: this.api_call
    }), this.state.weather && /*#__PURE__*/React.createElement(WeatherData, {
      weatherData: this.state.weather
    }), this.state.showError && _ref2);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
