---------------Clip.js---------------
---Because somebody had to fix it.---

Use case: In a mobile browser, you're reading a lengthy article. The text size is too small, or there's a video, or whatever, and you want to change from portrait to landscape or vice versa. Then the content reflows, and you lose your place.

Clip.js lets you specify an element (any jQuery selector will work), and keeps track of the topmost visible child of that element. After the orientationchange event has fired, it scrolls you up/down to the top of that element.

Usage:

Include the file in your document's head, or just inline it, and declare var clipjsElement = ".yourelement". If you don't declare it, the default is the root document.