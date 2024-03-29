import Image from "next/image";
import React from "react";
import { useForm } from "@formcarry/react";
import Runner from "../images/Runner3.png";

export default function Contact() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "D1Or4ZyMxI",
  });

  // Success message
/*   if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  } */
  return (
    <div className="MainSection Background2 Home">
      <div data-aos="zoom-in" className="MainSectionZoneText Home">
        <Image className="ContactSectionImg1" src={Runner} alt="" />
        <p className="ContactSectionTitle1"> You too can propose</p>
        <p className="ContactSectionTitle1">your sports </p>
        <p className="ContactSectionTitle1">experiences to the</p>
        <p className="ContactSectionTitle1">
        community <span className="logo green uncapitalize ">Fillgood &nbsp;</span>
        </p>
        <form  className="Form" onSubmit={submit}>
          {/* <label htmlFor="email">Email</label> */}
          <input data-aos="zoom-in" data-aos-duration="200" id="email" type="email" name="email" placeholder="Email" className="Input"/>
          {/* <label htmlFor="message">Message</label> */}
          <textarea data-aos="zoom-in" data-aos-duration="400" id="message" name="message" placeholder="Message" rows="5" className="Input" />
          <button data-aos="zoom-in" data-aos-duration="600" className="ButtonForm" type="submit">Send !</button>
        </form>
      </div>
    </div>
  );
}
