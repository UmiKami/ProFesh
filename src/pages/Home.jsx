import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import OpenAI from "openai";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";
import { Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Home = () => {
    const [textContent, setTextContent] = useState("");
    const [results, setResults] = useState("");
    const [awaitGPT, setAwaitGPT] = useState(false);
    const [resultsArrived, setResultsArrived] = useState(false)

    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_KEY,
        dangerouslyAllowBrowser: true,
    });

    const cleanHtmlContent = (content) => {
          // Replace ```html and ``` with empty strings
          return content.replace(/```html|```/g, "").trim();
      };

    const main = async () => {

        setAwaitGPT(true)

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Revise the given text, identifying any errors and suggesting enhancements. Your critique should be presented using HTML markup styled with Bootstrap 5 classes. Anylize it as if you were an English professor. Exclude the <head> section and focus on clarity, engagement. Here's the text to critique:  ${textContent}
                     
                      Code only!!! No "certainly" or any introductory sentences...`,
                },
            ],
            model: "gpt-4",
        });

        if(chatCompletion.choices.length){
            setAwaitGPT(false)
            setResultsArrived(true)

            let resultGPT = cleanHtmlContent(chatCompletion.choices[0]?.message?.content)

            setResults(resultGPT)

            console.log(
                resultGPT
            );
        }

    };
    const paraphrase = async () => {

        setAwaitGPT(true)

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Paraphrase the given text it as if you were an English professor. Here's the text to critique:  ${textContent}
                     
                    Go straight to the point No "certainly" or any introductory sentences...`,
                },
            ],
            model: "gpt-4",
        });

        if(chatCompletion.choices.length){
            setAwaitGPT(false)
            setResultsArrived(true)

            let resultGPT = cleanHtmlContent(chatCompletion.choices[0]?.message?.content)

            setResults(resultGPT)

            console.log(
                resultGPT
            );
        }

    };
    const createCitation = async () => {

        setAwaitGPT(true)

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Create citation reference in MLA format for the following text, make it up you have to:  ${textContent}
                     
                    Go straight to the point No "certainly" or any introductory sentences... Just give me the citation!!`,
                },
            ],
            model: "gpt-4",
        });

        if(chatCompletion.choices.length){
            setAwaitGPT(false)
            setResultsArrived(true)

            let resultGPT = cleanHtmlContent(chatCompletion.choices[0]?.message?.content)

            setResults(resultGPT)

            console.log(
                resultGPT
            );
        }

    };

    return (
        <main className="container">
            <Navbar />

            <Modal
                show={resultsArrived}
                onHide={() => setResultsArrived(false)}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Results
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{parse(results)}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setResultsArrived(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="col-12 position-relative">
                {awaitGPT && (
                    <div className="spinner-container position-absolute top-50 start-50 d-flex justify-content-center align-items-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                )}
                <textarea
                    disabled={awaitGPT}
                    style={{ resize: "none" }}
                    name="textArea"
                    value={textContent}
                    onChange={(e) => {
                        setTextContent(e.target.value);
                    }}
                    id="textArea"
                    className={`col-12 mt-4 rounded-3 ps-2 pt-2 ${
                        awaitGPT && "disabled"
                    }`}
                    rows={18}
                />
            </div>
            <div className="text-end btn-submit-container">
                <button
                    className={`btn btn-primary btn-submit ${
                        awaitGPT && "disabled"
                    }`}
                    onClick={main}
                >
                    Submit
                </button>
            </div>

            <footer className="footer-bg col-12 d-flex py-3 mt-4 justify-content-evenly align-items-center">
                <button className={`footer-btn btn ${awaitGPT && "disabled"}`}>
                    Plagiarism Check
                </button>
                <button
                    className={`footer-btn btn ${awaitGPT && "disabled"}`}
                    onClick={paraphrase}
                >
                    Paraphrase
                </button>
                <button
                    className={`footer-btn btn ${awaitGPT && "disabled"}`}
                    onClick={createCitation}
                >
                    Create Citation
                </button>
            </footer>
        </main>
    );
};

export default Home;
