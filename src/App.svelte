<script>
  import { identity, validate_each_argument } from "svelte/internal";
  import { keyMap, layout, rows } from "./data";
  import { toggleBellows } from "./data";
  import { buttonIdMap } from "./data";
  import { bassKeyMap } from "./data";
  import { sleep } from "./data";
  import { scales } from "./data";
  // import Counter from "./lib/Counter.svelte";
  import { rowMap } from "./data";
  import { rowTones } from "./data";
  import { bassRowMap } from "./data";
  import { bassRows } from "./data";
  import { bassLayout } from "./data";
  import { globals } from "svelte/internal";
  console.table(buttonIdMap);
  console.log(bassRowMap);
  console.log(bassRows);
  console.log(rowMap);
  //  console.log("rowtones",rowTones)
  //  console.log( "rowMap" ,rowMap)
  //   console.log("rows ", rows)

  // console.log("scales", scales)
  // // console.log(scales.F)
  const person = { name: "Kylie" };
  console.log({ person });
  console.log({ ...person });
  // console.log(JSON.parse(JSON.stringify({person})))
  person.name = "Sallyss";
  // console.dir(document.table(Oscill))
  // console.log({...person})

  const audio = new window.AudioContext();
  // console.log("audio", audio)
  const gainNode = audio.createGain();
  // console.log("gainNode", gainNode)
  gainNode.gain.value = 0.1;
  gainNode.connect(audio.destination);
  // const oscillator = audio.createOscillator()

  // oscillator.stop();
  // let goodDogs = [];
  // let dogs = ["roger", "syd"];
  let activeButtonIdMap = {};

  let direction = "pull"; // state
  let tuning = "FBE";

  function playTone(id) {
    const { frequency } = buttonIdMap[id];
    let oscillator;

    if (Array.isArray(frequency)) {
      oscillator = frequency.map((hz) => {
        const oscillator = audio.createOscillator();
        oscillator.type = "sawtooth";
        oscillator.connect(gainNode);
        oscillator.frequency.value = hz;
        oscillator.start();

        return oscillator;
      });
    } else {
      oscillator = audio.createOscillator();
      oscillator.type = "sawtooth";
      oscillator.connect(gainNode);
      oscillator.frequency.value = frequency;
      oscillator.start();
    }

    return { oscillator };
  }
  function stopTone(id) {
    const { oscillator } = activeButtonIdMap[id];
    console.log("oscillator", oscillator);
    console.table({ ...activeButtonIdMap });
    if (Array.isArray(oscillator)) {
      oscillator.forEach((osc) => osc?.stop());
      // console.log()
    } else {
      oscillator?.stop();
    }
  }

  function handleToggleBellows(newDirection) {
    if (direction != newDirection) {
      // console.log("direction",direction)
      direction = newDirection;
      const newActiveButtonIdMap = { ...activeButtonIdMap };
      console.table(activeButtonIdMap);
      // console.log("newactie",newActiveButtonIdMap)
      let isBass = false;
      // console.log("object", Object.entries(activeButtonIdMap))
      for (const [keyId, keyValues] of Object.entries(activeButtonIdMap)) {
        console.table(keyId, keyValues);
        if (Array.isArray(keyValues.oscillator)) {
          console.table(keyValues);
          isBass = true;
          keyValues.oscillator.forEach((hz) => hz?.stop());
        } else {
          keyValues.oscillator?.stop();
        }
        console.table(keyValues.oscillator);

        delete newActiveButtonIdMap[keyId];

        const reverseKeyId = `${keyId.split("-")[0]}-${
          keyId.split("-")[1]
        }-${newDirection}${isBass ? "-bass" : ""}`;
        // console.log(reverse)

        const { oscillator } = playTone(reverseKeyId);
        newActiveButtonIdMap[reverseKeyId] = {
          oscillator,
          ...buttonIdMap[reverseKeyId],
        };
      }
      activeButtonIdMap = newActiveButtonIdMap;
    }
  }
  // console.log(handleToggleBellows("push"))
  function updateActiveButtonMap(id) {
    if (!activeButtonIdMap[id]) {
      const { oscillator } = playTone(id);
      activeButtonIdMap[id] = { oscillator, ...buttonIdMap[id] };
    }
  }

  function handleKeyPressNote(e) {
    const key = `${e.key}`.toLowerCase() || e.key;
    console.log("key", key);
    if (key == toggleBellows) {
      handleToggleBellows("push");
      console.log(handleToggleBellows("push"));

      // console.log("direction",direction)
      return;
    }
    const buttonMapData = keyMap[key];
    console.log(buttonMapData);
    if (buttonMapData) {
      const { row, column } = buttonMapData;
      console.log({ row, column });
      const id = `${row}-${column}-${direction}`;
      console.log("id ", id);
      console.log(updateActiveButtonMap(id));
      return updateActiveButtonMap(id);
    }
    const bassButtonMapData = bassKeyMap[key];
    console.log(bassButtonMapData);
    if (bassButtonMapData) {
      console.log(bassButtonMapData[key]);
      const { row, column } = bassButtonMapData;
      const id = `${row}-${column}-${direction}-bass`;
      console.log("id ", id);

      return updateActiveButtonMap(id);
    }
  }

  function handleKeyUpNote(e) {
    const key = `${e.key}`.toLowerCase() || e.key;
    if (key === toggleBellows) {
      handleToggleBellows("pull");
      return;
    }
    const buttonMapData = keyMap[key];
    console.log(buttonMapData);
    if (buttonMapData) {
      const { row, column } = buttonMapData;
      const id = `${row}-${column}-${direction}`;
      if (activeButtonIdMap[id]) {
        stopTone(id);
        const newActiveButtonIdMap = { ...activeButtonIdMap };
        delete newActiveButtonIdMap[id];
        activeButtonIdMap = newActiveButtonIdMap;
      }
    }
    const bassButtonMapData = bassKeyMap[key];
    console.log(bassButtonMapData);
    if (bassButtonMapData) {
      const { row, column } = bassButtonMapData;
      console.log({ row, column });
      const id = `${row}-${column}-${direction}-bass`;
      if (activeButtonIdMap[id]) {
        stopTone(id);

        const newActiveButtonIdMap = { ...activeButtonIdMap };
        delete newActiveButtonIdMap[id];
        activeButtonIdMap = newActiveButtonIdMap;
      }
    }
  }
  console.table(keyMap);
  const handleClickNote = (id) => {
    updateActiveButtonMap(id);
  };

  const handleClearAllNotes = () => {
    for (const [keyId, keyValues] of Object.entries(activeButtonIdMap)) {
      if (Array.isArray(keyValues.oscillator)) {
        keyValues.oscillator.forEach((hz) => hz?.stop());
      } else {
        keyValues.oscillator?.stop();
      }
    }
    activeButtonIdMap = {};
  };

  async function playNotesInScale(idSet) {
    handleClearAllNotes();
    for (const id of idSet) {
      if (!activeButtonIdMap[id]) {
        const { oscillator } = playTone(id);
        activeButtonIdMap[id] = { oscillator, ...buttonIdMap[id] };
      }
    }
    await sleep(600);
    for (const id of idSet) {
      stopTone(id);
      const newActiveButtonIdMap = { ...activeButtonIdMap };
      delete newActiveButtonIdMap[id];
      activeButtonIdMap = newActiveButtonIdMap;
      return activeButtonIdMap;
    }
  }
  const playScale = (scale, type) => async () => {
    const reverse = [...scales[scale][type]].reverse();
    reverse.shift();
    const scaleBackAndForth = [...scales[scale][type], ...reverse];
    for (const idSet of scaleBackAndForth) {
      await playNotesInScale(idSet);
    }
  };

  function handleChangeTuning(e) {
    tuning = e.target.value;
  }
  console.table(activeButtonIdMap);
  // console.log(activeButtonIdMap[button.id])
  console.log(bassRows);
  console.table(layout);
  console.table(bassLayout);
  // bassLayout[rows].filter(({ id }) => id.includes(direction))
</script>

<svelte:body
  on:keypress={handleKeyPressNote}
  on:keyup={handleKeyUpNote}
  on:mouseup={handleClearAllNotes} />
<main>
  <div class="mobile-only">
    <div class="banner">This app is only available on a desktop!</div>
  </div>

  <div class="layout">
    
    <div class="keyboard-side">
      <div class="desktop-only accordion-layout">
        {#each rows as row}
          <div class="row {row}">
            {#each layout[row].filter( ({ id }) => id.includes(direction) ) as button}
              <div
                class={`circle ${
                  activeButtonIdMap[button.id] ? "active" : ""
                } ${direction} `}
                id={button.id}
                on:mousedown={handleClickNote(button.id)}
              >
                {button.name}
              </div>
            {/each}
            <h4>{rowTones[tuning][row]}<br />{row}</h4>
          </div>
        {/each}
      </div>
    </div>
    <div class="text">This accordion works only on desktops browsers devleoped with Svelte framework using Audio API
    contribuation to <a href="https://tania.dev/"> Tania </a></div>
    <div class="information-side">
      <div class="information">
        <div class="title">
          <h1>Keyboard Accordion</h1>
          <h2>
            Play the diatonic button accordion with your computer keyboard!
          </h2>
        </div>
        <div>
          <h3>How to use</h3>
          <ul>
            <li>
              Each key on the keyboard corresponds to a button on the accordion.
            </li>
            <li>
              Hold down <kbd>q</kbd> to <strong>push</strong> the bellows.
              Default is
              <strong>pull</strong>.
            </li>
            <li>
              The treble side buttons begin with <kbd>z</kbd>, <kbd>a</kbd>, and
              <kbd>w</kbd>
            </li>
            <li>
              The twelve bass buttons use the number row from <kbd>1</kbd> to
              <kbd>=</kbd>
            </li>
          </ul>
        </div>

        <div class="flex">
          <div>
            <h3>Tuning</h3>
            <select on:click={handleChangeTuning}>
              <option value="FBE" selected><h2>FB♭E♭ (Fa)</h2></option>
              <option value="GCF" disabled><h2>GCF (Sol) Not yet</h2></option>
              <option value="EAD" disabled><h2>EAD (Mi) Not yet</h2></option>
            </select>
          </div>
        </div>

        <div>
          <h3>Major Scales</h3>
          <div class="scales">
            <div class="scale">
              <h4>F Major</h4>
              <div>
                <button on:click={playScale("F", "notes")}>Notes</button>
                <button on:click={playScale("F", "thirds")}>Thirds</button>
              </div>
            </div>
            <div class="scale">
              <h4>B♭ Major</h4>
              <div>
                <button on:click={playScale("Bb", "notes")}>Notes</button>
                <button on:click={playScale("Bb", "thirds")}>Thirds</button>
              </div>
            </div>
            <div class="scale">
              <h4>E♭ Major</h4>
              <div>
                <button on:click={playScale("Eb", "notes")}>Notes</button>
                <button on:click={playScale("Eb", "thirds")}>Thirds</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="desktop-only">
        <div class="currently-playing">
          {#each Object.entries(activeButtonIdMap) as [id, value]}
            <div class="flex col">
              <div class="circle note">{value.name}</div>
              <div>
                <small
                  >Row: {id.split("-")[0]}<br /> Col: {id.split("-")[1]}</small
                >
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="bass-side">
      <div class="desktop-only accordion-layout">
        {#each bassRows as row}
          <div class="row {row}">
            {#each bassLayout[row].filter( ({ id }) => id.includes(direction) ) as button}
              <div
                class={`circle ${
                  activeButtonIdMap[button.id] ? "active" : ""
                } ${direction} `}
                id={button.id}
                on:mousedown={handleClickNote(button.id)}
              >
                {button.name}
              </div>
            {/each}
          </div>
        {/each}
      </div>
      <footer>
        <p>
          Edited by  <a href="https://mhmad-tarshishi.netlify.app/" target="_blank">Mohamad tarshishi</a>.
        </p>
        <p>
          
           <a href="https://github.com/cs53"> Open source</a>
          
        </p>
      </footer>
    </div>
  </div>
</main>
