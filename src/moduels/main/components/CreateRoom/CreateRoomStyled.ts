import styled from "styled-components";

const CreateRoomStyled = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.medium};

  .createRoom {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`;

export default CreateRoomStyled;
