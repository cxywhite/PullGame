package com.example.questiongame.Ques;

import lombok.Data;

import java.util.List;
/*从Mongodb得到的每个Question对象，每个Question的字段包括题目、选项、作者、科目等。
由于字段太多，我们只取其中3个字段分别是问题、选项、答案构成新对象Quizzs，以后我们将Quizzs对象传送给前端*/
@Data
public class Quizzs {
    private String quiz;//问题
    private List<String> options;//选项
    public Integer answer;//答案 数据库中答案是1,2,3,4
}
