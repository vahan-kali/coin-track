import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";

const NewsFooter = () => {
  return (
    <Wrapper>
      <NewsLetterLabel for="newsLetter">Subscribe for FREE</NewsLetterLabel>
      <NewsLetterInputFieldWrapper>
        <NewLetterInput id="newsLetter" placeholder="enter your email here" />
        <NewsLetterBottom>
          <AiOutlineMail style={{ color: "#FF9906", "font-size": "30px" }} />
        </NewsLetterBottom>
      </NewsLetterInputFieldWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5px 25px;
`;

const NewsLetterLabel = styled.label`
  text-align: center;
  width: 100%;
  margin-bottom: 5px;
`;

const NewLetterInput = styled.input``;

const NewsLetterInputFieldWrapper = styled.form`
  display: flex;
  align-items: center;
`;

const NewsLetterBottom = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
    outline: none;
  }
`;
export default NewsFooter;
