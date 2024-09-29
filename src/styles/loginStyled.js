import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  padding: 20px;
  margin-bottom: 50px;

  .block_container {
    width: 100%;
    height: 100%;
    max-width: 1918px;
    max-height: 963px;
    display: flex;
    flex-direction: row;
    gap: 0;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .left_section {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      min-height: 963px;
      object-fit: cover;
      background-image: url("/images/backgrounds/banner-about-us.jpg");
      background-size: cover;
      background-position: center;

      @media screen and (max-width: 768px) {
        display: none;
      }

      .banner_title {
        position: absolute;
        left: 78px;
        top: 45px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .title {
          font-size: 64px;
          color: #000000;
          margin: 0;
        }
        .p1 {
          font-size: 48px;
          color: #000000;
          margin: 0;
        }

        .p2 {
          font-size: 24px;
          color: #000000;
          margin: 0;
        }

        @media (max-width: 768px) {
          left: 30px;
          top: 20px;

          .title {
            font-size: 48px;
          }

          .p1 {
            font-size: 36px;
          }

          .p2 {
            font-size: 18px;
          }
        }
      }
      .left_logo {
        position: absolute;
        left: 67px;
        bottom: 0;
      }
    }

    .right_section {
      width: 40%;
      height: 963px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 50px;
      padding: 20px;

      form {
        width: 100%;
        max-width: 495px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .form_logo {
          width: 300px;
          height: auto;
        }

        .title {
          font-size: 20px;
          font-weight: 600;
        }

        .input_group {
          input {
            width: 100%;
            max-width: 495px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #cccccc;
            outline: none;
            margin-top: 10px;
          }
          label {
            font-size: 14px;
            color: #000000;
          }
        }

        .check_group {
          display: flex;
          gap: 10px;
          font-size: 14px;
          font-weight: 400;
        }

        button {
          width: 100%;
          max-width: 495px;

          height: 40px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          background-color: #5b5b5b;
          margin-top: 20px;
        }
      }
    }
  }
`;
