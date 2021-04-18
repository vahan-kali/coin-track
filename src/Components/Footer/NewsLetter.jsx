import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";

const NewsFooter = () => {
  return (
    <Wrapper>
      <Form method="post" action="/storeEmail">
        <NewsLetterLabel for="newsLetter">Subscribe for FREE</NewsLetterLabel>
        <NewsLetterInputFieldWrapper>
          <NewLetterInput
            name="email"
            id="newsLetter"
            placeholder="enter your email here"
          />
          <NewsLetterButton type="submit">
            <AiOutlineMail style={{ color: "#FF9906", "font-size": "30px" }} />
          </NewsLetterButton>
        </NewsLetterInputFieldWrapper>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5px 25px;
`;

const Form = styled.form``;

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

const NewsLetterButton = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
    outline: none;
  }
`;
export default NewsFooter;
