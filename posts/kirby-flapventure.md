---
title: 'Kirby''s Flapventure'
date: 'July 24, 2025'
excerpt: 'Keywords: Unity, Game Physics, C#, Animation, Game Development'
cover_image: '/images/kirby-flapventure/kirby.gif'
---

# Kirby's Flapventure

For some silly reason, I have an obsession with Kirby (probably becuase I main as Kirby in Smash Ultimate and oh man, his taunts are so adorable).  He's small, pink, and adorable and I just can't get over him.  I even have a couple of plushies.  Considering I like Kirby, I like to do art, and I want to code something, my mentor from my first internship recommended making a Flappy-bird clone.  I actually liked that idea since I can draw, code, and more importantly, get something made!

As expected, this part takes two parts: art and programming.  I make my own sprites and I followed along a tutorial on <a href = "https://www.youtube.com/watch?v=ihvBiJ1oC9U">here</a> to see how I can make my very own game and the source code to the game is <a href = "https://github.com/henryjlee729/kirby-flapventure">here</a>..

## The Art

I didn't just want to make another Flappy bird.  Sure, it was the same idea, but I wanted to use my own sprites.  I had to draw three different Kirbys to make an animation (as seen on the gif above).

![alt text](/images/kirby-flapventure/kirby_1.png)

![alt text](/images/kirby-flapventure/kirby_2.png)

![alt text](/images/kirby-flapventure/kirby_3.png)

The background was loosely based off of Kirby's Dreamland, where I wanted to give a somewhat similar vibe, but looking at it, it looks a bit generic and could have used more references.

![alt text](/images/kirby-flapventure/background.png)

I just wanted to make my own ground animation, so I came up with something a bit generic.

![alt text](/images/kirby-flapventure/ground.png)

Now, this is the part where I am most proud of.  The walls in this game are actually Gordos, which are enemies found in Kirby games.  I made a reference!

![alt text](/images/kirby-flapventure/wall.png)

## Programming

As it turns out, building a game is hard, even when following a tutorial.  I remember several times that I had to remake something because the game ended up weird when I tested it.  In any case, I used several of Unity's components, such as 2D collision detectors, prefabs, materials, and C# to write out the actual scripts since C# is a common game development.

I ended up writing five scripts: GameManager.cs, Parallax.cs, Player.cs, Spawner.cs, and Walls.cs
GameManager.cs was the core game logic, where it mixed in the sprites and actual game logic.  Parallax.cs was used to repeated the background and ground so that it appears that it is constantly moving.  Player.cs was used to code the player logic (Kirby).  Spawner.cs took care of the walls appearing and disappearing.  Walls.cs took care of the actual wall logic.

## Final Product

With all of those additions, I was very proud to see the final product.

![alt text](/images/kirby-flapventure/game.png)

It's not perfect, as the background and ground animations could be smoother and in terms of gameplay, you could spam click or the space bar to go up in the screen and just constanly float over the obstacles.  However, considering how much time and effort I poured into this project, I am very happy with how it ended up.

## Playing the Game

To play the game, go to <a href = "https://henryjlee729.github.io/kirby-flapventure-web/">here</a>.