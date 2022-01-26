# Google Sheets Cell Blinking Script
Blinks cells in a Google Sheet that match a certain value. Useful for if you want your attention drawn to something.

## WARNING
This script **is not efficient** simply due to how it has to operate. It has to search through the *entire column that you specify once* to find what cells to blink. This cannot be worked around, at least to my knowledge, simply due to the fact that it has to find the cells in the first place.

Therefore, please only use this on small sheets. It will be insanely inefficient on any sheet of at least a moderate size.

Additionally, I do not believe it will work if you try to search more than one row at a time. If you are comfortable with JavaScript (as Google AppScript is essentially JavaScript), you can try to implement something (and if you do, *please feel welcome to submit a pull request!*). The AppScript API reference for Google Sheets is [here](https://developers.google.com/apps-script/reference/spreadsheet) if you need to find it.

## About
This is just a little project that I made for a friend who was trying to accomplish this in Google Sheets but was having a very difficult time figuring out how to. 
So, being his friend, I dove into the [Google AppScript API for Sheets](https://developers.google.com/apps-script/reference/spreadsheet) to figure out how exactly to do this (and it was a bit of an adventure). 
However, having done this, I figured I'd share it if anyone else wanted to use it. Please read the warning section above before using it.
