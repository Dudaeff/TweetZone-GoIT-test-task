import styled from 'styled-components';

const Wrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 480px) {
    max-width: 480px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 738px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export { Wrapper };
