import { Button, ComboMatrix, Layout } from "../../components";
import * as React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useRange } from "../../context/ranges";
import { organizeRangeByPosition } from "../../utils";
import { Content, Header, PositionMenuItemContent, PositionsMenu, PositionsMenuItem, PositionsMenuItemButton, Wrapper } from "./styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Folder() {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams();

  const rangeIdSelected = searchParams.get('r')

  const { ranges, listRanges, loading } = useRange()
  const [opened, setOpened] = React.useState(rangeIdSelected);
  const [rangeSelected, setRangeSelected] = React.useState(null)


  React.useEffect(() => {
    if (rangeIdSelected && ranges.length) {
      const r = ranges.find((r) => r._id === rangeIdSelected)
      setRangeSelected(r)
      setOpened(r.position)
    }
  }, [rangeIdSelected, ranges])


  React.useEffect(() => {
    listRanges(params.id)
  }, [])

  function handleToggle(f: string) {
    if (opened && opened === f) {
      return setOpened(null)
    }
    setOpened(f)
  }

  function handleRange(r: string) {
    setSearchParams({ r }, { replace: true })
  }

  console.log("#### rangeSelected =>", rangeSelected)

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
            organizeRangeByPosition(ranges).map((range) => (
              <PositionsMenuItem>
                <PositionsMenuItemButton onClick={() => handleToggle(range.position)}>
                  <span>{range.position}</span>
                  {
                    opened === range.toString()
                      ? <MdKeyboardArrowUp />
                      : <MdKeyboardArrowDown />
                  }
                </PositionsMenuItemButton>
                <PositionMenuItemContent open={opened === range.position}>
                  {
                    range.ranges.map((r) => (
                      <PositionsMenuItemButton onClick={() => handleRange(r._id)} submenu>
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
