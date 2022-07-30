import { Button, Container, Layout } from "../../components";
import * as React from "react";
import { useFolder } from "../../context/folder";
import { Card, CardInfo } from "./styled";
import { Folder } from "../../types/folder";
import { useNavigate } from "react-router-dom";

function Folders() {

  const { listFolders, folders, setFolderModal } = useFolder()
  const navigate = useNavigate()

  React.useEffect(() => {
    listFolders()
  }, [])

  return (
    <Layout noFolderSelect>
      <Container>
        <h1>Minhas Pastas</h1>
        {
          !folders.length && (
            <div>
              <p>Nenhuma pasta encontrada.</p>
              <Button onClick={() => setFolderModal()}>
                Criar pasta
              </Button>
            </div>
          )
        }
        {folders.map((folder: Folder) => (
          <Card>
            <h1 onClick={() => navigate(`/folders/${folder._id}`)}>{folder.name}</h1>
            <CardInfo>
              <div>{folder.typeGame}</div>
              <div>{folder.format}</div>
            </CardInfo>
          </Card>
        ))}
      </Container>
    </Layout>
  );
}

export default Folders;
