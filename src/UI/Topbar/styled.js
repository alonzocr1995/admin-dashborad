import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TopbarLeft = styled.div``;
export const Logo = styled.span`
  font-weight: bold;
  font-size: 34px;
  color: darkblue;
  cursor: pointer;
`;
export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 10px;
  color: #555;
  cursor: pointer;
`;
export const TopAvatarImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;
