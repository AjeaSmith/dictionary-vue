# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)=
  - [Useful resources](#useful-resources)

- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Links

[Live Site]()
[Source Code](https://github.com/AjeaSmith/dictionary-vue)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vue.org/) - JS library

### What I learned

- Using `prefers-color-scheme` in css overrides the effect of toggling between themes reguardless. What i did was handle prefers-color-scheme through JS instead of CSS, that is what worked for me.
- located in `SearchBar.vue`. Learned to get the audio to play for the definitions. With this code, I was able to find the audio element and play it.

```js
function playAudio() {
	const audioEl = myAudioRef.value;

	if (!audioEl) {
		console.warn("Audio element reference is null.");
		return;
	}
	audioEl[0].play();
}
```

- How to change between different fonts based on selection. I set `--app-font` to different values based on data-attributes (`data-font`). By default, it's Inter.

```css
/* determines which font to use based on selection */
:root[data-font="sans"] {
	--app-font: "Inter", sans-serif;
}
:root[data-font="serif"] {
	--app-font: "Lora", serif;
}
:root[data-font="mono"] {
	--app-font: "Inconsolata", monospace;
}
```

the HTML that handles it

```html
template>
  <label for="font" class="sr-only">Select a font:</label>
  <select name="font" id="font" v-model="selectedFont">
    <option value="sans">Sans Serif</option>
    <option value="serif">Serif</option>
    <option value="mono">Mono</option>
  </select>
</template>

<script setup>
import { ref, watch } from "vue";

const selectedFont = ref("sans");

watch(selectedFont, (newFont) => {
  document.documentElement.setAttribute("data-font", newFont);
});
</script>

<style scoped>
```

### Useful resources

- Mostly chatGPT

## Author

- Frontend Mentor - [@ajeasmith](https://www.frontendmentor.io/profile/ajeasmith)
- Twitter - [@ajeasmith](https://www.twitter.com/ajeasmith)

```

```
