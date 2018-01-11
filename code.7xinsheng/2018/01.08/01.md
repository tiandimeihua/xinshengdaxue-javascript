# 10 Interview Questions Every JavaScript Developer Should Know 每个Javascript 开发者应该知道的10 个面试问题

AKA: The Keys to JavaScript Mastery 成为Javascript 大师的关键

![https://cdn-images-1.medium.com/max/2000/1*RPKQq3zYYddwJf9rSeQ4Dg.jpeg](https://cdn-images-1.medium.com/max/2000/1*RPKQq3zYYddwJf9rSeQ4Dg.jpeg)

At most companies, management must trust the developers to give technical interviews in order to assess candidate skills. If you do well as a candidate, you’ll eventually need to interview. Here’s how.

在大多数公司，管理者给出技术性的面试为了评估面试者的能力并以此来相信他开发者的能力。如果你作为一个表现良好的候选者，你最终将会需要面试。

---

## It Starts With People 一切从人开始

In [“How to Build a High Velocity Development Team”](https://medium.com/javascript-scene/how-to-build-a-high-velocity-development-team-4b2360d34021), I made a couple points worth repeating:

在[“如何创建高速发展团队中”](https://medium.com/javascript-scene/how-to-build-a-high-velocity-development-team-4b2360d34021)，我总结了几点值得在此重复：

```shell
“   Nothing predicts business outcomes better than an exceptional team.
    没有什么可以比一个杰出的团队可以更好的预测业务的结果。
    If you’re going to beat the odds, you need to invest here, first.”
    如果你们需要取得胜利，那么你们需要从这里开始。
```

As Marcus Lemonis says, focus on the 3 P’s:

如 Marcus Lemonis 所说，应该关注于三个P字母开头的单词；

---

“People, Process, Product”

"人，过程，产品"

---

Your early hires should be very strong, senior-level candidates. People who can hire and mentor other developers, and help the mid-level and junior developers you’ll eventually want to hire down the road.

你最初应该招聘可以帮助你招聘，指导其他人，帮助初级和中级的开发者的强大，高级的候选人。你最终会选择这个招聘之路。

Read [“Why Hiring is So Hard in Tech”](https://medium.com/javascript-scene/why-hiring-is-so-hard-in-tech-c462c3230017) for a good breakdown of the general do’s and don’ts of candidate evaluation.

阅读 [“为什么技术类型招聘很困难”](https://medium.com/javascript-scene/why-hiring-is-so-hard-in-tech-c462c3230017) 可以知道面试者评估过程中好的坏的问题。

---

The best way to evaluate a candidate is a pair programming exercise.

最好的方式去评价一个面试者就是一组程序练习。

---

Pair program with the candidate. Let the candidate drive. Watch and listen more than you talk. A good project might be to pull tweets from the Twitter API and display them on a timeline.

观察和聆听面试者操作过的一组程序要好过你的自己描述。一个好的项目可以Twitter 的转发通过Twitter 的API 并且显示在时间线上。

That said, no single exercise will tell you everything you need to know. An interview can be a very useful tool as well, but don’t waste time asking about syntax or language quirks. You need to see the big picture. Ask about architecture and paradigms — the big decisions that can have a major impact on the whole project.

所以说，单一的一个项目并不会告诉你想知道的所有事情。面试可以作为一个有效的工具，但是不要浪费时间在询问语法和语言。你需要看得更远一些。询问一些可以对整个项目作出重大决定的体系结构和范例的问题。

Syntax and features are easy to Google. It’s much harder to Google for software engineering wisdom or the common paradigms and idioms JavaScript developers pick up with experience.

语法和特性很容易谷歌得到结果。但是，很难谷歌到软件工程师的智慧和共同开发案例以及Javascript 开发者的经验。

JavaScript is special, and it plays a critical role in almost every large application. What is it about JavaScript that makes it meaningfully different from other languages?

Javascript 是特殊的，同时几乎存在于所有大型应用的关键位置。是什么让javascript 如此有效却又不同于其他的语言？

Here are some questions that will help you explore the stuff that really matters:

这有一些问题可以帮助你解决你真正面对的困难：

## 1. Can you name two programming paradigms important for JavaScript app developers？

## 1. 你能提供2个对于Javascript 开发者很重要的编程范型或编程范式吗？

（注“编程范型或编程范式（英语：Programming paradigm），（范即模范之意，范式即模式、方法），是一类典型的编程风格，是指从事软件工程的一类典型的风格（可以对照方法学）。如：函数式编程、进程编程、面向对象编程、指令式编程等等为不同的编程范型。）

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.

javscruipt 是一种多编程规范的语言，支持指令编程，进程式编程，OOP面向对象的程序设计和函数编程。（注：过程序进程设计（英语：Procedural programming），又称进程式编程、过程序编程、进程化编程、过程化编程，一种编程典范，有时会被视为是指令式编程的同义语。）Javascript 支持面向对象编程的原型继承。

Good to hear：

- Prototypal inheritance (also: prototypes, OLOO).
- Functional programming (also: closures, first class functions, lambdas).

希望听到：

- 原型继承（属性，OLOO (objects-linked-to-other-objects) ）
- 函数编程（闭包，头等函数，匿名函数）

Red flags:

- No clue what a paradigm is, no mention of prototypal oo or functional programming.

警告：

- 没有提到编程范式，没有提到原型对象或者函数式。

Learn More:

- [The Two Pillars of JavaScript Part 1](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3) — Prototypal OO.
- [The Two Pillars of JavaScript Part 2](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4) — Functional Programming.

## 2. What is functional programming？

## 2. 什么是函数编程？

Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.

函数编程是通过数学上的函数并且避免使用进程状态以及可变量的一种编程范式。Lisp 一种老式的高阶计算机语言，最早支持函数编程，这种灵感来自于lambda 计算器。 现如今，Lisp 和Lisp 家族的语言仍旧被大量使用。

Functional programming is an essential concept in JavaScript (one of the two pillars of JavaScript). Several common functional utilities were added to JavaScript in ES5.

函数编程是Javascript 中的一个基本概念。几种常见的功能已经被添加到Javascript ES5 中。

Good to hear:

- [Pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) / function purity.
- Avoid side-effects.
- Simple function composition.
- Examples of functional languages: Lisp, ML, Haskell, Erlang, Clojure, Elm, F Sharp, OCaml, etc…
- Mention of features that support FP: first-class functions, higher order functions, functions as arguments/values.

希望听到：

- [纯函数](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) / 函数纯净性。
- 避免副作用。
- 简单的函数组成。
- 其他函数语言的例子：Lisp, ML, Haskell, Erlang, Clojure, Elm, F Sharp, OCaml, etc…
- 提到支持FP的特性：头等函数，高阶函数，函数作为参数或者值。

Red flags:

- No mention of pure functions / avoiding side-effects.
- Unable to provide examples of functional programming languages.
- Unable to identify the features of JavaScript that enable FP.

警告：

- 没有提到纯函数/避免副作用。
- 不能提供函数编程语言的例子的名字。
- 不能定义javascript 支持FP 的特性。

Learn More:

- [The Two Pillars of JavaScript Part 2](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4).
- [The Dao of Immutability](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd).
- [Composing Software](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea).
- [The Haskell School of Music](http://haskell.cs.yale.edu/wp-content/uploads/2015/03/HSoM.pdf).

## 3. What is the difference between classical inheritance and prototypal inheritance？

## 3. 类型继承（类继承）和原型继承的区别？

Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the “new” keyword. Class inheritance may or may not use the “class” keyword from ES6.

类型继承：从类继承的情况下（比如一个蓝图 - 描述类），和创建子类的关系：类层次分类。实例通常通过构造函数与“新”关键字实例化。类继承可能会或可能不会使用“阶级”关键词ES6。

Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

原型继承：实例直接从其他对象继承。例子通常是通过工厂函数或对象创建实现的。实力可能从许多不同的对象组成，并且允许即拿单的选择性继承。

---

In JavaScript, prototypal inheritance is simpler & more flexible than class inheritance.

在Javascript 中，原型继承比类继承更加的简单和灵活。

---
