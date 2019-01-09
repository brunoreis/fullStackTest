

18:45 - pipeSeq API structure in place and tested.

18:31 - RESTART
------

16:47 STOP + 1 hour
pipeSeq test implemented

16:11
partialSumSequencer is implemented. Error throwing is tested.

15:46 - RESTART

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
