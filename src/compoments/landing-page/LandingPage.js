import { useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [sucess, setSucess] = useState(false);

  function storeCustomer(event) {
    event.preventDefault();
    const data = JSON.stringify({ name, email });
    localStorage.setItem("customer", data);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setSucess(true);
    }, 2000);
  }

  return (
    <>
      <Apresentation></Apresentation>
      <Register>
        <RegisterBox>
          {sucess ? (
            "Obrigado!"
          ) : (
            <RegisterForm onSubmit={storeCustomer}>
              <input
                id={"name"}
                type={"text"}
                placeholder={"nome"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                id={"email"}
                type={"email"}
                placeholder={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button>
                {loader ? (
                  <Loader
                    type="ThreeDots"
                    color="#000"
                    height={35}
                    width={35}
                  />
                ) : (
                  "Cadastrar"
                )}
              </button>
            </RegisterForm>
          )}
        </RegisterBox>
      </Register>
    </>
  );
}

const SectionStyle = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  background-attachment: local;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Apresentation = styled(SectionStyle)`
  background-image: url("https://www.credilink.com.br/wp-content/uploads/2018/11/blackfriday.jpg");
`;

const Register = styled(SectionStyle)`
  background-image: url("https://images3.alphacoders.com/210/210105.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterBox = styled.div`
  width: 600px;
  height: 200px;
  background: white;
  border-radius: 20px;
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;

const RegisterForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > input {
    height: 35px;
    border: none;
    border-bottom: 1px solid gray;
    font-family: inherit;
    font-size: 25px;
  }

  & > button {
    font-family: inherit;
    font-size: 25px;
    border: none;
  }
`;
