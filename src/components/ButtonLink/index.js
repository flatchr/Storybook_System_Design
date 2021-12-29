import Link from 'next/link'

// Style
import {
  WrapperButton,
  WrapperLink,
} from './style'

const ButtonLink = props => {
  const {
    type = 'button',
    size = 'min',
    disabled = false,
    title = null,
    onClick = null,
    children = 'button label',
    rounded = false,
    fullWidth = false,
    bordered = false,
    to = null,
    color = null,
    outsideBgColor = null,
  } = props;

  const commonProps = {
    size,
  };

  const conditionalProps = {};
  if (onClick) {
    conditionalProps.onClick = onClick;
  }

  if (type === 'link' && to) {
    return (
      <Link href={to}>
        <WrapperLink
          className="buttonLink"
          title={title}
          disabled={disabled}
          rounded={rounded}
          fullWidth={fullWidth}
          color={color}
          bordered={bordered}
          outsideBgColor={outsideBgColor}
          {...commonProps}
        >
          {children}
        </WrapperLink>
      </Link>
    );
  }

  return (
    <WrapperButton
      className="buttonLink"
      type={type}
      disabled={disabled}
      title={title}
      rounded={rounded}
      fullWidth={fullWidth}
      color={color}
      bordered={bordered}
      outsideBgColor={outsideBgColor}
      {...commonProps}
      {...conditionalProps}
    >
      {children}
    </WrapperButton>
  );
};

export default ButtonLink;
