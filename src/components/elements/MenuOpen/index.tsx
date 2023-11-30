"use client";
import React from "react";
import styled from "@emotion/styled";
import clsx from "clsx";

interface MenuOpenProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

const MenuOpen = ({ expandMenu, setExpandMenu }: MenuOpenProps) => {
  const handleMenuToggle = () => {
    setExpandMenu(!expandMenu);
  };

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];
  return (
    <div className="flex lg:hidden" onClick={handleMenuToggle}>
      <StyledMenu>
        {menuSpanData.map((item) => (
          <StyledMenuSpan
            key={item.index}
            className={clsx(
              "bg-neutral-950 dark:bg-neutral-100",
              expandMenu && "active"
            )}
          />
        ))}
      </StyledMenu>
    </div>
  );
};

export default MenuOpen;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 21px;
  width: 26px;
  cursor: pointer;
`;

const StyledMenuSpan = styled.span`
  width: 100%;
  height: 3px;
  transition: all 0.5s ease;
  border-radius: 10px;

  &.active:nth-of-type(1),
  &.active:nth-of-type(3) {
    transform-origin: left;
  }
  &.active:nth-of-type(1) {
    transform: rotate(45deg);
  }
  &.active:nth-of-type(2) {
    display: none;
  }
  &.active:nth-of-type(3) {
    transform: rotate(-45deg);
  }
`;
