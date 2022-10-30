package com.example.questiongame.Ques;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
/*此类将从mongodb zhtdw数据库得到的问题转换成实体对象*/
@Data
@Document(collection = "quizzes")
public class Question {
    @Id
    private String id;
    private Integer v;
    private Integer answer;
    private String contributor;
    private String curTime;
    private String endTime;
    private String meta;
    private List<String>options;
    private String quiz;
    private String school;
    private String type;

}
