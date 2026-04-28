import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as M from "../styles/StyledMain";

const Main = ({ dataList }) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const goBack = () => {
    navigate(`/`);
  };
  const goWrite = () => {
    navigate(`/write`);
  };

  const post = postId
    ? dataList.find((item) => item.postId === parseInt(postId))
    : null;

  return (
    <M.Container>
      <M.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/likelion_logo.png`}
          alt="logo"
        />
        <hr />
      </M.Header>
      <M.Body>
        <M.Emo>
          <img src={`${process.env.PUBLIC_URL}/images/post.svg`} alt="post" />
        </M.Emo>
        <M.Title>
          <img
            src={`${process.env.PUBLIC_URL}/images/letter.svg`}
            alt="letter"
          />
          <div id="title">DWU LIONLIKE LETTER</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/letter.svg`}
            alt="letter"
          />
        </M.Title>
        <M.LetterWrapper>
          {dataList.map((e) => (
            <M.Letter
              key={e.postId}
              onClick={() => navigate(`/read/${e.postId}`)}
            >
              {e.title}
            </M.Letter>
          ))}
        </M.LetterWrapper>
      </M.Body>
      <M.Post>
        <M.PTitle>POST</M.PTitle>
        <M.Bar />
        <M.Send onClick={goWrite}>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart.svg`}
            alt="heart
            "
          />
          <div id="detail">편지보내러 가기</div>
        </M.Send>
      </M.Post>
    </M.Container>
  );
};

export default Main;
