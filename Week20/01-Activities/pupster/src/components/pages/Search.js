import React, { Component } from "react";
import axios from "axios";
import Dogs from "../Dogs";
const BASEURL = "https://dog.ceo/api/breed/";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + breed + "/images");
//   }
// };

class Search extends Component {
  state = {
    breedname: "",
    results: []
  };

  searchByBreed(breed) {
    return axios.get(BASEURL + breed + "/images");
  }
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    this.searchByBreed(this.state.breedname)
      .then(dogImages => {
        console.log(dogImages.data.message);
        this.setState({
          results: dogImages.data.message
        });
      })
      .catch(error => console.error(error));
  };
  render() {
    return (
      <div>
        <form>
          <h1>Search By Breed</h1>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search the breed"
            name="breedname"
            value={this.state.breedname}
            onChange={this.handleInputChange}
          />
          <br />
          <button
            onClick={this.handleSearch}
            type="button"
            className="btn btn-primary"
          >
            {" "}
            Search{" "}
          </button>
        </form>
        <ul className="list-group search-results">
          {this.state.results.map(element => {
            console.log(element);
            return <Dogs imageurl={element} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
