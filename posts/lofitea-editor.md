---
title: 'C Text Editor'
date: 'July 15, 2024'
excerpt: 'This post will cover a small programming project in C'
cover_image: '/images/lofitea-editor/lofitea-editor.png'
---

# A Text Editor in C

This is also another small programming project that I worked on over the summer of 2024.  This is a modified version of antirez's kil editor that I learned how to build from scratch with over 1,000 lines of C code.  The original tutorial code can be found <a href = "https://github.com/snaptoken/kilo-tutorial">here</a> and my small modifications of this text editor can be found <a href = "https://github.com/LofiTea/lofitea-text-editor">here</a>.

## The Basic Idea

This markdown file documents my journey of building a text editor from scratch by following a comprehensive tutorial based on antirez's kilo editor. The tutorial breaks down the process into 184 steps, guiding through each change and addition to the code.

## Steps Overview

The process was divided into several key phases:

1. **Basic Setup**: Initializing the project and setting up the main structure.
2. **Editor Input and Output**: Handling user input and displaying text.
3. **Cursor Movement**: Implementing basic cursor movements.
4. **Text Editing**: Adding functionality to insert and delete text.
5. **File I/O**: Enabling the editor to load and save files.
6. **Search Functionality**: Adding search capability within the editor.
7. **Syntax Highlighting**: Implementing basic syntax highlighting.

## Future Plans?
This text editor is not complete.  As seen in the implementation, it can be clunky and awkward to use compared to other smoother text editors.  Some potential ideas that I may implement in the future if I come back to this project (as recommeded by the tutorial):

- More filetypes: Add syntax highlighting rules for some of your favourite languages to the HLDB array.
- Line numbers: Display the line number to the left of each line of the file.
- Soft indent: If you like using spaces instead of tabs, make the Tab key insert spaces instead of \t. You may want Backspace to remove a Tab key’s worth of spaces as well.
Auto indent: When starting a new line, indent it to the same level as the previous line.
- Hard-wrap lines: Insert a newline in the text when the user is about to type past the end of the screen. Try not to insert the newline where it would split up a word.
- Soft-wrap lines: When a line is longer than the screen width, use multiple lines on the screen to display it instead of horizontal scrolling.
- Use ncurses: The ncurses library takes care of a lot of the low level terminal interaction for you, and makes your program more portable.
- Copy and paste: Give the user a way to select text, and then copy the selected text when they press Ctrl-C, and let them paste the copied text when they press Ctrl-V.