---
title: 'Custom Memory Allocator'
date: 'May 14, 2026'
excerpt: 'Keywords: C, Systems Programming, Memory Management, Malloc, Data Structures'
cover_image: '/images/memory-allocator/title.png'
---

# Custom Memory Allocator

During the spring semester of my junior year, I took CS 25200: Systems Programming. One of the first major projects in the course was implementing a custom version of the C memory allocator, commonly known as `malloc`.

The goal of the project was to understand how dynamic memory allocation works under the hood by building an allocator capable of managing memory requests, tracking free blocks, and efficiently reusing previously allocated memory.

## The Challenge

Modern memory allocators must balance performance and memory efficiency while supporting arbitrary allocation and deallocation requests. Rather than requesting memory from the operating system for every allocation, allocators obtain large chunks of memory and manage them internally.

The allocator needed to support:

- Dynamic memory allocation and deallocation
- Free list management
- Block splitting
- Block coalescing
- Memory fragmentation reduction
- Efficient memory reuse

One of the most interesting challenges was implementing boundary tags and free lists that allowed neighboring memory blocks to be merged together in constant time when memory was freed.

## Implementation

The allocator was written in C and used the `sbrk()` system call to request memory from the operating system. Large chunks of memory were divided into smaller blocks that could be allocated to users as needed.

To improve performance, the allocator maintained multiple segregated free lists organized by block size. When memory was freed, adjacent free blocks were automatically coalesced to reduce fragmentation and create larger reusable blocks.

Additional optimizations included:

- Boundary tags for constant-time coalescing
- Multiple free lists for faster allocation
- Fenceposts to safely manage chunk boundaries
- Lazy allocation of additional memory from the operating system

## Results

By the end of the project, the allocator successfully supported allocation, deallocation, block splitting, coalescing, and management of multiple memory chunks retrieved from the operating system. The implementation behaved similarly to a simplified version of real-world allocators such as dlmalloc and ptmalloc while providing a deeper understanding of operating systems and memory management concepts. :contentReference[oaicite:0]{index=0}

Below is a screenshot of the grading results:

![alt text](/images/memory-allocator/results.png)

## Conclusion

This project provided valuable experience with low-level systems programming and memory management. Implementing a custom allocator offered insight into how operating systems and runtime libraries manage heap memory while reinforcing concepts such as linked lists, pointer arithmetic, fragmentation, and performance optimization.