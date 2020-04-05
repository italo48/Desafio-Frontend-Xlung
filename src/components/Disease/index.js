import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
      }}
    >
      <ListItemText primary={id} />
      <ListItemText primary={descricao} />
    </ListItem>
  );
}

export default Disease;
