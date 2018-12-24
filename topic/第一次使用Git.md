# 第一次使用 Git

## 使用说明

编程小白在进行操作之前请注意三点。

1. 文档中的指令前面都有一个>符号

   ```bash
   > git push origin master
   ```

   `>` 符号是从文档层面告诉你`git push origin master`是一条终端的指令。你在终端输入`git push origin master`时，别带`>`。

   指令和代码的对比如下

   ```bash
   //这是一条终端执行，用`>`来凸显这是一条指令
   > git push origin master

   // 这是一行代码，不带`>`
   var i = 0;
   ```

2. 指令的构成，该空格的要空格。

   ```bash
   // 错误
   > xcode-select—install // select后面没有空格

   // 正确
   > xcode-select —install // select后面有空格
   ```

3. 双引号要用英文

   ```bash
   // 错误
   > git commit -m “这是一次提交” // 用了中文的引号”“

   // 正确
   > git commit -m "这是一次提交" // 要用英文""
   ```

4. 终端常用指令总结

[mac 终端](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/MAC-Terminal-command-list.md)
[win 终端](https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/Win-Command-list.md)

## 开始

Git 是目前世界上被最广泛使用的现代软件版本管理系统。Github 是目前世界上最大的开源社区，如果你想利用好 Github，Git 是你必须要掌握的工具。

[git 简易指南](http://rogerdudler.github.io/git-guide/index.zh.html)，这个教程很简单，快速帮你了解 git，13 页 PPT 形式的内容就说明了 git 最基本的操作精华。

[Pro git](http://iissnan.com/progit/)

#### Git 客户端下载

可以在[Git 官网](https://git-scm.com/downloads)下载最新版 Git 客户端，若无法下载，也可以从网盘中[点击下载](http://pan.baidu.com/s/1boMJj7x)，网盘中提供了 mac、win32、win64 不同系统的 Git 客户端。

## 第一次安装 Git

#### Mac

你既然是 mac 电脑，别急于单独安装 git。

Mac 电脑自带 Xcode 开发软件，Xcode 有一款工具叫 Command Line Tools(Xcode 默认不带这个工具)。所以我们先安装 Xcode 的 Command Line Tools 即可。

![https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/terminal.png](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/terminal.png)

(在终端操作)

```bash
> xcode-select —install
```

![https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/xcode-select-install.png](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/xcode-select-install.png)

如何判断 xcode 的 Command Line Tools 呢？在终端再次输入`xcode-select —install`， 如果终端出现以下信息表明你已经安装完 Command Line Tools 了。

```bash
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

Xcode 的 Command Line Tools 安装成功后，Git 也意味着安装成功了。

检查 Git 命令是否成功，在终端输入`git —version`

![https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/git-check.png](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/git-check.png)

#### windows

下载 Git SCM, [https://git-scm.com/download/win](https://git-scm.com/download/win)

#### Linux

(在终端操作)

```bash
> sudo apt-get install git
```

#### 检查 git 的安装情况

安装成功后，在终端执行下面指令检查 git 的安装状态。

(在终端操作)

```bash
// 查看git版本
> git --version

//或执行git，你会看到一堆关于git的命令解释内容
> git
```

以上两个命令可以检查你的 git 是否安装成功。

如果提示 Command not found，说明 git 没有安装成功。

## 第一次上手

#### 1. 第一次克隆一个项目到你的电脑上

(在终端操作)

```bash
// 创建一个工作用的文件夹，命名为my_project（你可以命名成你喜欢的名字，这不过是一个文件夹的名字而已）。
// 这样做的目的是把你从git上下载下来的项目都规整到文件夹my_project里。
> mkdir my_project

// 进入文件夹my_project
> cd my_project

// 开始克隆项目
> git clone https://github.com/xugy0926/getting-started-with-javascript.git
```

克隆成功后，在文件夹 my_project 下就会有一个项目文件夹 getting-started-with-javascript。

【注意】

git clone 的时候请使用 https 的 url。不建议用 ssh 那个地址。

![https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/https-clone-url.png](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/https-clone-url.png)

如果你真的要用 ssh 那个 url，可能会出现下面的错误提示。

```bash
Warning: Permanently added the RSA host key for IP address '#{Some IP address}' to the list of known hosts.
```

这是因为你本地电脑没有和 github 建立安全的链接。使用 ssh 连接配置请参考 [https://help.github.com/articles/connecting-to-github-with-ssh/](https://help.github.com/articles/connecting-to-github-with-ssh/)

为什么选择 https 的 url？=> 在以前 https 还没普及时，http 协议承担了大部分网页的数据传输。但 http 并不安全，为了解决 http 不安全的问题就需要用 ssh。现在 https 已经普及了。ssh 的配置相对来讲很麻烦，在使用 github 时可以抛弃掉。

#### 2. 第一次改动

通过图形界面进入到 my_project 下的 getting-started-with-javascript 文件夹。

1. 你可以修改 getting-started-with-javascript 里面的文件。
1. 你也可以添加任意格式的图片或文件。

[Tip: 如何在终端快速打开当前文件夹图形界面]

```bash
// mac终端快速打开getting-started-with-javascript
> cd getting-started-with-javascript

// 注意open后面是空格，还有一个.
> open .
```

```bash
// windows终端快速打开getting-started-with-javascript
> cd getting-started-with-javascript


> explorer .
```

[Tip: 查看当前的全路径]

在 Mac 终端输入 pwd 指令可以查看当前的全路径，依据这个全路径再通过 finder 找到你的文件夹。
Windows 终端输入 cd 指令即可。

#### 3. 第一次查看你改动的文件

(在终端操作)

```bash
// 确保你当前的终端进入到了项目getting-started-with-javascript
> cd getting-started-with-javascript

// 查看文件的变化状态
> git status

// 通过git status执行后，在终端会显示你改了多少文件，改动的代码会显示为红色。（改动包涵：增加文件、删除文件、修改文件）
// 如果红色的文件有不是要改的文件而被你改动了，这时你就要注意咯。参考[](https://github.com/xugy0926/getting-started-with-javascript/issues/150)
```

#### 4. 第一次把改动在本地做一次提交

(在终端操作)

```bash
// 【注意】如果你进行git status并确保所有改动文件都是你的改动就用这个执行，否则不要执行这一步。
// 把修改过的文件做全部的添加，添加到哪？添加到你本地仓库的缓冲区域。
> git add -A

// 【注意】如果你改动的文件有别人的文件，而你又不想恢复那个文件。那么你可以直接了当地只添加你的改动文件即可。
> git add your_file

// 把被添加的文件做本地提交
> git commit -m "代码提交的日志信息"

// -m 后面一定要带一段双引号的描述内容。这段描述你可以任意写，目的是说明你这次提交的日志信息。
```

#### 5. 第一次把提交到本地仓库的代码推送到远程（服务器）仓库

(在终端操作)

```bash
> git push origin master
```

【注意】

1. 因为 getting-started-with-javascript.git 项目是我的，所以你推送一定会失败。如果你想推送成功，你可以参考步骤 6，尝试在 github 上自己新建一个项目来试验上面的动作。

1. 第一次往自己的项目推送时，会提示输入 github 的账号和密码。你只要按照提示来操作即可。

![https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/password-request.png](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/password-request.png)

```bash
// 设置你注册的github的邮箱
> git config --global user.email "you@example.com (mailto:you@example.com)"

// 设置你注册的github的用户名
> git config --global user.name "your name"
```

设置完上面后，再进行`git push origin master`。

#### 6. 第一次在 github 上创建一个项目

进入 github.com，点击[new repository]。

![https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/new-repository.png](https://raw.githubusercontent.com/wiki/xugy0926/getting-started-with-javascript/new-repository.png)

项目创建以后，你可以用你自己的项目重复步骤 1-5 的操作。（注意：很多同学在重复步骤 1-5 的时候，还是用的文档的 url，我是希望你用你自己的项目 url 去 git clone）

最终进行`git push origin master`后，提示信息显示`Everything up-to-date`。就表示你的推送成功了。

## 结束语

如果前面的步骤你都走通了，说明你对于 Git 最基本的操作已经可以搞定了。

#### 基本操作

- 从 Github 上克隆一个项目仓库到本地项目仓库。 `git clone url`
- 修改项目。
- 添加修改到本地仓库的缓存区域。`git add -A`
- 把缓存区域的修改提交到本地仓库。`git commit -m "some logo"`
- 将本地仓库的提交推送到到远程仓库。 `git push origin master`

善用 Github 对我们学习和工作非常有用，除了学习编程之外，还可以把 Github 当做存文档的远程硬盘，你不妨试试把自己的日记也放在 Github 上来存。
