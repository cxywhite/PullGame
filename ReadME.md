## 微信单机答题小游戏

---

### 一、工作分配
组员|实现功能|分工占比
:--:|:--:|:--:|
王子腾|微信前端配置|40%
王涛|答题题库配置|40%
王柳椿|调试与测试程序|20%

---

### 二、微信前端配置


#### 微信前端设计参考Gitee项目[何俊霖 / AnswerGame](https://gitee.com/TimeWings/AnswerGame)

#### 真机调试

##### 如果想在微信开发者中真机调试需要完成以下步骤:

##### 1.需要手机后电脑在同一个局域网
###### 此时可能有两种情况:
###### (1).电脑和手机连接校园网
###### 你需要在命令行窗口用ipconfig命令
###### 在无线局域网适配器 WLAN:
###### 查找你的本机IP地址。
###### (2).电脑连接手机的个人热点 
###### 此时你需要再次用ipconfig命令
###### 在无线局域网适配器 WLAN:
###### 查找你的本机IP地址，
###### 此时ip和情况1的ip不同。

##### 2.用微信开发者工具打开HtmlWork\Frontend\WeiXin修改miniprogram\pages\ques下的ques.js文件中第74行

    url: 'http://localhost:8080/question'

###### 改为

    url: 'http://你本机的IP地址:8080/question'

#### 具体原因参考CSDN文章
##### [微信小程序如何本地进行真机调试？](http://t.csdn.cn/eFktl)

---

### 三、后端及数据库环境
#### 1.后端采用springboot框架
#### 2.使用jdk11
命令行使用java -version 检查我的jdk版本是11.0.16.1
如果之前装过jdk但是版本不是11，可以再装个11并且不用卸载原jdk，参考CSDN文章[win10同时安装jdk8和jdk11](http://t.csdn.cn/EyBQM) 注:win11同样适用
#### 3.使用maven 3.8.6版本
maven配置参考CSDN文章

[史上最全安装Maven教程](http://t.csdn.cn/zT4oM)
#### 4.使用mongodb数据库
##### (1).mongodb版本5.0.12Community
##### (2).mongodb安装和配置参考CSDN文章
[MongoDB安装（详细流程）](http://t.csdn.cn/SYuJi)
##### (3).Springboot整合mongodb参考该文章
[SpringBoot整合MongoDB（一）](http://t.csdn.cn/O3P9F)

---

### 四、MongoDB数据库导入题库
__导入题库参考作者zhuweiyou的GitHub项目__[知乎答题王](https://github.com/game-helper/weixin/tree/master/%E7%9F%A5%E4%B9%8E%E7%AD%94%E9%A2%98%E7%8E%8B)

两步导入题库过程:

(1).下载并使用作者的quizzes.json文件(可以使用我下载的文件quizzes.json)

(2).然后修改作者的mongoimport命令并在命令行窗口执行


使用原作者命令时由于Mongodb版本问题可能会导致出错需要在结尾位置加 --legacy

具体原因参考CSDN文章

[Mongoimport Failed: invalid JSON input.错误](http://t.csdn.cn/TzngE)

原作者命令:

    mongoimport -d zhdtw -c quizzes --file ~/Downloads/quizzes.json --jsonArray --drop

我导入题库的命令:

    mongoimport -d zhdtw -c quizzes --file D:MongodbQuestions/quizzes.json --jsonArray --drop --legacy
- zhdtw:导入的数据库名 
- quizzes:导入的集合名 
- D:MongodbQuestions/quizzes.json:我下载quizzes.json的位置,如果你不是同一个位置需要修改。
  
---

### 五、运行后端程序
命令行定位到D:\IDEA project\QuestionGame\target
(需要修改为你自己的文件路径)

输入命令:

    java -jar QuestionGame-0.0.1-SNAPSHOT.jar
后台程序开始运行