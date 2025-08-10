/*
Basic Commands
---------------
-> clone - cloning a respository on our local machine  (command: git clone <-some link->)

-> status - displays the state of the code (command: git status)


 command 1: git clone https://github.com/sajibbormon/delta-demo.git

clone means download the online copy of the code/repository into local drive/folder.
we generally use 'HTTPS' link of the repository to clone a repository.



                                        File status Lifecycle

        untracked                          unmodified                   modified                   staged
        ---------                          -----------                 ----------                  -------
            |                              |                           |                            |
            |  --- add the file -->        | -- edit the file -->      |   -- stage the file -->    |
            |                              |                           |                            |
            |                              |                           |                            |
            |   <-- remove the file --     |                           |                            |
            |                              |       <-------------   commit   ----------------       |
            |                              |                           |                            |
            |                              |                           |                            |



old files and which is not edited are tracked
new files are untracked

command 2: git status



add, commit & push Commands
---------------------------

command 3: git add .

command 4: git commit -m 'Add new files'

modified files ------> add ---------------> commit
                  status: staged        status: final state/unmodified


working directory ------> staging area -------> final state (commit)
                            (add)


· add - adds new or changed files in your working directory to the Git staging area. 
        (command: git add <- file name ->)
        (to add all files: git add .)

. commit - it is the record of change

        (command: git commit -m "some message")



· push - upload local repo content to remote repo

        (command: git push origin main)


command 5: git push origin main 


origin means where we want to send all files.
main means branch.

we want to push all files into origin main.




init
-----
What if we have created project on our local machine and want to directly create a repo for this project on github.
Then we use 'init' command.


init - used to create a new git repo

    (command: git init)

git remote add origin <- link ->

git remote -v (to verify remote)

git branch (to check branch)

git branch -M main (to rename branch)

git push origin main


branch means suppose 3 users are working on a same project then individual can create new branches and push their code.


command 6: git init

command 7: git remote add origin https://github.com/sajibbormon/project2.git

command 8: git remote -v

command 9: git branch

if already named main then no need to run the next command : 10

command 10: git branch -M main

command 11: git push origin main


Now if we use one time 'git push -u origin main' command then next time we can only write 'git push' command for pushing.

'u' means upstream.


Now if we have only modified one file then we can use add and commit at the same time

command: git commit -am "added dot"

'am' means add and message.



WorkFlow
--------

GitHub :    code changes ---------> commit

Local Git:  code changes ---------> add ----------> commit --------> push 
                            stage changes       commit changes




Git Branches
-------------
                                    Bugfix
                         (copy all files from commit1)
                        >----#commit1----#commit1------>   
                       /                                \
                      /                                  \  (merge)
main ------> #commit1 ----->#commit2------->#commit3------>#commit4 ------>#commit5
             html                           \                            / (merge)
                                             \                          /
                                              >--------#commit1--------> 
                                                         CSS
                                                      New Feature

There are three branches: main, Bugfix, and New Feature.

Bugfix branch copies all files from main branch commit 1. Then fix the bug.
New Feature branch copies all files from commit3 and add new feature.



Branch commands

git branch  (to check branch)

git branch -M main (to rename branch)

git checkout <-branch name->  (to navigate to the given name branch)

git checkout -b <-new branch name->  (to create new branch and also navigate to the branch)

git branch -d <-branch name-> (to delete branch of the given name)



command 12: git branch

command 13: git checkout main
  to navigate to the main branch

command 14: git checkout -b feature
    to create a new branch name feature and navigate to the feature branch

command 15: git checkout -b test

command 16: git branch -d test
        can not delete as already in it
    
command 17: git checkout main
        to  move to the main branch

command 18: git branch -d test
        test is deleted




Merging Branches
----------------

now create a new file while staying on the feature branch.

command 19: git add .

command 20: git commit -m "New feature/app2"

command 21: git push --set-upstream origin feature
        new file will be pushed to the feature branch where the feature branch by setting feature branch as upstream




Merging Code
-------------

git diff <-branch name->  (to compare commits, branches, files & more)

git merge <-branch name-> (to merge 2 branches)

        OR
Create a PR (pull request)

currently we are in feature branch. now to compare with feature and main branch we can use 'git diff main'

command 22: git diff main

Pull Request: 
    It lets you tell others about changes you've pushed to a branch in a repository on GitHub.


Conflicts: When we change in the same file in a different branch and also change in the main branch(or where we want to merge)



Pull command
------------

git pull origin main

used to fetch and download content from a remote repo and immediately update the local repo to match that content.

after merging from github website, we will not able to see the merging branches on our local system.

so we need to run pull command

command 23: git pull origin main


Merge Conflicts
---------------
An event that takes place when Git is unable to automatically resolve differences in code between two commits.

Now suppose we changes in app2.js file in both main and feature branches.


Now commit all changes from both branches. then run command 24



Then then git  can not decide which one changes to remain.



VScode give us optioin to take current branch changes, or incoming branch changes or both branch changes together.


we are merging main and feature. Now we are in main branch
command 24: git merge feature
    conflicts arise.

now we can do changes manually, or accept current changes or accept incoming changes or accept both changes.

now resolving conflicts we need to again run commands: add and commit and push.


Fixing Mistakes
---------------

Case 1: staged changes
        git reset <-file name->
        git reset

example we add changes of a file but we don't want to change it.  Now how to remove the add.

we can simply use git reset <-file name->

Remove add for all files then  git reset


Case 2: commited changes (for one commit)
        git reset HEAD~1

Now if we mistakenly commited changes, then we use git reset HEAD~1
HEAD~1 means last commit

Case 3: commited changes (for many commits)
        git reset <-commit hash->
        git reset --hard <-commit hash->

now we want to move to 2 previous commit.

'git log' shows all commits information. (shows in reverse order)

then we can copy commit codes which will be shown if we use git log

now we can reset using this commit hash code.

git reset <-commit hash->


but when we want changes all changes as well as remove commits then we use git reset -- hard <-hash code->




Forking
-------

A fork is a new repository that shares code and visibility settings with the original "upstream" repository.

Fork is a rough copy.











*/                                           