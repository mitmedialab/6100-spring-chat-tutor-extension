# 6.100 Spring Chat Tutor Extension

This is the codebase to support the development of the [ChatTutor](https://github.com/ChatTutor/chattutor)-powered Chrome Extension deployed in the Spring 2024 MIT 6.100 course. 

This codebase leverages the embeddable version of the [ChatTutor UI](https://github.com/mitmedialab/chat-tutor-embeddable).

## Build

```bash
npm run build
```

Then follow [these instructions](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) to load the generated `dist/` folder as an "unpacked" extension.