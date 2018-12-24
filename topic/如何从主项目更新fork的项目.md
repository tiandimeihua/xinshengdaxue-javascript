# 如何从主项目更新 fork 的项目？

该文档由新大张丽娜同学贡献。

当我们从项目 A fork 了一份到自己的仓库后，项目 A 的作者还是继续更新。我们该怎么在不重复 fork 的情况下，更新项目 A 的内容到自己的仓库呢？

可以按照下面的操作进行。

#### step 1

打开：terminal，cd 到自己 fork 后 git clone 的 project 下

以 Mac 为例，首先需要打开 terminal 终端，进入到从 github 上 fork 的项目，并且该项目被 git clone 的你自己的本地目录下。

![Image text](https://ws4.sinaimg.cn/large/006tNc79gy1fieu7pcpwzj31kw14cwpc.jpg)

#### step 2

```bash
// 注意，如果你之前做过更新，这次是来做第二次更新，这一步不用再做。
> git remote add upstream xxxx
```

与上游仓库同步代码之前，必须配置 remote，“xxxx”代表你需要与之保持同步的数据源，本次作业为例，需要键入老师的 git 项目地址

![Image text](https://ws3.sinaimg.cn/large/006tNc79gy1fieups178zj31kw0v5kdu.jpg)

#### step 3

```bash
> git checkout master
```

切换至 master 分支下，该步骤操作简单，直接操作即可
![Image text](https://ws3.sinaimg.cn/large/006tNc79gy1fieuxltln2j31ka0qqadc.jpg)

#### step 4

```bash
> git fetch upstream
```

此操作的意思是取上游数据，简而言之，就是将老师的问题，下载至你的本地

![Image text](https://ws2.sinaimg.cn/large/006tNc79gy1fiev8mx50ij31kw0u8wnj.jpg)

![Image text](https://ws4.sinaimg.cn/large/006tNc79gy1fiev3jpzpvj31kw0kr79w.jpg)

#### step 5

```bash
> git merge upstream/master
```

进行主节点和上游节点数据的合并

![Image text](https://ws3.sinaimg.cn/large/006tNc79gy1fieva0qgf6j31kw0u8wnj.jpg)

#### step 6

```bash
> git push origin master
```

合并后的文件进行 push 操作，将本地文件上传至 github 服务器上。

![Image text](https://ws3.sinaimg.cn/large/006tNc79gy1fieve5w7kaj31kw0xj16i.jpg)

#### tips

1. 你自己的文件在 push 到 github 之前一定要进行 add 和 commit 的操作，否则会有报错的提示
1. 操作完成后，去 GitHub 确认，自己项目文件内容与上游数据一致性，接下来再进行 pull request 操作
