import React, { useState, useEffect } from "react";
import "./App.css";

import gameTitle from "./assets/logo-bonus.svg";
import rock from "./assets/icon-rock.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import lizard from "./assets/icon-lizard.svg";
import spock from "./assets/icon-spock.svg";
import pentagon from "./assets/bg-pentagon.svg";
import close from "./assets/icon-close.svg";
import rules from "./assets/image-rules-bonus.svg";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(
    localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0
  );
  const [gameOn, setGameOn] = useState(false);
  const [gameState, setGameState] = useState("");
  const [rulesModal, setRulesModal] = useState(false);

  const onPaperClick = () => {
    setPlayerChoice("paper");
    setGameOn(true);
  };

  const onScissorsClick = () => {
    setPlayerChoice("scissors");
    setGameOn(true);
  };

  const onRockClick = () => {
    setPlayerChoice("rock");
    setGameOn(true);
  };

  const onLizardClick = () => {
    setPlayerChoice("lizard");
    setGameOn(true);
  };

  const onSpockClick = () => {
    setPlayerChoice("spock");
    setGameOn(true);
  };

  const randomChoice = () => {
    const rndNum = Math.floor(Math.random() * 5);
    console.log("inside timeout");
    switch (rndNum) {
      case 0:
        setComputerChoice("paper");
        break;
      case 1:
        setComputerChoice("rock");
        break;
      case 2:
        setComputerChoice("scissors");
        break;
      case 3:
        setComputerChoice("lizard");
        break;
      case 4:
        setComputerChoice("spock");
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (playerChoice) {
      setTimeout(() => {
        randomChoice();
      }, 5000);
    }
  }, [playerChoice]);

  const checkGameState = () => {
    switch (playerChoice) {
      case "paper":
        if (computerChoice === "rock" || computerChoice === "spock") {
          setGameState("winner");
          setScore(score + 1);
        } else if (
          computerChoice === "scissors" ||
          computerChoice === "lizard"
        ) {
          setGameState("loser");
          setScore(score - 1);
        } else {
          setGameState("draw");
        }
        break;
      case "scissors":
        if (computerChoice === "paper" || computerChoice === "lizard") {
          setGameState("winner");
          setScore(score + 1);
        } else if (computerChoice === "rock" || computerChoice === "spock") {
          setGameState("loser");
          setScore(score - 1);
        } else {
          setGameState("draw");
        }
        break;
      case "rock":
        if (computerChoice === "lizard" || computerChoice === "scissors") {
          setGameState("winner");
          setScore(score + 1);
        } else if (computerChoice === "paper" || computerChoice === "spock") {
          setGameState("loser");
          setScore(score - 1);
        } else {
          setGameState("draw");
        }
        break;
      case "lizard":
        if (computerChoice === "paper" || computerChoice === "spock") {
          setGameState("winner");
          setScore(score + 1);
        } else if (computerChoice === "rock" || computerChoice === "scissors") {
          setGameState("loser");
          setScore(score - 1);
        } else {
          setGameState("draw");
        }
        break;
      case "spock":
        if (computerChoice === "scissors" || computerChoice === "rock") {
          setGameState("winner");
          setScore(score + 1);
        } else if (computerChoice === "paper" || computerChoice === "lizard") {
          setGameState("loser");
          setScore(score - 1);
        } else {
          setGameState("draw");
        }
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    if (computerChoice) {
      setTimeout(() => {
        checkGameState();
      }, 1000);
    }
  }, [computerChoice]);

  const getChoice = (choice) => {
    switch (choice) {
      case "paper":
        return (
          <div
            className="step2 paper border"
            style={{
              boxShadow: `inset 0 7px rgba(0, 0, 0, 0.2), 0 7px hsl(230.1, 57.8%, 45.5%), ${
                ((gameState === "winner" && playerChoice === "paper") ||
                  (gameState === "loser" && computerChoice === "paper")) &&
                "0 0 0 75px rgba(255, 255, 255, 0.05),  0 0 0 150px rgba(255, 255, 255, 0.03), 0 0 0 225px rgba(255, 255, 255, 0.01)"
              }`,
              cursor: "auto",
            }}
          >
            <img src={paper} alt="paper" />
          </div>
        );
      case "rock":
        return (
          <div
            className="step2 rock border"
            style={{
              boxShadow: `inset 0 7px rgba(0, 0, 0, 0.2), 0 7px hsl(348.7, 62.4%, 33.3%), ${
                ((gameState === "winner" && playerChoice === "rock") ||
                  (gameState === "loser" && computerChoice === "rock")) &&
                "0 0 0 75px rgba(255, 255, 255, 0.05),  0 0 0 150px rgba(255, 255, 255, 0.03), 0 0 0 225px rgba(255, 255, 255, 0.01)"
              }`,
              cursor: "auto",
            }}
          >
            <img src={rock} alt="rock" />
          </div>
        );
      case "scissors":
        return (
          <div
            className="step2 scissors border"
            style={{
              boxShadow: `inset 0 7px rgba(0, 0, 0, 0.2), 0 7px rgb(166, 130, 58), ${
                ((gameState === "winner" && playerChoice === "scissors") ||
                  (gameState === "loser" && computerChoice === "scissors")) &&
                "0 0 0 75px rgba(255, 255, 255, 0.05),  0 0 0 150px rgba(255, 255, 255, 0.03), 0 0 0 225px rgba(255, 255, 255, 0.01)"
              }`,
              cursor: "auto",
            }}
          >
            <img src={scissors} alt="scissors" />
          </div>
        );
      case "lizard":
        return (
          <div
            className="step2 lizard border"
            style={{
              boxShadow: `inset 0 7px rgba(0, 0, 0, 0.2), 0 7px hsl(261.1, 52.4%, 40.4%), ${
                ((gameState === "winner" && playerChoice === "lizard") ||
                  (gameState === "loser" && computerChoice === "lizard")) &&
                "0 0 0 75px rgba(255, 255, 255, 0.05),  0 0 0 150px rgba(255, 255, 255, 0.03), 0 0 0 225px rgba(255, 255, 255, 0.01)"
              }`,
              cursor: "auto",
            }}
          >
            <img src={lizard} alt="lizard" />
          </div>
        );
      case "spock":
        return (
          <div
            className="step2 spock border"
            style={{
              boxShadow: `inset 0 7px rgba(0, 0, 0, 0.2), 0 7px hsl(189, 53%, 41%), ${
                ((gameState === "winner" && playerChoice === "spock") ||
                  (gameState === "loser" && computerChoice === "spock")) &&
                "0 0 0 75px rgba(255, 255, 255, 0.05),  0 0 0 150px rgba(255, 255, 255, 0.03), 0 0 0 225px rgba(255, 255, 255, 0.01)"
              }`,
              cursor: "auto",
            }}
          >
            <img src={spock} alt="spock" />
          </div>
        );
      default:
        return;
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setGameOn(false);
    setGameState("");
  };

  return (
    <div className="container gradient__bg">
      <div className="header">
        <div className="header__game-title">
          <img src={gameTitle} alt="game-title" />
        </div>
        <div className="header__score-container">
          <p>SCORE</p>
          <h1>{score}</h1>
        </div>
      </div>

      {gameOn ? (
        <div className="step2">
          <div className="step2__player-choice">
            <h3>YOU PICKED</h3>
            {getChoice(playerChoice)}
          </div>
          {gameState && (
            <div className="game-state__container">
              <h1 className="game-state__title">
                YOU{" "}
                {gameState === "winner"
                  ? "WIN"
                  : gameState === "loser"
                  ? "LOSE"
                  : "DREW"}
              </h1>
              <div className="game-state__button" onClick={resetGame}>
                PLAY AGAIN
              </div>
            </div>
          )}
          <div className="step2__computer-choice">
            <h3>THE HOUSE PICKED</h3>

            {computerChoice ? (
              getChoice(computerChoice)
            ) : (
              <div className="step2__waiting"></div>
            )}
          </div>
        </div>
      ) : (
        <div className="game__container">
          <img src={pentagon} alt="pentagon" className="game__pentagon" />
          <div className="scissors row1 border" onClick={onScissorsClick}>
            <img src={scissors} alt="scissors" className="game__img" />
          </div>
          <div className="row2">
            <div className="spock border" onClick={onSpockClick}>
              <img src={spock} alt="spock" className="game__img" />
            </div>
            <div className="paper border" onClick={onPaperClick}>
              <img src={paper} alt="paper" className="game__img" />
            </div>
          </div>
          <div className="row3">
            <div className="lizard border" onClick={onLizardClick}>
              <img src={lizard} alt="lizard" className="game__img" />
            </div>
            <div className="rock border" onClick={onRockClick}>
              <img src={rock} alt="rock" className="game__img" />
            </div>
          </div>
        </div>
      )}
      <div className="rules__container" onClick={() => setRulesModal(true)}>
        <p className="rules__text">RULES</p>
      </div>
      {rulesModal && (
        <div className="rules__modal">
          <div className="rules__modal-content">
            <div className="rules__modal-header">
              <h1>RULES</h1>
              <div className="rules__close-container">
                <img
                  src={close}
                  alt="close"
                  onClick={() => setRulesModal(false)}
                />
              </div>
            </div>
            <div className="rules__modal-rules-image">
              <img src={rules} alt="rules" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
