package com.example.questiongame;

import com.example.questiongame.Ques.Question;
import com.example.questiongame.Ques.Quizzs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
/*用Question对象接收后台数据库数据并转换为Quizzs对象，将Quizzs对象传送前端*/
@RestController
@RequestMapping("/question")// 微信开发者工具 ques包下ques.js文件74行url需要用/question
public class QuestionController {
    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping
    public List<Quizzs> FindQuestion(){
        List<Question> all=mongoTemplate.findAll(Question.class);//导入数据库数据
        List<Quizzs>result=new ArrayList<>();//传给前端的List
        Random r=new Random();
        int c=r.nextInt(16700);/*数据库中一共有16718道题，我们的项目每次只传送给前端6道题，用随机数在这些题里随机选择6道题*/
        for(int i=c;i<c+6;i++){
            Quizzs quizzs=new Quizzs();
            quizzs.setQuiz(all.get(i).getQuiz());
            quizzs.setOptions(all.get(i).getOptions());
            quizzs.setAnswer(all.get(i).getAnswer());
            result.add(quizzs);
        }
        return result;
    }
}
