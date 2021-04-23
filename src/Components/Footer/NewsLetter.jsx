import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";

const NewsFooter = () => {
  const handleNewsLetterFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    fetch("/email/storeEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: e.target.email.value }),
    });
  };

  return (
    <Wrapper>
      <Form method="post" onSubmit={handleNewsLetterFormSubmit}>
        <NewsLetterLabel for="newsLetter">Subscribe for FREE</NewsLetterLabel>
        <NewsLetterInputFieldWrapper>
          <NewLetterInput
            name="email"
            id="newsLetter"
            placeholder="enter your email here"
          />
          <NewsLetterButton type="submit">
            <AiOutlineMail style={{ color: "#FF9906", fontSize: "30px" }} />
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
  font-size: 20px;
`;

const Form = styled.form``;

const NewsLetterLabel = styled.label`
  text-align: center;
  width: 100%;
  font-size: 25px;
`;

const NewLetterInput = styled.input`
  height: 30px;
  font-size: 20px;
`;

const NewsLetterInputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const NewsLetterButton = styled.button`
  border: none;
  background: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
export default NewsFooter;
