# Uni Assist

## Table of Contents

- [Project Description](#project-description)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Unit Tests](#unit-tests)
- [Referencing](#referencing)
- [Contributions](#contributions)

## Project Description

Uni Assist is a user-friendly solution to university assessment help. Provides AI chat assistant as well as a public discussion board forum and uses server-side authenticated login and registrations.

## Architecture

The web application follows a client-server architecture, through API requests and HTTP.
Note that normal web application behaviour may be affected by ad-blocking browser extensions.

## Getting Started

To launch the web application, follow these steps:

1. Create a virtual environment (recommended)


```shell
python3 -m venv venv
source venv/bin/activate
```

2. Install the dependencies:

```shell
pip3 install -r requirements.txt
```

3. Start the application:

```shell
python3 app.py
```

5. Open your web browser and access the application at `http://127.0.0.1:5001/`.

## Unit Tests

The web application includes unit tests to ensure its functionality and reliability. To run the unit tests, follow these steps:

1. Install the dependencies (if not already done):

```shell
pip3 install -r requirements.txt
```

2. Run the unit tests:

```shell
python3 tests.py
```

The test suite will execute and display the results in the console.

.

## Referencing

Tooltips with references are visible where images have been taken from other creators. All other assets were created by student 23192725, Wei Chong.


## Contributions

The contributions and review of this project were made by the following contributing students:

| Contributor     | Student Number |
|-----------------|----------------|
| Wei Chong       | 23192725       |
| Abhinav Rajaram | 23082057       |
| Charles Watson  | 23196696       |

Please refer to the commit logs below for a detailed history of the contributions and reviews

## Git / contribution logs
```
* 6d7571e  (origin/proper_history) stores and retrieves chat history (Abhinav Rajaram)
* 8d8c5c0  (HEAD -> main, origin/main, origin/HEAD) cleaned up in-line script (Wei)
* cc221cf  profile images now display in search view and works with darkmode also. (Wei)
* 8503c7e  fixed chat context break (Wei)
*   4cd4c2a  Merge pull request #51 from gucciGenji9/darkmode_hotfix (Charles)
|\  
| * de6da37  (origin/darkmode_hotfix, darkmode_hotfix) added dark mode support for filter ui element (charles)
|/  
*   1dca347  Merge pull request #50 from gucciGenji9/search-attempt-2 (Charles)
|\  
| * e6dad7c  (origin/search-attempt-2, search-attempt-2, a) added search script and UI elements. (charles)
|/  
* e8b3088  fixed topic styling (Wei)
* c1ed492  profile picture registration repaired (Wei)
* 6acccf1  readme created (Wei)
* 42ae41c  added unit tests (Wei)
* e7297d6  stray console logs removed, autocomplete functionality for contact, login and register pages enabled (Wei)
* 29175eb  tooltip referencing added to UWA logos and darkmode icons (Wei)
* 8d4aa9b  new default profile pic designed (Wei)
* d1984e2  alt text removed from inputs for html validation (Wei)
* 2f38ce8  hrefs reformatted for html validation (Wei)
* e7922b0  changes to improve html validation results. jinja templating still throwing errors (Wei)
* 62a1c61  footer mobile responsiveness improved (Wei)
* 1e23373  navbar responsiveness improved (Wei)
* 6e3a470  all mobile unfriendly pages made mobile responsive, homepage navigation added to compressed navbar (Wei)
* 7c148d6  responsiveness testing (Wei)
* 4c0f51c  (origin/save_history) Added grey container for discussion apge (Abhinav Rajaram)
*   8106c34  catching up (Abhinav Rajaram)
|\  
| * 7c8b50c  fixed broken carousel scroll (both auto and manual scroll) (Wei)
* | 52c992c  underlined topic title (Abhinav Rajaram)
|/  
* e0d356e  responsiveness added to most pages and navbar collapse (Wei)
* 7a1570d  topic_template.html comments, reformatting, alt text (Wei)
* 816a985  pricing.html comments, reformatting, alt text (Wei)
* 95a7f89  new_topic.html comments, reformatting, alt text (Wei)
* f20eb9b  login.html comments, reformatting, alt text (Wei)
* 733efcb  homepage.html comments, reformatting, alt text (Wei)
* fc139f6  discussion.html comments and reformatting (Wei)
* f4d85a5  chat.html comments and reformatting (Wei)
* 84f0854  base.html alt text added (Wei)
* 5f16371  base.html comments and reformatting (Wei)
* 6d7dbc0  maxwidth added to chat container, darkmode extended to chat labels, AI pfp changed to yellow for dark-mode proofing (Wei)
* ef2368f  resized topic headers (Wei)
* 902b33c  pfp routing debugged (Wei)
* f7ecaf1  profile pic disappearing fixed (Wei)
* 529340a  debugging missing profile pic in header (Wei)
* 1547b27  further clarifying comments added to app.py (Wei)
*   a2049df  merge resolution (Wei)
|\  
| * baefc08  minor bug (Abhinav Rajaram)
| *   4b9a017  Merge branch 'main' of https://github.com/gucciGenji9/chat_bot (Abhinav Rajaram)
| |\  
| * | cc67e15  checks to see if user exists otherwise spits error, fixed bug with default pfp (Abhinav Rajaram)
* | | c00fcb4  comments added to app.py (Wei)
| |/  
|/|   
* | ca0d320  display registration error message, usernames made unique (Wei)
* | e91d816  debug (Wei)
|/  
* 3ea087d  decommissioned sample data population (Wei)
*   a40da28  Merge branch 'main' of https://github.com/gucciGenji9/chat_bot Condensed python code partially (Wei)
|\  
| * 28421e4  if no image is uploaded default picture is used (Abhinav Rajaram)
* | c30eeed  condensed app.py code (Wei)
|/  
* 76c3112  javascript fully commented and cut down (Wei)
* 56f0430  navbar reformatted (Wei)
*   a34d7fd  Merge branch 'css_condensation' (Wei)
|\  
| * d70061d  styling adjustments to pricing and AI chat, css condensed further (Wei)
| * 533f133  fixed chat box ui - was destroyed by pfp introduction. css and javascript condensed (Wei)
* | f161876  Had an anuerysm and a freakout but all good fixed the ai profile pic being too big (Abhinav Rajaram)
* |   4ec8118  Merge pull request #37 from gucciGenji9/charles-2 (Charles)
|\ \  
| |/  
|/|   
| * 666b551  modified base.html (charles)
| * 85f8eff  added redirects away from ai chat if not signed in (charles)
| * e79dd50  added logic for signin navbar items (charles)
| * 7567644  hide logout button unless logged in (charles)
|/  
* b52e891  headers reformatted (Wei)
* e7d13fc  removed unused topical code (Wei)
* 3545ecc  all pages reformatted with styling, styling condensed (Wei)
* f91e89a  footer reformatted, contact form adjusted to clear input, check for valid email and check for filled form (Wei)
* 4168e18  forum database added to gitignore, new discussion routing fixed, styling added to discussion board, removed seconds from timestamp (Wei)
* 59e1406  username resized (Wei)
* ec8ad94  login success now redirects to homepage url, not just returning template and staying on /login (Wei)
* d0c31df  navbar username display adjusted for responsiveness and visual aesthetics (Wei)
* 09664f1  navbar changes: removed hover effect from username, border radius for profile pic, alignment changes (Wei)
* 7dc5388  UIUX updated for register and login pages; clearer labelling and themed aesthetics (Wei)
* 60558a1  new usr and pw graphics (Wei)
* 5e5db9e  login restyling and uiux changes to login form (Wei)
* 045c339  git ignore updated (Wei)
* 41c8e8c  styling adjustments (Wei)
* 04f0c7e  Delete .DS_Store (weihyac)
* f5f11ca  Delete .idea directory (weihyac)
* fa15124  Delete __pycache__ directory (weihyac)
* 08bb38c  Delete .vscode directory (weihyac)
* 79fbb71  root routing added to navbar (Wei)
* ac707da  changes adjusted to facilitate absolute addresses (Wei)
* d9ff2ed  routing for discussion board WITH login functionality added (Wei)
* 9d7bb2f  routing from specific discussion area to login fixed (Wei)
* 465fc54  templating added to topic template (Wei)
*   c9d48d6  Merge pull request #27 from gucciGenji9/logout (Abhinav Rajaram)
|\  
| * c4e60e1  added logout functionality and default user profile picture (Abhinav Rajaram)
|/  
* 855eb1e  condensed dark-mode code (Wei)
* 2aeece6  contact form confirmation with personalised name inclusion added (Wei)
* 3367d7a  comments added to homepage js file (Wei)
*   2ce1093  Merge pull request #26 from gucciGenji9/cleanup (Charles)
|\  
| * ec8415c  rf, no logic change, acknowledge bad api key usage (charles)
| * db7864d  removed unused script (charles)
| * fdc8d2f  rf, line length legibility to < 100 chars (charles)
| * eb23e5f  rf, line lengths to < 100 chars (charles)
| * 3eadcdc  rf, legibility changes, no logic change (charles)
| * 4f73244  rf, added comment explaining animated spans (charles)
| * 55117ca  refactor, remove console.log (charles)
|/  
* 7466f9c  (origin/search) repositioned pricing page (Wei)
* 92b27fb  updated register page to reflect base template (Wei)
*   ef020f5  Merge pull request #23 from gucciGenji9/message_pfp (Abhinav Rajaram)
|\  
| * 3261c05  working (Abhinav Rajaram)
| * 9115aad  profile picture now shows up next each chat you send. Still need to fix up the sizing of it (Abhinav Rajaram)
|/  
*   c1a364c  Merge pull request #21 from gucciGenji9/user_pfp (Abhinav Rajaram)
|\  
| * e0c5899  made it work by using relative addressing instead of absoulte addressing maybe due to permission issues (Abhinav Rajaram)
| * 4051452  have a look at this added code to be able to save in the server (Abhinav Rajaram)
* | 9092779  pricing table borders adjusted (Wei)
* | e316b71  pricing restyling (Wei)
* | 6f5c247  toggle position made responsive, chat bot temperature reduced. (Wei)
* | 4fddc01  removed excess graphics (Wei)
* | 91258de  darkmode toggler implemented, send button fixed (Wei)
* | 14519e8  try for free button functionality added (Wei)
|/  
*   6629d15  Merge pull request #20 from gucciGenji9/username_display (Abhinav Rajaram)
|\  
| * f2a9545  Much easier than expected username now shows in the navbar. Example where chatgpt is not the best (Abhinav Rajaram)
|/  
* 811ee22  added typing animation for AI, displays user question immediately, and response when done, and cursor now changes to pointer when hovering UWA logo (Wei)
* 905d3d3  debugging chat responses (Wei)
* 40a6b23  moved to davinci version 3 for more coherent and reliable responses (Wei)
* cf98d40  chat context for longer conversations fixed, max tokens increased (Wei)
* b97f969  adjusted temperature so casual conversation  no longer breaks it, adjusted context mechanism to work for longer chats (Wei)
* 6bdf629  text field now clears when message is sent (Wei)
* 6caf804  added placeholder text when api doesn't return text - try again message (Wei)
* 46a5583  problem where AI would send prepend a question mark if your question lacked one, fixed (Wei)
* c7015b4  minor adjustments to ui, new chatbot styles moved to styles.css (Wei)
* 9fe0e5f  restyling from basic list to iMessage-inspired chat interface (Wei)
* b25807a  added AI chat context - now considers both its own responses and your questions from earlier in the chat (Wei)
* 87c3884  pricing page redesign (Wei)
* a44f603  small viewport formatting errors resolved (Wei)
| * c97b837  (origin/username) do not merge failed attemt try again with cookies (Abhinav Rajaram)
|/  
* 501ccd5  footer links functionality updated (Wei)
* 9230303  formatting adjustments to homepage for smaller viewport (Wei)
* 939e41f  entire template collection converted into extensions of base.html and everything is now flask-run, not just login. Routing for every single pageadded, other minor adjustments. (Wei)
* 5033123  added requirements.txt file - contains dependencies. install via 'pip3 install -r requirements.txt' (Wei)
* 579e58f  discussion forum routing fixed (Wei)
* acd9b75  gitignore file constructed with jetbrains ide defaults from github, database, python defaults from github. (Wei)
*   66653bd  Resolved merge conflicts (Wei)
|\  
| *   14a26e5  Merge pull request #17 from gucciGenji9/discsussion_creation (Abhinav Rajaram)
| |\  
| | * 06bbdc3  added discussion feature. newtopic, topic, responses (Abhinav Rajaram)
| |/  
| * 020b476  bugfix, added hrefs for subpages to navbar (charles)
| *   98b1152  Merge pull request #16 from gucciGenji9/pricing (Charles)
| |\  
| | * b21d4a4  removed unused html (charles)
| | * 9247d30  styled pricing page (charles)
| | * abe3a1c  built out pricing page (charles)
| | * 5c9bdf9  modifying pricing, set up navbar and base styling (charles)
| | * a9a6705  created pricing page file (charles)
| |/  
| * a23fd77  Update README.md (Charles)
| * 4fbe326  Update README.md (Charles)
* | 3a2c43b  contact form response added: 'thanks for reaching out, [name], etc' (Wei)
* | 6221f6a  features with animations added, new favicon created and assigned. (Wei)
* | 0fee007  added functionality to contact quicklink in footer (Wei)
* | 8f66f41  added contact form, and linked to contact button, added arrow animation and reformatted footer (Wei)
* | f523a30  css cleaned up and organised, opacity of background animation reduced (Wei)
* | e9486e3  finished clearing unused graphics (Wei)
* | e028302  carousel autoscroll slowed down (Wei)
* | 655933a  animation reconfigured - was disabling try for free button when passing through it (Wei)
* | 51090d5  testimonial files added (Wei)
* | 05bd0f9  added footer, funny css background animations, updated testimonials visually, added fast carousel  autoscroll (Wei)
* | f6ef721  testimony images added - AI generated people. (Wei)
* | 90e6c48  added uniassist logo to header with colour-change animation, changed header text to white, added testimonial carousel (Wei)
* | 09bafa0  css button and overall homepage styling (Wei)
* | f9d809a  debugging routing system (Wei)
* | 25045bc  header adjusted to reflect new routing system. (Wei)
* | c399e02  routing from links in navbar added in python flask file, renamed to app.py bc it no longer just does auth. (Wei)
* | 774c2f5  homepage copywriting added, 'try for free' button added. (Wei)
* | 93250db  homepage basic setup complete - matching styling + linked to by uni assist header item (Wei)
|/  
* 02332d8  functionality added to send button (Wei)
* 8aabe7a  debugging storage of user_id (Wei)
* 1f86ae8  user id now stored in localStorage after successful login, for identification of user during website interaction (Wei)
* d8ad20e  login and register navbars colour-updated. (Wei)
* 8a40feb  navbar changed to yellow, with blue hover - matches uwa logo better (Wei)
* e9c19f4  header resized in index, login and register pages. (Wei)
* f89cf53  UWA logo resized in header (Wei)
* b33e254  test databases deleted; no longer needed. (Wei)
* dc646b9  UWA favicon added to login and register pages, UWA logo added to new static directory for flask file access (Wei)
* 1bab840  'user' changed to 'You', 'response' changed to 'AI Assistant. Display reformatted for visual separation. (Wei)
*   edcbcc1  Merge pull request #15 from gucciGenji9/styling (Charles)
|\  
| * 8b19b5d  added logo redirect (charles)
* | df7433c  Merge pull request #14 from gucciGenji9/styling (Charles)
|\| 
| * a5fffef  updated css (charles)
| * 908d3f6  moved uwa logo to navbar (charles)
|/  
*   b68496f  Merge pull request #8 from gucciGenji9/website_logins (weihyac)
|\  
| * 9c41c3b  headers added w/ basic and hover styles, renamed to Uni Assist, logins implemented with flask and database (Wei)
|/  
* 46e1fc5  added UWA favicon (Charles)
* 767d6be  reworded various elements (Charles)
* d825431  Create README.md (Charles)
*   62713e1  Merge pull request #3 from gucciGenji9/abhinav_session (Abhinav Rajaram)
|\  
| | * b4c8ce0  (origin/abhinav_session) made send work (Abhinav Rajaram)
| |/  
| * a82d9b7  added history function, added 'enter' function, did some css for history, added clear history function (Abhinav Rajaram)
|/  
*   8e28be2  Merge pull request #2 from weihyac/main (Charles)
|\  
| * 79eafe0  UWA logo added and resized (Wei)
| * 2b8a40c  font size and weight adjusted, chat answer div changed to h2 & reworded (Wei)
| * a5825b8  margin added to full UI and chat answer (Wei)
| * b76b24b  Added bootstrap CDNs (weihyac)
|/  
* e50bfb0  random (Abhinav Rajaram)
*   77e03ad  Merge pull request #1 from gucciGenji9/styling (Charles)
|\  
| * 0c9942b  created stylesheet and basic styling (Charles)
|/  
* fa4ac38 changed api key
* 940785e Created files and added connection to chatgpt
* 3f094ff  mild discussion board restyling (Wei)
*   8106c34  catching up (Abhinav Rajaram)
|\  
| * 7c8b50c  fixed broken carousel scroll (both auto and manual scroll) (Wei)
* | 52c992c  underlined topic title (Abhinav Rajaram)
|/  
* e0d356e  responsiveness added to most pages and navbar collapse (Wei)
* 7a1570d  topic_template.html comments, reformatting, alt text (Wei)
* 816a985  pricing.html comments, reformatting, alt text (Wei)
* 95a7f89  new_topic.html comments, reformatting, alt text (Wei)
* f20eb9b  login.html comments, reformatting, alt text (Wei)
* 733efcb  homepage.html comments, reformatting, alt text (Wei)
* fc139f6  discussion.html comments and reformatting (Wei)
* f4d85a5  chat.html comments and reformatting (Wei)
* 84f0854  base.html alt text added (Wei)
* 5f16371  base.html comments and reformatting (Wei)
* 6d7dbc0  maxwidth added to chat container, darkmode extended to chat labels, AI pfp changed to yellow for dark-mode proofing (Wei)
* ef2368f  resized topic headers (Wei)
* 902b33c  pfp routing debugged (Wei)
* f7ecaf1  profile pic disappearing fixed (Wei)
* 529340a  debugging missing profile pic in header (Wei)
* 1547b27  further clarifying comments added to app.py (Wei)
*   a2049df  merge resolution (Wei)
|\  
| * baefc08  minor bug (Abhinav Rajaram)
| *   4b9a017  Merge branch 'main' of https://github.com/gucciGenji9/chat_bot (Abhinav Rajaram)
| |\  
| * | cc67e15  checks to see if user exists otherwise spits error, fixed bug with default pfp (Abhinav Rajaram)
* | | c00fcb4  comments added to app.py (Wei)
| |/  
|/|   
* | ca0d320  display registration error message, usernames made unique (Wei)
* | e91d816  debug (Wei)
|/  
* 3ea087d  decommissioned sample data population (Wei)
*   a40da28  Merge branch 'main' of https://github.com/gucciGenji9/chat_bot Condensed python code partially (Wei)
|\  
| * 28421e4  if no image is uploaded default picture is used (Abhinav Rajaram)
* | c30eeed  condensed app.py code (Wei)
|/  
* 76c3112  javascript fully commented and cut down (Wei)
* 56f0430  navbar reformatted (Wei)
*   a34d7fd  Merge branch 'css_condensation' (Wei)
|\  
| * d70061d  styling adjustments to pricing and AI chat, css condensed further (Wei)
| * 533f133  fixed chat box ui - was destroyed by pfp introduction. css and javascript condensed (Wei)
* | f161876  Had an anuerysm and a freakout but all good fixed the ai profile pic being too big (Abhinav Rajaram)
* |   4ec8118  Merge pull request #37 from gucciGenji9/charles-2 (Charles)
|\ \  
| |/  
|/|   
| * 666b551  modified base.html (charles)
| * 85f8eff  added redirects away from ai chat if not signed in (charles)
| * e79dd50  added logic for signin navbar items (charles)
| * 7567644  hide logout button unless logged in (charles)
|/  
* b52e891  headers reformatted (Wei)
* e7d13fc  removed unused topical code (Wei)
* 3545ecc  all pages reformatted with styling, styling condensed (Wei)
* f91e89a  footer reformatted, contact form adjusted to clear input, check for valid email and check for filled form (Wei)
* 4168e18  forum database added to gitignore, new discussion routing fixed, styling added to discussion board, removed seconds from timestamp (Wei)
* 59e1406  username resized (Wei)
* ec8ad94  login success now redirects to homepage url, not just returning template and staying on /login (Wei)
* d0c31df  navbar username display adjusted for responsiveness and visual aesthetics (Wei)
* 09664f1  navbar changes: removed hover effect from username, border radius for profile pic, alignment changes (Wei)
* 7dc5388  UIUX updated for register and login pages; clearer labelling and themed aesthetics (Wei)
* 60558a1  new usr and pw graphics (Wei)
* 5e5db9e  login restyling and uiux changes to login form (Wei)
* 045c339  git ignore updated (Wei)
* 41c8e8c  styling adjustments (Wei)
* 04f0c7e  Delete .DS_Store (weihyac)
* f5f11ca  Delete .idea directory (weihyac)
* fa15124  Delete __pycache__ directory (weihyac)
* 08bb38c  Delete .vscode directory (weihyac)
* 79fbb71  root routing added to navbar (Wei)
* ac707da  changes adjusted to facilitate absolute addresses (Wei)
* d9ff2ed  routing for discussion board WITH login functionality added (Wei)
* 9d7bb2f  routing from specific discussion area to login fixed (Wei)
* 465fc54  templating added to topic template (Wei)
*   c9d48d6  Merge pull request #27 from gucciGenji9/logout (Abhinav Rajaram)
|\  
| * c4e60e1  added logout functionality and default user profile picture (Abhinav Rajaram)
|/  
* 855eb1e  condensed dark-mode code (Wei)
* 2aeece6  contact form confirmation with personalised name inclusion added (Wei)
* 3367d7a  comments added to homepage js file (Wei)
*   2ce1093  Merge pull request #26 from gucciGenji9/cleanup (Charles)
|\  
| * ec8415c  rf, no logic change, acknowledge bad api key usage (charles)
| * db7864d  removed unused script (charles)
| * fdc8d2f  rf, line length legibility to < 100 chars (charles)
| * eb23e5f  rf, line lengths to < 100 chars (charles)
| * 3eadcdc  rf, legibility changes, no logic change (charles)
| * 4f73244  rf, added comment explaining animated spans (charles)
| * 55117ca  refactor, remove console.log (charles)
|/  
* 7466f9c  (origin/search) repositioned pricing page (Wei)
* 92b27fb  updated register page to reflect base template (Wei)
*   ef020f5  Merge pull request #23 from gucciGenji9/message_pfp (Abhinav Rajaram)
|\  
| * 3261c05  working (Abhinav Rajaram)
| * 9115aad  profile picture now shows up next each chat you send. Still need to fix up the sizing of it (Abhinav Rajaram)
|/  
*   c1a364c  Merge pull request #21 from gucciGenji9/user_pfp (Abhinav Rajaram)
|\  
| * e0c5899  made it work by using relative addressing instead of absoulte addressing maybe due to permission issues (Abhinav Rajaram)
| * 4051452  have a look at this added code to be able to save in the server (Abhinav Rajaram)
* | 9092779  pricing table borders adjusted (Wei)
* | e316b71  pricing restyling (Wei)
* | 6f5c247  toggle position made responsive, chat bot temperature reduced. (Wei)
* | 4fddc01  removed excess graphics (Wei)
* | 91258de  darkmode toggler implemented, send button fixed (Wei)
* | 14519e8  try for free button functionality added (Wei)
|/  
*   6629d15  Merge pull request #20 from gucciGenji9/username_display (Abhinav Rajaram)
|\  
| * f2a9545  Much easier than expected username now shows in the navbar. Example where chatgpt is not the best (Abhinav Rajaram)
|/  
* 811ee22  added typing animation for AI, displays user question immediately, and response when done, and cursor now changes to pointer when hovering UWA logo (Wei)
* 905d3d3  debugging chat responses (Wei)
* 40a6b23  moved to davinci version 3 for more coherent and reliable responses (Wei)
* cf98d40  chat context for longer conversations fixed, max tokens increased (Wei)
* b97f969  adjusted temperature so casual conversation  no longer breaks it, adjusted context mechanism to work for longer chats (Wei)
* 6bdf629  text field now clears when message is sent (Wei)
* 6caf804  added placeholder text when api doesn't return text - try again message (Wei)
* 46a5583  problem where AI would send prepend a question mark if your question lacked one, fixed (Wei)
* c7015b4  minor adjustments to ui, new chatbot styles moved to styles.css (Wei)
* 9fe0e5f  restyling from basic list to iMessage-inspired chat interface (Wei)
* b25807a  added AI chat context - now considers both its own responses and your questions from earlier in the chat (Wei)
* 87c3884  pricing page redesign (Wei)
* a44f603  small viewport formatting errors resolved (Wei)
| * c97b837  (origin/username) do not merge failed attemt try again with cookies (Abhinav Rajaram)
|/  
* 501ccd5  footer links functionality updated (Wei)
* 9230303  formatting adjustments to homepage for smaller viewport (Wei)
* 939e41f  entire template collection converted into extensions of base.html and everything is now flask-run, not just login. Routing for every single pageadded, other minor adjustments. (Wei)
* 5033123  added requirements.txt file - contains dependencies. install via 'pip3 install -r requirements.txt' (Wei)
* 579e58f  discussion forum routing fixed (Wei)
* acd9b75  gitignore file constructed with jetbrains ide defaults from github, database, python defaults from github. (Wei)
*   66653bd  Resolved merge conflicts (Wei)
|\  
| *   14a26e5  Merge pull request #17 from gucciGenji9/discsussion_creation (Abhinav Rajaram)
| |\  
| | * 06bbdc3  added discussion feature. newtopic, topic, responses (Abhinav Rajaram)
| |/  
| * 020b476  bugfix, added hrefs for subpages to navbar (charles)
| *   98b1152  Merge pull request #16 from gucciGenji9/pricing (Charles)
| |\  
| | * b21d4a4  removed unused html (charles)
| | * 9247d30  styled pricing page (charles)
| | * abe3a1c  built out pricing page (charles)
| | * 5c9bdf9  modifying pricing, set up navbar and base styling (charles)
| | * a9a6705  created pricing page file (charles)
| |/  
| * a23fd77  Update README.md (Charles)
| * 4fbe326  Update README.md (Charles)
* | 3a2c43b  contact form response added: 'thanks for reaching out, [name], etc' (Wei)
* | 6221f6a  features with animations added, new favicon created and assigned. (Wei)
* | 0fee007  added functionality to contact quicklink in footer (Wei)
* | 8f66f41  added contact form, and linked to contact button, added arrow animation and reformatted footer (Wei)
* | f523a30  css cleaned up and organised, opacity of background animation reduced (Wei)
* | e9486e3  finished clearing unused graphics (Wei)
* | e028302  carousel autoscroll slowed down (Wei)
* | 655933a  animation reconfigured - was disabling try for free button when passing through it (Wei)
* | 51090d5  testimonial files added (Wei)
* | 05bd0f9  added footer, funny css background animations, updated testimonials visually, added fast carousel  autoscroll (Wei)
* | f6ef721  testimony images added - AI generated people. (Wei)
* | 90e6c48  added uniassist logo to header with colour-change animation, changed header text to white, added testimonial carousel (Wei)
* | 09bafa0  css button and overall homepage styling (Wei)
* | f9d809a  debugging routing system (Wei)
* | 25045bc  header adjusted to reflect new routing system. (Wei)
* | c399e02  routing from links in navbar added in python flask file, renamed to app.py bc it no longer just does auth. (Wei)
* | 774c2f5  homepage copywriting added, 'try for free' button added. (Wei)
* | 93250db  homepage basic setup complete - matching styling + linked to by uni assist header item (Wei)
|/  
* 02332d8  functionality added to send button (Wei)
* 8aabe7a  debugging storage of user_id (Wei)
* 1f86ae8  user id now stored in localStorage after successful login, for identification of user during website interaction (Wei)
* d8ad20e  login and register navbars colour-updated. (Wei)
* 8a40feb  navbar changed to yellow, with blue hover - matches uwa logo better (Wei)
* e9c19f4  header resized in index, login and register pages. (Wei)
* f89cf53  UWA logo resized in header (Wei)
* b33e254  test databases deleted; no longer needed. (Wei)
* dc646b9  UWA favicon added to login and register pages, UWA logo added to new static directory for flask file access (Wei)
* 1bab840  'user' changed to 'You', 'response' changed to 'AI Assistant. Display reformatted for visual separation. (Wei)
*   edcbcc1  Merge pull request #15 from gucciGenji9/styling (Charles)
|\  
| * 8b19b5d  added logo redirect (charles)
* | df7433c  Merge pull request #14 from gucciGenji9/styling (Charles)
|\| 
| * a5fffef  updated css (charles)
| * 908d3f6  moved uwa logo to navbar (charles)
|/  
*   b68496f  Merge pull request #8 from gucciGenji9/website_logins (weihyac)
|\  
| * 9c41c3b  headers added w/ basic and hover styles, renamed to Uni Assist, logins implemented with flask and database (Wei)
|/  
* 46e1fc5  added UWA favicon (Charles)
* 767d6be  reworded various elements (Charles)
* d825431  Create README.md (Charles)
*   62713e1  Merge pull request #3 from gucciGenji9/abhinav_session (Abhinav Rajaram)
|\  
| | * b4c8ce0  (origin/abhinav_session) made send work (Abhinav Rajaram)
| |/  
| * a82d9b7  added history function, added 'enter' function, did some css for history, added clear history function (Abhinav Rajaram)
|/  
*   8e28be2  Merge pull request #2 from weihyac/main (Charles)
|\  
| * 79eafe0  UWA logo added and resized (Wei)
| * 2b8a40c  font size and weight adjusted, chat answer div changed to h2 & reworded (Wei)
| * a5825b8  margin added to full UI and chat answer (Wei)
| * b76b24b  Added bootstrap CDNs (weihyac)
|/  
* e50bfb0  random (Abhinav Rajaram)
*   77e03ad  Merge pull request #1 from gucciGenji9/styling (Charles)
|\  
| * 0c9942b  created stylesheet and basic styling (Charles)
|/  
* fa4ac38  changed api key (Abhinav Rajaram)
* 940785e  Created files and added connection to chatgpt (Abhinav Rajaram)
*   8106c34  catching up (Abhinav Rajaram)
|\  
| * 7c8b50c  fixed broken carousel scroll (both auto and manual scroll) (Wei)
* | 52c992c  underlined topic title (Abhinav Rajaram)
|/  
* e0d356e  responsiveness added to most pages and navbar collapse (Wei)
* 7a1570d  topic_template.html comments, reformatting, alt text (Wei)
* 816a985  pricing.html comments, reformatting, alt text (Wei)
* 95a7f89  new_topic.html comments, reformatting, alt text (Wei)
* f20eb9b  login.html comments, reformatting, alt text (Wei)
* 733efcb  homepage.html comments, reformatting, alt text (Wei)
* fc139f6  discussion.html comments and reformatting (Wei)
* f4d85a5  chat.html comments and reformatting (Wei)
* 84f0854  base.html alt text added (Wei)
* 5f16371  base.html comments and reformatting (Wei)
* 6d7dbc0  maxwidth added to chat container, darkmode extended to chat labels, AI pfp changed to yellow for dark-mode proofing (Wei)
* ef2368f  resized topic headers (Wei)
* 902b33c  pfp routing debugged (Wei)
* f7ecaf1  profile pic disappearing fixed (Wei)
* 529340a  debugging missing profile pic in header (Wei)
* 1547b27  further clarifying comments added to app.py (Wei)
*   a2049df  merge resolution (Wei)
|\  
| * baefc08  minor bug (Abhinav Rajaram)
| *   4b9a017  Merge branch 'main' of https://github.com/gucciGenji9/chat_bot (Abhinav Rajaram)
| |\  
| * | cc67e15  checks to see if user exists otherwise spits error, fixed bug with default pfp (Abhinav Rajaram)
* | | c00fcb4  comments added to app.py (Wei)
| |/  
|/|   
* | ca0d320  display registration error message, usernames made unique (Wei)
* | e91d816  debug (Wei)
|/  
* 3ea087d  decommissioned sample data population (Wei)
*   a40da28  Merge branch 'main' of https://github.com/gucciGenji9/chat_bot Condensed python code partially (Wei)
|\  
| * 28421e4  if no image is uploaded default picture is used (Abhinav Rajaram)
* | c30eeed  condensed app.py code (Wei)
|/  
* 76c3112  javascript fully commented and cut down (Wei)
* 56f0430  navbar reformatted (Wei)
*   a34d7fd  Merge branch 'css_condensation' (Wei)
|\  
| * d70061d  styling adjustments to pricing and AI chat, css condensed further (Wei)
| * 533f133  fixed chat box ui - was destroyed by pfp introduction. css and javascript condensed (Wei)
* | f161876  Had an anuerysm and a freakout but all good fixed the ai profile pic being too big (Abhinav Rajaram)
* |   4ec8118  Merge pull request #37 from gucciGenji9/charles-2 (Charles)
|\ \  
| |/  
|/|   
| * 666b551  modified base.html (charles)
| * 85f8eff  added redirects away from ai chat if not signed in (charles)
| * e79dd50  added logic for signin navbar items (charles)
| * 7567644  hide logout button unless logged in (charles)
|/  
* b52e891  headers reformatted (Wei)
* e7d13fc  removed unused topical code (Wei)
* 3545ecc  all pages reformatted with styling, styling condensed (Wei)
* f91e89a  footer reformatted, contact form adjusted to clear input, check for valid email and check for filled form (Wei)
* 4168e18  forum database added to gitignore, new discussion routing fixed, styling added to discussion board, removed seconds from timestamp (Wei)
* 59e1406  username resized (Wei)
* ec8ad94  login success now redirects to homepage url, not just returning template and staying on /login (Wei)
* d0c31df  navbar username display adjusted for responsiveness and visual aesthetics (Wei)
* 09664f1  navbar changes: removed hover effect from username, border radius for profile pic, alignment changes (Wei)
* 7dc5388  UIUX updated for register and login pages; clearer labelling and themed aesthetics (Wei)
* 60558a1  new usr and pw graphics (Wei)
* 5e5db9e  login restyling and uiux changes to login form (Wei)
* 045c339  git ignore updated (Wei)
* 41c8e8c  styling adjustments (Wei)
* 04f0c7e  Delete .DS_Store (weihyac)
* f5f11ca  Delete .idea directory (weihyac)
* fa15124  Delete __pycache__ directory (weihyac)
* 08bb38c  Delete .vscode directory (weihyac)
* 79fbb71  root routing added to navbar (Wei)
* ac707da  changes adjusted to facilitate absolute addresses (Wei)
* d9ff2ed  routing for discussion board WITH login functionality added (Wei)
* 9d7bb2f  routing from specific discussion area to login fixed (Wei)
* 465fc54  templating added to topic template (Wei)
*   c9d48d6  Merge pull request #27 from gucciGenji9/logout (Abhinav Rajaram)
|\  
| * c4e60e1  added logout functionality and default user profile picture (Abhinav Rajaram)
|/  
* 855eb1e  condensed dark-mode code (Wei)
* 2aeece6  contact form confirmation with personalised name inclusion added (Wei)
* 3367d7a  comments added to homepage js file (Wei)
*   2ce1093  Merge pull request #26 from gucciGenji9/cleanup (Charles)
|\  
| * ec8415c  rf, no logic change, acknowledge bad api key usage (charles)
| * db7864d  removed unused script (charles)
| * fdc8d2f  rf, line length legibility to < 100 chars (charles)
| * eb23e5f  rf, line lengths to < 100 chars (charles)
| * 3eadcdc  rf, legibility changes, no logic change (charles)
| * 4f73244  rf, added comment explaining animated spans (charles)
| * 55117ca  refactor, remove console.log (charles)
|/  
* 7466f9c  (origin/search) repositioned pricing page (Wei)
* 92b27fb  updated register page to reflect base template (Wei)
*   ef020f5  Merge pull request #23 from gucciGenji9/message_pfp (Abhinav Rajaram)
|\  
| * 3261c05  working (Abhinav Rajaram)
| * 9115aad  profile picture now shows up next each chat you send. Still need to fix up the sizing of it (Abhinav Rajaram)
|/  
*   c1a364c  Merge pull request #21 from gucciGenji9/user_pfp (Abhinav Rajaram)
|\  
| * e0c5899  made it work by using relative addressing instead of absoulte addressing maybe due to permission issues (Abhinav Rajaram)
| * 4051452  have a look at this added code to be able to save in the server (Abhinav Rajaram)
* | 9092779  pricing table borders adjusted (Wei)
* | e316b71  pricing restyling (Wei)
* | 6f5c247  toggle position made responsive, chat bot temperature reduced. (Wei)
* | 4fddc01  removed excess graphics (Wei)
* | 91258de  darkmode toggler implemented, send button fixed (Wei)
* | 14519e8  try for free button functionality added (Wei)
|/  
*   6629d15  Merge pull request #20 from gucciGenji9/username_display (Abhinav Rajaram)
|\  
| * f2a9545  Much easier than expected username now shows in the navbar. Example where chatgpt is not the best (Abhinav Rajaram)
|/  
* 811ee22  added typing animation for AI, displays user question immediately, and response when done, and cursor now changes to pointer when hovering UWA logo (Wei)
* 905d3d3  debugging chat responses (Wei)
* 40a6b23  moved to davinci version 3 for more coherent and reliable responses (Wei)
* cf98d40  chat context for longer conversations fixed, max tokens increased (Wei)
* b97f969  adjusted temperature so casual conversation  no longer breaks it, adjusted context mechanism to work for longer chats (Wei)
* 6bdf629  text field now clears when message is sent (Wei)
* 6caf804  added placeholder text when api doesn't return text - try again message (Wei)
* 46a5583  problem where AI would send prepend a question mark if your question lacked one, fixed (Wei)
* c7015b4  minor adjustments to ui, new chatbot styles moved to styles.css (Wei)
* 9fe0e5f  restyling from basic list to iMessage-inspired chat interface (Wei)
* b25807a  added AI chat context - now considers both its own responses and your questions from earlier in the chat (Wei)
* 87c3884  pricing page redesign (Wei)
* a44f603  small viewport formatting errors resolved (Wei)
| * c97b837  (origin/username) do not merge failed attemt try again with cookies (Abhinav Rajaram)
|/  
* 501ccd5  footer links functionality updated (Wei)
* 9230303  formatting adjustments to homepage for smaller viewport (Wei)
* 939e41f  entire template collection converted into extensions of base.html and everything is now flask-run, not just login. Routing for every single pageadded, other minor adjustments. (Wei)
* 5033123  added requirements.txt file - contains dependencies. install via 'pip3 install -r requirements.txt' (Wei)
* 579e58f  discussion forum routing fixed (Wei)
* acd9b75  gitignore file constructed with jetbrains ide defaults from github, database, python defaults from github. (Wei)
*   66653bd  Resolved merge conflicts (Wei)
|\  
| *   14a26e5  Merge pull request #17 from gucciGenji9/discsussion_creation (Abhinav Rajaram)
| |\  
| | * 06bbdc3  added discussion feature. newtopic, topic, responses (Abhinav Rajaram)
| |/  
| * 020b476  bugfix, added hrefs for subpages to navbar (charles)
| *   98b1152  Merge pull request #16 from gucciGenji9/pricing (Charles)
| |\  
| | * b21d4a4  removed unused html (charles)
| | * 9247d30  styled pricing page (charles)
| | * abe3a1c  built out pricing page (charles)
| | * 5c9bdf9  modifying pricing, set up navbar and base styling (charles)
| | * a9a6705  created pricing page file (charles)
| |/  
| * a23fd77  Update README.md (Charles)
| * 4fbe326  Update README.md (Charles)
* | 3a2c43b  contact form response added: 'thanks for reaching out, [name], etc' (Wei)
* | 6221f6a  features with animations added, new favicon created and assigned. (Wei)
* | 0fee007  added functionality to contact quicklink in footer (Wei)
* | 8f66f41  added contact form, and linked to contact button, added arrow animation and reformatted footer (Wei)
* | f523a30  css cleaned up and organised, opacity of background animation reduced (Wei)
* | e9486e3  finished clearing unused graphics (Wei)
* | e028302  carousel autoscroll slowed down (Wei)
* | 655933a  animation reconfigured - was disabling try for free button when passing through it (Wei)
* | 51090d5  testimonial files added (Wei)
* | 05bd0f9  added footer, funny css background animations, updated testimonials visually, added fast carousel  autoscroll (Wei)
* | f6ef721  testimony images added - AI generated people. (Wei)
* | 90e6c48  added uniassist logo to header with colour-change animation, changed header text to white, added testimonial carousel (Wei)
* | 09bafa0  css button and overall homepage styling (Wei)
* | f9d809a  debugging routing system (Wei)
* | 25045bc  header adjusted to reflect new routing system. (Wei)
* | c399e02  routing from links in navbar added in python flask file, renamed to app.py bc it no longer just does auth. (Wei)
* | 774c2f5  homepage copywriting added, 'try for free' button added. (Wei)
* | 93250db  homepage basic setup complete - matching styling + linked to by uni assist header item (Wei)
|/  
* 02332d8  functionality added to send button (Wei)
* 8aabe7a  debugging storage of user_id (Wei)
* 1f86ae8  user id now stored in localStorage after successful login, for identification of user during website interaction (Wei)
* d8ad20e  login and register navbars colour-updated. (Wei)
* 8a40feb  navbar changed to yellow, with blue hover - matches uwa logo better (Wei)
* e9c19f4  header resized in index, login and register pages. (Wei)
* f89cf53  UWA logo resized in header (Wei)
* b33e254  test databases deleted; no longer needed. (Wei)
* dc646b9  UWA favicon added to login and register pages, UWA logo added to new static directory for flask file access (Wei)
* 1bab840  'user' changed to 'You', 'response' changed to 'AI Assistant. Display reformatted for visual separation. (Wei)
*   edcbcc1  Merge pull request #15 from gucciGenji9/styling (Charles)
|\  
| * 8b19b5d  added logo redirect (charles)
* | df7433c  Merge pull request #14 from gucciGenji9/styling (Charles)
|\| 
| * a5fffef  updated css (charles)
| * 908d3f6  moved uwa logo to navbar (charles)
|/  
*   b68496f  Merge pull request #8 from gucciGenji9/website_logins (weihyac)
|\  
| * 9c41c3b  headers added w/ basic and hover styles, renamed to Uni Assist, logins implemented with flask and database (Wei)
|/  
* 46e1fc5  added UWA favicon (Charles)
* 767d6be  reworded various elements (Charles)
* d825431  Create README.md (Charles)
*   62713e1  Merge pull request #3 from gucciGenji9/abhinav_session (Abhinav Rajaram)
|\  
| | * b4c8ce0  (origin/abhinav_session) made send work (Abhinav Rajaram)
| |/  
| * a82d9b7  added history function, added 'enter' function, did some css for history, added clear history function (Abhinav Rajaram)
|/  
*   8e28be2  Merge pull request #2 from weihyac/main (Charles)
|\  
| * 79eafe0  UWA logo added and resized (Wei)
| * 2b8a40c  font size and weight adjusted, chat answer div changed to h2 & reworded (Wei)
| * a5825b8  margin added to full UI and chat answer (Wei)
| * b76b24b  Added bootstrap CDNs (weihyac)
|/  
* e50bfb0  random (Abhinav Rajaram)
*   77e03ad  Merge pull request #1 from gucciGenji9/styling (Charles)
|\  
| * 0c9942b  created stylesheet and basic styling (Charles)
|/  
* fa4ac38  changed api key (Abhinav Rajaram)
* 940785e  Created files and added connection to chatgpt (Abhinav Rajaram)
```
