---
title: 'SimpleC Compiler'
date: 'January 2, 2025'
excerpt: 'Keywords: C, Compiler Design, Lex & Yacc, x86-64 Assembly, Computer Architecture'
cover_image: '/images/simplec-compiler/title.png'
---

# SimpleC Compiler

During the spring semester of my sophomore year, I took CS 25000: Computer Architecture. One of the largest projects in the course was building a compiler for a subset of the C programming language called SimpleC. The project introduced many of the concepts involved in compiler construction, including parsing, code generation, and assembly language programming.

Unlike traditional programming assignments that focus on building applications, this project required translating high-level source code into low-level x86-64 assembly instructions that could be assembled and executed by a computer.

## The Challenge

Compilers are responsible for converting human-readable source code into machine-executable instructions. For this project, a parser and scanner framework using Lex and Yacc was provided, but much of the compiler's code generation functionality needed to be implemented manually.

The compiler was required to support:

- Arithmetic expressions
- Variables and assignments
- Functions and function calls
- Conditional statements
- Loops
- Arrays
- x86-64 assembly generation

One of the more interesting challenges was implementing expression evaluation using a register-based virtual stack. Instead of relying entirely on memory, expressions were evaluated using CPU registers to improve efficiency and performance.

## Implementation

The compiler was written in C using Lex and Yacc. Lex was used to tokenize SimpleC source code, while Yacc parsed those tokens according to the language grammar.

As different language constructs were recognized by the parser, the compiler generated x86-64 assembly instructions directly. The generated assembly code could then be assembled and linked into executable programs.

Throughout the project, support was gradually added for additional language features such as control flow statements, arrays, and function calls.

## Results

By the end of the project, the compiler was capable of translating complete SimpleC programs into executable x86-64 assembly code. Programs containing arithmetic expressions, loops, conditionals, functions, and arrays could be successfully compiled and executed.

The project grading results are shown below:

![alt text](/images/simplec-compiler/results.png)

Note: The short-circuit test was extra credit.

## Conclusion

The SimpleC Compiler project provided valuable experience with compiler construction and low-level programming concepts. It offered insight into how high-level programming languages are translated into assembly instructions and executed by modern processors while reinforcing many of the concepts introduced throughout CS 25000.

## Reference

This project was developed by the CS 25000 professor. To see the entire project, look at the reference [here](/downloads/simplec_compiler.pdf).