---
title: 'Custom Shell'
date: 'May 15, 2026'
excerpt: 'Keywords: C++, Operating Systems, Shell, Lex, Yacc, Process Management'
cover_image: '/images/shell/title.png'
---

# Unix Shell

As part of CS 25200: Systems Programming, I developed a fully functional Unix shell in C and C++ that replicated many of the core features found in shells such as Bash and C Shell. The project required implementing process creation, command parsing, job control, input/output redirection, pipelines, signal handling, wildcard expansion, command history, and line editing. :contentReference[oaicite:0]{index=0}

## The Challenge

Modern shells provide far more functionality than simply launching programs. They must parse complex user input, manage multiple processes, handle signals, perform command expansion, and provide an interactive user experience.

The shell needed to support:

- Command execution using `fork()` and `execvp()`
- Input, output, and error redirection
- Multi-stage pipelines
- Background process execution
- Signal handling and zombie process cleanup
- Built-in shell commands
- Environment variable and tilde expansion
- Wildcard expansion
- Subshell execution
- Interactive command history and line editing

One of the most challenging aspects was recreating behavior users take for granted in modern shells while ensuring proper process and file descriptor management. My final shell version ended up looking like this below:

![alt text](/images/shell/shell.png)

## Implementation

The shell was built in C++ using Flex and Bison (Lex and Yacc) to tokenize and parse user commands. Parsed commands were stored in command structures and executed through Unix system calls such as `fork()`, `execvp()`, `pipe()`, `dup2()`, and `waitpid()`. Several advanced operating-system concepts were implemented:

- Process creation and synchronization
- Pipeline construction using Unix pipes
- I/O redirection and file descriptor manipulation
- Signal handling with `SIGINT` and `SIGCHLD`
- Background job management and zombie process elimination
- Built-in commands including `cd`, `setenv`, `unsetenv`, and `printenv`
- Environment variable expansion and wildcard matching
- Subshell execution using inter-process communication
- Interactive line editing and command history support

The shell also included support for expansions commonly found in Bash, such as `${VAR}`, `~`, wildcard patterns (`*` and `?`), and command substitution using subshells.

## Results

The completed shell successfully executed complex command pipelines, handled redirection and background jobs, supported shell built-ins, and provided an interactive user experience with history navigation and editing capabilities. The project reinforced core operating-system concepts including process management, signals, file descriptors, inter-process communication, and parsing techniques. The grading was split into two parts: automatics tests and manual tests.

![alt text](/images/shell/results.png)

## Conclusion

This project provided extensive hands-on experience with Unix internals and systems programming. Building a shell from scratch deepened my understanding of process control, operating-system abstractions, parser generation tools, and low-level system calls while demonstrating how modern command-line environments are implemented.