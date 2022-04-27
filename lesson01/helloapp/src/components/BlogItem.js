import PropTypes from "prop-types";
import React, { Component } from "react";

export default class BlogItem extends Component {
  // static propTypes = {second: third}
  static defaultProps = { birth: "Belirtilmemiş" };
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    user: PropTypes.shape({ id: PropTypes.number, lang: PropTypes.string }),
  };
  render() {
    let { name, age, user, birth } = this.props;
    return (
      <div>
        BlogItem İSİM: <h1>{name}</h1>
        YAŞ :<h1>{age}</h1>
        KULLANICI ID:<h1>{user.id}</h1>
        DOĞUM TARİHİ :<h1 id="birth">{birth}</h1>
      </div>
    );
  }
}
