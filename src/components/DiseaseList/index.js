import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import "./DiseaseList.css";

import Disease from "../Disease/index";

function DiseaseList(props) {
  const { data } = props;

  const ui = useSelector((disease) => disease.ui);
  const disp = useDispatch;

  return (
    <div className="DiseaseList">
      <p>
        <span>{ui || "Selecione uma doença"}</span>
      </p>
      {data ? (
        <div>
          <List component="nav" aria-label="main mailbox folders">
            {data.map((el) => (
              <Disease key={el.id} id={el.id} descricao={el.descricao} />
            ))}
          </List>
        </div>
      ) : (
        <div>Sem registro de doenças</div>
      )}
    </div>
  );
}

const mapStateToProps = (store) => ({
  disease: store.clickState.disease,
});

export default connect(mapStateToProps)(DiseaseList);
