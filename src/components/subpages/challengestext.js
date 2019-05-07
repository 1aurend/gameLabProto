import React from 'react'
import { Link } from 'react-router-dom'

const time = (
  <>
    <h5>Associated reading: Schell, chapter 12</h5>
    <ol>
      <li>Describe an activity or assignment from your course in terms of time. Did it involve mechanics such as timers or turns or races, or merely clock time? Now modify the activity by implementing or changing a time mechanic. How can you change the experience? Can you raise or lower the felt stakes? Or give students a greater sense of autonomy?</li>
      <li>Design an activity or assignment that allows instructors or students to “control” time using a mechanic such as pause or rewind “buttons”, timers, or taking turns. What effects does this have on the student experience? Compare versions of the activity with and without the time mechanic.</li>
    </ol>
    <h5>Review the mechanic <Link to='/mechanics/time'>here</Link></h5>
  </>
)

const space = (
  <>
    <h5>Associated reading: Schell, chapter 12</h5>
    <ol>
      <li>Describe an activity or assignment from your course in terms of space. This could be the physical space of the classroom, the two dimensional space of a screen or board, or a more metaphorical space like mental space. It might be easier to draw a diagram rather than describe these spaces in words. Now modify the activity by implementing or changing a space mechanic. How can you change the experience?</li>
      <li>Design an activity or assignment that explicitly incorporates space, whether physical or metaphorical. How would you diagram the spaces of your activity? How does explicitly incorporating space impact the student experience?</li>
    </ol>
    <h5>Review the mechanic <Link to='/mechanics/space'>here</Link></h5>
  </>
)

const chance = (
  <>
    <h5>Associated reading: Schell, chapter 12</h5>
    <ul>
      <li>Design an activity that deploys a chance mechanic- either randomization or risk taking- for a class you teach. What does your activity use chance to do? Does it add variation or contribute to fairness? Does it simulate a process in the real world?</li>
    </ul>
    <h5>Review the mechanic <Link to='/mechanics/chance'>here</Link></h5>
  </>
)

const challenge = (
  <>
    <h5>Associated reading: Sylvester, chapter 3 and Schell, chapter 13</h5>
    <ul>
      <li>Consider the challenge mechanics, which have you seen used or used yourself in courses? Which have you never seen? Describe how challenge level is determined in one of the assignments for a course you teach. How could you augment the student experience by implementing a challenge mechanic?</li>
      <li>Design a class activity or assignment that incorporates a challenge mechanic to make the activity flexible to accommodate variation in student skill-level. What effects does this have on the student experience?</li>
    </ul>
    <h5>Review the mechanic <Link to='/mechanics/challenge'>here</Link></h5>
  </>
)

const action = (
  <>
    <h5>Associated reading: Schell, chapter 12</h5>
    <ul>
      <li>Describe an assignment or activity from your course in terms of actions. What are the activity’s VERBS? What do the students do? What does the instructor do? Now, add, subtract, or substitute some of these verbs. How will changing the moves students perform add excitement? Depth? Agency? Clarity?</li>
    </ul>
    <h5>Review the mechanic <Link to='/mechanics/action'>here</Link></h5>
  </>
)

const training = (
  <>
    <h5>Associated reading: Gee, chapter 5</h5>
    <ul>
      <li>The principles of training modules apply both at the level of course projects and at the level of courses as a whole, since they are, after all, a form of training. How does your course leverage the features of a training modules? How does it get students to practice a “concentrated sample” of core skills? Does it encourage failure and exploration? Is there a way you could further implement one of these principles in your syllabus design?</li>
      <li>Design an assignment that functions explicitly as a training module for a larger project or assignment. How would you set it up so that the stakes are low? Would failure be encouraged? What sorts of skills would it emphasize? How would the student practice these skills in a concentrated way?</li>
    </ul>
    <h5>Review the mechanic <Link to='/mechanics/training'>here</Link></h5>
  </>
)

const strategy = (
  <>
    <h5>Associated reading: Schell, chapter 12 & 13</h5>
    <ul>
      <li>Design an assignment or activity that offers more than one path to completion. You might do this by starting with an existing assignment and adding choice points that have the potential to yield significant differences in the final product. What creative space or additional modes of thinking and problem solving do you anticipate this will open for the students? And why did you choose/create the type of assignment that you did for this challenge? What makes it the kind of assignment that would benefit from additional freedoms and strategies?</li>
    </ul>
    <h5>Review the mechanic <Link to='/mechanics/strategy'>here</Link></h5>
  </>
)

const multiplayer = (
  <>
    <h5>Associated reading: Gee, chapter ??</h5>
    <ul>
      <li>Design a “multiplayer” project or assignment for a course you teach. Is your assignment competitive multiplayer or co-op? If it’s competitive, how does the competition motivate individual students? And is the competition intrinsic to the assignment and the skills students are developing or an external reward system? If your assignment is co-op, are there components of the assignment students can only complete with a team or are they simply divvying up the work? Strong co-op games encourage players to communicate and strategize together by making some tasks only possible or spaces only accessible when working as a group. Does your assignment incentivize students to work together in these ways?</li>
    </ul>
    <h5>Review the mechanic <Link to='/mechanics/multiplayer'>here</Link></h5>
  </>
)

export {
  time,
  space,
  chance,
  challenge,
  action,
  training,
  strategy,
  multiplayer
}
