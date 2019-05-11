const cohort = {
  functionality : {
    addStudent(classNumber, student) : {
      cohort[classNumber] = {student.name : student.language};
      console.log(`${student.name} added to ${classNumber}`);
    },
    addCohort(details) : {
      details[classNumber] = {scheduleDetails};
      console.log(`cohort ${details.classNumber} added `, {scheduleDetails});
    },
    checkCurrentClasses() : {
      /*
      most recent
      loop through current classes set
        if current class' end date is before today
          remove that class
        if current class' number > most recent
          most recent = that number
      while cohort[most recent + 1].startDate < today
        add most recent + 1 to current class set
        most recent = most recent + 1

      i think that creating a queue for this would potentially most effecient.
      make it with peekFront and peekBack
      ie: queue = [21,22,23,24]
        while peekFront.endDate has passed
          dequeue
        while peekback.startDate has passed
          enqueue(peekback + 1)
      */
    },
    pushClassWork() : {
      /*
      trigger this with a chronjob each day at noon
      east coast has no warm ups.

      loop through current classes
        on each class run bash commands to update the following:
          update target practice
          update warm up
          update whiteboarding
      */
    },
    pushHomeWork() : {
      /*
      trigger this with a chronjob each friday at 7pm

      loop through current classes
        loop through each class day that week
          run bash command to upload that day's homework


      come up with a better plan to loop through the class days (inner loop)
      */
    }
  },
  currentClasses = new Set(45), //or a queue
  45 : {
    scheduleDetails : {
      startDate = '03.14.19',
      endDate = '04.21.19',
      weeksWithHoliday = [1,3],
      weeksSkippedDueToHoliday = [],
    },
    // Option 1
    'bettysGitHub@huthub.com' : 'java',
    // Option 2
    1211 : {
      firstName : 'betty',
      lastName : 'smith',
      gitHub : 'bettysGitHub@github.com',
      email : 'bettySmith5555@gmail.com',
      language : 'java',
      studentId : 1211
    }
  }
}
