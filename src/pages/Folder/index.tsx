import { Button, ComboMatrix, Layout } from "../../components";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useRange } from "../../context/ranges";
import { organizeRangeByPosition } from "../../utils";
import { Content, Header, PositionMenuItemContent, PositionsMenu, PositionsMenuItem, PositionsMenuItemButton, Wrapper } from "./styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Folder() {
  const params = useParams()
  const { ranges, listRanges, loading } = useRange()
  const [opened, setOpened] = React.useState(null);


  React.useEffect(() => {
    listRanges(params.id)
  }, [])

  function handleToggle(i: number) {
    if (opened && opened === i.toString()) {
      return setOpened(null)
    }

    setOpened(i.toString())
  }

  function renderContent() {
    if (!ranges.length) {
      return <div>
        <p style={{ marginBottom: 10 }}>Nenhum range encontrado.</p>
        <Button onClick={() => { }}>Criar Range</Button>
      </div>
    }

    return (
      <Wrapper>
        <PositionsMenu>
          <Header>
            <h3>Posições</h3>
          </Header>
          {
            organizeRangeByPosition(ranges).map((range, idx) => (
              <PositionsMenuItem>
                <PositionsMenuItemButton onClick={() => handleToggle(idx)}>
                  <span>{range.position}</span>
                  {
                    opened === idx.toString()
                      ? <MdKeyboardArrowUp />
                      : <MdKeyboardArrowDown />
                  }
                </PositionsMenuItemButton>
                <PositionMenuItemContent open={opened === idx.toString()}>
                  {
                    range.ranges.map((r) => (
                      <PositionsMenuItemButton submenu>
                        {r.name}
                      </PositionsMenuItemButton>
                    ))
                  }
                </PositionMenuItemContent>

              </PositionsMenuItem>
            ))
          }
        </PositionsMenu>
        <Content>
          <ComboMatrix />
        </Content>
      </Wrapper>
    )
  }

  return (
    <Layout>
      {
        loading ? <div>Loading</div> : (
          <div>
            {
              renderContent()
            }
          </div>
        )
      }
    </Layout>
  )
}

export default Folder;
