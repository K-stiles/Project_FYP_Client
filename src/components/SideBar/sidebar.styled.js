import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   height: 100%;
   width: 280px;
   z-index: 100;
`;
export const SideBar = styled.div`
   border-right: 1px solid ${({ theme }) => theme.border};
`;

// ------------- Header Section
export const HeaderSection = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 20px;
   background-color: ${({ theme }) => theme.background};
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const HeaderTitle = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: ${({ theme }) => theme.text};
`;
export const HeaderIconWapper = styled.div`
   width: 20px;
`;
export const HeaderIcon = styled.img`
   width: 100%;
`;

// ------------- User Section
export const UserSection = styled(Link)`
   position: relative;
   text-decoration: none;
   color: inherit;
   width: 100%;
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 15px 20px;
   background-color: ${({ theme }) => theme.background};
`;
export const Line = styled.div`
   width: 85%;
   position: absolute;
   bottom: 0;
   margin: auto;
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const UserImage = styled.div`
   padding: 6px;

   width: 55px;
   height: 55px;
   border-radius: 50%;
   object-fit: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.background};

   position: relative;
`;
export const UpdownIconWapper = styled.div`
   width: 10px;
   margin-left: auto;
`;
export const UpdownIcon = styled.img`
   width: 100%;
`;
export const NotifyNumber = styled.div`
   width: 25px;
   height: 25px;
   border-radius: 15px;

   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.red};

   position: absolute;
   top: 0;
   right: 0;
`;
export const Number = styled.div`
   font-style: normal;
   font-weight: 800;
   font-size: 0.8rem;
   line-height: 16px;
   text-align: center;
   color: ${({ theme }) => theme.white};
`;
export const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
`;
export const UserLabels = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
`;
export const UserName = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 20px;

   text-transform: uppercase;
   color: ${({ theme }) => theme.text};
`;
export const UserEmail = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 11px;
   line-height: 13px;
   color: ${({ theme }) => theme.gray_label};
`;

// ------------- menu Section ----------//
export const MenuSection = styled.ul`
   height: 100vh;
   overflow: auto;
   padding-bottom: 200px;
   background-color: ${({ theme }) => theme.background};

   &::-webkit-scrollbar {
      display: none;
   }
`;
export const SectionHeader = styled.div`
   width: 100%;
   height: 30px;

   padding: 20px;
   margin-top: 20px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
`;
export const SectionTitle = styled.h1`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   text-transform: uppercase;
   color: ${({ theme }) => theme.sideTitle};
`;
export const SectionIconWrapper = styled.div`
   width: 15px;
`;
export const SectionIcon = styled.img`
   width: 100%;
`;
export const MenuItemLink = styled(Link)`
   text-decoration: none;
   color: inherit;

   display: flex;
   align-items: center;
   gap: 10px;
   padding-right: 10px;

   margin-top: 25px;
`;
export const ItemLabel = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 1rem;
   line-height: 18px;
   display: flex;
   align-items: center;
   text-transform: capitalize;
   color: ${({ theme }) => theme.text};
`;
export const NumberWrapper = styled.div`
   width: 25px;
   height: 25px;
   border-radius: 20px;
   margin-left: auto;

   display: flex;
   align-items: center;
   justify-content: center;
   background: ${({ theme }) => theme.light_blue};
`;
export const LabelNumber = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 20px;
   text-align: center;
   color: ${({ theme }) => theme.primary};
`;
export const MenuIconWapper = styled.div`
   width: 20px;
`;
export const MenuIcon = styled.img`
   width: 100%;
`;

export const SubMenu = styled.ul`
   padding: 6px 6px 14px 20px;
   /* background-color: cyan; */
`;
export const SubMenuItem = styled.li`
   list-style: none;
   &:nth-child(1) {
      margin-top: -20px;
   }
`;
export const SubMenuOptions = styled.ul`
   padding: 6px 6px 0px 60px;
`;
export const OptionsLable = styled.li`
   list-style: none;

   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 18px;
   text-transform: capitalize;
   padding: 5px 0;
   color: ${({ theme }) => theme.gray_label};
`;

// ------------- Logout Section ----------//
export const LogoutSection = styled.button`
   border: none;
   outline: none;
   background: transparent;
   
   display: flex;
   align-items: center;
   gap: 10px;

   margin-top: 3rem;
   padding: 15px;
   margin-left: 20px;
   width: 70%;
   cursor: pointer;
   /* background-color: red; */
`;

export const LogoutText = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 1rem;
   line-height: 18px;
   display: flex;
   align-items: center;
   text-transform: capitalize;

   color: ${({ theme }) => theme.text};
`;
