<script>
  import {
    found,
    updateStamps,
    foundStampCollection,
    menuState,
    triggerMenuState,
    showNotification,
    scrollToStamp,
    triviaCorrect,
    foundStamp,
    stampCount,
    triggerTrivia,
    sessionStorage,
    trigger,
  } from "../store.js";

  import { onMount } from "svelte";

  import { animateCSS } from "../animateCSS.svelte";

  export let STAMP;
  console.log(STAMP);

  const TRIVIA = {
    Q001: {
      question: "In which country did Halloween start?",
      answer: 1,
      options: ["U.S.A.", "Ireland", "Japan"],
    },
    Q002: {
      question: "When did Halloween first start?",
      answer: 0,
      options: ["3000 years ago", "in 1880", "600 years ago"],
    },
    Q003: {
      question: "What are jack o'lanterns usually made from?",
      answer: 1,
      options: ["apples", "pumpkins", "candy"],
    },
    Q004: {
      question: "Is a pumpkin a vegetable or a fruit?",
      answer: 1,
      options: ["vegetable", "fruit"],
    },
    Q005: {
      question: "What were jack o'lanterns originally made from?",
      answer: 2,
      options: ["apples", "cabbages", "turnips"],
    },
    Q006: {
      question: "How many legs does a spider have?",
      answer: 1,
      options: ["four", "eight", "ten"],
    },
    Q007: {
      question: "Question 7",
      answer: 0,
      options: ["a", "b", "c"],
    },
    Q008: {
      question: "What does the name 'Dracula' mean?",
      answer: 2,
      options: ["a", "b", "Son of the Devil"],
    },
    Q009: {
      question: "Question 9",
      answer: 0,
      options: ["a", "b", "c"],
    },
  };

  let DOM_Stamps = [];

  $showNotification = false;

  let id = $foundStampCollection[0].name.split("_");
  let num = `Q${id[2].toString()}`;

  function optionSelected(event) {
    let parent = event.path[0];
    let selected = parent.getAttribute("id");
    if (TRIVIA[num].answer == selected && !$foundStamp.found) {
      // If correct
      $foundStamp.found = true;
      $foundStamp.count += 1;
      $stampCount += 1;
      // Show Stamp Button
      $triviaCorrect = true;
      parent.classList.add("correct");
    } else {
      // If incorrect
      parent.classList.add("incorrect");
    }
  }
  function button() {
    $triggerMenuState += 1;

    // Reset to initial conditions
    $triviaCorrect = false;

    // Hide Trivia Dialog
    $triggerTrivia = false;

    // SHOW ANY NOTIFICATIONS IF ANY
    $showNotification = true;

    // Show Found Stamp Dialog
    $found = true;

    // Update Stamps
    $sessionStorage.set({ found: $stampCount });
    $sessionStorage.save();

    console.log("save results");
    $trigger += 1;
  }
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    <div id="popup_message">{TRIVIA[num].question}</div>
    <div id="trivia_options">
      {#each TRIVIA[num].options as option, index}
        <span class="choices" id={index} on:click={optionSelected}>
          {option}</span
        >
      {/each}
    </div>
    {#if $triviaCorrect}
      <div on:click={button} id="ok_button">Get Stamp!</div>
    {/if}
  </div>
</div>
<div id="overlay_popup" class="grid-top " />

<style>
  #popup {
    font-family: "Londrina Solid";
  }
  #popup_message {
    grid-column: 1;
    grid-row: 1;
    font-size: 8vw;
    text-align: center;
    margin: 8vw;
  }
  #trivia_options {
    grid-column: 1;
    grid-row: 2;
    font-size: 7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  #ok_button {
    background-color: var(--green);
    border-radius: 4vw;
    text-align: center;
    font-size: 9vw;
    grid-column: 1;
    grid-row: 3;
    z-index: 100;
    height: 15vw;
    width: 60%;
    justify-self: center;
    border: solid white 0.8vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
