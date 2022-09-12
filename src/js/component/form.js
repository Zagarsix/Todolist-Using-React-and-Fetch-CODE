import React from "react";

const Form = (props) => {
  return props.task.map((ele, i) => {
    return (
      <li key={i} className="d-flex list-group-item justify-content-between">
        <p>{ele}</p>
        <span
          id={i}
          className="deleteicon"
          onClick={(e) => props.deletetodo(e.target.id)}
        >
          X
        </span>
      </li>
    );
  });
};

export default Form;