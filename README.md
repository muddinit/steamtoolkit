# Steam Tool Kit — An application for getting Steam Achievement Data and more!


# Description 

<img src="/media/Titlescreen.png?raw=true" />

An application which lets you to make graph and table of achievements from any Steam profile(as long as profile is not private or friends-only). It also allows for browsing multiplayer games servers available from Steam server browser.


Project uses Datacharts library for chart and for ability to export it into different formats and DataTables library were used for forming server table. 

# Quick start
Node and npm is required(git is recommended).

Quick start:
```
git clone https://github.com/muddinit/steamtoolkit/
cd steamtoolkit
npm install && npm start
```

# Usage:

 **Achievement Stats Tab**

<img src="/media/AchievementTab.png?raw=true" width="960" height="540" />

 1) Enter Steam64 ID(765XXXXXXXXXXXXXX) of profile you want to request data from in Steam64 ID field. Do note that Private/Friends only profiles won't work and will emit error.
 2) Enter your own Steam API key(it can be requested and copied from https://steamcommunity.com/dev/apikey).
 3) Choose preferred output by clicking on radio button(table or chart).
 4) Press on Update button and wait for Steam API requests to complete(each one usually takes 1 second depending on your network and Steam servers). 
 5) Export Steam API data at the end if you want by pressing centre button. The data will be exported to JSON file in main folder, named after Steam64 ID and will contain dates and amount of achievements a user got on a specific date. Example of the output:

```
{"7/20/2018":16,"7/21/2018":29,"7/22/2018":2}
```

 **Chart overview**

<img src="/media/Graph.png?raw=true"/>

- Chart can be exported to PNG,JPEG,PDF or SVG format by pressing top right button on chart and picking format you need. Chart can also be printed and be shown in fullscreen mode.

 **Table overview**

<img src="/media/achievementtable.png?raw=true"/>

- Table can be sorted by clicking on name of columns. It can also be copied to clipboard and be saved in CSV format by clicking on respectful buttons. 

* Note: You can save Steam64 ID of profile and Steam API key by clicking on save button, so you won't have to write them after each startup.



 **Server Browser tab**

<img src="/media/serverbrowser.png?raw=true" />

 1) Pick your game from dropdown menu(not many games are supported yet, I plan to add more in a future.).
 2) Click on update button.
 3) You can click on row names to sort the table.
 4) Click on button in ping row to get ping and secondary table with player data which has their score and time. It can also be sortable by clicking on its rows.

<img src="/media/serverbrowserplayers.png?raw=true"/>
 

 



# TODO
- Reduce size of releases.
- Fix server browser bugs and add exporting function for it.
- Add more games to server browser dropdown menu.
- Fix tables.
- Add table of contents.

# License
This project is licensed under the terms of the MIT license.
