import React, { Component } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";
import { Header, BtnLabel, Button, Form, Input } from "./Searchbar.styled"

export class Searchbar extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    const { value } = e.currentTarget
    this.setState({ value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({value:""})
  }

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <AiOutlineSearch size={25}/>
            <BtnLabel>Search</BtnLabel>
          </Button>
          <Input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </Form>
      </Header>
    )
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}