System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular2": "npm:angular2@2.0.0-alpha.26",
    "es6-shim": "github:es-shims/es6-shim@0.33.3",
    "reflect-metadata": "npm:reflect-metadata@0.1.0",
    "typescript": "npm:typescript@1.6.0-dev.20150825",
    "zone.js": "npm:zone.js@0.5.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular2@2.0.0-alpha.26": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reflect-metadata": "npm:reflect-metadata@0.1.0",
      "rtts_assert": "npm:rtts_assert@2.0.0-alpha.26",
      "rx": "npm:rx@2.5.1",
      "traceur": "npm:traceur@0.0.87",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zone.js": "npm:zone.js@0.5.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:glob@4.3.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:reflect-metadata@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:rsvp@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rtts_assert@2.0.0-alpha.26": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:rx@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:semver@2.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:traceur@0.0.87": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.3.5",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rsvp": "npm:rsvp@3.1.0",
      "semver": "npm:semver@2.3.2",
      "source-map-support": "npm:source-map-support@0.2.10",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:typescript@1.6.0-dev.20150825": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:zone.js@0.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:zone.js@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
