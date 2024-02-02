import { useState } from "react";
import BbInput from "../components/home/BbInput";
import BreakIt from "../components/home/BreakIt";
import Footer from "../components/home/layout/Footer";

export default function Home() {
  const [firstname, setFirstname] = useState<string>("Breaking");
  const [lastName, setLastName] = useState<string>("Bad");

  return (
    <>
      <div className="home-container">
        <div className="wrapper">
          <div className="inputs-wrapper">
            <BbInput
              placeholder="first name"
              value={firstname}
              setValue={setFirstname}
            />
            <BbInput
              placeholder="last name"
              value={lastName}
              setValue={setLastName}
            />
          </div>
          <div className="result">
            <BreakIt text={firstname} />
            <BreakIt text={lastName} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
