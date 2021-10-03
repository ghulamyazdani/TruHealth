## ⭐ First time contributing? We will help you out

Refer to the following articles on the basics of Git and Github:

* [Getting started with Open Source](https://www.geeksforgeeks.org/how-to-get-started-with-open-source-contribution/)
* [Getting started with Git and GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github)
* [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
* [Creating a issue](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request#:~:text=Creating%20an%20issue%20In%20the%20menu%20bar%2C%20use,direct%20you%20to%20a%20blank%20issue%20on%20GitHub.)
* [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
* [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)

## 💥 Contribution

* Take a look at the Existing [Issues](https://github.com/ghulamyazdani/TruHealth/issues) or Create your own Issues!
* Participants have to ask the mentor ro assign the particular issue.
* Wait for the Issue to be assigned to you after which you can start working on it.
* Fork the Repo and Create a Branch for aIssue that assigned you.
* Read the [Code of Conduct](https://github.com/ghulamyazdani/TruHealth/blob/master/CODE_OF_CONDUCT.md)
* Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.

## ⭐How To Make a Pull Request

**1.** Fork [this](https://github.com/ghulamyazdani/TruHealth) repository.
Click on the <img src="https://user-images.githubusercontent.com/58631762/120588030-11cee200-c454-11eb-98ad-060ef99428c5.png"></a> symbol at the top right corner.

**2.** Clone the repository. Open terminal and type:

```bash
git clone https://github.com/<your-github-username>/TruHealth
```

**3.** Navigate to the project directory.

```bash
cd TruHealth
```
**4.** Add the original repo as the upstream.
```bash
git remote add upstream https://github.com/ghulamyazdani/TruHealth.git
```

**5.** Before creating the branch make sure the master branch of forked repo is even with the master branch of original repo.
```bash
# Pull code from original repo
git pull upstream master

# Update the forked repo
git push origin master
```

**6.** Create a new branch.

```bash
git checkout -b <your_branch_name>
```

**7.** Make changes in source code.

**8.** Make current branch even with the master branch
```bash
git pull origin master
```
**9.** Resolve all the conflicts

**10.** Stage your changes and commit

```bash
# Add changes to Index
git add .

# Commit to the local repo
git commit -m "<your_commit_message>"
```

**11.** Push your local commits to the remote repo.

```bash
git push origin <your_branch_name>
```

**12.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**13.** **Congratulations!** Sit and Relax, you've made your contribution to [TruHealth](https://github.com/ghulamyazdani/TruHealth) project.


## 💥 Issues:
For major changes, you are welcomed to open an issue and discuss about what you would like to contribute. Enhancements will be appreciated.

<br/>

