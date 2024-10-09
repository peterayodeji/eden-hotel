import styled, { css } from 'styled-components';

const Form = styled.form`
  ${props =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 475px) {
        padding: 2.4rem 2rem;
      }
    `}

  ${props =>
    props.type === 'modal' &&
    css`
      width: 80vw;
      max-width: 90rem;

      /* background-color: blue; */

      @media (max-width: 645px) {
        padding: 2px;
        height: 75vh;

        overflow: scroll;
        overflow-x: hidden;

        /* Removing scrollbars for webkit, firefox, and ms, respectively */
        &::-webkit-scrollbar {
          width: 0 !important;
        }
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
