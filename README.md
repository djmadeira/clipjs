**Please don't use this. I haven't updated it in a long time, and I doubt if I ever will. This is a good idea, poorly implemented. You should consider doing this yourself, but much better than I did here.**

Clip.js - Because somebody had to fix it.
-----------------------------------------
You're reading a lengthy article on a mobile device. The text size is too small, or there's a video, or whatever, and you want to change from portrait to landscape or vice versa. The content reflows, and you lose your place.

###How it works###
Clip.js lets you specify an element (any jQuery selector will work), and keeps track of the topmost visible child of that element. After the <code>orientationchange</code> event has fired, it scrolls you up/down to the top of that element.

It requires jQuery, and has been verified to work at least as far back as 1.10.2 (the version wootheme's canvas uses). I've tested it on an iPod touch running iOS 7.

The total file size minified and concatinated is less than 0.5KB, so you could definitely inline it. 

###Usage###
Include the file in your document's head, or just inline it, and declare <code>var clipjsElement = ".theparentelement"</code>. If you don't declare it, the default is the root document.

###License###
[MIT]

[MIT]:http://opensource.org/licenses/MIT
