const mechanicsList = [
  {
    name: "mechanics",
    pitch: "Mechanics are the interactions and relationships that make a game a system. They make the game interactive rather than something you just take in. Put simply, mechanics are what make a game work. For this reason, mechanics are the key way teachers can apply the logic of game design to the classroom.",
    structure: 'Structure of this Inventory: Our mechanics are divided into eight conceptual categories. Each category contains an introduction to the mechanic and a bit about how game designers understand or conceptualize it. Linked at the top of each category page are specific, implementable mechanics with ideas for why and how to use them.',
    go: 'Already done exploring and ready to implement these ideas? Jump straight to our mechanics-based design challenges!'
  },
  {
    name: "time",
    pitch: "On one level, the pitch for time is that we’re stuck with it. You can’t leave time out of your teaching. But, as a teacher, you have a choice to either merely fill time or to intentionally leverage it to shape student experiences. Time-based mechanics are very versatile. From setting stakes and expectations to including more voices in a conversation, there are many reasons to not lose track of time.",
    what: `Well, tomes have been written in literal answer to this question. But qua mechanic, time includes clock time and the various ways in which we can segment and “control” it—i.e. by instituting “pause” or “rewind” mechanisms; races, whether against the clock or another student or the instructor or one’s past self; and “turns” where a meaningful unit of time consists not of some measure of minutes but a unit of action. In addition, we can take the calendar rather than clock perspective on time. At the course or syllabus level, units and assignments are allotted quantities of calendar time; students are given more or less control over when/how they allocate time to the course; course rhythms are established or broken.`,
    moves:
      [
        {
          name: "timers",
          what: 'Timers are, well, timers. They measure and mark some predetermined unit of time. How students perceive and are affected by timers can depend on whether the timer is digital or physical, like an hourglass, whether the countdown is visible to them throughout, and whether the timer signals a hard stop or measures an aspired to timeframe.',
          effects:
          [
            {
              what: 'Establish stakes',
              how:
              [
                'Being timed can increase pressure and felt stakes',
                'Limiting time to prepare can lower the stakes——your presentation can’t be that great if you only had 10 minutes to prepare',
              ]
            },
            {
              what: 'Draw boundaries',
              how:
              [
                'Give time to topics that arise organically without giving up key content——“we’ll give ourselves 10 minutes to focus on this but then we have to get back to X”',
                'Using a timer to signal a transition from some content/activity to another can provide a not-personal way of cutting off a discussion',
                'Give students or yourself a timer for doing coursework outside of class to help balance workloads; spend 2 hours reading carefully as much as you can rather than make sure to get to all 100 pages',
              ]
            },
            {
              what: 'Foster competition',
              how:
              [
                'If everyone spends 15 minutes on a task in the same space with the same resources, more direct comparisons are available between products——for better and worse',
              ]
            },
            {
              what: 'Motivate and center focus',
              how:
              [
                'Time limits can keep attention on the task at hand',
                'Knowing that there’s limited time to solve a problem is motivating——“The answer will be revealed in x minutes . . .”',
              ]
            },
          ],
          examples:
          [
            'LL presentation activities',
            'Pair of assignments with different time durations to show the effect',
            'Discussion leading tactic involving a timed tangent',
            'A time-limited problem solving session',
          ]
        },
        {
          name: "races",
          what: 'Races are common in games—be the first one to get all your pieces home, beat the clock while solving a puzzle, and, well, literal footraces. In classes, races are rarely seen as good things, but if we think of a race as any activity in which there’s a prize for finishing first or beating the clock, we see how ubiquitous races are in our courses. If students are allowed to leave as soon as they finish, there’s a benefit to finishing early, albeit one that might be outweighed by the quality of work completed. And, of course, there are also the races we, as teachers, don’t intentionally design. When students leave things to the last minute, it’s a race against the clock to get assignments in on time.',
          effects:
          [
            {
              what: 'Foster competition',
              how:
              [
                'Races can make competition explicit and can increase the amount, if not always the quality, of work that gets done',
              ]
            },
            {
              what: 'Motivate and center focus',
              how:
              [
                'Knowing that there’s limited time to solve a problem is motivating——“The answer will be revealed in x minutes . . .”',
                'Time pressure helps us prioritize; if there’s no clock on a task, it tends to fall to the bottom of our lists',
              ]
            },
            {
              what: 'Provide opportunities',
              how:
              [
                'Perhaps the race is a sort of relay that requires that everyone participate',
              ]
            },
            {
              what: 'Create checkpoints',
              how:
              [
                'Breaking time into smaller chunks provides occasions for checking on progress; a countdown, especially if what’s counted are days not minutes, can help formalize these check-in moments',
              ]
            },
          ],
          examples:
          [
            'Damina’s countdown for writers',
            'Relay-based activity',
            'Labs where students can leave when finished',
            'A race in a language class to come up with sentences using certain vocabulary or verb tenses',
          ]
        },
        {
          name: "pauses",
          what: 'This one takes a bit of imagination. While, of course, we can’t actually pause or rewind time, we can institute mechanisms by which we or our students can hit “pause” or “rewind” on a discussion. Pauses can be used for writing or quiet reflection; calling for a rewind might mean spending more time on a difficult concept. However you structure them, these “buttons” and the pursuant breaks in the flow of a lecture or discussion can be powerful signals about what’s valued in a class.',
          effects:
          [
            {
              what: 'Make space to cool off or reflect',
              how:
              [
                'Hit pause to reflect on what just happened or to make space for silence',
                'Pause for writing or to pair share',
                'Rewind to take more time for a difficult concept or question',
              ]
            },
            {
              what: 'Create a sense of autonomy',
              how:
              [
                'Allowing students to change the pace or flow of discussion can produce a sense of agency',
                'Fast forward if students already understand how to solve a problem; rewind if they need to go through something more slowly',
              ]
            },
            {
              what: 'Create checkpoints',
              how:
              [
                'Asking if anyone wants to pause or rewind can be a way to check in about pacing',
              ]
            },
            {
              what: 'Help students practice presenting',
              how:
              [
                'Pair students up or put them in small groups to practice presenting or explaining course concepts; the group members can use pause-rewind-fast forward to help the presenter pitch their material at the right pace and level of detail for the intended audience',
              ]
            },
          ],
          examples:
          [
            'Writing pauses',
            'Practice presentations',
            '“Remote Buttons” in a discussion section',
          ]
        },
        {
          name: "turns",
          what: 'In games, turns denote meaningful units of time that aren’t measured in clock time. Turns are discrete units rather than increments that can be measured with a timer, although these two are sometimes combined. In a course, turns can be implemented among students, but it’s also interesting to think about how concepts, texts, or other course materials might “take” turns. The idea of a meaningful unit of time can help students organize their thinking.',
          effects:
          [
            {
              what: 'Leverage regular rhythms',
              how:
              [
                'Bodies change with time, whether we’re hungry or tired or waking up; giving turns to course material can sync up with these rhythms in longer class meetings',
              ]
            },
            {
              what: 'Draw boundaries',
              how:
              [
                'Allocate time to topics, texts, etc. in advance to make sure one discussion doesn’t blend into another',
              ]
            },
            {
              what: 'Provide opportunities',
              how:
              [
                'Timed turns provide an impersonal way to stop one person from dominating',
                'Turns can be used to make sure everyone speaks/contributes',
                'Use to turns to ensure that everyone plays each or a variety of roles in group work',
              ]
            },
            {
              what: 'Organize information',
              how:
              [
                'Use turns as a sort of outline or as a way of structuring a debate',
              ]
            },
          ],
          examples:
          [
            'Lab activity with roles that students take turns playing',
            'Turns translating or reading out loud',
            'Hot-seat type activity',
          ]
        },
        {
          name: "calendars",
          what: 'When we take a longer view of time, we call it a calendar. Here the meaningful units are not minutes or turns but rather days or weeks or months. When we leverage time as a mechanic at this scale, we’re thinking not about what happens in a single class, but about how the order, spacing, and flexibility of events across the semester impacts the student experience.',
          effects:
          [
            {
              what: 'Create or diminish sense of autonomy',
              how:
              [
                'Assignments that allow some folks to finish early can increase sense of autonomy',
                'Allow students to set their own deadlines or choose between one long or multiple short writing assignments over the course of the semester',
              ]
            },
            {
              what: 'Establish stakes',
              how:
              [
                'Just looking at a course calendar in a syllabus establishes stakes; even if two papers are both 5 pages, if one has to be done in 1 week and the other in 3 this signals (perhaps unintentionally) expected depth and quality',
              ]
            },
            {
              what: 'Draw boundaries',
              how:
              [
                'Calendars are literally ways of drawing boundaries around and segmenting larger chunks of time; course units can perform this function of drawing boundaries around blocks of course content that do or don’t belong together',
              ]
            },
            {
              what: 'Create checkpoints',
              how:
              [
                'Looking at your course from the calendar perspective provides a moment to assess whether there are any projects that could use additional checkpoints or scaffolding; are there any big deadlines that aren’t preceded by earlier touchpoints?',
              ]
            },
          ],
          examples:
          [
            'Flexible writing assignments of various types',
            'Breaking a syllabus into units that aren’t weeks',
            'Hot-seat type actiFlexible p-sets where students choose enough problems to get to, e.g., 100 points',
          ]
        },
      ],
  },
  {
    name: 'challenge',
    pitch: 'You’re no doubt thinking about challenge already. Challenge, you might think, is a prerequisite for learning. But most often as teachers, we think about challenge in terms of the material we’re presenting to students. How difficult is this text to parse? How complex is this problem? Considering challenge instead from the perspective of a game designer focuses attention not only on the determinants of difficulty level but more importantly on how those determinants can be modified both in development by the designer and during play by the player.',
    what: 'Game designers think a lot about balance. A game with too many rules is imbalanced; a game that takes too long is disproportional; a game that’s too hard or too easy is, well, no fun. A match between a player’s skill level and the game’s difficulty is one key factor in determining how engaged that player will be. Players that aren’t challenged enough will get bored, while player’s that lack skills necessary to play will be frustrated. When game designers consider challenge, they consider it on at least two continuums: First, from the novice player to the expert. Who should be able to play this game? What means can the game employ to balance accessibility for novices versus depth for more experienced players? Second, from start to finish. How will the game grow with the player to keep them continually challenged? Where will replay value come from?',
    moves:
    [
      {
        name: 'level up',
        what: 'Leveling up is just what it sounds like. Games use a variety of measures of competence to determine that players are ready to move onto the next challenge. It might be a matter of completing a stage, a level or quest, or instead it might mean successfully executing a key skill, performing a move or solving a puzzle. In both sorts of cases, games use these checkpoints to ensure that players are pacing themselves appropriately, neither taking on levels that will be frustratingly difficult nor bored and unable to move on when a challenge is too easy.',
        effects:
        [
          {
            what: 'Increase approachability',
            how:
            [
              'Allow students to start at a base level and work their way up to make getting started easier',
            ],
          },
          {
            what: 'Make successes cumulative',
            how:
            [
              'Use mastery checkpoints to help students see how small things they are doing build to a larger skill or whole',
            ],
          },
          {
            what: 'Create a sense of autonomy',
            how:
            [
              'Optional leveling up and/or giving students some discretion in how long they spend working on one stage before demonstrating proficiency and moving onto the next contributes to agency',
            ],
          },
          {
            what: 'Provide checkpoints or pacing',
            how:
            [
              'Distinct steps on the way to skill development help students see their trajectories',
              'Associating checkpoints with anticipated timelines or deadlines can be a form of progress tracking'
            ],
          },
          {
            what: 'Reinforce skill hierarchies',
            how:
            [
              'Make one step a prerequisite for another to signals an ordering',
              'Have successive “levels” explicitly build on one another, so students know which skills they are repeatedly using',
            ],
          },
        ],
      },
      {
        name: 'level choices',
        what: 'Many games give players a choice about how challenging they want the game to be. This might take the form of an explicit selection of “easy” or “normal” modes at the start of the game. Or it might involve a choice of character or vehicle or how many cards to deal at the start, and so on. Such choices make a game accessible for players with a range of skills. They also allow players to pace themselves as they develop their competence.',
        effects:
        [
          {
            what: 'Increase approachability',
            how:
            [
              'Multiple entry points can make it easier to get started; there will be a task that seems “doable” ',
            ],
          },
          {
            what: 'Create a sense of autonomy',
            how:
            [
              'Optional leveling up and/or giving students some discretion in how long they spend working on one stage before demonstrating proficiency and moving onto the next contributes to agency',
              'While everyone needs to get through the “hardest” level to complete the assignment, perhaps not everyone needs to complete the “easy” levels first'
            ],
          },
          {
            what: 'Establish stakes or expectations',
            how:
            [
              'Use the “levels” of an assignment as a rubric to demonstrate to students what you consider proficiency, mastery, and so on'
            ],
          },
          {
            what: 'Allow student-driven pacing',
            how:
            [
              'Give students some flexibility in how long they spend on each level to build confidence',
              'Provide workload flexibility through optional easier levels',
            ],
          },
        ],
      },
      {
        name: 'layers',
        what: 'Games use layers of increasing challenge to expand the range of player skill-level appropriate for the game. For example, a role playing game might have many additional side quests in addition to a main storyline; only finishing the main story is required to beat the game, but the side quests keep more experienced players playing longer and can be more difficult than the core game. Of course, our goal in teaching is not necessarily to keep students focused on our coursework for as much time as possible, and the curriculum itself consists of layers-more advanced courses, focused electives. But the move of layering asks us to consider how we might add ways for students to push themselves, especially in required courses where there might be a wide range of student backgrounds.',
        effects:
        [
          {
            what: 'Increase approachability',
            how:
            [
              'Include a variety of applications of core content for student to explore to motivate a broader range of students',
              'Use layers to create multiple moments of success; not having to complete everything in one go can a project seem more doable'
            ],
          },
          {
            what: 'Motivate and center focus',
            how:
            [
              'Use additional layers to keep ensure students who are moving faster than the majority of the group feel challenged, e.g. additional vocabulary or storytelling challenges for students in a language class',
            ],
          },
          {
            what: 'Create or diminish sense of autonomy',
            how:
            [
              'Allow students a choice of which additional modules to complete following a core module to increase the sense of agency',
              'Let students decide how many “layers” of an assignment to tackle in a single unit of work; perhaps all the questions could be answered collectively in a single essay, podcast, etc. but another approach might involve answering them sequentially in a series of infographics'
            ],
          },
          {
            what: 'Foster competition',
            how:
            [
              'Start an explicit competition to motivate students to complete “side quests” in your course',
            ],
          },
        ],
      },
      {
        name: 'fast forward',
        what: 'Most video games include a training module or low stakes first level to introduce novice players to the game. Experienced players, however, may get quickly bored with these sections. To keep these players engaged, game designers often provide a means by which they can quickly show proficiency with game basics and move through quickly. While one might argue that placement tests perform this function in curricula, are there other ways to provide extra challenge or new opportunities to students with greater background?',
        effects:
        [
          {
            what: 'Increase motivation',
            how:
            [
              'Allow students to show mastery of initial steps and move on to avoid boredom',
              'Let students who have mastered the basics help teach peers who are newer to the material'
            ],
          },
          {
            what: 'Create a sense of autonomy',
            how:
            [
              'Let students determine (within a range) the pace at which they work through basic modules to increase agency'
            ],
          },
        ],
      },
      {
        name: 'boosts',
        what: 'Sometimes games have ways of giving less-skilled players a boost. Boosts both help ensure that players won’t give up too soon and make it more fun for less and more experienced players to play together. Nintendo games are known for this: better power-ups for racers in last place; invincibility suits after losing a certain amount of lives in the same level. In the classroom, of course, we’d want to be careful of any boost that allowed students to skip ahead without mastering the material, but we can still incorporate some mechanics that help to achieve this balance.',
        effects:
        [
          {
            what: 'Increase approachability',
            how:
            [
              'Knowing there’s a mechanism in place to help in case of frustration can make it easier to attempt something difficult; a hint or viewable solution to a similar problem that’s available after a certain number of attempts can function this way',
            ],
          },
          {
            what: 'Reduce frustration',
            how:
            [
              'Use quiz or pset retakes to help students never feel like they’re so far behind they can’t catch up and emphasize mastery over speed',
              'Where appropriate, assign work based on time to complete rather than volume, e.g. have students with more fluency translate longer paragraphs and those with less shorter'
            ],
          },
        ],
      },
    ],
  },
  {
  name: "space",
  pitch: "Like time, space is a mechanic you can’t leave out of your teaching. Your class takes place in a space, and while you may not always get to choose which space this is, you can shift the balance between how much you leverage your space and how much it imposes on your class. Space mechanics cover many elements of the classroom, from seating arrangements for different types of conversations to mapping techniques that take place on a board or in a digital space. There are many spaces to explore!",
  what: 'For game designers, spaces are physical, virtual, and metaphorical. But more important than the type of space, is the relations and interactions between its meaningful units. For example, the size of the squares on a tic-tac-toe board is does not affect the game. What matters is their alignment. In contrast, the distances a player has to jump to cross gaps in a platforming game make all the difference. Thus, when we think about space as a mechanic in the classroom, we can consider not only the size of the room and its furnishings, but also whether there are any meaningful relations between parts of the space and course content or particular activities and how we can carve out units of meaningful space to lead to ordered and relational understanding.',
  moves: [
    {
      name: 'maps',
    },
    {
      name: 'stations',
    },
    {
      name: 'movement',
    },
    {
      name: 'leaving',
    },
    {
      name: 'mental space',
    }
  ]
},
  {
    name: 'multiplayer',
    pitch: 'Multiplayer is one of the easiest mechanics to use. Every classroom is inherently set up to be multiplayer: you have many people working on the same task, all trying to achieve the same thing. Moreover, multiplayer experiences encourage peer-peer learning, teamwork skills, negotiation and strategy, and allow students to create substantial volumes of work in a short period of time. Making an experience multiplayer often adds a valuable element of realism, reflecting various stakeholders and team dynamics in work. It allows students to both specialise their own work within the group whilst learning from the implications and task processes of different ideas, work-approaches, and attitudes of their peers’ roles.',
    what: `Broadly speaking, multiplayer games fall into two categories: competitive games and cooperative ones. Competitive games pit players against each other. Classic board games like Chess and Monopoly fit this mold and so often do racing and fighting video games. Cooperative, or "co-op" games, on the other hand, require players to team up to complete missions, solve puzzles, or reach places unreachable in single-player mode. Competitive games tap into players' desire to win, and allow players to continue to challenge themselves by competing against ever stronger opponents. Co-ops drive a different sort of social interaction in which players must negotiate, coordinate, and strategize together in order to succeed.`,
    moves: [
      {
        name: 'competition',
      },
      {
        name: 'co-op',
      }
    ]
  },
  {
    name: 'chance',
    pitch: 'Just like time and space, chance is another of those things that every teacher has had to deal with at some point. The best-laid lesson plan is no match for the endless parade of uncertainty inevitably encountered in the act of leading a group of people, however eager, through unfamiliar intellectual territory. Teachers spend a lot of time managing contingency by preparing for unexpected interruptions and hangups, but also just as much time deploying it—in every cold call and every pop quiz is a keen awareness of the motivating power of chance. As teachers, we should be mindful of the effects that chance—real and perceived—can have on the student experience, and leverage its benefits wisely.',
    what: 'Chance is unique among the game designer’s toolbox in that it exists on a sort of higher level. Rather than comprising discrete moves that a designer can deploy for various concrete purposes, chance is concerned with the big picture of how interactions among other mechanics combine to shape a player’s overall experience. The savvy game designer thinks of chance as a vehicle for drama and surprise, but knows to be careful in deploying it. Used well, chance has the power to generate hope and excitement; used in excess, chance can create a sense of powerlessness and despair in the face of overwhelming arbitrariness.',
    moves: [
      {
        name: 'uncertainty',
        what: 'We can think of uncertainty as the perception of chance. With its ability to create dramatic tension, uncertainty is a key tool in the game designer’s arsenal. People keep playing to find out what happens next; a game where the outcome is totally predetermined wouldn’t be much fun to play.',
        effects: [
          {
            what: 'Simulate reality',
            how: [
              'Real life is full of uncertainty, and the mechanic of chance can be used in simulations or role-playing activities to generate problems for students to solve'
            ]
          },
          {
            what: 'Create suspense',
            how: [
              'Suspense naturally accompanies uncertainty—the anticipation of resolution has an unparalleled power to motivate'
            ]
          },
          {
            what: 'Provide variety',
            how: [
              'Uncertainty can be used to spice up a learning experience by creating the impression that nothing is predetermined and anything can happen'
            ]
          }
        ]
      },
      {
        name: 'risk',
        what: 'Where chance goes, risk inevitably follows. In most games, stakes exist alongside uncertainty, forcing players to choose actions based on an estimate of the relative probabilities of various desirable and undesirable outcomes. This sort of calculated risk-taking is often a core element of gameplay, and carries with it much of the emotional payload of the game in question—some risks are rewarded with pleasant surprises, others are punished with failure. As teachers, we can be thoughtful about how students perceive the risk-reward structure in classroom settings, and try to create ways of mitigating risk in some situations, while encouraging them to step outside their comfort zones in others.',
        effects: [
          {
            what: 'Act as a scapegoat',
            how: [
              'The presence of chance can have the effect of decoupling skill from outcome',
              'Students might feel encouraged to take bigger risks if there is enough stochasticity in the classroom that they can blame failures on chance'
            ]
          },
          {
            what: 'Encourage strategy',
            how: [
              'By deliberately structuring assessments to allow multiple avenues of success in a class, a teacher can accommodate risk-averse students while also keeping the more risk-tolerant students interested'
            ]
          },
        ]
      },
      {
        name: 'randomize',
        what: 'The problem of creating stochastic outcomes for the purpose of moving an experience forward is a familiar one for game designers, and many of the most recognizable components of modern-day tabletop games were invented for the express purpose of generating randomness. These vary widely in complexity and flexibility. A simple coin toss creates a binary outcome, dice and spinners are effective at generating smaller integers, while cards are easy to manipulate and can be tailored to the context. Random assignment comes up a lot in the classroom, where there are countless instances where decisions need to be made, but the teacher simply doesn’t have the time or bandwidth to be intentional about every single outcome.',
        effects: [
          {
            what: 'Create groups',
            how: [
              'A teacher might want to divide up the class into smaller groups for any number of reasons (workspace, groupwork, collaborative projects, sectioning). Random numbers are an effective way of breaking up preexisting social dynamics, and has the added advantage of removing the appearance of agency from the teacher, thereby preempting any challenges',
            ]
          },
          {
            what: 'Generate samples expediently',
            how: [
              'It’s frequently necessary in teaching to obtain a representative sample of some greater whole. Cold-calling is perhaps the best-known instance of this, but chance can also be used to determine which questions to take in a lecture, or what material to include on a quiz',
            ]
          },
          {
            what: 'Advance through content',
            how: [
              'Much as a dungeon master might use dice rolls to randomly determine how events unfold over the course of a session, a teacher can use chance to decide the order in which their seminar or section moves through a list of topics, or determine the direction a discussion goes in',
            ]
          },
          {
            what: 'Reduce instructor’s apparent agency',
            how: [
              'Relying on visible randomizing mechanics to perform assignment-type tasks can help diminish the perception that the teacher is handing down decisions from on high, and help students feel that their interests are aligned with those of the teaching staff',
            ]
          },
        ]
      },
      {
        name: 'balance',
        what: 'Game designers understand that balance is key to engaging gameplay. Chance is a powerful tool for creating balance, by ensuring that the experience is predictably unpredictable. In the classroom, it can sometimes be as useful to disrupt balance as it is to maintain it.',
        effects: [
          {
            what: 'Create balance',
            how: [
              'Students care about equality of opportunity—nobody wants to feel like the deck is stacked against them. The judicious application of chance can help teachers maintain a sense of balanced treatment, by making students perceive that their experiences are equally influenced by uncertainty',
            ]
          },
          {
            what: 'Disrupt balance',
            how: [
              'On the other hand, a teacher may sometimes find it useful to disrupt equilibrium—for instance if a few students have come to dominate discussions, or if one particular group is consistently moving through activities faster than the others. Random disruptions can be used to interrupt undesirable patterns in the classroom by knocking everyone off balance long enough for a new symmetry to emerge',
            ]
          },
        ]
      }
    ],
  },
  {
    name: 'training',
    pitch: 'Training modules should not be framed as easy stuff then harder stuff. Training modules are about building good habits, extensive well-timed strategies, and setting smart expectations. Equally, training modules are never drills, decontextualized repetition of set knowledge for memorisation. Training modules are about layering knowledge in a well-curated way to maximise player independence later in the game. Since the fact is, almost every class is already set up either as one large training module, as a series of skill-specific training modules, or as both, the principles driving a well-designed training module are fundamental to improving the student experience.',
    what: `In video games, training models have three key features: (1) they teach a curated, concentrated sample of the skills the player needs to succeed later on; (2) they encourage learning from failure and are very low stakes; and (3) they contextualize the player's learning in a microcosm of the worlds the player is about to encounter. Together, these three features make training modules extremely efficient at getting new players up to speed with at least the minimum level of competence needed to progress and enjoy the game.`,
    moves: [
      {
        name: 'curated samples'
      },
      {
        name: 'low stakes'
      },
      {
        name: 'microcosms'
      }
    ]
  },
  {
    name: 'strategy',
    pitch: `Strategy follows action. If action as a mechanic focuses on the verbs, strategy is about how those verbs are structured into approaches and plans. Ultimately, just as game designers are looking to create games where a diversity of strategies and approaches to acheiving the end goal emerge out the basic rules and actions of gameplay, so too in many classroom contexts are we looking to give students a toolkit of skills, which they can implement in a variety of ways to approach a wide range of questions and data. Considering course content from the perspective of strategy allows us to focus on when and how to foster a variety of approaches.`,
    what: `Strategies are made up of a series of actions, which typically extend beyond a single turn or session of play. Some games have a single, dominant strategy. We often call such games puzzles. Once a player learns this strategy the game is solved and no longer engaging; the player has mastered the game. More typical games allow for multiple approaches leading to a diversity of outcomes and opportunites for replay.`,
    moves: [
      {
        name: 'something',
      },
      {
        name: 'something else'
      }
    ],
  },
  {
    name: 'action',
    pitch: `As a mechanic, action moves us from thinking about the world of the game- What spaces does it take place in? What times? How will be train players?- to focusing on the players themselves. What can and can't they do? Are there enough open moves for players to develop multiple strategies? Of course, in the classroom we have at least two sets of moves available to teachers and learners: the academic moves, things like analyze, interpret, compare, and so on, and the social moves of interacting with others in class. Approaching your classroom by focusing on its verbs of all types can help clarify what students are doing and add dyanmism to everyone's interactions.` ,
    what: `As suggested above, actions are perhaps the most dynamic of mechanics. They are the things players can and cannot do. A checker can move one square forward or jump another piece, but it cannot move backward until it has been made a king. Thus, actions are the verbs of games, and which verbs are available to players determines not only how much variety there will be in gameplay and how many strategies will emerge, but also how complex the game is to learn. A game with too many or too few actions, or actions that don't combine well together risks becoming boring or tedious.`,
    moves:
      [
        {
          name: 'verbs',
        },
        {
          name: 'more verbs',
        },
        {
          name: 'even more verbs',
        },
      ]
    }
]

export default mechanicsList;
