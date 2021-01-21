import React, {Component} from 'react';
import './post-list-item.sass';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
      remove: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onImportant() {
    this.setState(({important}) => ({
      important: !important
    }))
  }
  onLike() {
    this.setState(({like}) => ({
      like: !like
    }))
  }
  onRemove() {
    this.setState(({ remove }) => ({
      remove: !remove
    }));
  }
  render() {
    const {important, like, remove} = this.state;
    const {label} = this.props;

    let classNames = "app-list-item d-flex justify-content-between";

    if(important) {
      classNames += ' important';
    }

    if (like) {
      classNames += " like";
    }

    if (remove) {
      classNames += " remove";

    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={this.onRemove}
          >
            <i className="fa fa-trash" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
