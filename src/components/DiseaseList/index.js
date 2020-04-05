import React from "react";
import List from "@material-ui/core/List";
import "./DiseaseList.css";

import Disease from "../Disease/index";

function DiseaseList(props) {
  const { data } = props;

  return (
    <div className="DiseaseList">
      <h1 className="DiseaseList-listTitle">Lista de doenças</h1>
      {data ? (
        <div>
          <List component="nav" aria-label="main mailbox folders">
            {data.map((el) => (
              <Disease id={el.id} descricao={el.descricao} />
            ))}
          </List>
        </div>
      ) : (
        <div>Sem registro de doenças</div>
      )}
    </div>
  );
}

export default DiseaseList;
