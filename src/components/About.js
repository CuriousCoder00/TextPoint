import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container my-4">
        <h1 className={`text-${props.theme === "dark" ? "light" : "dark"}`}>
          About Us
        </h1>
        <hr className={`text-${props.theme === "dark" ? "light" : "dark"}`} />
        <div className="container">
          <p
            className={`fs-5 text-${props.theme === "dark" ? "light" : "dark"}`}
          >
            Welcome to our Text Utility Website, your go-to destination for
            manipulating texts effortlessly. Whether you need to convert text to
            uppercase or lowercase, copy text, clear text, or get a quick
            summary of the word count, character count, and estimated reading
            time, our website has got you covered.
          </p>
          <p
            className={`fs-5 text-${props.theme === "dark" ? "light" : "dark"}`}
          >
            Our mission is to provide a user-friendly platform that allows you
            to conveniently modify and analyze text according to your needs.
            Whether you're a writer, student, professional, or simply someone
            who wants to optimize their text, our tools are designed to
            streamline your text-related tasks.
          </p>
          <h2 className={`text-${props.theme === "dark" ? "light" : "dark"}`}>
            Features:
          </h2>
          <div
            className={`container p-3 rounded-5 fs-5 bg-${
              props.theme === "dark" ? "black" : "info-subtle"
            } text-${props.theme === "dark" ? "light" : "dark"}`}
          >
            <ol>
              <li>
                Text Conversion:
                <ul>
                  <li>
                    Uppercase: Convert any text or paragraph to uppercase
                    letters.
                  </li>
                  <li>
                    Lowercase: Transform your text or paragraph into lowercase
                    letters.
                  </li>
                </ul>
              </li>
              <li>
                Text Manipulation:
                <ul>
                  <li>
                    Copy Text: Quickly copy the modified text to your clipboard
                    for easy pasting.
                  </li>
                  <li>
                    Clear Text: Instantly clear the input area to start with a
                    fresh text.
                  </li>
                </ul>
              </li>
              <li>
                Text Analysis:
                <ul>
                  <li>
                    Word Count: Get an accurate count of the number of words in
                    your text or paragraph.
                  </li>
                  <li>
                    Character Count: Determine the total number of characters,
                    including spaces, in your text.
                  </li>
                  <li>
                    Reading Time: Find out how long it would take an average.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <p
            className={`fs-5 text-${props.theme === "dark" ? "light" : "dark"}`}
          >
            Our website is designed to be intuitive and user-friendly, ensuring
            a seamless experience for all visitors. Simply input your text or
            paragraph into the provided field, select the desired tool or
            analysis option, and let our website do the rest. Within seconds,
            you'll have the desired result or information at your fingertips.
          </p>
        </div>
        <p className={`fs-5 rounded-3 bg-${props.theme === "dark" ? "warning-subtle" : "dark"} p-3 text-${props.theme === "dark" ? "transparent" : "light"}`}>
          Thank you for choosing our Text Utility Website. We are committed to
          continually improving our services and tools to meet your text-related
          needs. If you have any questions, suggestions, or feedback, please
          don't hesitate to reach out to us.
        </p>
      </div>
    </>
  );
}
