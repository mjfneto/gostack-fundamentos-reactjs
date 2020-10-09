import styled from 'styled-components';

import { shade } from 'polished';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        border-bottom: 2px solid transparent;
        transition: color 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          color: ${shade(0.2, '#fff')};
        }

        &::after {
          content: '';
          display: block;
          margin: auto;
          height: 3px;
          width: 0px;
          background: transparent;
          transition: width 0.2s ease, background-color 0.2s ease;
        }

        &:hover::after {
          width: 100%;
          background: #ff872c;
        }
      }
    }
  }
`;
