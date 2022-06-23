// Instruction:
// Think in a real and popular web application such as Netflix, Amazon, Youtube, etc. abstract that real world, create an script and declare 20 different variables, assign values to such variables and display them on the HTML, using template string format. ** use document.write(``);

let userName = "Jim Beam";
let email = "jim@broadinstitute.org";
let password = "pa@$$word";
let youTubeRed = false;
let numSavedVideos = 30;
let videoTitle = "Introduction to video making";
let numLikes = 20;
let watchLater = "How to make an introduction video";
let playlist1Title = "Coding Playlist"
let stars = 4.5;
let totalTimeVidWatch = 3000;
let timeSinceLastRemoteInput = 30;
let timeTillRentalExpire = 24;
let friendsOnline = 10;
let searchHistory= "empty";
let followers = 2000;
let account = "Kids";
let channelSubs= 30;
let loggedIn = false;
let savedForLater = true;

document.write(`
    <p>Welcome to YouTube ${userName}.</p>\
    <p>Your email is ${email} and your password is: ${password}</p>\
    <p>Your account has a total of ${numSavedVideos} saved videos.</p>\
    <p>You current status for a Youtube Red subscription is: ${youTubeRed}</p>\
    <p>Your first video '${videoTitle}' has ${numLikes} likes.</p>\
    <p>In your watch later playlist, you have one video titled '${videoTitle}'</p>\
    <p>You have 30 videos in your ${playlist1Title}.</p>\
    <p>Your account has ${stars} from other users who have visited your website.</p>\
    <p>Your account has a total of ${totalTimeVidWatch} hours of videos watched and it has been ${timeSinceLastRemoteInput} minutes since your last controller input... Are you still watching?</p>\
    <p>You have a rental movie that still has ${timeTillRentalExpire} hours until the rental period expires.</p>\
    <p>You have ${friendsOnline} friends currently online.</p>\
    <p>Sorry, but your search history is ${searchHistory}. There is nothing to delete.</p>\
    <p>You currently have ${followers} followers.</p>\
    <p>Your account, '${account}', has been inactive for a while. Would you like to delete it?</p>\
    <p>You have ${channelSubs} subscriptions to other channels.</p>\
    <p>Your logged-in status is ${loggedIn}.</p>\
    <p>The current status for this video is set to '${savedForLater}' for 'saved for later'.</p>\
`);




