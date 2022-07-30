import { Button, ComboMatrix, Layout, PropertiesBar, RangeTopBar, CreateRangeModal } from "../../components";
import * as React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useRange } from "../../context/ranges";
import { organizeRangeByPosition } from "../../utils";
import { Content, Header, PositionMenuItemContent, PositionsMenu, PositionsMenuItem, PositionsMenuItemButton, Wrapper } from "./styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Folder() {
  const params = useParams()

  console.log("P", params.id)
  const [searchParams, setSearchParams] = useSearchParams();

  const rangeIdSelected = searchParams.get('r')

  const { ranges, loading, listRanges, rangeSelected, getRange, listColors } = useRange()
  const [opened, setOpened] = React.useState(rangeIdSelected);

  React.useEffect(() => {
    // Carrega todos os ranges
    if (params.id) {
      listRanges(params.id)
    }
  }, [params.id])

  React.useEffect(() => {
    // Carrega todos as cores
    // if (ranges.length) {
    //   getRange(ranges[0]._id)
    //   setSearchParams({ r: ranges[0]._id }, { replace: true })
    // }
  }, [ranges])

  React.useEffect(() => {
    if (rangeSelected) {
      listColors(rangeSelected._id)
    }
  }, [rangeSelected])

  function handleToggle(f: string) {
    if (opened && opened === f) {
      return setOpened(null)
    }
    setOpened(f)
  }

  async function handleRange(r: string) {
    await getRange(r)
    setSearchParams({ r }, { replace: true })
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
        <div style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RangeTopBar />
            <Content>
              <ComboMatrix />
            </Content>
          </div>
          <PropertiesBar />
        </div>
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
      <CreateRangeModal />
    </Layout>
  )
}

export default Folder;
