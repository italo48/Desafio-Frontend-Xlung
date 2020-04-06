import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "../../actions/index";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
function Disease(props) {
  const { id, descricao } = props;


  return (
    <ListItem
      key={id}
      style={{
        backgroundColor: "#282c34",
        marginTop: 10,
        marginBottom: 10,
        color: "white",
        justifyContent: "flex-start",
      }}
    >
      <ListItemText
        style={{
          backgroundColor: "white",
          color: "#282c34",
          flexGrow: 0,
          marginRight: 15,
          padding: 12,
        }}
        primary={id}
      />
      <ListItemText primary={descricao} />
      <Button
        variant="contained"
        onClick={() => {
          clickButton(descricao);
          console.log("Hello")
        }}
      >
        Selecionar
      </Button>
    </ListItem>
  );
}
const mapStateToProps = (store) => ({
  disease: store.clickState.disease,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Disease);
