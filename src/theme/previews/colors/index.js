import theme from '../../index';
import {
  Wrapper,
  Item,
  GroupWrapper,
} from './style';

const PreviewColors = () => {
  const { colors: { groups, ...restColors } } = theme;
  const allGroupedColors = groups.reduce((all, group) => {
    all.push(...group.colors);
    return all;
  }, []);
  const notGroupedColors = {
    name: 'A trier',
    colors: Object.keys(restColors).filter(x => !allGroupedColors.includes(x)),
  };

  return (
    <Wrapper>
      {[...groups, notGroupedColors].map((colorGroup, colorGroupIndex) => (
        <div key={`colorGroup-${colorGroupIndex}`}>
          <h1>{colorGroup.name}</h1>
          <GroupWrapper
            noItems={!colorGroup.colors?.length}
          >
            {!!colorGroup.colors?.length
              ? colorGroup.colors.map((colorName, colorIndex) => (
                <Item
                  color={restColors[colorName]}
                  key={`${colorGroup.name}-${colorName}-${colorIndex}`}
                >
                  <div />
                  <div>
                    <div>{colorName}</div>
                    <div>
                      <pre>{restColors[colorName]}</pre>
                    </div>
                  </div>
                </Item>
              )) : (
                <p>Merci d'ajouter des couleurs dans la section !</p>
              )}
          </GroupWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

export default PreviewColors;
