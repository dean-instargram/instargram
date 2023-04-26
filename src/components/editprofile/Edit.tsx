import styled from "styled-components";
import EditPaswword from "./EditPaswword";
import EditProfile from "./EditProfile";
import { useState } from "react";

export default function Edit() {
  const [click, setClick] = useState<boolean>(false);

  function profileClickHandler() {
    setClick(false);
  }
  function PasswordClcikHandler() {
    setClick(true);
  }

  return (
    <Section>
      <EditButton onClick={profileClickHandler} isClick={click ? true : false}>
        프로필 편집
      </EditButton>
      <EditButton onClick={PasswordClcikHandler} isClick={click ? false : true}>
        비밀번호 변경
      </EditButton>
      {!click ? <EditProfile /> : <EditPaswword />}
    </Section>
  );
}

const Section = styled.section`
  width: 1010px;
`;

type isClick = {
  isClick: boolean;
};

const EditButton = styled.button<isClick>`
  cursor: pointer;
  border: none;
  background: ${(props) => (props.isClick ? "#c2c2c2" : "#8d8d8d")};
  width: 505px;
  height: 65px;
`;
