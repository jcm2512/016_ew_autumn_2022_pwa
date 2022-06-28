<script context="module">
  export const localData = {
    key: "localdata_ew202210",
    value: {
      monsters: 0,
      monsterData: {
        110: {
          name: "monster",
          count: 0,
          img: "icons8-cute-monster-96.png",
          found: false,
        },
        120: {
          name: "jackolantern",
          count: 0,
          img: "icons8-cute-pumpkin-96.png",
          found: false,
        },
        130: {
          name: "skull",
          count: 0,
          img: "icons8-cute-skull-96.png",
          found: false,
        },
        140: {
          name: "frankensteins monster",
          count: 0,
          img: "icons8-frankensteins-monster-96.png",
          found: false,
        },
        150: {
          name: "mummy",
          count: 0,
          img: "icons8-mummy-96.png",
          found: false,
        },
        160: {
          name: "skull",
          count: 0,
          img: "icons8-thriller-96.png",
          found: false,
        },
        170: {
          name: "witch",
          count: 0,
          img: "icons8-witch-96.png",
          found: false,
        },
        180: {
          name: "wizard",
          count: 0,
          img: "icons8-ghost-96.png",
          found: false,
        },
        190: {
          name: "bat",
          count: 0,
          img: "icons8-bat-96.png",
          found: false,
        },
        200: {
          name: "ghost",
          count: 0,
          img: "icons8-ghost-96.png",
          found: false,
        },
      },
    },
    get: function (property) {
      let array = [],
        entries = [];

      // CREATE ARRAY OF VALUES
      // ----------------------

      // If property is a seqence of arguments, create an array
      // e.g function("first", "second") -> ["first", "second"]
      arguments.length > 1
        ? (array = Array.from(arguments))
        : // If property is a undefined, return array with all current values
        typeof property == "undefined"
        ? (array = Object.keys(this.value))
        : // If property is string, convert it to an array so we can cycle through properties
        typeof property == "string"
        ? array.push(property)
        : (array = property);

      array.forEach((key) => {
        // Skip undefined values
        if (this.value[String(key)] != undefined) {
          entries.push([String(key), this.value[String(key)]]);
        }
      });

      return Object.fromEntries(entries);
    },
    set: function (obj) {
      for (const [key, value] of Object.entries(obj)) {
        this.value[key] = value;
      }
    },
    clear: function () {
      localStorage.removeItem(this.key);
    },
    load: function () {
      if (localStorage.getItem(this.key) != null)
        this.value = JSON.parse(localStorage.getItem(this.key));
    },
    save: function () {
      localStorage.setItem(this.key, JSON.stringify(this.value));
    },
  };
</script>
