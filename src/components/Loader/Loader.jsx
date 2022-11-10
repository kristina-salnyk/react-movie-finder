import { Loader as LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

const Loader = () => {
  const theme = useTheme();

  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor={theme.colors.primary}
        strokeWidth="5"
        animationDuration="0.75"
        width="15%"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
