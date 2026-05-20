import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as R from "../styles/StyledRead";

const Read = ({ dataList }) => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const goBack = () => {
    navigate(`/`);
  };

  const post = postId
    ? dataList.find((item) => item.postId === parseInt(postId))
    : null;

  return (
    <R.Container>
      <R.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/likelion_logo.png`}
          alt="logo"
        />
        <hr />
      </R.Header>
      <R.Body>
        <R.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="back"
            width="30px"
          />
        </R.BackBtn>
        <R.Content>
          <R.Title>
            <div>{post && post.title}</div> <hr />
          </R.Title>
          <R.ContentBox>
            <R.Date>{post && post.date}</R.Date>
            <R.Text>{post && post.content}</R.Text>
          </R.ContentBox>
        </R.Content>
        <R.DeleteBtn>삭제하기</R.DeleteBtn>
      </R.Body>
    </R.Container>
  );
};

export default Read;
