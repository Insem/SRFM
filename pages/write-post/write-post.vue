<template>
  <div class="write_post">
    <div class="editor" id="editorjs"></div>
    <div class="content">
      <button id="btn" @click="save">Save</button>
      <div class="info">{{err?err:''}}</div>
      <div class="select">
        <h2>Теги статьи:</h2>
        <ul>
          <li v-for="tag in tags" :key="tag.id">
            <h3>{{tag.val}}</h3>
            <input type="checkbox" v-model="tag.active" />
          </li>
        </ul>
      </div>

      <div class="select">
        <h2>Уровень статьи:</h2>
        <ul>
          <li v-for="(level, i) in [1,2,3]" :key="i">
            <h3>{{level}}</h3>
            <input type="radio" name="level" :value="level" v-model="activeLevel" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "~/pages/write-post/css/main.scss";
</style>
<script>
//import ImageTool from "@editorjs/image";
import Api from "~/assets/js/api/fetch.js";
import parsePost from "~/assets/js/write-post/parsePosts.js";

const CONSTS = require("~/assets/js/frontend.consts.js");
const api = Api.ApiPath;
export default {
  data() {
    return {
      tags: null,
      editor: null,
      err: null,
      activeLevel: 3,
    };
  },
  methods: {
    async save() {
      const posts = await this.editor.save();
      parsePost(posts);
      const tags = [];
      this.tags.forEach((it) => {
        if (it.active) {
          tags.push(it.id);
          it.active = false;
        }
      });
      console.log("active tags", tags);
      if (tags.length != 0) {
        this.err = "";
        posts.tags = tags;
        posts.level = this.activeLevel;
        await Api.SendReq(CONSTS.PATHS.ADDPOST, posts);
        console.log("save", posts);
      } else {
        this.err = "Ошибка. Выберите хотя бы один тег";
      }
    },
  },
  async fetch() {
    const data = await Api.GetReq(CONSTS.PATHS.GETTAGS, {});
    console.log();
    this.tags = data;
  },
  mounted() {
    const axios = require("axios");
    if (process.client) {
      const EditorJS = require("@editorjs/editorjs");
      const Quote = require("@editorjs/quote");
      const List = require("@editorjs/list");
      const ImageTool = require("@editorjs/image");
      const Header = require("@editorjs/header");
      const Embed = require("@editorjs/embed");
      const Personality = require("@editorjs/personality");
      const InlineCode = require("@editorjs/inline-code");
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          personality: {
            class: Personality,
            config: {
              endpoint: api + CONSTS.PATHS.UPLOADIMG,
              descriptionPlaceholder: "О персонаже",
              linkPlaceholder: "Сюда ничего не пишите",
            },
          },
          inlineCode: {
            class: InlineCode,
          },
          quote: { class: Quote, shortcut: "SHIFT+O" },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                filed: "img",
                byFile: api + CONSTS.PATHS.UPLOADIMG, // Your backend file uploader endpoint
                //byUrl: "http://localhost:8008/fetchUrl" // Your endpoint that provides uploading by Url
              },
            },
          },
          header: {
            defaultLevel: 1,
            placeholder: "Это заголовок",
            class: Header,
            inlineToolBar: ["link"],
          },
          list: {
            class: List,
            inlineToolBar: ["link", "bold"],
          },
          embed: {
            class: Embed,
            inlineToolBar: false,
            config: {
              services: {
                youtube: true,
              },
            },
          },

          author: {
            defaultLevel: 3,
            placeholder: "Это имя автора",
            class: Header,
            inlineToolBar: ["link"],
          },
        },
      });
      this.editor = editor;
    }
  },
};
</script>