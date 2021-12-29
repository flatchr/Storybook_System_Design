import { useState, useMemo } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import fonts from '../../fonts';
import typography from '../../typography';
import CodePreview from '../../../storybookCommonComponents/codePreview';
import {
  Wrapper,
  Item,
  Title,
  FontExample,
  TitleHeader,
} from './style';

const PreviewFonts = () => {
  const _fonts = Object.values(fonts);
  const sizes = Object.values(typography.sizes);
  const [commonVariants, setCommonVariants] = useState(Object.keys(fonts).reduce((all, fontKey) => {
    if (
      fonts[fontKey]?.variants &&
      !!Object.keys(fonts[fontKey].variants)?.length
    ) {
      all[fontKey] = fonts[fontKey]?.variants?.regular || 400;
    }
    return all;
  }, {}));
  const [sizing, setSizing] = useState(Object.keys(fonts).reduce((all, fontKey) => {
    all[fontKey] = typography?.sizes?.regular;
    return all;
  }, {}));

  const sizeOptions = useMemo(() => {
    return sizes.map((size, sizeIndex) => {
      return {
        name: `${Object.keys(typography.sizes)[sizeIndex]} - ${size}`,
        value: size,
      };
    });
  }, [sizes]);

  const onUpdateFontSize = (fontName, fontSize) => {
    const newSizing = { ...sizing };
    newSizing[fontName] = fontSize;
    setSizing(newSizing);
  };

  const onUpdateFontVariant = (fontName, variant) => {
    const newVariants = { ...commonVariants };
    newVariants[fontName] = variant;
    setCommonVariants(newVariants);
  };

  return (
    <Wrapper>
      {!!_fonts?.length && _fonts.map((font, fontIndex) => {
        const fontKey = Object.keys(fonts)[fontIndex];
        const currentVariantValue = (fonts[fontKey]?.variants && !!commonVariants[fontKey]?.length)
          ? Object.keys(fonts[fontKey].variants)[Object.values(fonts[fontKey].variants).findIndex(x => x === commonVariants[fontKey])]
          : null;
        const currentSizeName = Object.keys(typography.sizes)[
          sizes.findIndex(x => x === sizing[fontKey])
        ];
        const codeString = `export const AnyComponent = styled.div\`\n  font-family: \${p => p.theme.fonts.${fontKey}.name};${
          `\n  font-size: \${p => p.theme.typography.sizes.${currentSizeName}};`
        }${
          currentVariantValue
          ? `\n  font-weight: \${p => p.theme.fonts.${fontKey}.variants${
            currentVariantValue
            ? `.${currentVariantValue}` : ''
          }};`
            : ''
        }\n\`;`;
        
        return (
          <Item
            key={`font-${fontKey}-${fontIndex}`}
          >
            <TitleHeader>
              <Title>{font.labelName}</Title>
              <DropdownButton
                id={`dropdown-item-button-fontSize-${font.labelName}`}
                title={
                  sizeOptions.find(x => x.value === sizing[fontKey])?.name ||
                  "Choose a font size"
                }
              >
                {!!sizeOptions?.length && sizeOptions.map(option => (
                  <Dropdown.Item
                    key={`font-dropdown-${fontKey}-${fontIndex}-${option.value}`}
                    as="button"
                    onClick={() => onUpdateFontSize(
                      fontKey,
                      option.value,
                    )}
                    active={option.value === sizing[fontKey]}
                  >
                    {option.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              {(font?.variants && !!Object.keys(font.variants)?.length) && (
                <DropdownButton
                  id={`dropdown-item-button-fontVariant-${font.labelName}`}
                  title={currentVariantValue || 
                    'Choose a variant'
                  }
                >
                  {Object.keys(font.variants).map((
                    variant,
                    variantIndex
                  ) => (
                    <Dropdown.Item
                      key={`font-dropdown-${fontKey}-${fontIndex}-${variant}-${variantIndex}`}
                      as="button"
                      onClick={() => onUpdateFontVariant(
                        fontKey,
                        fonts[fontKey].variants[variant],
                      )}
                      active={variant === currentVariantValue}
                    >
                      {variant}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
              )}
            </TitleHeader>
            <FontExample
              font={font.name}
              size={sizing[fontKey] || null}
              variant={commonVariants[fontKey] || null}
            >
              The quick brown fox jumps over the lazy dog<br />
              0123456789
            </FontExample>
            <CodePreview
              codeString={codeString}
            />
          </Item>
        )
      })}
    </Wrapper>
  );
};

export default PreviewFonts;
