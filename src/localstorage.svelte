<script context="module">
  export const localData = {
    key: "localdata_ew202210",
    value: {
      found: 0,
      collection: {
        y_001: {
          name: "monster1",
          count: 0,
          img: "/assets/icons/monsters/yellow_monster.png",
          found: false,
        },
        y_002: {
          name: "monster2",
          count: 0,
          img: "/assets/icons/monsters/icons8-cute-pumpkin-96.png",
          found: false,
        },
        y_003: {
          name: "monster3",
          count: 0,
          img: "/assets/icons/monsters/icons8-cute-pumpkin-96.png",
          found: false,
        },
        y_004: {
          name: "monster4",
          count: 0,
          img: "/assets/icons/monsters/icons8-cute-pumpkin-96.png",
          found: false,
        },
        y_005: {
          name: "monster5",
          count: 0,
          img: "/assets/icons/monsters/icons8-cute-pumpkin-96.png",
          found: false,
        },
        y_006: {
          name: "monster6",
          count: 0,
          img: "/assets/icons/monsters/icons8-cute-pumpkin-96.png",
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
