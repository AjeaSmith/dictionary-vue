<script setup>
import { useSearchAPI } from "@/composables/useSearch";
import IconPlay from "./icons/IconPlay.vue";
import IconLink from "./icons/IconLink.vue";
import { ref } from "vue";

const { results } = useSearchAPI();

const myAudioRef = ref(null);

function playAudio() {
  const audioEl = myAudioRef.value;

  if (!audioEl) {
    console.warn("Audio element reference is null.");
    return;
  }
  audioEl[0].play();
}

function getAvaliableAudio(dataObject) {
  if (!dataObject || !dataObject.phonetics || dataObject.phonetics.length === 0) {
    return null;
  }
  for (const phoneticEntry of dataObject.phonetics) {
    if (phoneticEntry.audio && phoneticEntry.audio !== "") {
      return phoneticEntry.audio;
    }
  }
  return null;
}

function getAvaliablePhoneticText(dataObject) {
  if (!dataObject || !dataObject.phonetics || dataObject.phonetics.length === 0) {
    return null;
  }
  for (const phoneticEntry of dataObject.phonetics) {
    if (phoneticEntry.text && phoneticEntry.text !== "") {
      return phoneticEntry.text;
    }
  }
  return null;
}
</script>

<template>
  <section class="results">
    <div class="results-wrap" v-for="(result, index) in results" :key="index">
      <div class="word-info">
        <div>
          <h1>{{ result.word }}</h1>
          <span class="idk"> {{ getAvaliablePhoneticText(result) }}</span>
        </div>
        <div class="word-audio">
          <button type="button" @click="playAudio" aria-label="Play pronunciation">
            <IconPlay />
          </button>
          <audio ref="myAudioRef" :src="getAvaliableAudio(result)">
            <IconPlay />
          </audio>
        </div>
      </div>
      <section v-for="(meanings, index) in result.meanings" :key="index">
        <div class="word-noun">
          <p class="word-type">{{ meanings.partOfSpeech }}</p>
          <div class="word-meaning">
            <p>Meaning</p>
            <ul v-for="(definition, index) in meanings.definitions" :key="index">
              <li>{{ definition.definition }}</li>
              <span v-if="definition.example" style="color: var(--text-secondary)"
                >"{{ definition.example }}"</span
              >
            </ul>
          </div>
          <div class="word-synonyms">
            <p>Synonyms</p>
            <p v-for="(synonym, index) in meanings.synonyms" :key="index">{{ synonym }}</p>
          </div>
        </div>
      </section>
      <div class="section-separator" />
      <div class="source">
        <p v-for="(source, index) in result.sourceUrls" :key="index">
          Source <a :href="source">{{ source }}</a> <IconLink />
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
button {
  background: transparent;
  border: none;
}
.results {
  font-family: var(--app-font);
}
ul li::marker {
  color: var(--accent-color);
}
ul {
  padding-left: 1rem;
}
ul li {
  padding-left: 1rem;
  margin-bottom: 13px;
}
.word-info {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: var(--fs-lg);
    font-weight: bold;
  }
  .word-audio {
    place-self: end;
  }
  .idk {
    font-size: var(--fs-md);
    color: var(--accent-color);
  }
}
.word-type {
  margin-bottom: 2rem;
  position: relative;
  font-size: var(--fs-md);
  font-weight: bold;
  font-style: italic;
}
.word-type::after {
  content: "";
  position: absolute;
  top: 12px;
  width: 90%;
  height: 1px;
  background-color: var(--line);
  margin-left: 1rem;
  transition: background-color 0.5s;
}
.word-meaning {
  display: grid;
  gap: 17px;
  margin-bottom: 1.5rem;
}

.word-meaning p,
.word-synonyms p,
.word-verb .word-meaning {
  color: var(--text-secondary);
  font-size: var(--fs-sm);
}
.word-synonyms {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.word-synonyms p:nth-child(2) {
  color: var(--accent-color);
  font-weight: bold;
}
.word-synonyms p:nth-child(2):hover {
  cursor: pointer;
  text-decoration: underline;
}

.section-separator {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 1px;
  background-color: var(--line);
  transition: background-color 0.5s;
}
.source {
  color: var(--text-secondary);
}
.source a {
  color: var(--text-primary);
}
</style>
