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


# 🌐 Frontend Projects Portfolio  

Hi, I'm **Prasanth**, a Frontend Developer passionate about building clean, responsive, and interactive web experiences.  
This repository is a collection of my **frontend projects** – from **beginner HTML/CSS pages** to **advanced React applications**.  
Each project includes **source code, live demos, and clear documentation**.

---

## 🚀 Live Portfolio Link  
➡️ **[View All Projects Live](https://yourusername.github.io/frontend-projects-portfolio/)**  

---

[one] (https://github.com/CodeMagePrasanth/front_end.git)

## 📂 Projects Overview  

### **1. Beginner (HTML & CSS Projects)**  
Basic static websites to demonstrate layout and styling skills.  

| Project Name          | Tech Used         | Live Demo                                                                                   |
|-----------------------|------------------|--------------------------------------------------------------------------------------------|
| Personal Portfolio    | HTML, CSS        | [View Demo](https://yourusername.github.io/frontend-projects-portfolio/01-html-css-basics/personal-portfolio) |
| Landing Page          | HTML, CSS        | [View Demo](https://yourusername.github.io/frontend-projects-portfolio/01-html-css-basics/landing-page)       |

---

### **2. Intermediate (JavaScript Projects)**  
Interactive applications built with DOM manipulation and event handling.  

| Project Name          | Tech Used             | Live Demo                                                                                   |
|-----------------------|-----------------------|--------------------------------------------------------------------------------------------|
| Calculator App        | HTML, CSS, JavaScript | [View Demo](https://yourusername.github.io/frontend-projects-portfolio/02-javascript-projects/calculator)      |
| Todo List             | HTML, CSS, JavaScript | [View Demo](https://yourusername.github.io/frontend-projects-portfolio/02-javascript-projects/todo-list)        |

---

### **3. Advanced (React Projects)**  
Dynamic and scalable applications with APIs and component-based architecture.  

| Project Name          | Tech Used                        | Live Demo                                              |
|-----------------------|----------------------------------|-------------------------------------------------------|
| Weather App           | React, CSS, OpenWeather API      | [View Live](https://your-weather-app.netlify.app)     |
| Movie Finder          | React, API, Styled Components    | [View Live](https://your-movie-finder.netlify.app)    |
| E-commerce Clone      | React, Context API, CSS          | [View Live](https://your-shop-clone.netlify.app)      |

---

## 🛠 Skills & Tools  
- **Languages**: HTML5, CSS3, JavaScript (ES6+)  
- **Frameworks & Libraries**: React, Bootstrap  
- **Version Control**: Git & GitHub  
- **Hosting Platforms**: GitHub Pages, Netlify  
- **Other**: API integration, Responsive Design, SEO-friendly pages

---

## 📫 Connect with Me  
- **LinkedIn**: [Prasanth Senthilkumaran](https://www.linkedin.com/in/prasanth-senthilkumaran)  
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)  

---

### How to Run Locally  
1. Clone this repository  
   ```bash
   git clone https://github.com/yourusername/frontend-projects-portfolio.git



 **Local Git (on your computer)** and **GitHub (remote repo)**


# 🖥 Local Git Commands (on your PC)

These manage your **local repository**.

```bash
# Initialize a new Git repo in current folder
git init

# Check repo status (new/modified files)
git status

# Add all files to staging area
git add .

# Add specific file
git add index.html

# Commit changes with message
git commit -m "Initial commit"

# See commit history
git log

# Show differences (before commit)
git diff
```

---

# 🌍 GitHub (Remote Repo) Commands

These connect your **local repo** to GitHub and sync changes.

```bash
# Add remote GitHub repo (only first time)
git remote add origin https://github.com/YourUsername/repo-name.git

# Rename branch to main (GitHub uses main by default)
git branch -M main

# Push local repo → GitHub (first push)
git push -u origin main

# Push changes (after commits)
git push origin main

# Pull latest changes from GitHub
git pull origin main

# Check which remote repo is connected
git remote -v
```

---

# 🔁 Workflow Example (from start to finish)

```bash
# 1. Make new project folder
mkdir codveda-internship
cd codveda-internship

# 2. Initialize Git
git init

# 3. Add and commit files
git add .
git commit -m "Initial commit"

# 4. Connect to GitHub repo
git remote add origin https://github.com/YourUsername/codveda-internship.git
git branch -M main

# 5. Push to GitHub
git push -u origin main
```

---

⚡Pro Tip: After the first push, you only need two commands for daily work:

```bash
git add .
git commit -m "Updated project"
git push
```

