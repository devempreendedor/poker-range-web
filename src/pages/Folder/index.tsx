import * as React from "react";
import { useParams } from "react-router-dom";

function Folder() {
  const params = useParams()

  return (
    <>
      <div>Folder: {params.id}</div>
    </>
  )
}

export default Folder;
