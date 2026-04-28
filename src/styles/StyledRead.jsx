import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background: linear-gradient(180deg, #ffb33a 0%, #ffe4b8 100%);
`;

export const Header = styled.div`
  margin-top: 24px;
  gap: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 87px;
    height: 7px;
    aspect-ratio: 87/7;
  }

  hr {
    width: 260px;
    height: 1px;
    background: #fff;
  }
`;

export const Body = styled.div`
  margin-top: 25px;
  border-radius: 27px;
  background: #fff;
  box-shadow: 0 -1px 14px 0 rgba(34, 19, 0, 0.25);
  width: 331px;
  height: 744px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackBtn = styled.div`
  margin-top: 22px;
  width: 100%;
  cursor: pointer;

  img {
    width: 8px;
    margin-left: 20px;
    height: 15px;
  }
`;

export const Content = styled.div`
  align-items: center;
  margin-top: 24px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #4c4c4c;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 194.444% */
  }

  hr {
    width: 240px;
    height: 1px;
    background: #ff9d00;
  }
`;

export const ContentBox = styled.div`
  margin-top: 43px;
  align-items: center;
  width: 254px;
  height: 459px;
  border-radius: 15px;
  border: 2px solid #ffb33a;
  background: rgba(255, 242, 242, 0.2);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
`;

export const Date = styled.div`
  color: #ff9d00;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px; /* 350% */
  margin-top: 10px;
`;

export const Text = styled.div`
  padding: 0px 26px;
  color: #555;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 318.182% */
  width: 100%;
  height: 100%;
`;

export const DeleteBtn = styled.div`
  width: 145px;
  height: 36px;
  border-radius: 30px;
  border: 2px solid #ffb33a;
  background: #fff1db;
  color: #ffb33a;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; /* 233.333% */
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 47px;
  cursor: pointer;
`;
