import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterBox = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0px;
  background: #f5f5f5;
  height: 80px;
  color: #666666;
  font-size: 16px;
  @media only screen and (max-width: 500px) {
    font-size: 8px;
    height: 68px;
  }
  z-index: 99;
`;

const IconList = styled.ul`
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
`;

const Icon = styled.li`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconTitle = styled.p`
  padding-top: 4px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterBox>
      <IconList>
        <Icon>
          <NavLink
            to={"/main"}
            children={({ isActive }) => {
              return (
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7286 0L24.0942 9.19176L22.8254 10.317L21.0205 8.86529V19.2076L20.127 20H14.7659L13.8723 19.2076V13.6609H10.2983V19.2076L9.40474 20H4.04361L3.15008 19.2076V8.87797L1.36304 10.317L0.0942383 9.19176L11.442 0H12.7286ZM4.93713 7.4374V18.4152H8.51122V12.8685L9.40474 12.0761H14.7659L15.6594 12.8685V18.4152H19.2335V7.42789L12.0853 1.67987L4.93713 7.4374Z"
                    fill={isActive ? "#56AEDF" : "#666666"}
                  />
                </svg>
              );
            }}
          />
          <IconTitle>홈</IconTitle>
        </Icon>
        <Icon>
          <NavLink
            to={"/search"}
            children={({ isActive }) => {
              return (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8042 16.29L14.4042 12.9C15.5012 11.5025 16.0965 9.77666 16.0942 8C16.0942 6.41775 15.625 4.87103 14.746 3.55544C13.8669 2.23985 12.6175 1.21447 11.1557 0.608967C9.6939 0.00346625 8.08537 -0.15496 6.53352 0.153721C4.98167 0.462403 3.55621 1.22433 2.43739 2.34315C1.31857 3.46197 0.556641 4.88743 0.24796 6.43928C-0.0607221 7.99113 0.0977045 9.59966 0.703206 11.0615C1.30871 12.5233 2.33409 13.7727 3.64968 14.6518C4.96527 15.5308 6.51199 16 8.09424 16C9.8709 16.0022 11.5967 15.407 12.9942 14.31L16.3842 17.71C16.4772 17.8037 16.5878 17.8781 16.7097 17.9289C16.8315 17.9797 16.9622 18.0058 17.0942 18.0058C17.2263 18.0058 17.357 17.9797 17.4788 17.9289C17.6007 17.8781 17.7113 17.8037 17.8042 17.71C17.898 17.617 17.9724 17.5064 18.0231 17.3846C18.0739 17.2627 18.1 17.132 18.1 17C18.1 16.868 18.0739 16.7373 18.0231 16.6154C17.9724 16.4936 17.898 16.383 17.8042 16.29ZM2.09424 8C2.09424 6.81332 2.44614 5.65328 3.10542 4.66658C3.76471 3.67989 4.70179 2.91085 5.79814 2.45673C6.8945 2.0026 8.1009 1.88378 9.26478 2.11529C10.4287 2.3468 11.4978 2.91825 12.3369 3.75736C13.176 4.59648 13.7474 5.66558 13.979 6.82946C14.2105 7.99335 14.0916 9.19975 13.6375 10.2961C13.1834 11.3925 12.4144 12.3295 11.4277 12.9888C10.441 13.6481 9.28093 14 8.09424 14C6.50294 14 4.97682 13.3679 3.8516 12.2426C2.72638 11.1174 2.09424 9.5913 2.09424 8Z"
                    fill={isActive ? "#56AEDF" : "#666666"}
                  />
                </svg>
              );
            }}
          />

          <IconTitle>검색</IconTitle>
        </Icon>
        <Icon>
          <NavLink
            to={"/enroll"}
            children={({ isActive }) => {
              return (
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6479 13.3375C23.1562 12.8917 22.3896 12.9208 21.8729 13.3375L18.0229 16.4167C17.5521 16.7958 16.9646 17 16.3562 17H11.4271C11.0604 17 10.7604 16.7 10.7604 16.3333C10.7604 15.9667 11.0604 15.6667 11.4271 15.6667H14.6896C15.3521 15.6667 15.9687 15.2125 16.0771 14.5583C16.2146 13.725 15.5729 13 14.7604 13H8.09375C6.96875 13 5.88125 13.3875 5.00625 14.0958L3.06875 15.6667H0.760417C0.39375 15.6667 0.09375 15.9667 0.09375 16.3333V20.3333C0.09375 20.7 0.39375 21 0.760417 21H15.6271C16.2312 21 16.8187 20.7958 17.2937 20.4167L23.5937 15.375C24.2271 14.8708 24.2771 13.9042 23.6479 13.3375Z"
                    fill={isActive ? "#56AEDF" : "#666666"}
                  />
                  <g clipPath="url(#clip0_0_1)">
                    <path
                      d="M13.0183 6.41723C12.8893 6.35817 12.7082 6.32742 12.4748 6.32498H11.1354V7.77548H12.4564C12.6923 7.77548 12.876 7.74342 13.0073 7.67948C13.2456 7.56117 13.3648 7.33486 13.3648 7.00017C13.3648 6.71723 13.2493 6.52298 13.0183 6.41723ZM13.0331 5.28961C13.1803 5.1998 13.2542 5.04042 13.2542 4.81148C13.2542 4.55798 13.1567 4.39073 12.9621 4.30955C12.7941 4.25273 12.5796 4.22461 12.3189 4.22461H11.1353V5.42405H12.4577C12.6939 5.42423 12.8859 5.37923 13.0331 5.28961Z"
                      fill={isActive ? "#56AEDF" : "#666666"}
                    />
                    <path
                      d="M12.0942 0.375C8.98774 0.375 6.46924 2.8935 6.46924 6C6.46924 9.1065 8.98774 11.625 12.0942 11.625C15.2007 11.625 17.7192 9.1065 17.7192 6C17.7192 2.8935 15.2007 0.375 12.0942 0.375ZM14.2706 7.94513C14.171 8.11137 14.0401 8.25674 13.8852 8.37319C13.7114 8.50613 13.5065 8.59706 13.2704 8.64637C13.0344 8.69569 12.7782 8.72025 12.5017 8.72025H10.0505V3.27975H12.6798C13.343 3.2895 13.8131 3.48263 14.0898 3.85913C14.2563 4.0905 14.3396 4.36725 14.3396 4.68975C14.3396 5.02181 14.2554 5.28881 14.0876 5.49056C13.9934 5.60381 13.8554 5.70694 13.6724 5.8005C13.9501 5.90138 14.1597 6.0615 14.3011 6.2805C14.4423 6.4995 14.513 6.76519 14.513 7.07775C14.5128 7.40006 14.4322 7.68919 14.2706 7.94513Z"
                      fill={isActive ? "#56AEDF" : "#666666"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(6.09424)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              );
            }}
          />

          <IconTitle>빌려주기</IconTitle>
        </Icon>
        <Icon>
          <NavLink
            to={"/basket"}
            children={({ isActive }) => {
              return (
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.09424 2C4.55064 2 4.94379 2.30788 5.05984 2.73975L5.08295 2.85019L5.56024 5.997L21.0942 5.99683C21.6938 5.99683 22.1489 6.51717 22.0894 7.09669L22.0705 7.21324L20.0749 16.2159C19.9819 16.6356 19.6331 16.9443 19.2144 16.9928L19.0986 16.9995H6.06396C5.60757 16.9995 5.21441 16.6916 5.09836 16.2598L5.07525 16.1493L3.23524 4H1.09424V2H4.09424ZM6.09424 21C6.09424 22.1046 6.98967 23 8.09424 23C9.19881 23 10.0942 22.1046 10.0942 21C10.0942 19.8954 9.19881 19 8.09424 19C6.98967 19 6.09424 19.8954 6.09424 21ZM15.0942 21C15.0942 22.1046 15.9897 23 17.0942 23C18.1988 23 19.0942 22.1046 19.0942 21C19.0942 19.8954 18.1988 19 17.0942 19C15.9897 19 15.0942 19.8954 15.0942 21ZM5.86324 7.997L6.92424 15H18.2972L19.8492 7.997H5.86324Z"
                    fill={isActive ? "#56AEDF" : "#666666"}
                  />
                </svg>
              );
            }}
          />

          <IconTitle>장바구니</IconTitle>
        </Icon>
        <Icon>
          <NavLink
            to={"/mypage"}
            children={({ isActive }) => {
              return (
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.59424 23C4.59424 20.8783 5.43709 18.8434 6.93738 17.3431C8.43767 15.8429 10.4725 15 12.5942 15C14.716 15 16.7508 15.8429 18.2511 17.3431C19.7514 18.8434 20.5942 20.8783 20.5942 23H18.5942C18.5942 21.4087 17.9621 19.8826 16.8369 18.7574C15.7117 17.6321 14.1855 17 12.5942 17C11.0029 17 9.47682 17.6321 8.3516 18.7574C7.22638 19.8826 6.59424 21.4087 6.59424 23H4.59424ZM12.5942 14C9.27924 14 6.59424 11.315 6.59424 8C6.59424 4.685 9.27924 2 12.5942 2C15.9092 2 18.5942 4.685 18.5942 8C18.5942 11.315 15.9092 14 12.5942 14ZM12.5942 12C14.8042 12 16.5942 10.21 16.5942 8C16.5942 5.79 14.8042 4 12.5942 4C10.3842 4 8.59424 5.79 8.59424 8C8.59424 10.21 10.3842 12 12.5942 12Z"
                    fill={isActive ? "#56AEDF" : "#666666"}
                  />
                </svg>
              );
            }}
          />

          <IconTitle>마이페이지</IconTitle>
        </Icon>
      </IconList>
    </FooterBox>
  );
}

export default Footer;
