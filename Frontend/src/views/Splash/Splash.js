import React from 'react';
import './splash.css'
const Splash = () => {
    return (
        <>
            <h1>Welcome to the DnD Gaming Platform!</h1>
            <p>Here you can find a fun, nerdy, and programatic environment to play Dungeons & Dragons.
                This site was built with 3 things in mind: creating code, roleplaying, and having fun!</p>
            <div class="main-content-container">
                <div class="get-started-container">
                    <h3 class="getting-started">To get started:</h3>
                    <ol>
                        <li>Create an account</li>
                        <li>Create a character</li>
                        <li>Catch up on the story so far</li>
                        <li>Add to the experience!</li>
                    </ol>
                </div>
                <div class="features-container">
                    <h3>Features</h3>
                    <ul>
                        <li>Virtual dice roller</li>
                        <li>Character creation tool</li>
                        <li>Game master tools</li>
                        <li>Chat system</li>
                        <li>And more!</li>
                    </ul>
                </div>
            </div>
            <section class="game-section">
                <ul class="game-tabs">
                    <li><a href="#characters">Characters</a></li>
                    <li><a href="#places">Places</a></li>
                    <li><a href="#history">History</a></li>
                    <li><a href="#rules">Rules</a></li>
                </ul>
                <div id="characters" class="game-tab">
                    <h3>Characters</h3>
                    <p>Here you can view all the characters in the current game.</p>
                </div>

                <div id="places" class="game-tab">
                    <h3>Places</h3>
                    <p>Here you can view all the places in the current game.</p>
                </div>

                <div id="history" class="game-tab">
                    <h3>History</h3>
                    <p>Here you can view all the events that have happened in the current game.</p>
                </div>

                <div id="rules" class="game-tab">
                    <h3>Rules</h3>
                    <p>Here you can view the rules for the current game.</p>
                </div>
            </section>
        </>
    )
}

export default Splash;
