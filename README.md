

18:45 - Now I added the configuration of the sequences to the frontend.
The possibility to add those "extra values" that are added to the generator.
I did it in a way to have a very low coupling with the SequenceList and SequenceHeader objects. It will inject a method to set those extra values and if the values are set, `Next` can be pressed and the sequence started.

I decided to use integers for all values, to simplify things.

16:12 - Ok. `pipeSeq` looking great now and all the sequencers are in place.

Now I'm gonna fix the `pipeSeq` to return one object with pipeline and invoke.
To do so, I'm gonna write some extra tests to allow things like:
pipeSeq(rangeSequencer, 2, 3).invoke()
and
pipeSeq(rangeSequencer, 2, 3).invoke()
pipedSeq.pipeline(accumulator).pipeline(isEven).invoke();


15:35 (after a stretch break) - Prime number sequencer mock replaced by a real implementation.
15:00 Factorial Sequencer "implemented" (see notes on factorialSequencer.js) in back and front

14:35 - Plan reviewed and Fibonacci implemented on both back and front.
Nice to have: better number formatting and truncating for huge numbers.

So lets review our plan.

1 - spend around 2 hours on the backend to fix the design and implement missing sequencers

2 - require user input to enable all sequencers

3 - add accumulator / isEven to the sequencers
4 - add a visual hint to improve UX, enforcing the right chronological order
5 - add frontend tests
6 - big refactoring and docs (and reevaluating)

13:57 - First sequence working on React.
Another Requirement found:
To enable Range and PartialSum, we need to require user input.

[x] Add activated sequence name
[x] init the sequencer
[x] Start the list empty
[x] implement next button

12:52(SECOND DAY) - START
---

21:29 - STOP - +3 hours - I split the html into small components and added the basic behaviour for choosing a sequence and displaying it.

I added the recompose package to manage components states mostly with hocs. That enables a better separation of concerns, leaving almost all Components as pure functions.

I decided to only add prop-types on critical points for now due to time restrictions. In a big shared repo I sure would add them to all Components.

---

Thinking about frontend implementation:

Sequence - component that controls everything, from choosing to displaying sequences
Has small view components (I'll refine while coding)

module constant - availableSequences - {name:String, sequence:Function}

prop/state
choosing:Boolean - if the user is choosing a sequence
activatedSequence:{name:String, sequence:Function} - activated sequence
results:[{index:Int,result:Int}] - the results so far - index is not really necessary, just a small helper. Could be an array of Ints, but I'm already using an object to show the piped stuff later.

---

20:33 - Added unorganized Bootstrap components

Thinking about the frontend:

- Activate any sequencer
- Active sequence (state) can be called for the next value
- Allow adding the accumulator / isEven into the pipeline

V1 -
Choose/Activate sequencer > show next button
click next, show value
click next again, show value at the top of the list

V2 -
add accumulator / is even ( 3 columns? - original value / [accumulated] / [isEven])

V3 - (after improving the backend)
Allow adding sequencers side by side. (columns)
Try to think about responsiveness.

---

19:24 - refining requirements and adding `isEven`
19:06 - first pipeSeq version working! \o/
18:53 - correcting the pipeSeq API
18:45 - pipeSeq API structure in place and tested.

18:31 - RESTART

---

16:47 STOP + 1 hour
pipeSeq test implemented

16:11
partialSumSequencer is implemented. Error throwing is tested.

15:46 - RESTART

---

Thinking about next steps

1 - implement partialSumSeq because it also adds an extra behaviour, that's throwing an error when there are no more available numbers.

2 - implement pipe and isEven

3 - create a simple frontend to integrate things (I like to work from the big picture to the inner details so that pieces fit together.)

4 - implement the missing sequencers

5 - strenghten the sequencers with tests

6 - refine frontend

---

13:07 STOP + 1 hour

Range Sequencer was implemented (not mocked) and generator's signature changed so that extra parameters passthrough to the sequencer.

---

12:37 - refining the api of the sequencers. Next step will be adding a test to mock the `rangeSeq`, because it has a different signature than the prime seq.

And also separating and naming files and tests correctly.

---

12:19 - first commit - rough/mocked implementation to define the required api.

---
12:06

I decided to use "Create React App" because it will already set the app structure, transpiler and tests for me in a stable project.

I'll build both the "backend" and "frontend" at the same app because in facte there are no requirements that demand a server in place.

I'll start the backend by defining tests that will mock the required sequencer interface/API.
