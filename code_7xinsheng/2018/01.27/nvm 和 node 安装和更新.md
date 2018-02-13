# nvm 和 node 安装和更新

nvm 和 node 一个联合组件，安装，作为前端开发和学习的环境需求之一。

测试环境为mac。

---

### nvm 的安装

打开网址 [https://github.com/creationix/nvm](https://github.com/creationix/nvm);

点击 [install-script](https://github.com/creationix/nvm#install-script);

运行代码

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

安装完成后

运行代码

```bash
command -v nvm
```

应该返回

```bash
nvm
```

安装完成

如果你的返回值是

```bash
nvm: command not found
```

那么会是以下几点原因之一

- 你的系统中缺失 [.bash_profile file] 那你可以通过运行 ```touch ~/.bash_profile``` 然后重复安装步骤
- 如果没有成功，你需要重新启动你终端，然后重复安装步骤和修复步骤

如果还没有解决你的问题，打开你的 ```.bash_profile``` 添加 ```source ~/.bashrc``` 到其中，保存退出

- 如果某些原因还没有成功，请去github 的 [Issuses](https://github.com/creationix/nvm/issues/576) 进行查询

### nvm 更新

运行

```bash
nvm --version
```

返回

```bash
0.33.5
```

前往 [https://github.com/creationix/nvm](https://github.com/creationix/nvm#install-script)，查看文档中的code

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

其中 ```v0.33.8``` 代表当前版本为 v0.33.8 对本本地 v0.33.5 是有更新的，如果需要可以更新

运行

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

运行后，重启bash，运行```nvm --version``` 得到新的版本 ```v0.33.8```

注：不是一个官方的方式更新，比较方便，存在隐患问题

官方的方式使用git 版本管理 [How to upgrade nvm](https://github.com/creationix/nvm/issues/400)

```bash
(
  cd "$NVM_DIR"
  git fetch origin
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" origin`
) && \. "$NVM_DIR/nvm.sh"
```

---

### node 安装

安装完nvm 后，运行

```bash
nvm install node
```

返回

```bash
Downloading and installing node v9.4.0...
Downloading https://nodejs.org/dist/v9.4.0/node-v9.4.0-darwin-x64.tar.gz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v9.4.0 (npm v5.6.0)
```

针对企业级开发和应用请使用LTS 即长期支持的版本，一般为半年一更新

请参考[https://github.com/creationix/nvm#long-term-support](https://github.com/creationix/nvm#long-term-support)

安装后运行

```bash
node --version
```

来查询node 的版本号（当前使用版本号）

### node 安装版本查询

运行

```bash
nvm ls
```

显示所有安装在本地的node 版本号

```bash
         v8.6.0
         v9.3.0
->       v9.4.0
default -> node (-> v9.4.0)
node -> stable (-> v9.4.0) (default)
stable -> 9.4 (-> v9.4.0) (default)
iojs -> N/A (default)
lts/* -> lts/carbon (-> N/A)
lts/argon -> v4.8.7 (-> N/A)
lts/boron -> v6.12.3 (-> N/A)
lts/carbon -> v8.9.4 (-> N/A)
```

### node 安装指定版本

例如我们需要安装的长期支持版本，以上面为例，v8.9.4

```bash
nvm install --lts
```

自动会帮助我们下载 v8.9.4

如果我们需要别的版本怎么办？ 例如 v6.12.3

```bash
nvm install v6.12.3
```

### node 使用不同版本

因为刚刚下载LTS 的版本，所以系统默认会跳回LTS 的版本，我们自己开发不需要使用LTS 的时候，就可以考虑使用最新的版本

运行

```bash
nvn run 9.4.0
```

返回

```bash
Now using node v9.4.0 (npm v5.6.0)
```

### node 卸载不同版本

如果是频繁更新的话，系统内存在很多不需要的版本，那么我们需要运行 ```nvm uninstall <version>```

```bash
nvm uninstall v6.12.3
```

以此类推，卸载掉不需要的版本

---

谢谢大家阅读，关于nvm 和node 的安装与更新
