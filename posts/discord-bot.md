---
title: 'Discord Bot'
date: 'July 13, 2024'
excerpt: 'Keywords: Discord Bot, Python, API Calls, Nextcord, SQL, Data Storage'
cover_image: '/images/discord-bot/discord-bot.jpeg'
---

# A.U.R.O.R.A.

Meet A.U.R.O.R.A., the Automated User Response and Operational Reconnaissance Assistant! This is a customized Discord bot! Although sarcastic, she is a helpful companion who can help you run your local Discord server!

![alt text](/images/discord-bot/boba-tea.jpg)

Please note that the comments in this bot are meant to be a joke and are not supposed to be taken seriously.  I believe that the lines in this bot are a part of its identity.  

Additionally, for this show case, everything shown is on a Silicon Mac.  As a result, the results for this bot may be different for Windows and Linux.

## Development Process

This Discord bot was made in Python utilizing Visual Studio Code.  There were several libraries that were used to create this bot which includes:
- nextcord (the discord.py[voice] alternative)
- requests (for accessing a joke API)
- yt_dlp (used to play YouTube audio)
- json (formatting purposes)
- mysql (add and access items in a database)

Shoutout to this <a href = "https://www.youtube.com/watch?v=cCiqcu2NP8I&list=PL-7Dfw57ZZVRB4N7VWPjmT0Q-2FIMNBMP&index=2"> YouTube series</a> for giving me the instructions to build this bot!

## Commands

There are a total of 32 custom commands that can be used.  They range from having the ability to add certain roles to a user, playing YouTube audio in a voice call, and showing an embed.

The commands are slash commands, which means they use a slash before the command work to work.

To see the code behind the bot, the link to the code will be <a href = "https://github.com/henryjlee729/A.U.R.O.R.A.">here</a>.  Meanwhile, down below are some highlights of the discord bot.

## /hello

This is a simple command where the bot will give a simple greeting back.  I really do wonder when Charlie Brown will successfully kick that football from Lucy's hands...

![alt text](/images/discord-bot/hello.png)

## /message

This command allows a user to send a message to anyone.  This commands needs two arguments: a user to send the message to and the message itself.  

![alt text](/images/discord-bot/message_1.png)

If a message is not specified, a default message will display instead.

![alt text](/images/discord-bot/message_2.png)

## /play

For this command to work, the user needs to be in a voice call.  Once in a voice call, a YouTube link can be send down as an argument after the command for the audio to play.  This is perfect for whenever a user has friends on a voice call.

## /embed

The /embed command showcases a simple embed.

![alt text](/images/discord-bot/embed.png)

## /store_info

This is probably the most complicated command.  This command utilizes some SQL code to store information to a database.  For this command to work, I used MAMP to work.  Before starting the bot, a procedure needs to be followed.  First, start the application.

![alt text](/images/discord-bot/store_info_step_1.png)

A new tab should open iin the browser.  Go to Tools and click on phpMyADmin.  A new tab should open up.  You may have to create a new database.

![alt text](/images/discord-bot/store_info_step_2.png)

Now everything is set up.  Using this command with an item argument should allow the bot to store that item into the database.

![alt text](/images/discord-bot/store_info_step_3.png)

For this specific example, I stored 'Hello!' in the database. 

![alt text](/images/discord-bot/store_info_step_4.png)

## /coffee_or_tea_button

With this command, a question will appear asking the user which drink they prefer with two buttons: a coffee button and a tea button.  A response will appear depending on what the user clicks on.  Please note that there is indeed a correct answer to this (and it's NOT coffee!)

![alt text](/images/discord-bot/button.png)

## /lt_friends_dropdown

This command displays a dropdown.  The user can choose an option.

![alt text](/images/discord-bot/dropdown_1.png)

Once an option is clicked on, the bot will display a message depending on what choice the user selected.

![alt text](/images/discord-bot/dropdown_2.png)