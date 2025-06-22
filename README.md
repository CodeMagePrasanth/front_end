🚀 Initialize a Git Repository

1 git init

Start a new Git repository in the current folder.

🗂️ Add Files to Staging

2 git add .

Add all files in the current directory to the staging area.

 git add filename

Add a specific file to the staging area.

💬 Commit Changes

git commit -m "Your message"

Save the staged changes with a meaningful message.

🌿 Rename Current Branch

git branch -M main

Rename the current branch to main (recommended by GitHub).

🔗 Connect Local to GitHub Repo

git remote add origin https://github.com/yourusername/yourrepo.git

Link your local project with a remote GitHub repository.

⬆️ Push Code to GitHub

git push -u origin main

Push the local code to GitHub on the main branch (first push).

git push

Push committed changes to the same remote branch again.

⬇️ Pull Code from GitHub

git pull origin main

Download and merge code from GitHub to your local main branch.

🔍 Check Status

git status

Show which files are staged, unstaged, or untracked.

🔁 Check Git Remotes

git remote -v

Show the linked GitHub repository URLs.

🔄 Change Remote URL (if GitHub repo name is changed)

git remote set-url origin https://github.com/yourusername/newrepo.git

Update your GitHub remote if you renamed your repo.

🗑️ Remove a Git Remote

git remote remove origin

Disconnect your project from a GitHub remote.

🧹 Remove Cached Files

git rm --cached filename

Stop tracking a file without deleting it from your project.

🧠 View Commit History

git log --oneline

See the commit history in one-line format.

💥 Force Push (overwrite GitHub repo — be careful!)

git push -u origin main --force

Push your local changes even if it overwrites remote history.

🛠️ Clone a Repo

git clone https://github.com/yourusername/repo.git

Download an existing GitHub repository to your computer.