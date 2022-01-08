import React from "react";

export const ListItem = (props) => {
  const { Id, status, stack,DeletePost } = props;
  return (
    <tbody>
      <tr>
        <th scope="row">{Id}</th>
        <td>{status}</td>
        <td>{stack}</td>
        <td> <button onClick={()=>DeletePost(Id)} className="btn  btn-primary"> Delete</button>  </td>
      </tr>
    </tbody>
  );
};
