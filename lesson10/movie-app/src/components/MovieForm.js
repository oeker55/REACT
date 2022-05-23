import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Image, Form, Message } from "semantic-ui-react";
import {
  newMovies,
  getMovie,
  fetchMovies,
  updateMovies,
} from "../actions/movieActions";
import { Navigate } from "react-router-dom";
import withRouter from "../helpers/getParams";

export class MovieForm extends Component {
  state = {
    title: "",
    cover: "",
    error: {
      titleError: false,
      coverError: false,
    },
    done: false,
  };

  componentDidMount() {
    this.props.getMovie(this.props.params.id);
  }
  render() {
    console.log(this.props.params.id);
    // console.log(this.props.params.id, this.props.state.movieReducer.movie)
    // console.log( this.props.state.movieReducer.movies.find(item => item.id == this.props.params.id))
    // console.log(this.props.state.movieReducer.movie.title)
    const inputOnChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
      // console.log("title",this.state.title)
      // console.log("cover",this.state.cover)
    };
    const validate = () => {
      let errMessages = {};

      if (!this.state.title) {
        errMessages.titleError = true;
      } else {
        errMessages.titleError = false;
      }
      if (!this.state.cover) {
        errMessages.coverError = true;
      } else {
        errMessages.coverError = false;
      }

      this.setState({ error: errMessages });
    };

    const wiewSuccessMessage = (
      <Form.Field>
        <Message positive>
          <Message.Header>Movie Saved</Message.Header>
          <p>
            Go to your <b>special offers</b> page to see now.
          </p>
        </Message>
      </Form.Field>
    );

    const btnOnClick = () => {
      validate();
    };

    const FormDataSubmit = (e) => {
      // console.log("form child", e.target.children[1].children[1].value)
      // console.log("form child", e.target.children[2].children[1].value)
      // console.log("target ten gelen",(e.target.children[1].children[1].value && e.target.children[2].children[1].value))
      // console.log("title",this.state.title)
      // console.log("cover",this.state.cover)
      // console.log("state",this.state)

      if (!(this.state.error.titleError || this.state.error.coverError)) {
        if (this.props.params.id) {
          this.props.updateMovies(
            this.props.params.id,
            this.state.title,
            this.state.cover
          );
          this.setState({ done: true });
        } else {
          this.props.newMovies(this.state.title, this.state.cover);
          this.setState({ done: true });
         
        }
      } else if ( !(this.state.error.titleError || this.state.error.coverError) ||
        (e.target.children[1].children[1].value &&
          e.target.children[2].children[1].value)
      ){

        if (this.props.params.id) {
          this.props.updateMovies(
            this.props.params.id,
            e.target.children[1].children[1].value,
            e.target.children[2].children[1].value
            );
            this.setState({ done: true });
          } else {
            this.props.newMovies(
              e.target.children[1].children[1].value,
              e.target.children[2].children[1].value
              );
              this.setState({ done: true });
            }
          }
            // else
      // {
      //   this.props.newMovies(this.state.title, this.state.cover);
      //   this.setState({ done:true});
      //   console.log(this.state)
      // }

      // if (
      //   (this.state.error.titleError || this.state.error.coverError) === false
      // ) {
      //   this.props.newMovies(this.state.title, this.state.cover);
      //   this.setState({ done:true});
      //   console.log(this.state)
      // }
    };

    return (
      <div>
        <Form
          loading={this.props.state.newMovieReducer.fetching}
          onSubmit={FormDataSubmit}
        >
          {/* {this.props.state.newMovieReducer.fetched &&(this.state.done)
          
          ? wiewSuccessMessage
          : null
        } */}

          {/* ister yukarıdaki gibi kaydedildi mesajı ver isterse movies sayfasına navigate */}
          {this.props.state.newMovieReducer.fetched && this.state.done ? (
            <Navigate to="/movies" />
          ) : null}

          {!this.props.state.newMovieReducer.error ? (
            ""
          ) : (
            <Form.Field>
              <Message negative>
                <Message.Header>Error with Post API</Message.Header>
                <p>{this.props.state.newMovieReducer.error}</p>
              </Message>
            </Form.Field>
          )}

          {!(this.state.error.titleError || this.state.error.coverError) ? (
            ""
          ) : (
            <Form.Field>
              <Message negative>
                <Message.Header>The movie is not added</Message.Header>
                <p>You must no blank any area</p>
              </Message>{" "}
            </Form.Field>
          )}

          <Form.Field error={this.state.error.title}>
            <label>Movie Title</label>
            <input
              onChange={inputOnChange}
              name="title"
              defaultValue={
                this.props.state.movieReducer.movie.title
                  ? this.props.state.movieReducer.movie.title
                  : this.state.title
              }
              // value={this.state.title}
              placeholder="Enter a Movie Title..."
            />
          </Form.Field>
          <Form.Field error={this.state.error.cover}>
            <label>Movie Cover Image</label>
            <input
              onChange={inputOnChange}
              name="cover"
              defaultValue={
                this.props.state.movieReducer.movie.cover
                  ? this.props.state.movieReducer.movie.cover
                  : this.state.cover
              }
              // value={this.state.cover}
              placeholder="Enter a movie cover URL..."
            />
          </Form.Field>
          <Form.Field>
            <Image src={this.state.cover} size="small" />
          </Form.Field>
          <Button onClick={btnOnClick} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = { newMovies, getMovie, fetchMovies, updateMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieForm));

// this.setState(state => ({
//   editTodo: {
//     ...state.editTodo,
//     title: event.target.value,
//   }}))
