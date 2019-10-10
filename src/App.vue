<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>English Word Game</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-textarea v-model="input" label="Input an English paragraph."></v-textarea>

      <v-btn v-on:click="submitInput()">Submit</v-btn>

      <br />

      <template v-for="(word, idx) in brokenInput">
        <v-chip outlined :key="'chip' + idx + word" v-on:click="clickChip(idx)">{{ word }}</v-chip>
      </template>

      <p v-for="(word, idx) in selected" :key="'given_answer' + idx + word">{{ word }}</p>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    input: "",
    answer: "",
    brokenInput: [],
    selected: [],
    output: []
  }),

  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },

    submitInput() {
      this.brokenInput = this.shuffle(this.input.split(" "));
      this.answer = this.input;
      this.input = "";
    },

    clickChip(idx) {
      this.selected.push(this.brokenInput.splice(idx, 1)[0]);

      if (this.selected.length == this.answer.split(" ").length) {
        if (this.selected.join(" ") == this.answer) {
          alert("Congratulations, you got it right!");
        } else {
          alert("00No, you got it wrong! :(");
        }
      }
    }
  }
};
</script>
