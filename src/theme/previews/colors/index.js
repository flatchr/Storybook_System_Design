import { Tabs, Tab, Overlay, Tooltip } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import colors, { groups, usages } from '../../colors';
import {
  Wrapper,
  Item,
  GroupWrapper,
  MainWrapper,
  TooltipContentWrapper,
} from './style';

const ItemColorRender = ({
  aliasName,
  colorName,
  colors,
  itemIndex,
}) => {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const copyTextToClipboard = async text => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const onItemColorClick = async (colorName) => {
    await copyTextToClipboard(`\${p => p.theme.colors.${colorName}};`);
    setShow(true);
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 1950);
    }
  }, [show]);

  return (
    <>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id={`overlay-toolip-${colorName}-${itemIndex}`} {...props}>
            <TooltipContentWrapper>
              Le code de la couleur <br />{colorName} a bien a été copié&nbsp;!
            </TooltipContentWrapper>
          </Tooltip>
        )}
      </Overlay>
      <Item
        title={colorName}
        color={colors[colorName]}
        canClick={!!aliasName || colors[colorName]}
        onClick={(!!aliasName || colors[colorName])
          ? () => onItemColorClick(colorName)
          : () => { }
        }
      >
        <div />
        <div>
          <div>
            <span ref={target} />
            {colorName}
          </div>
          <div>
            <pre className={aliasName ? 'with-alias' : ''}>
              {aliasName
                ? <>= <span>{aliasName}</span></>
                : (colors[colorName] || 'n/a')
              }
            </pre>
          </div>
        </div>
      </Item>
    </>
  );
};

const GroupRender = ({
  items,
  colors,
  isAlias = false,
}) => {

  return items.map((colorGroup, colorGroupIndex) => {
    const colorGroupColors = colorGroup?.colors;
    return (
      <div key={`colorGroup-${colorGroupIndex}`}>
        <h1>{colorGroup.name}</h1>
        <GroupWrapper
          noItems={!colorGroupColors?.length}
        >
          {(!!colorGroupColors?.length)
            ? colorGroupColors.map((colorName, colorIndex) => {
              const aliasName = isAlias
                ? Object.entries(colors).find(x => x[1] === colors[colorName])[0]
                : null;
              return (
                <ItemColorRender
                  key={`${colorGroup.name}-${colorName}-${colorIndex}`}
                  itemIndex={colorIndex}
                  aliasName={aliasName}
                  colors={colors}
                  colorName={colorName}
                />
              );
            }) : (
              (colorGroup.name?.length && colorGroup.name !== 'A trier') &&
              <p>{colorGroup.name} Merci d'ajouter des couleurs dans la section !</p>
            )}
        </GroupWrapper>
      </div>
    )
  });
};

const PreviewColors = () => {
  const allGroupedColors = [...groups, ...usages].reduce((all, group) => {
    if (!!group?.colors?.length) {
      all = [...all, ...group.colors];
    }
    return all;
  }, []);
  const missingColors = Object.keys(colors).filter(x => !allGroupedColors.includes(x));
  const notGroupedColors = !!missingColors?.length ? {
    name: 'A trier',
    colors: Object.keys(colors).filter(x => !allGroupedColors.includes(x)),
  } : {};

  const [tab, setTab] = useState('colors');

  return (
    <MainWrapper>
      <Tabs
        id="colors-tab"
        activeKey={tab}
        onSelect={(k) => setTab(k)}
        className="mb-3"
      >
        <Tab eventKey="colors" title="Colors">
          <Wrapper>
            <GroupRender
              colors={colors}
              items={[...groups, notGroupedColors]}
            />
          </Wrapper>
        </Tab>
        <Tab eventKey="usages" title="Usages">
          <Wrapper>
            <GroupRender
              colors={colors}
              items={usages}
              isAlias
            />
          </Wrapper>
        </Tab>
      </Tabs>
    </MainWrapper>
  );
};

export default PreviewColors;
