// AccordionComponent.tsx
// AccordionComponent.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { allItems, Category, Item } from "./data"; // Import tipova i podataka

const AccordionComponent = ({ language }: { language: string }) => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const getLinkForLanguage = (item: Item) => {
    switch (language) {
      case "en":
        return item.english;
      case "srb":
        return item.serbian;
      case "ru":
        return item.rusian;
      default:
        return "srb"; // Default ako nema validan jezik
    }
  };

  return (
    <Container>
      {allItems.map((category: Category, index: number) => (
        <div key={index}>
          <CategoryTitle onClick={() => toggleCategory(index)}>
            {category.category}
          </CategoryTitle>
          {openCategory === index && (
            <ItemsList>
              {category.items.map((item: Item) => (
                <SingleItem key={item.id}>
                  <ItemLink href={getLinkForLanguage(item)}>
                    {item.name}
                  </ItemLink>
                </SingleItem>
              ))}
            </ItemsList>
          )}
        </div>
      ))}
    </Container>
  );
};

export default AccordionComponent;

// Styled Components ispod

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
`;

const CategoryTitle = styled.h2`
  cursor: pointer;
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SingleItem = styled.li`
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const ItemLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
