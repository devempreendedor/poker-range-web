import { Layout } from "../../components";
import * as React from "react";
import { useFolder } from "../../context/folder";
import { Card, CardInfo } from "./styled";
import { Folder } from "../../types/folder";
import { useNavigate } from "react-router-dom";

function Folders() {

  const { listFolders, folders } = useFolder()
  const navigate = useNavigate()

  React.useEffect(() => {
    listFolders()
  }, [])

  return (
      <Layout noFolderSelect>
        <h1>Minhas Pastas</h1>
        {folders.map((folder: Folder) => (
          <Card>
            <h1 onClick={() => navigate(`/folders/${folder._id}`)}>{folder.name}</h1>
            <CardInfo>
              <div>{folder.typeGame}</div>
              <div>{folder.format}</div>
            </CardInfo>
          </Card>
        ))}
      </Layout>
  );
}

export default Folders;
