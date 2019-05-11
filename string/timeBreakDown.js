/*

Whiteboarding breakdown.

Input: Start time as a string with no seconds
Input: End time as a string with no seconds

Input: '7:50'
Input: '8:50'
Output:
  PersonOne : '7:50 - 8:15',
  FeedbackOne : '8:15 - 8:20',
  PersonTwo : '8:20 - 8:45',
  FeedbackTwo : '8:45 - 8:50'

We want 2 - 5 minutes for feedback.
The amount of feedback time should increase based on
the time set aside for the whiteboarding.

It needs to work in PM time, and AM time doesn't matter.
*/

const startWhiteboardingTime = '8:00';
const endWhiteboardingTime = '8:55';
const alarm = false; // set this to false to stop alarms from opening
const stopwatch = false; // set this to false to stop alarms from opening
let schedule;

// if stopwatch==true this can open browser tabs with a stopwatch set
function openTimer(duration) {
  var childProc = require('child_process');
  childProc.exec(`open -a "Google Chrome" http://www.online-timers.com/timer-${duration}-minutes`);
}

// if alarm==true this can open browser tabs with an alarm set
function openAlarm(time) {
  var childProc = require('child_process');
  childProc.exec(`open -a "Google Chrome" https://vclock.com/#time=${time}&title=Alarm&sound=bells&loop=1`);
}

// delivers time in both 12 and 24 hour.  ex: ['7:25', '19:25']
function atThisTime(time, minutes) {
  let hrs = Number(time.split(':')[0]);
  let mins = Number(time.split(':')[1]) + minutes;

  if (mins / 59 > 1) {
    hrs = Number(hrs + 1).toString();
  }
  mins = mins % 60;
  mins = mins < 10 ? '0'+ mins : mins;

  return [`${hrs}:${mins}`, `${Number(hrs) + 12}:${mins}`];
}

function whiteboardTiming(start, end) {
  let totalMins,
    half,
    whiteboardingTime,
    feedbackTime,
    firstInterviewEnd,
    firstFeedbackEnd,
    secondInterviewEnd,
    secondFeedbackEnd;

  if (start[0] == end[0]) {
    totalMins = end.split(':')[1] - start.split(':')[1];
  } else {
    totalMins = 60 - start.split(':')[1] + Number(end.split(':')[1]);
  }
  half = Math.floor(totalMins / 2);
  feedbackTime = Math.min(Math.max(Math.floor(half / 5), 2), 5);
  whiteboardingTime = half - feedbackTime;

  firstInterviewEnd = atThisTime(start, whiteboardingTime);
  firstFeedbackEnd = atThisTime(firstInterviewEnd[0], feedbackTime);
  secondInterviewEnd = atThisTime(firstFeedbackEnd[0], whiteboardingTime);
  secondFeedbackEnd = atThisTime(secondInterviewEnd[0], feedbackTime);

  if (stopwatch) {
    openTimer(whiteboardingTime - 1);
    openTimer(half - 1);
    openTimer(whiteboardingTime + half - 1);
    openTimer(totalMins - 1);
  } else if (alarm) {
    openAlarm(firstInterviewEnd[1]);
    openAlarm(firstFeedbackEnd[1]);
    openAlarm(secondInterviewEnd[1]);
    openAlarm(secondFeedbackEnd[1]);
  }

  return {
    PersonOne: `${start} - ${firstInterviewEnd[0]}`,
    FeedbackOne: `${firstInterviewEnd[0]} - ${firstFeedbackEnd[0]}`,
    PersonTwo: `${firstFeedbackEnd[0]} - ${secondInterviewEnd[0]}`,
    FeedbackTwo: `${secondInterviewEnd[0]} - ${end}`
  }
}

schedule = whiteboardTiming(startWhiteboardingTime, endWhiteboardingTime);
console.log(schedule);
