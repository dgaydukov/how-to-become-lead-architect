# Git tricks


### How git stores data
Git compare to SVN stores data as snapshots, rather then deltas, yet to prevent storage issue, from time-to-time it compress snapshots
into `packs`, and here different compression algos used, like delta compression. So in the end some files would be stored like deltas
but originally they stored as snapshot.
Snapshot - like screenshot for video, so it's content of file at some point in time.

### cherry-pick
This commands take one one commit from branch `A` and move it to branch `B`. thus effectively applying some snapshot from one branch
to another. There are a few caveats:
* cherry-picked commit, would have new `commitID` and would have new paretCommitId
* you can manually add change, it would have same effect as cherry-picking 
* when you would merge A => B, git is smart enough to understand, that one commit is already merged, so it won't show conflict
* when you do revert, your cherry-picked commit would be also reverted (although if you add same change manually, see point#1, it would also be reverted)
* you can choose several commit to cherry-pick
* similar to rebase where:
    * rebase take commit with parent X and regenerate this commit as if it parent was Y
    `git pull rebase` - regenerate your local commits on top of pulled commits from the branch
    * cherry-pick take commit with parent X and apply it above, so new commit (with different hash) has parent Y
    so with cherry-pick you explicitly choose commits which would be generated on top of your branch
As you see it's reverse of rebase:
    * rebase - add you commits on top of selected(you don't select them, usually all commits that where in another branch) commits
    * cherry-pick - add selected commits on top of your commits