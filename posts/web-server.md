---
title: 'HTTP Server'
date: 'May 16, 2026'
excerpt: 'Keywords: C++, Networking, HTTP, Multithreading, CGI, Systems Programming'
cover_image: '/images/web-server/title.png'
---

# HTTP Server

As part of CS 25200: Systems Programming, I developed a multithreaded HTTP/1.1 web server in C++. The project involved implementing socket-based network communication, HTTP request parsing, file serving, authentication, concurrency models, directory browsing, CGI execution, server statistics, and request logging. The server was built from scratch using low-level Unix networking and systems programming APIs.

## The Challenge

Modern web servers must efficiently handle client requests, serve content, manage multiple simultaneous connections, and execute server-side programs. The project required building these capabilities without relying on existing web server frameworks. The server needed to support:

- HTTP GET request handling
- Static file serving
- Basic HTTP Authentication
- Multiple concurrency models
- Dynamic directory browsing
- CGI script execution
- Server statistics tracking
- Persistent request logging

A major challenge was implementing these features directly with sockets, processes, threads, file systems, and operating system primitives while maintaining correct HTTP behavior.

## Part 1: Core HTTP Server

The first stage focused on building an iterative HTTP server capable of handling browser requests and serving files. The server listened for incoming TCP connections, parsed HTTP requests, generated appropriate response headers, and returned requested content. It also implemented HTTP status codes such as `200 OK`, `401 Unauthorized`, `403 Forbidden`, and `404 Not Found`.

Additional functionality included Basic HTTP Authentication using the RFC7617 standard. The server verified authorization headers, prompted clients for credentials when necessary, and restricted access to authenticated users. Credentials were encoded using Base64 and validated against server-side values.

![alt text](/images/web-server/simple-test.png)

![alt text](/images/web-server/complex-test.png)


The project also explored multiple concurrency strategies:

- Iterative server (single request at a time)
- Process-per-request using `fork()`
- Thread-per-request using POSIX threads
- Fixed-size thread pool with synchronized `accept()` handling

These implementations provided hands-on experience with process management, thread synchronization, and concurrent network programming.

![alt text](/images/web-server/login.png)

## Part 2: Dynamic Server Features

The second stage expanded the server beyond static file hosting.

### Directory Browsing

The server dynamically generated HTML directory listings when users requested folders instead of files. Directory contents were retrieved using `opendir()`, `readdir()`, and `stat()`, and displayed as navigable hyperlinks similar to traditional web server directory indexes. Listings also supported sorting by:

- File name
- File size
- Modification time

in both ascending and descending order through URL query parameters. 

![alt text](/images/web-server/directory.png)

### CGI Execution

The server implemented Common Gateway Interface (CGI) support, allowing executable programs and scripts to generate dynamic content.

When requests targeted the `/cgi-bin/` directory, the server:

- Forked a child process
- Configured CGI environment variables
- Set `REQUEST_METHOD`
- Passed URL parameters through `QUERY_STRING`
- Redirected program output directly to the client socket
- Executed scripts using `execvp()`

This enabled server-side programs to produce dynamic HTTP responses. 

![alt text](/images/web-server/cgn-1.png)

![alt text](/images/web-server/cgn-2.png)

![alt text](/images/web-server/finger.png)

![alt text](/images/web-server/form.png)

### Statistics and Logging

The server also included administrative monitoring pages.

The statistics page tracked:

- Server uptime
- Total request count
- Minimum request service time
- Maximum request service time
- Associated URLs for performance metrics

The logging system recorded every request, including the client host and requested resource, while persisting data across server restarts through disk-based log files.

## Results

The completed project successfully served web content, authenticated users, supported concurrent connections, generated directory listings, executed CGI applications, and provided real-time server monitoring capabilities. The implementation closely mirrored the architecture and behavior of traditional web servers while reinforcing key networking and operating-system concepts. A demo of the website made by the professor can be visited <a href="https://youtu.be/WEoSTUP3NbY">here</a> and it looks like this:

![alt text](/images/web-server/server.png)

## Conclusion

This project provided practical experience with networking, HTTP protocols, concurrent programming, process management, threading, file systems, and server-side application execution. Building a web server from scratch deepened my understanding of how modern web infrastructure operates and how operating-system services support scalable network applications. For a demo of the web server, click <a href="https://www.youtube.com/watch?v=nZz07E043S8">here</a> to see it.