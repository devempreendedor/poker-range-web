import { Container, FolderCard } from "../../components";
import * as React from "react";
import { Row, Wrapper } from "./styled";
import { useFolder } from "../../context/folder";

function Home() {
  const { listFolders, folders } = useFolder()

  React.useEffect(() => {
    listFolders()
  }, [])

  return (
    <Container>
      <Wrapper>
        {
          folders.map((folder) => (
            <Row key={folder._id}>
              <FolderCard folder={folder} />
            </Row>
          ))
        }
      </Wrapper>
    </Container>
  );
}

export default Home;
