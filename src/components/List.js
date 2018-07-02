import React, { Component } from "react";
import { Collection, CollectionItem } from "react-materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const List = ({ lists }) => {
  const Lists = lists.map((list, idx) => (
    <CollectionItem key={idx} className="flow-text">
      {list.text}
    </CollectionItem>
  ));

  return (
    <Collection className="with-header">
      <CollectionItem className="collection-header">
        <h5>Lists</h5>
        <p className="grey-text">add a new item to the list</p>
      </CollectionItem>
      {Lists}
    </Collection>
  );
};

List.propTypes = {
  lists: PropTypes.array.isRequired
};

const mapStateToProps = ({ listData }) => ({ lists: listData });
export default connect(mapStateToProps)(List);
