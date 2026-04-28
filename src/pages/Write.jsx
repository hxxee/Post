import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as W from "../styles/StyledWrite";

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();

    const formattedDate = `${today.getFullYear()}.${
      today.getMonth() + 1
    }.${today.getDate()}`;

    setDate(formattedDate);
  }, []);

  const goBack = () => {
    navigate(`/`);
  };

  const Submit = () => {
    console.log("제목:", title);
    console.log("내용:", content);
    console.log("날짜:", date);
  };

  return (
    <W.Container>
      <W.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/likelion_logo.png`}
          alt="logo"
        />
        <hr />
      </W.Header>
      <W.Body>
        <W.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="back"
            width="30px"
          />
        </W.BackBtn>
        <W.Content>
          <W.Title>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <hr />
          </W.Title>
          <W.ContentBox>
            <W.Date>{date}</W.Date>
            <W.Text>
              <textarea
                name="content"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </W.Text>
          </W.ContentBox>
        </W.Content>
        <W.DeleteBtn onClick={Submit}>작성하기</W.DeleteBtn>
      </W.Body>
    </W.Container>
  );
};

export default Write;
