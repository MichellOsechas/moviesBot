# MoviesBot
## A Discord bot to search for movies, which allows you to save your favorite movies and then access them in an easy and orderly way directly from your Discord server.
The Discord bot will run on your local machine.

### Features
#### Scholar Commands

`/ayuda : Una breve explicacion de como funciona el bot.

![image](https://github.com/MichellOsechas/moviesBot/assets/90647320/eb9a6e47-08af-4d03-af51-ba449aee33ce)

`/buscar-peliculas: Search for information about the movie you want. This command returns a brief description of the movie, its genre, the actors, etc.

![image](https://github.com/MichellOsechas/moviesBot/assets/90647320/482a75f3-dd4e-4001-8c60-d08d9cf539a9)

`/peliculas-favoritas: Save your favorite movies. This command allows you to save your favorite movies with only the title, to have access to them whenever you want.

![image](https://github.com/MichellOsechas/moviesBot/assets/90647320/f4c92c6f-fad9-4463-b634-c8488438e0df)

`/obtener-peliculas: Get your favorite movies. This command allows you to access all the favorite movies you have saved.

![image](https://github.com/MichellOsechas/moviesBot/assets/90647320/d0ed676a-a1ec-44ed-81d1-fb49ecfbd1d8)

### Necessary tools to run the bot
#### Windows 10
1. Download NodeJS from the official website: https://nodejs.org/es/download/. Install the LTS version.
2. Download Git for windows from the official website: https://gitforwindows.org/. Follow the steps to install git.
#### Linux
##### Node JS
1. Open your Ubuntu command line (or distribution of your choice).
2. Install cURL (a tool used for downloading content from the internet in the command-line) with: sudo `apt-get install curl`
3. Install nvm, with: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
4. To verify installation, enter: `command -v nvm` ...this should return 'nvm', if you receive 'command not found' or no response at all, close your current terminal, reopen it, and try again.
5. Install the current stable LTS release of Node.js (recommended for production applications): `nvm install --lts`.
##### Git
For the latest stable Git version in Ubuntu/Debian, enter the command:
```Bash
sudo apt-get install git
```
### Downloading the Code
In your terminal opened to the folder you want to install the bot to, run the following command:
```CMD
git clone https://github.com/gabitodev/gabitodev-bot.git
```
Enter yes and wait for the download to end. Leave your terminal open and follow the following steps.
### Bot Setup
#### Setting up a Discord Bot Account
1. Navigate to the Discord developer portal website and login with your main Discord account: https://discord.com/developers/applications.
2. Click the New Application button at the top right:
   
   ![image](https://user-images.githubusercontent.com/8563780/162317136-4373626f-9f7a-4d7f-880c-60e470c64d69.png "New Application Button")
3. Name your bot and click Create. This should be named after your scholarship program.
4. Go to the Bot section on the left-side menu:

   ![image](https://user-images.githubusercontent.com/8563780/162320423-275012d1-dc06-4c10-b954-b3cd86322c2c.png "Bot Section")
5. In the bot section click the Add Bot button:

   ![image](https://user-images.githubusercontent.com/8563780/162321199-e5b00e88-4720-45c4-86c1-0da4bf47ebf1.png "Add Bot Button")
6. Name your bot and proceed to reset the bot token:

   ![image](https://user-images.githubusercontent.com/8563780/162322546-7119e7b5-fe30-42e2-9369-4f695f87d3d7.png)
7. As soon you click reset token you need to copy the new generated token and save it for now in notepad. You will need this for later.
#### Create the URL to Invite your Bot
1. Go to the OAuth2 page from the left menu:

   ![image](https://user-images.githubusercontent.com/8563780/162323888-77958a62-0aab-403a-9f56-1688b30ccdef.png)
2. Copy your client ID and save it in your notepad:

   ![image](https://user-images.githubusercontent.com/8563780/162325239-fde9fef0-9e1f-4a39-b92e-a297c73991a7.png)
3. Click on the URL Generator and select the bot and applications.commands scopes. The first gives the account bot privileges and the second allows for slash commands.

   ![image](https://user-images.githubusercontent.com/8563780/162325504-68045770-e28e-404c-a441-b9192f0a55a5.png)
4. Select all the permissions the bot needs to run, shown below:

   ![image](https://user-images.githubusercontent.com/8563780/162326207-94d51f08-0021-43dd-8fe8-6971db4d435b.png)
5. Copy the bottom URL and paste it in the browser of your preference. This will bring you to a Discord menu to select which server to add your bot to. Only servers you have permissions to add bots on will be displayed. Select your server and confirm.

   ![image](https://user-images.githubusercontent.com/8563780/162326049-9fcd4784-ba2d-4235-81e3-41cd3735331d.png)

Now the bot is in your discord sever but at the moment it doesn't work. We need to setup the code for the bot first.
### Setting up de code for the Bot
#### Filling out the env
First, you will need to fill out your env file. The bot comes with an example.env file. Rename to env.
You will need to add your bot token, the client ID for the bot, the scholar role ID of your scholars in your discord server and the guild ID of your server (ID of your discord server).
See the `example.env` file for more information.
#### Install the necessary dependencies
In your terminal where you bot was downloaded, run the followind command:
```CMD
npm install
```
If the process fail, try again.
This will install all of the necessary dependencies to run the bot.
#### Create the tables
Run the following command: `npm run create-tables`.
This structures the database to work with the bot.

## Run the bot
Now that we have all set run in your terminal the following command to put the bot online:
```CMD
npm run start
```
This will launch the bot and now you and your scholars can use it in your discord server.
