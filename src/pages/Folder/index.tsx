import { Button, ComboMatrix, Layout, PropertiesBar, RangeTopBar, CreateRangeModal, CreatePositionModal } from "../../components";
import * as React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useRange } from "../../context/ranges";
import { organizeRangeByPosition } from "../../utils";
import { Content, Header, PositionMenuItemContent, PositionsMenu, PositionsMenuItem, PositionsMenuItemButton, Wrapper, AddFolder } from "./styled";
import { MdAddCircleOutline, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Range } from "../../types/range"

function Folder() {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams();

  const rangeIdSelected = searchParams.get('r')

  const { ranges, loading, listRanges, rangeSelected, setRangeSelected, listColors, setNewPositionModal } = useRange()
  const [opened, setOpened] = React.useState(null);



  React.useEffect(() => {
    // Carrega todos os ranges
    if (params.id) {
      listRanges(params.id)
    }
  }, [params.id])


  React.useEffect(() => {
    if (rangeIdSelected) {
      const range = ranges.find(r => r._id === rangeIdSelected)
      setRangeSelected(range)
    }
  }, [rangeIdSelected, ranges])

  React.useEffect(() => {
    if (rangeSelected) {
      listColors(rangeSelected._id)
    }
  }, [rangeSelected])


  React.useEffect(() => {
    if (rangeIdSelected && ranges.length && !opened) {
      const range = ranges.find(r => r._id === rangeIdSelected)
      setOpened(range.position)
    }

  }, [rangeIdSelected, ranges])

  function handleToggle(f: string) {
    if (opened && opened === f) {
      return setOpened(null)
    }
    setOpened(f)
  }

  async function handleRange(r: Range) {
    await setRangeSelected(r)
    setSearchParams({ r: r._id }, { replace: true })
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
            <AddFolder onClick={() => setNewPositionModal(true)}>
              <MdAddCircleOutline />
            </AddFolder>
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
                      <PositionsMenuItemButton selected={rangeIdSelected === r._id} onClick={() => handleRange(r)} submenu>
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
      <CreatePositionModal />
    </Layout>
  )
}

export default Folder;
