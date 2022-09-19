import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../../components/Nav";

export default function Article() {
  return (
    <div>
      <Nav />

      <div className="header">
        <div className="bg"></div>
        <Container fluid className="cont">
          <div className="new">
            <div className="box p-3">
              <img
                src="https://noobdev.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1627006484739%2FGTI1J8DKN.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
                width={"100%"}
              />

              <h2 className="heading">
                Exciting History of JavaScript for Noob Developers.
              </h2>

              <p className="p">
{`                Hello, noob developer. I am Shubham Raj another noob developer.
                I think we are here to know about the funny history of
                JavaScript "off-course because as the title say's" But before
                start discussing the topic let me tell you something about
                myself, because this is my very first blog. I think nobody gives
                a sh*t about that. so, let's get into the topic. If you are here
                then, I am considering that you are a noob developer and know
                something about JavaScript. If you don't know anything about
                JavaScript then you are really a professional developer and I
                can't help you because I am a noob. The very first version of
                JavaScript Let's start our discussion at the beginning of the
                internet itself. So quickly after the internet was invented, and
                two first web browsers were developed. Developers wanted to make
                their website more interactive. In other words, they needed a
                programming language for the web. So, in 1995 the Netscape
                Navigator, which by the time was the dominant browser hired a
                guy named Brendan Eich to create the very first version of
                JavaScript in just 10 days, it was called "Mocha".
                netscape-web.jpg But, Mocha already had many of the fundamental
                features that modern JavaScript has today. JavaScript is Java ?
                java-javascript.png In 1997 Mocha was renamed LiveScript, which
                was again then renamed to JavaScript. for one simple reason to
                attract developers from the hottest language at the time which
                was JAVA. So the Java in JavaScript was really just for
                marketing reasons but the language itself has basically nothing
                to do with Java. Now some beginners think that is the case but
                actually no, JavaScript and Java are two completely different
                languages. JScript by Microsoft explorer.png In 1996, Microsoft
                launched the Internet Explorer, which basically copied
                JavaScript from Netscape, but they called the JScript for legal
                reasons because, well, you actually can't just go around and
                copy other people's Programming languages. Now what this means
                is that now we had two very similar but committing languages,
                which of course is never a good idea in the long run. ECMAScript
                ecmascript.jpg At the same time internet growing like crazy
                people realized they need standardized Javascript. So the
                language was submitted to an independent organization called
                ECMA, which in 1997 released ECMAScript one or ES1. This was the`}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
