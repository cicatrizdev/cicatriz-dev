import React from 'react'
import styled from 'styled-components'
import SkillBar from './skill-bar'

export default styled(({ className, title = 'Skills' }) => (
  <div className={className}>
    <h1>{title}</h1>
    <a
      href="https://www.javascript.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/javascript.svg"
        alt="JavaScript"
        width="45"
        height="45"
      />
    </a>{' '}
    <a
      href="https://www.typescriptlang.org"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/typescript.svg"
        alt="Typescript"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/react.svg"
        alt="React"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://www.python.org/" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/readme-md/master/public/images/skills/core/python.svg"
        alt="Python"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://flutter.dev/" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/readme-md/master/public/images/skills/extra/flutter.svg"
        alt="Flutter"
        width="45"
        height="45"
      />
    </a>{' '}
    <a
      href="https://developer.apple.com/xcode/swiftui/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/readme-md/master/public/images/skills/core/swift.svg"
        alt="Swift"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://kotlinlang.org/" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/readme-md/master/public/images/skills/core/kotlin.svg"
        alt="Kotlin"
        width="45"
        height="45"
      />
    </a>{' '}
    <a
      href="https://www.rust-lang.org"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/rust.svg"
        alt="Rust"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://nextjs.org" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/nextjs.svg"
        alt="NextJS"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="http://tailwindcss.com" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/tailwind.svg"
        alt="Tailwind"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://redux.js.org" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/redux.svg"
        alt="Redux"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://nodejs.org" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/nodejs.svg"
        alt="NodeJS"
        width="45"
        height="45"
      />
    </a>{' '}
    <a href="https://www.mongodb.com" target="_blank" rel="noreferrer noopener">
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/mongodb.svg"
        alt="Mongo DB"
        width="45"
        height="45"
      />
    </a>{' '}
    <a
      href="https://firebase.google.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/firebase.svg"
        alt="Firebase"
        width="45"
        height="45"
      />
    </a>
  </div>
))`
  width: 100%;
`
