<b>CS 498 – Data Visualization – 7-3-3 Narrative Visualization Essay</b>

By: Neetu Ghota (nghota2@illinois.edu)

View Visualization @ https://neetughota.github.io/    [best viewed in Google Chrome]

<b>About</b>

The visualization provides a way to look the results of the 2018/2019 NBA Regular season. Data for the project was mainly put together manually by scraping different statistics websites that publish NBA data including NBA’s official website (https://stats.nba.com/). Data used includes different key stats on player performance that the NBA collects during its regular season including Points per Game (PPG), Rebounds per Game (RPG), Steals per Game (SPG), Assists per Game (APG), and Minutes per Game (MPG). In addition, the data also includes profile data on the players themselves including Name, Age, College and draft ratings. 
The webpage uses a drill-down story for visualization. Users can look at all the players who played in the league during the 2018/2019 Regular Season along with their key regular season stats in a single view. From there on, they can further drill down into individual players they are interested in and view more information on their performance and profile. 

Scenes
- The title of the visualization is placed on the top of the visualization so that users know that they are viewing 2018/2019 NBA Regular Season data all the time
- The initial scene is a table that allows users to look at key statistics that the NBA tracks during regular season for all players who participated in the 2018/2019 NBA Regular Season. The stats displayed in the initial scene includes:
    * Player Name
    * The (last) Team that the player played for in the 2018/19 season
    * The Position the player played for in the 2018/19 season. If the player played in multiple positions, these positions are separated by an “-“
    * Player’s Age
    * Number of Games the player played during the 2018/2019 season
    * Player’s Average Minutes Per Game (MPG)
    * Player’s overall Usage Percentage
    * Player’s Offensive Proficiency Rating, as calculated by the NBA
    * Player’s Defensive Proficiency Rating, as calculated by the NBA
    * Player’s Points Per Game (PPG)
    * Player’s Assists Per Game (APG)
    * Player’s Rebounds Per Game (RPG)
    * Player’s Steals Per Game (SPG)

Since there are more than 600 individual players who played in the NBA during the 2018/2019 season, the table allows the user to scroll down to find a player they are interested in or directly search for them using the search box at the top. In addition, the user has the ability to click on each row header to sort the data in ascending or descending order based on that particular column.
- Once the user has identified a player of interest, he/she can further analyze the player’s performance by using the clicking on the player and selecting one of the two drilldown options available: Player Statistics and Teammate Comparison
- Player Statistics Drilldown: This scene allows the user to look at additional details of the Player and his performance during the 2018/2019 Regular Season. These details are presented graphically using image files, donut charts and bar graphs
    * The image on the left side of the first drill down allows the user to see the players latest picture, as published by the NBA
    * Immediately to the right of the player image are 3 donut charts that allow the user to visually review three key statistic related to the player’s shot efficiency: 
    * The first donut chart allows the user to analyze attempts by each type of shot allowed in the NBA viz. Free Throws, 2 Points, and 3 Points 
    * The second donut chart allows the user to analyze the number of attempts from the first chart that the player converted into points 
    * The third donut chart allows the user to analyze the player’s shot range from distances in 6 categories, viz. less than 5 feet, 5 to 9 feet, 10 to 14 feet, 15 to 19 feet, 20 to 24 feet and 25 to 29 feet
    * Below the player image, user can review key performance statistic that the NBA keeps for each of its players including speed, pass, defensive rebounding, offensive rebounding, dunk capability, field goal capability, offensive IQ, defensive IQ, height, endurance, and turnover
- Teammate Comparison: This scene allows the user to compare the selected player’s performance against his teammates in four categories: Points per Game, Rebounds per Game, Assists per Game, and Steals per Game. This data is presented as a stacked bar chart which allows the user to view all the data per player in a single bar and compare him to his teammates easily. 

<b>Annotations</b>

Multiple annotations have been used in the visualization to make it easier for the users to follow the data that is being presented in the various scenes and allows them to further investigate. 
- Tooltips added to the radio buttons allow the user to review what data is available in each additional scene that is available for further drilldown. 
- In the Player Statistics scene, the donut charts have value labels and legends displayed to indicate the type of data that the user is visualizing. This easily allows the user to further investigate a statistic he or she is interested in. For e.g. clicking on a particular color within the first donut chart allows the user to review the number of attempts for a particular category while the second donut chart allows the user to confirm how many of those attempts were converted into actual points by the players. 

<b>Triggers and Parameters</b> 

Multiple parameters and triggers have been placed within the visualization that changes the data presented to the user for analysis. Clicking on any column sort the entire data based on that particular column either in ascending or descending order. This allows the user to view the regular season leaders in each category he/she is interested in. Search feature is available for the user to search for particular players without scrolling through all 600+ rows of data available in the visualization. Clicking on the radio buttons allow users to change the variable that can be viewed from shot efficiency to performance comparison with other players of interest. 
