import React from "react";
import styled from "styled-components";

const PaginationCom = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  console.log(numPages);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabl={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  margin: 0;
  background-color: #fafafa;
  font-size: 13px;
  font-weight: bold;

  &:hover {
    font-weight: bold;
    color: #4aabf9;
    font-weight: bolder;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    color: #4aabf9;
    font-weight: bolder;
    cursor: revert;
    transform: revert;
  }
`;
export default PaginationCom;
