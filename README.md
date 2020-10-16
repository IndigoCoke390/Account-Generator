
## 🚩 Table of Contents
- [About](#-about)
- [How it works](#-howitworks)
- [Examples](#-examples)
- [Setup](#-setup)

USE AT OWN RISK

## ❓ About
I have coppied this account generator from [silvanohirtie/account-generator](https://github.com/silvanohirtie/account-generator) go cheack that out. I have fixed the bug where you generate an account but it does not move that account from stock


## How it works
This bot works by saving accounts in a .txt file and when a user uses the `/gen (account)` command it takes the account out of the stock and DMs the user that account information. After that the account gets removed from stock

## Setup
1. Type `npm i --save` in your command line to install all the modules, alternatively you can type `npm i` to install all the modules and never install them again.
2. Create a file called `.env` and put this simple code into it `TOKEN=YOUR_TOKEN` but replace the "YOUR_TOKEN" part with your bot's token, then you should be good to go.

## 🐾 Examples
/create Netflix - This will create a txt file with the name "Netflix"  
/add username1@gmail.com:password1 Netflix - This will add that account to the Netflix service  
/gen Netflix - This will take the first account in the Netflix.txt file and send it to the user  
/restock Netflix - The bot will send an @everyone message saying that Netflix' service has been restocked.  

# Account-Generator



![generating an account](https://i.ibb.co/P434fTJ/using-bot.png)


![account in DMs](https://i.ibb.co/qxTMH5z/bot-dms.png)
